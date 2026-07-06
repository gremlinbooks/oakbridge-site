'use client';

import { useState } from 'react';

const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#method', label: 'Method' },
  { href: '#process', label: 'Process' },
  { href: '#built', label: 'Built' },
  { href: '#pricing', label: 'Pricing' }
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5 bg-bg/85 backdrop-blur-sm border-b border-line">
        <a href="#top" className="font-display text-lg sm:text-xl tracking-wide flex items-baseline gap-2">
          OAKBRIDGE{' '}
          <span className="font-mono text-[0.5em] font-semibold text-amber tracking-widest">LABS</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-medium text-muted hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-rust hover:bg-rustLight text-[#fbf6ef] text-sm font-semibold px-4.5 py-2.5 rounded-sm transition-colors"
          >
            Contact
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden flex flex-col gap-1 items-center justify-center w-10 h-10 border border-ink/30 rounded-sm"
        >
          <span className="block w-4.5 h-0.5 bg-ink" />
          <span className="block w-4.5 h-0.5 bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-bg pt-24 flex flex-col items-center gap-7 md:hidden">
          {[...links, { href: '#contact', label: 'Contact' }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`font-display text-3xl tracking-wide ${l.label === 'Contact' ? 'text-rust' : 'text-ink'}`}
            >
              {l.label.toUpperCase()}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
