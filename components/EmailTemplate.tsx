interface EmailTemplateProps {
  userName: string;
  reportContent: string;
  companyName?: string;
}

export function generateAuditEmailHTML({ userName, reportContent, companyName }: EmailTemplateProps) {
  const displayName = companyName || userName.split('@')[0];
  
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your AI Automation Audit Report</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f8f9fa;
        }
        .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 40px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #2563eb;
            margin-bottom: 10px;
        }
        .title {
            font-size: 28px;
            font-weight: bold;
            color: #1f2937;
            margin-bottom: 10px;
        }
        .subtitle {
            font-size: 16px;
            color: #6b7280;
            margin-bottom: 30px;
        }
        .greeting {
            font-size: 18px;
            margin-bottom: 20px;
            color: #374151;
        }
        .report-content {
            background-color: #f9fafb;
            border-left: 4px solid #2563eb;
            padding: 20px;
            margin: 20px 0;
            border-radius: 0 8px 8px 0;
        }
        .report-content h1 {
            color: #1f2937;
            font-size: 24px;
            margin-bottom: 15px;
        }
        .report-content h2 {
            color: #374151;
            font-size: 20px;
            margin-top: 25px;
            margin-bottom: 10px;
        }
        .report-content h3 {
            color: #4b5563;
            font-size: 18px;
            margin-top: 20px;
            margin-bottom: 8px;
        }
        .report-content p {
            margin-bottom: 12px;
            color: #4b5563;
        }
        .report-content ul, .report-content ol {
            margin-bottom: 12px;
            padding-left: 20px;
        }
        .report-content li {
            margin-bottom: 6px;
            color: #4b5563;
        }
        .cta-section {
            text-align: center;
            margin: 30px 0;
            padding: 20px;
            background-color: #eff6ff;
            border-radius: 8px;
        }
        .cta-button {
            display: inline-block;
            background-color: #2563eb;
            color: #ffffff;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin: 10px 0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e5e7eb;
            color: #6b7280;
            font-size: 14px;
        }
        .highlight {
            background-color: #fef3c7;
            padding: 2px 4px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">Nuvaru</div>
            <div class="title">Your AI Automation Audit Report</div>
            <div class="subtitle">Personalized insights to transform your business</div>
        </div>
        
        <div class="greeting">
            Hi ${displayName},
        </div>
        
        <p>Thank you for requesting your AI Automation Audit Report. Our AI has analyzed your business needs and created a comprehensive report tailored specifically to your situation.</p>
        
        <p>Here's your personalized audit report:</p>
        
        <div class="report-content">
            ${reportContent.replace(/\n/g, '<br>').replace(/#{1,6}\s+(.+)/g, '<h1>$1</h1>').replace(/##\s+(.+)/g, '<h2>$1</h2>').replace(/###\s+(.+)/g, '<h3>$1</h3>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\*(.+?)\*/g, '<em>$1</em>')}
        </div>
        
        <div class="cta-section">
            <h3>Ready to Get Started?</h3>
            <p>Your audit report is just the beginning. Let's discuss how to implement these recommendations and start seeing results.</p>
            <a href="https://nuvaru.com/contact" class="cta-button">Schedule a Free Consultation</a>
        </div>
        
        <div class="footer">
            <p><strong>Questions?</strong> Reply to this email or contact us at hello@nuvaru.com</p>
            <p>Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
            <p>© 2024 Nuvaru. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `;
}

export function generateAuditEmailText({ userName, reportContent, companyName }: EmailTemplateProps) {
  const displayName = companyName || userName.split('@')[0];
  
  return `
Your AI Automation Audit Report

Hi ${displayName},

Thank you for requesting your AI Automation Audit Report. Our AI has analyzed your business needs and created a comprehensive report tailored specifically to your situation.

Here's your personalized audit report:

${reportContent}

Ready to Get Started?
Your audit report is just the beginning. Let's discuss how to implement these recommendations and start seeing results.

Schedule a free consultation: https://nuvaru.com/contact

Questions? Reply to this email or contact us at hello@nuvaru.com

Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}

© 2024 Nuvaru. All rights reserved.
  `;
} 