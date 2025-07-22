# Email Integration Setup Guide

## Overview
The audit form now includes automatic email delivery of generated reports using Resend. Users will receive a professionally formatted email with their personalized AI audit report immediately after form submission.

## Setup Instructions

### 1. Create a Resend Account
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Get Your API Key
1. Log into your Resend dashboard
2. Go to the "API Keys" section
3. Create a new API key
4. Copy the API key (starts with `re_`)

### 3. Configure Your Environment
Add the following to your `.env` file:

```env
RESEND_API_KEY=re_your_api_key_here
```

### 4. Verify Domain (Optional but Recommended)
For production use, you should verify your domain with Resend:
1. In your Resend dashboard, go to "Domains"
2. Add your domain (e.g., `nuvaru.com`)
3. Follow the DNS verification steps
4. Update the `from` email in `app/api/audit/route.ts` to use your verified domain

### 5. Test the Integration
1. Start your development server: `pnpm run dev`
2. Fill out the audit form on your website
3. Check the email address you provided for the report

## Features

### Email Template
- **Professional Design**: Clean, modern HTML email template
- **Responsive**: Works on desktop and mobile devices
- **Branded**: Includes Nuvaru branding and styling
- **Complete Report**: Full AI-generated audit report in the email
- **Call-to-Action**: Includes link to schedule consultation

### Email Content
- Personalized greeting using the user's email
- Complete audit report with all sections
- Professional formatting with headers and styling
- Contact information and next steps
- Generated timestamp

### Error Handling
- Graceful fallback if email service is unavailable
- Report generation continues even if email fails
- Console logging for debugging

## Customization

### Update Email Template
Edit `components/EmailTemplate.tsx` to:
- Change branding and colors
- Modify email content structure
- Add additional sections or links

### Update Email Settings
In `app/api/audit/route.ts`, you can modify:
- `from` email address
- Email subject line
- Email content generation

### Add Email Tracking
Resend provides email analytics. You can:
- Track open rates
- Monitor click-through rates
- Analyze delivery success

## Production Deployment

### Environment Variables
Make sure to set these in your production environment:
```env
ANTHROPIC_API_KEY=your_anthropic_key
RESEND_API_KEY=your_resend_key
```

### Domain Verification
For production, verify your domain with Resend to:
- Improve deliverability
- Use custom `from` addresses
- Access advanced features

### Monitoring
Monitor email delivery through:
- Resend dashboard analytics
- Server logs for email errors
- User feedback on email delivery

## Troubleshooting

### Common Issues
1. **Email not sending**: Check RESEND_API_KEY is set correctly
2. **Report not generating**: Verify ANTHROPIC_API_KEY is valid
3. **Template issues**: Check EmailTemplate.tsx for syntax errors

### Debug Mode
The system logs detailed information:
- Report generation status
- Email sending attempts
- Error messages and stack traces

## Security Notes
- API keys are stored in environment variables
- No sensitive data is logged
- Email content is generated server-side
- User data is not stored permanently 