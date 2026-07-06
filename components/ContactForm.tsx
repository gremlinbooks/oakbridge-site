'use client';

import { useState, FormEvent } from 'react';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  revenue: string;
  message: string;
};

const initial: FormState = { name: '', company: '', email: '', phone: '', revenue: '', message: '' };

const inputClass =
  'flex-1 min-w-[220px] bg-panel border border-ink/20 text-ink placeholder:text-mutedDark px-4 py-3.5 text-[15px] rounded-sm focus:outline-none focus:border-rust';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const setField = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className="border border-ink/20 p-8 rounded-sm">
        <h3 className="font-display text-2xl mb-2.5">GOT IT.</h3>
        <p className="text-muted text-[15px] leading-relaxed">
          We&apos;ll follow up within one business day. If it&apos;s urgent, email{' '}
          <a href="mailto:info@oakbridgelabs.com" className="text-amber">
            info@oakbridgelabs.com
          </a>{' '}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex gap-4 flex-wrap">
        <input type="text" placeholder="Name" required value={form.name} onChange={setField('name')} className={inputClass} />
        <input type="text" placeholder="Company" value={form.company} onChange={setField('company')} className={inputClass} />
      </div>
      <div className="flex gap-4 flex-wrap">
        <input type="email" placeholder="Email" required value={form.email} onChange={setField('email')} className={inputClass} />
        <input type="tel" placeholder="Phone" value={form.phone} onChange={setField('phone')} className={inputClass} />
      </div>
      <select value={form.revenue} onChange={setField('revenue')} className={`${inputClass} flex-none w-full`}>
        <option value="">Annual revenue range</option>
        <option value="under-1m">Under $1M</option>
        <option value="1m-5m">$1M – $5M</option>
        <option value="5m-15m">$5M – $15M</option>
        <option value="15m-plus">$15M+</option>
      </select>
      <textarea
        placeholder="What's going on?"
        rows={4}
        value={form.message}
        onChange={setField('message')}
        className={`${inputClass} flex-none w-full resize-y`}
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="bg-rust hover:bg-rustLight disabled:opacity-60 text-[#fbf6ef] font-semibold text-base px-5 py-4 rounded-sm mt-2 transition-colors"
      >
        {status === 'sending' ? 'Sending…' : 'Send It'}
      </button>

      {status === 'error' && (
        <p className="text-[13.5px] text-rustLight">
          Something went wrong sending that. Please email us directly at{' '}
          <a href="mailto:info@oakbridgelabs.com" className="underline">
            info@oakbridgelabs.com
          </a>{' '}
          instead.
        </p>
      )}

      <p className="text-[13.5px] text-mutedDark mt-1">
        Prefer email? Reach us directly at{' '}
        <a href="mailto:info@oakbridgelabs.com" className="text-amber">
          info@oakbridgelabs.com
        </a>
      </p>
    </form>
  );
}
