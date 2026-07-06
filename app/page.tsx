import Nav from '@/components/Nav';
import ContactForm from '@/components/ContactForm';

const painPoints = [
  { num: '01', title: "YOU CAN'T SEE YOUR NUMBERS", body: "Job costing lives in somebody's head. You find out you lost money on a project after it's already closed." },
  { num: '02', title: "YOU'RE THE BOTTLENECK", body: "Every decision, every approval, every fire — it comes through you. The business doesn't run without you in the room." },
  { num: '03', title: 'MANUAL PROCESSES EVERYWHERE', body: 'Spreadsheets, sticky notes, and tribal knowledge are holding your operation together.' },
  { num: '04', title: 'MARGIN IS SHRINKING', body: "Revenue's up. Profit isn't. Nobody can tell you exactly why." }
];

const methodSteps = [
  { num: '01 / AUDIT', title: 'Audit', body: 'We map how work actually moves through your business — not how the org chart says it should.' },
  { num: '02 / AUTOMATE', title: 'Automate', body: 'We remove the manual steps costing you hours and money, and put systems in their place.' },
  { num: '03 / OPTIMIZE', title: 'Optimize', body: 'We keep tightening the operation until the numbers move, and stay moved.' }
];

const processSteps = [
  { num: '01', title: 'Discovery Call', timing: '30 min · Free', body: 'A straight conversation about where it hurts.' },
  { num: '02', title: 'Operational Audit', timing: 'One-page intake · 45-min call · Report in 48 hrs', body: 'You get a written scorecard and a 90-day roadmap.' },
  { num: '03', title: 'Quick Wins', timing: 'Week 1–2', body: '1–2 low-risk fixes, implemented immediately.' },
  { num: '04', title: 'Systematic Optimization', timing: '90 days+', body: 'Ongoing monthly engagement — we work the plan with you.' }
];

