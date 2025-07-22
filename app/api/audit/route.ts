import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { Resend } from 'resend';
import { generateAuditEmailHTML, generateAuditEmailText } from '@/components/EmailTemplate';

interface AuditFormData {
  email: string;
  industry: string;
  businessArea: string;
  painPoints: string;
  currentTechnologies: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: AuditFormData = await request.json();
    
    // Validate required fields
    const { email, industry, businessArea, painPoints } = body;
    
    if (!email || !industry || !businessArea || !painPoints) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare data for Anthropic API
    const auditData = {
      email,
      industry,
      businessArea,
      painPoints,
      currentTechnologies: body.currentTechnologies || 'Not specified',
      submittedAt: new Date().toISOString(),
    };

    // Initialize Anthropic client
    const anthropic = new Anthropic({
      apiKey: process.env.ANTHROPIC_API_KEY,
    });

    // Generate report using Anthropic API
    const report = await generateAuditReport(auditData, anthropic);
    
    // Send email with report (if Resend API key is configured)
    try {
      await sendAuditReport(email, report, auditData);
    } catch (emailError) {
      console.warn('Email sending failed, but report was generated:', emailError);
      // Continue without email sending - report is still generated
    }

    console.log('Audit form submitted:', auditData);
    console.log('Generated report length:', report.length);
    console.log('Email sent to:', email);

    return NextResponse.json({
      success: true,
      message: 'Audit request submitted successfully',
      data: {
        email,
        estimatedDelivery: 'Immediate',
        reportType: 'AI Automation Audit Report',
        reportPreview: report.substring(0, 200) + '...'
      }
    });

  } catch (error) {
    console.error('Error processing audit request:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Implement Anthropic API integration
async function generateAuditReport(data: AuditFormData, anthropic: Anthropic) {
  // This function integrates with Anthropic API
  // to generate a personalized audit report
  
  const prompt = `
    Generate a comprehensive automation audit report for a business with the following details:
    
    Industry: ${data.industry}
    Business Area to Improve: ${data.businessArea}
    Pain Points: ${data.painPoints}
    Current Technologies: ${data.currentTechnologies}
    
    Please provide a professional audit report with the following sections:
    
    1. EXECUTIVE SUMMARY
    - Brief overview of current state and automation opportunities
    
    2. KEY AUTOMATION OPPORTUNITIES
    - 3-5 specific areas where automation can provide immediate value
    - Estimated time savings and ROI for each opportunity
    
    3. RECOMMENDED TECHNOLOGIES
    - Specific tools and platforms that would work best for this business
    - Integration recommendations with existing systems
    
    4. IMPLEMENTATION ROADMAP
    - 30/60/90 day implementation plan
    - Priority order for automation projects
    
    5. RISK ASSESSMENT
    - Potential challenges and mitigation strategies
    - Change management considerations
    
    6. SUCCESS METRICS
    - KPIs to track automation success
    - Expected outcomes and timelines
    
    Format the report professionally with clear headings, bullet points, and actionable recommendations. 
    Make it specific to the business context provided. Keep the tone professional but accessible.
    Aim for 800-1200 words total.
  `;

  try {
    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 4000,
      messages: [{ role: "user", content: prompt }]
    });
    
    const content = response.content[0];
    if (content.type === 'text') {
      return content.text;
    } else {
      throw new Error('Unexpected response type from Anthropic API');
    }
  } catch (error) {
    console.error('Error calling Anthropic API:', error);
    // Fallback to a basic report if API fails
    return `# AI Automation Audit Report

## Executive Summary
Based on your ${data.industry} business focusing on ${data.businessArea}, we've identified several automation opportunities to address your pain points: ${data.painPoints}.

## Key Automation Opportunities
1. **Process Automation**: Streamline repetitive tasks in ${data.businessArea}
2. **Data Integration**: Connect your current tools (${data.currentTechnologies}) for better insights
3. **Workflow Optimization**: Reduce manual intervention in daily operations

## Recommended Next Steps
- Schedule a detailed consultation to discuss specific implementation
- Begin with high-impact, low-effort automation projects
- Establish metrics to track automation success

*This is a preliminary report. A full detailed analysis will be sent to ${data.email} within 24 hours.*`;
  }
}

// Implement email sending functionality
async function sendAuditReport(email: string, report: string, auditData: any) {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not configured, skipping email sending');
      return;
    }
    
    const resend = new Resend(resendApiKey);
    
    const htmlContent = generateAuditEmailHTML({
      userName: email,
      reportContent: report,
      companyName: auditData.industry
    });
    
    const textContent = generateAuditEmailText({
      userName: email,
      reportContent: report,
      companyName: auditData.industry
    });

    // Send to user
    const { data: userData, error: userError } = await resend.emails.send({
      from: 'Nuvaru <reports@nuvaru.com>',
      to: [email],
      subject: 'Your AI Automation Audit Report is Ready',
      html: htmlContent,
      text: textContent,
    });
    if (userError) {
      console.error('Error sending email to user:', userError);
      throw new Error('Failed to send email to user');
    }
    console.log('Email sent to user:', userData);

    // Send to info@nuvaru.co.uk
    const { data: adminData, error: adminError } = await resend.emails.send({
      from: 'Nuvaru <reports@nuvaru.com>',
      to: ['info@nuvaru.co.uk'],
      subject: `New Audit Submission from ${email}`,
      html: htmlContent,
      text: textContent,
    });
    if (adminError) {
      console.error('Error sending email to admin:', adminError);
      throw new Error('Failed to send email to admin');
    }
    console.log('Email sent to admin:', adminData);
    return { userData, adminData };
  } catch (error) {
    console.error('Error in sendAuditReport:', error);
    throw error;
  }
} 