import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, phone, revenue, message } = body ?? {};

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const to = process.env.CONTACT_TO_EMAIL || 'info@oakbridgelabs.com';
    const from = process.env.CONTACT_FROM_EMAIL || 'Oakbridge Labs <onboarding@resend.dev>';

    await resend.emails.send({
      from,
      to,
      reply_to: email,
      subject: `New inquiry from ${name}${company ? ` (${company})` : ''}`,
      text: [
        `Name: ${name}`,
        `Company: ${company || '—'}`,
        `Email: ${email}`,
        `Phone: ${phone || '—'}`,
        `Revenue range: ${revenue || '—'}`,
        '',
        'Message:',
        message || '—'
      ].join('\n')
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