const tiers = [
  {
    name: 'Starter',
    price: '$2,000/mo',
    featured: false,
    features: ['Operational audit + friction map', 'Written report with scorecard', '90-day roadmap', '1–2 quick-win recommendations', 'Monthly check-in call']
  },
  {
    name: 'Core',
    price: '$4,000–5,000/mo',
    featured: true,
    features: ['Everything in Starter', 'Implementation support', 'Ongoing optimization', 'Automation build-out', 'Bi-weekly working sessions', 'Dashboard & reporting setup']
  },
  {
    name: 'Fractional COO',
    price: '$7,000–10,000+/mo',
    featured: false,
    features: ['Everything in Core', 'Deep restructuring', 'Fractional COO services', 'Weekly leadership meetings', 'Team training & process docs', 'Equity arrangements possible']
  }
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section id="top" className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-[120px] sm:pt-[180px] pb-16 sm:pb-24 border-b border-line">
        <div className="font-mono text-[13px] tracking-[0.16em] text-amber uppercase mb-5">
          Operations Consulting — Construction &amp; Trades
        </div>
        <h1 className="font-display font-normal text-[40px] sm:text-[64px] lg:text-[88px] leading-[0.98] max-w-[16ch] mb-7">
          YOUR OPERATION IS COSTING YOU MORE THAN YOU THINK.
        </h1>
        <p className="text-[17px] sm:text-xl leading-relaxed text-muted max-w-[52ch] mb-10">
          We audit how your business actually runs, then remove the friction that&apos;s bleeding your time and your margin.
        </p>
        <a href="#contact" className="inline-block bg-rust hover:bg-rustLight text-[#fbf6ef] font-semibold text-[17px] px-8 py-4 rounded-sm transition-colors">
          Book a Discovery Call →
        </a>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-line">
        <div className="font-mono text-[13px] tracking-[0.16em] text-amber uppercase mb-4">The Problem</div>
        <h2 className="font-display font-normal text-[30px] sm:text-5xl leading-[1.05] max-w-[18ch] mb-12">SOUND FAMILIAR?</h2>
        <div className="flex flex-col">
          {painPoints.map((p) => (
            <div key={p.num} className="flex gap-6 sm:gap-9 py-7 sm:py-9 border-t border-line items-baseline">
              <div className="font-mono text-xl sm:text-2xl text-mutedDark/70 min-w-[2ch] shrink-0">{p.num}</div>
              <div>
                <h3 className="font-display font-normal text-2xl sm:text-3xl mb-2.5">{p.title}</h3>
                <p className="text-base leading-relaxed text-muted max-w-[56ch]">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* METHOD */}
      <section id="method" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-line">
        <div className="font-mono text-[13px] tracking-[0.16em] text-amber uppercase mb-4">The Method</div>
        <h2 className="font-display font-normal text-[30px] sm:text-5xl leading-[1.05] max-w-[18ch] mb-12">AUDIT. AUTOMATE. OPTIMIZE.</h2>
        <div className="flex flex-wrap gap-px bg-line">
          {methodSteps.map((s) => (
            <div key={s.num} className="flex-1 min-w-[260px] bg-bg p-7 sm:p-9">
              <div className="font-mono text-[13px] text-amber mb-4.5">{s.num}</div>
              <h3 className="font-display font-normal text-2xl sm:text-3xl mb-3.5">{s.title}</h3>
              <p className="text-[15.5px] leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-line">
        <div className="font-mono text-[13px] tracking-[0.16em] text-amber uppercase mb-4">How It Works</div>
        <h2 className="font-display font-normal text-[30px] sm:text-5xl leading-[1.05] max-w-[18ch] mb-12">FOUR STEPS. NO FLUFF.</h2>
        <div className="flex flex-col">
          {processSteps.map((s) => (
            <div key={s.num} className="flex gap-6 sm:gap-9 py-6 sm:py-8 border-t border-line flex-wrap">
              <div className="font-display text-[34px] sm:text-[44px] text-rust min-w-[2.2ch] shrink-0">{s.num}</div>
              <div className="flex-1 min-w-[320px]">
                <div className="flex items-baseline gap-3.5 flex-wrap mb-2">
                  <h3 className="font-display font-normal text-xl sm:text-2xl">{s.title}</h3>
                  <span className="font-mono text-[13px] text-mutedDark">{s.timing}</span>
                </div>
                <p className="text-base leading-relaxed text-muted max-w-[56ch]">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-line">
        <div className="font-mono text-[13px] tracking-[0.16em] text-amber uppercase mb-4">About</div>
        <h2 className="font-display font-normal text-[30px] sm:text-5xl leading-[1.05] max-w-[18ch] mb-10">
          20+ YEARS IN THE FIELD, NOT IN A DECK.
        </h2>
        <div className="max-w-[680px]">
          <blockquote className="border-l-[3px] border-rust pl-5 sm:pl-6 text-lg sm:text-xl leading-relaxed text-ink mb-5 not-italic">
            &quot;I&apos;ve spent 20+ years building and operating businesses in construction and operations. I started in
            demolition, transitioned into corporate leadership during the 2008 recession, and then returned to help scale
            and eventually exit a family construction business in 2021. What came out of that is clarity — I&apos;m at my
            best when I&apos;m building systems, improving operations, and helping businesses scale efficiently.&quot;
          </blockquote>
          <div className="font-mono text-sm text-muted">— Craig Nowotny, Founder</div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-line">
        <div className="font-mono text-[13px] tracking-[0.16em] text-amber uppercase mb-4">Pricing</div>
        <h2 className="font-display font-normal text-[30px] sm:text-5xl leading-[1.05] max-w-[20ch] mb-12">
          NO &quot;CONTACT US FOR PRICING.&quot;
        </h2>
        <div className="flex flex-wrap gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`flex-1 min-w-[300px] flex flex-col p-7 sm:p-9 border rounded-sm ${
                t.featured ? 'bg-panelAlt border-rust' : 'bg-panel border-ink/20'
              }`}
            >
              {t.featured && (
                <div className="font-mono text-[11px] tracking-wider text-bg bg-amber inline-block px-2.5 py-1 rounded-sm mb-4 w-fit">
                  MOST COMMON FIT
                </div>
              )}
              <h3 className="font-display font-normal text-[26px] mb-2">{t.name}</h3>
              <div className="font-mono text-xl text-ink mb-6">{t.price}</div>
              <div className="flex flex-col gap-3 mb-7 flex-1">
                {t.features.map((f) => (
                  <div key={f} className="flex gap-2.5 text-[14.5px] text-muted leading-relaxed">
                    <span className="text-rust shrink-0">—</span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className={`block text-center font-semibold text-[15px] px-5 py-3.5 rounded-sm border transition-opacity hover:opacity-85 ${
                  t.featured ? 'bg-rust border-rust text-[#fbf6ef]' : 'bg-transparent border-ink/20 text-ink'
                }`}
              >
                Book a Discovery Call
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-[760px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="font-mono text-[13px] tracking-[0.16em] text-amber uppercase mb-4">Contact</div>
        <h2 className="font-display font-normal text-[30px] sm:text-5xl leading-[1.05] mb-4">LET&apos;S LOOK AT YOUR NUMBERS.</h2>
        <p className="text-base text-muted leading-relaxed max-w-[52ch] mb-10">
          30 minutes, no pitch deck. Tell us what&apos;s going on and we&apos;ll tell you straight whether we can help.
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
