import Nav from '@/components/Nav';
import ContactForm from '@/components/ContactForm';

const painPoints = [
  { num: '01', title: 'Quoting eats your week', body: 'Every job starts with a site visit and a spreadsheet. By the time the quote goes out, the customer already called someone else.' },
  { num: '02', title: 'Scheduling is manual', body: 'Texts, calls, reschedules, no-shows. You or your office manager are holding it together with a calendar and a phone.' },
  { num: '03', title: 'Invoices sit unpaid', body: 'You did the work. Now you are waiting. Nobody follows up because nobody has time, and cash flow pays the price.' },
  { num: '04', title: 'Job costing is a guess', body: 'You find out a job lost money when it is already closed. Expenses get categorized whenever someone gets around to it.' },
  { num: '05', title: 'Everything runs through you', body: 'Every decision, every approval, every fire. The business cannot scale because it depends on you being in the room.' }
];

const aiExamples = [
  { title: 'Quoting & estimating', body: 'AI reads job specs and customer messages, drafts quotes in minutes instead of hours.' },
  { title: 'Scheduling & reminders', body: 'AI handles rescheduling, reminders, and no-shows via text and email. Your calendar fills itself.' },
  { title: 'Invoicing & collections', body: 'AI chases unpaid invoices and stale leads so nothing falls through the cracks. Cash flow speeds up.' },
  { title: 'Job costing & alerts', body: 'AI categorizes expenses and flags jobs going over budget — in real time, not after closeout.' },
  { title: 'Notes & change orders', body: 'AI summarizes call notes, site visits, and change orders so nothing gets lost in someone\'s inbox.' },
  { title: 'Lead intake & routing', body: 'AI captures inquiry details from form, email, or text and routes them to the right person automatically.' }
];

const auditIncludes = [
  '45-minute audit call with the owner',
  'One-page diagnostic identifying the 2 biggest operational/AI opportunities, dollarized',
  'Google Business Profile buildout or optimization — claimed, verified, photos, services, hours, Q&A, posts. The whole thing, done properly.',
  'Recommended fix path: self-serve, build with us, or pass',
  'No ongoing commitment'
];

const whatsNext = [
  { title: 'AI + Ops Build', detail: 'We build 1–2 working automations — quoting, scheduling, invoicing, job costing, lead intake. Integrated with your tools. $2,500–$5,000, 2–4 weeks.' },
  { title: 'Ongoing Ops Partner', detail: 'Monthly ops review, new automations each quarter, fractional support. $3,000–$5,000/mo. Stay if it pays, leave if it doesn\'t.' }
];

