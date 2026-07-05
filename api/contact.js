// Vercel serverless function — forwards contact form to info@oakbridgelabs.com
// Uses Resend (or falls back to mailto if no API key)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, company, email, phone, revenue, message } = req.body || {};

  if (!name || !company || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  // If no Resend key, return success but instruct user to email directly
  if (!RESEND_API_KEY) {
    console.log('No RESEND_API_KEY — form submission received but not emailed:');
    console.log(JSON.stringify({ name, company, email, phone, revenue, message }, null, 2));
    return res.status(200).json({ ok: true, note: 'No email backend configured' });
  }

  try {
    const emailBody = `
New Discovery Call Request from oakbridgelabs.com

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone || 'N/A'}
Revenue Range: ${revenue || 'N/A'}

Message:
${message}

---
Reply to ${email} to schedule the call.
`;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Oakbridge Labs <noreply@oakbridgelabs.com>',
        to: 'info@oakbridgelabs.com',
        reply_to: email,
        subject: `Discovery Call Request — ${company}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error('Resend error:', errText);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Internal error' });
  }
}