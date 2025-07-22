import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.warn('RESEND_API_KEY not configured, skipping email sending');
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 });
    }
    const resend = new Resend(resendApiKey);

    // Compose email content
    const htmlContent = `
      <h2>New Book a Call Submission</h2>
      <ul>
        <li><b>Name:</b> ${data.name}</li>
        <li><b>Email:</b> ${data.email}</li>
        <li><b>Phone:</b> ${data.phone || 'N/A'}</li>
        <li><b>Company:</b> ${data.company || 'N/A'}</li>
        <li><b>Consultation Type:</b> ${data.callType}</li>
        <li><b>Preferred Date:</b> ${data.preferredDate}</li>
        <li><b>Preferred Time:</b> ${data.preferredTime}</li>
        <li><b>Message:</b> ${data.message || 'N/A'}</li>
      </ul>
      <p>Submitted at: ${new Date().toLocaleString()}</p>
    `;
    const textContent = `New Book a Call Submission\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nConsultation Type: ${data.callType}\nPreferred Date: ${data.preferredDate}\nPreferred Time: ${data.preferredTime}\nMessage: ${data.message || 'N/A'}\nSubmitted at: ${new Date().toLocaleString()}`;

    const { error } = await resend.emails.send({
      from: 'Nuvaru <reports@nuvaru.com>',
      to: ['info@nuvaru.co.uk'],
      subject: `New Book a Call Submission from ${data.name}`,
      html: htmlContent,
      text: textContent,
    });
    if (error) {
      console.error('Error sending Book a Call email:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing Book a Call request:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 