const processSteps = [
  { num: '01', title: 'Book the audit', timing: '20 min · Free', body: 'A straight conversation about where it hurts. If your business doesn\'t have the scale to benefit, we\'ll tell you.' },
  { num: '02', title: 'Audit call + diagnostic', timing: '45 min · $250', body: 'We map the 3 biggest friction points and dollarize what they\'re costing you. You get a one-page report within 48 hours, plus a fully built-out Google Business Profile.' },
  { num: '03', title: 'Build the fix', timing: '2–4 weeks', body: 'If you want us to build it, we quote the work. 1–2 working automations, integrated with your tools, 30-day handoff support.' },
  { num: '04', title: 'Keep it running', timing: 'Optional · Monthly', body: 'Monthly ops review, new automations each quarter, fractional support. Stay if it pays. Leave if it doesn\'t.' }
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section id="top" className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-[120px] sm:pt-[180px] pb-16 sm:pb-24 border-b border-line">
        <h1 className="font-display font-normal text-[36px] sm:text-[54px] lg:text-[72px] leading-[1.02] max-w-[16ch] mb-7">
          Operations that run themselves.
        </h1>
        <p className="text-[17px] sm:text-xl leading-relaxed text-muted max-w-[52ch] mb-10">
          We plug AI and automation into owner-led trades so quoting, scheduling, follow-up, and job costing stop bleeding your time and margin. Twenty-plus years in the field, not in a deck.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://cal.com/oakbridgelabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rust hover:bg-rustLight text-[#fbf6ef] font-semibold text-[16px] px-7 py-3.5 rounded-sm transition-colors"
          >
            Book the $250 audit →
          </a>
          <a
            href="#offer"
            className="inline-block border border-ink/20 hover:border-ink/40 text-ink font-medium text-[16px] px-7 py-3.5 rounded-sm transition-colors"
          >
            See how it works
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-line">
        <div className="font-mono text-[12px] tracking-[0.14em] text-amber mb-4">The problem</div>
        <h2 className="font-display font-normal text-[28px] sm:text-[42px] leading-[1.08] max-w-[20ch] mb-12">Sound familiar?</h2>
        <div className="flex flex-col">
          {painPoints.map((p) => (
            <div key={p.num} className="flex gap-6 sm:gap-9 py-6 sm:py-8 border-t border-line items-baseline">
              <div className="font-mono text-base sm:text-lg text-mutedDark min-w-[2ch] shrink-0">{p.num}</div>
              <div>
                <h3 className="font-display font-normal text-xl sm:text-2xl mb-2 text-ink">{p.title}</h3>
                <p className="text-[15.5px] leading-relaxed text-muted max-w-[56ch]">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AI INTEGRATION */}
      <section id="ai" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-line">
        <div className="font-mono text-[12px] tracking-[0.14em] text-amber mb-4">What we build</div>
        <h2 className="font-display font-normal text-[28px] sm:text-[42px] leading-[1.08] max-w-[22ch] mb-5">AI that does actual work.</h2>
        <p className="text-[16px] sm:text-lg leading-relaxed text-muted max-w-[56ch] mb-12">
          Not chatbots. Not dashboards nobody looks at. Working automations plugged into the tools you already use — QuickBooks, your CRM, your calendar, your inbox.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {aiExamples.map((a) => (
            <div key={a.title} className="bg-bg p-6 sm:p-8">
              <h3 className="font-display font-normal text-lg sm:text-xl mb-2.5 text-ink">{a.title}</h3>
              <p className="text-[14.5px] leading-relaxed text-muted">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER */}
      <section id="offer" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-line">
        <div className="font-mono text-[12px] tracking-[0.14em] text-amber mb-4">The audit</div>
        <h2 className="font-display font-normal text-[28px] sm:text-[42px] leading-[1.08] max-w-[22ch] mb-5">
          Two hundred fifty dollars. One week. You&apos;ll know exactly where the leak is.
        </h2>
        <p className="text-[16px] sm:text-lg leading-relaxed text-muted max-w-[56ch] mb-10">
          The QuickOps Audit is the front door. You get a 45-minute call, a one-page diagnostic with the two biggest opportunities dollarized, and we build out or fix your Google Business Profile so it actually shows up in the map pack and converts. That alone is worth the $250.
        </p>

        <div className="border border-ink/15 rounded-sm p-6 sm:p-8 bg-panel mb-10">
          <div className="flex flex-wrap items-baseline gap-4 mb-5">
            <h3 className="font-display font-normal text-xl sm:text-2xl text-ink">QuickOps Audit</h3>
            <span className="font-mono text-[12px] text-mutedDark tracking-wide">1 week</span>
            <span className="font-display text-2xl sm:text-3xl text-rust ml-auto">$250</span>
          </div>
          <p className="text-[15px] leading-relaxed text-muted max-w-[56ch] mb-5">
            Best for owners who know something is wrong but can&apos;t pinpoint where the margin is going. No ongoing commitment — if there&apos;s nothing worth fixing, we&apos;ll tell you straight.
          </p>
          <ul className="flex flex-col gap-2.5 max-w-[56ch]">
            {auditIncludes.map((d, i) => (
              <li key={i} className="flex gap-3 text-[14.5px] leading-relaxed text-ink/90">
                <span className="text-rust font-mono shrink-0">→</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10">
          <a
            href="https://cal.com/oakbridgelabs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rust hover:bg-rustLight text-[#fbf6ef] font-semibold text-[16px] px-7 py-3.5 rounded-sm transition-colors"
          >
            Book the $250 audit →
          </a>
        </div>

        <div className="border-t border-line pt-10">
          <div className="font-mono text-[12px] tracking-[0.14em] text-amber mb-3">After the audit, if it makes sense</div>
          <h3 className="font-display font-normal text-[22px] sm:text-[28px] leading-[1.1] mb-6 max-w-[24ch]">
            What comes next.
          </h3>
          <div className="flex flex-col gap-5 max-w-[56ch]">
            {whatsNext.map((n, i) => (
              <div key={i} className="flex gap-4 items-baseline">
                <span className="font-mono text-[13px] text-mutedDark shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="font-display text-lg text-ink mb-1">{n.title}</div>
                  <div className="text-[14.5px] leading-relaxed text-muted">{n.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-line">
        <div className="font-mono text-[12px] tracking-[0.14em] text-amber mb-4">How it works</div>
        <h2 className="font-display font-normal text-[28px] sm:text-[42px] leading-[1.08] max-w-[20ch] mb-12">From diagnosis to running.</h2>
        <div className="flex flex-col">
          {processSteps.map((s) => (
            <div key={s.num} className="flex gap-6 sm:gap-9 py-6 sm:py-7 border-t border-line flex-wrap">
              <div className="font-display text-[28px] sm:text-[36px] text-rust min-w-[2.2ch] shrink-0 leading-none">{s.num}</div>
              <div className="flex-1 min-w-[320px]">
                <div className="flex items-baseline gap-3 flex-wrap mb-1.5">
                  <h3 className="font-display font-normal text-lg sm:text-xl text-ink">{s.title}</h3>
                  <span className="font-mono text-[12px] text-mutedDark">{s.timing}</span>
                </div>
                <p className="text-[15px] leading-relaxed text-muted max-w-[56ch]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-line">
        <div className="font-mono text-[12px] tracking-[0.14em] text-amber mb-4">About</div>
        <h2 className="font-display font-normal text-[28px] sm:text-[42px] leading-[1.08] max-w-[20ch] mb-10">
          Twenty-plus years in the field, not in a deck.
        </h2>
        <div className="max-w-[680px]">
          <blockquote className="border-l-[3px] border-rust pl-5 sm:pl-6 text-lg sm:text-xl leading-relaxed text-ink mb-5 not-italic">
            &quot;I started on the tools in demolition, moved into corporate operations during the recession, then came
            back to help scale and exit a family construction business in 2021. AI is just the newest lever. The work
            is the same as it&apos;s always been: find the friction, build the system, get the owner&apos;s time back.&quot;
          </blockquote>
          <div className="font-mono text-sm text-muted">— Craig Nowotny, Founder</div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 text-sm">
            <div>
              <div className="font-mono text-amber tracking-[0.14em] text-[11px] mb-1.5">Field</div>
              <div className="text-ink/90 leading-relaxed">Twenty-plus years on job sites and in the office — demolition to director-level operations.</div>
            </div>
            <div>
              <div className="font-mono text-amber tracking-[0.14em] text-[11px] mb-1.5">Exit</div>
              <div className="text-ink/90 leading-relaxed">Helped scale and exit Black Bear Construction Services in 2021.</div>
            </div>
            <div>
              <div className="font-mono text-amber tracking-[0.14em] text-[11px] mb-1.5">Now</div>
              <div className="text-ink/90 leading-relaxed">Builds AI + automation systems for owner-led trades across the Southeast.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-[760px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="font-mono text-[12px] tracking-[0.14em] text-amber mb-4">Contact</div>
        <h2 className="font-display font-normal text-[28px] sm:text-[42px] leading-[1.08] mb-4">Find your leak.</h2>
        <p className="text-[15.5px] text-muted leading-relaxed max-w-[52ch] mb-10">
          Twenty minutes, no pitch deck. Tell us what&apos;s eating your week and we&apos;ll tell you straight whether the $250 audit is worth it for you.
        </p>
        <p className="text-[15.5px] text-muted leading-relaxed max-w-[52ch] mb-8">
          <a
            href="https://cal.com/oakbridgelabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber underline underline-offset-4 hover:text-rust"
          >
            Book the 20-min call directly →
          </a>
          <span className="text-mutedDark"> &nbsp;or send a message below.</span>
        </p>
        <ContactForm />
      </section>

      {/* FOOTER */}
      <footer className="max-w-[1180px] mx-auto px-5 sm:px-8 py-8 border-t border-line flex justify-between flex-wrap gap-3">
        <div className="text-sm text-mutedDark">Oakbridge Labs</div>
        <div className="text-sm text-mutedDark">
          <a href="mailto:info@oakbridgelabs.com" className="text-mutedDark">
            info@oakbridgelabs.com
          </a>
        </div>
        <div className="text-sm text-mutedDark">© 2026 Oakbridge Labs</div>
      </footer>
    </div>
  );
}