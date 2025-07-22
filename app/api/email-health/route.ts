import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function GET(request: NextRequest) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return NextResponse.json({ success: false, error: 'RESEND_API_KEY not configured' }, { status: 500 });
  }
  const resend = new Resend(resendApiKey);
  try {
    const { error } = await resend.emails.send({
      from: 'Nuvaru <reports@nuvaru.com>',
      to: ['lee@nuvaru.co.uk'],
      subject: 'Nuvaru Email Health Check',
      html: `<h2>Email Health Check</h2><p>This is a test email from your Nuvaru website deployment. If you received this, Resend is working!</p>`,
      text: 'This is a test email from your Nuvaru website deployment. If you received this, Resend is working!'
    });
    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ success: false, error: error.message || error }, { status: 500 });
    }
    return NextResponse.json({ success: true, message: 'Test email sent to lee@nuvaru.co.uk' });
  } catch (err: any) {
    console.error('Error sending health check email:', err);
    return NextResponse.json({ success: false, error: err.message || err }, { status: 500 });
  }
} 