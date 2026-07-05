# Oakbridge Labs — Website

Operations consulting for owner-led businesses. We audit operations, find friction, and remove it.

## Stack
- Static HTML + Tailwind CSS (CDN)
- Vercel serverless function for contact form (`/api/contact`)
- Deployed on Vercel at oakbridgelabs.com

## Contact Form
Set `RESEND_API_KEY` environment variable in Vercel to enable email forwarding.
Without it, form submissions fall back to mailto.

## Deploy
```bash
vercel --prod
```