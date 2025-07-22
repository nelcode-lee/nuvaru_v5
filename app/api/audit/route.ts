import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  const data = await request.json();

  // Compose admin email content
  const html = `
    <h2>New Audit Form Submission</h2>
    <ul>
      ${Object.entries(data).map(([key, value]) => `<li><b>${key}:</b> ${value}</li>`).join('')}
    </ul>
  `;

  // Compose user confirmation email
  const userHtml = `
    <h2>Thank you for your audit request!</h2>
    <p>Hi ${data.email},</p>
    <p>We've received your request for an AI Automation Audit. Our team will review your details and get back to you soon.</p>
    <p>If you have any questions, reply to this email or contact us at <a href="mailto:lee@nuvaru.co.uk">lee@nuvaru.co.uk</a>.</p>
    <hr />
    <p><b>Your submission:</b></p>
    <ul>
      ${Object.entries(data).map(([key, value]) => `<li><b>${key}:</b> ${value}</li>`).join('')}
    </ul>
    <p>— The Nuvaru Team</p>
  `;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Send admin notification
    await transporter.sendMail({
      from: `Nuvaru Website <${process.env.SMTP_USER}>`,
      to: 'lee@nuvaru.co.uk',
      subject: 'New Audit Form Submission',
      html,
    });
    // Send user confirmation
    await transporter.sendMail({
      from: `Nuvaru Website <${process.env.SMTP_USER}>`,
      to: data.email,
      subject: 'Your Nuvaru Audit Request Received',
      html: userHtml,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Audit email send error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 