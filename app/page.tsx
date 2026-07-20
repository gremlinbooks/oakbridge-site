import Nav from '@/components/Nav';
import ContactForm from '@/components/ContactForm';

const painPoints = [
  { num: '01', title: "YOU CAN'T SEE YOUR NUMBERS", body: "Job costing, cash flow, and true margin live in somebody's head — or nowhere. You find out you lost money after the project is already closed." },
  { num: '02', title: "YOU'RE THE BOTTLENECK", body: "Every decision, every approval, every fire comes through you. The operation can't scale because it depends on you being in the room." },
  { num: '03', title: 'PROCESS IS HELD TOGETHER BY HABIT', body: 'Spreadsheets, sticky notes, and tribal knowledge keep the wheels on — until someone leaves or something breaks.' },
  { num: '04', title: 'MARGIN IS SHRINKING', body: "Revenue is up but profit isn't. Nobody can point to exactly where the money is going — or how to stop the leak." },
  { num: '05', title: "YOU'RE BUSY BUT NOT MOVING", body: "The business is running hard, but it isn't moving toward the future you actually want. The vision is stuck in your head." }
];

const artifactSteps = [
  { num: '01', title: 'Operational Analysis', body: 'Map internal and external processes. Find the friction, waste, and bottlenecks that slow delivery and inflate cost.' },
  { num: '02', title: 'Financial Analysis', body: 'Trace revenue, cost structure, profit erosion, and true breakeven. Find the dollars hiding in plain sight.' },
  { num: '03', title: 'Sales Analysis', body: 'See customer concentration, channel performance, and untapped growth. Know exactly where your next revenue should come from.' },
  { num: '04', title: 'Goal / Vision + Delta', body: 'Capture where the founder wants the company to go, then build the concrete path from today to that future.' }
];

const processSteps = [
  { num: '01', title: 'Discovery Call', timing: '20 min · Free', body: 'A straight conversation about where it hurts. We confirm there is enough scale and margin for OI to return 10X.' },
  { num: '02', title: 'Data + Vision Collection', timing: 'Week 1', body: 'We gather financials, sales records, operational workflow, and conduct the founder vision interview.' },
  { num: '03', title: 'Live Walkthrough', timing: 'Week 2', body: 'We present the 4-artifact diagnostic live on a call — the operational, financial, sales, and delta findings.' },
  { num: '04', title: 'Engagement + PDF Delivery', timing: 'Upon first payment', body: 'Once you sign and pay the first month, the full PDF package and weekly sprint schedule are delivered.' },
  { num: '05', title: 'Weekly Execution', timing: 'Ongoing', body: 'Custom weekly deliverables based on engagement length. We work the Delta plan until the numbers move.' }
];

const valueProofs = [
  { stat: '$30–90k', label: 'Annual value target per client' },
  { stat: '10X', label: 'Minimum return on engagement cost' },
  { stat: '4', label: 'Artifacts that form one complete picture' },
  { stat: '$3k', label: 'Monthly retainer, paid upfront' }
];

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section id="top" className="max-w-[1180px] mx-auto px-5 sm:px-8 pt-[120px] sm:pt-[180px] pb-16 sm:pb-24 border-b border-line">
        <div className="font-mono text-[13px] tracking-[0.16em] text-amber uppercase mb-5">
          Operational Intelligence — Contractors & Owner-Led Trades
        </div>
        <h1 className="font-display font-normal text-[40px] sm:text-[64px] lg:text-[88px] leading-[0.98] max-w-[16ch] mb-7">
          MAXIMIZING OPERATIONAL INTELLIGENCE.
        </h1>
        <p className="text-[17px] sm:text-xl leading-relaxed text-muted max-w-[52ch] mb-10">
          Your data tells a story. Let&apos;s make sure it&apos;s the right one.
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
        <h2 className="font-display font-normal text-[30px] sm:text-5xl leading-[1.05] max-w-[20ch] mb-12">OPERATIONAL INTELLIGENCE.</h2>
        <p className="text-[17px] sm:text-xl leading-relaxed text-muted max-w-[56ch] mb-12">
          Four integrated analyses. One Delta plan. Every finding ties back to money, time, or progress toward your vision.
        </p>
        <div className="flex flex-wrap gap-px bg-line">
          {artifactSteps.map((s) => (
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
        <h2 className="font-display font-normal text-[30px] sm:text-5xl leading-[1.05] max-w-[18ch] mb-12">FROM DIAGNOSIS TO EXECUTION.</h2>
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

      {/* VALUE */}
      <section id="value" className="max-w-[1180px] mx-auto px-5 sm:px-8 py-16 sm:py-24 border-b border-line">
        <div className="font-mono text-[13px] tracking-[0.16em] text-amber uppercase mb-4">The Value</div>
        <h2 className="font-display font-normal text-[30px] sm:text-5xl leading-[1.05] max-w-[20ch] mb-12">PAY FOR OUTCOMES. NOT ACCESS.</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {valueProofs.map((v) => (
            <div key={v.label} className="bg-panel border border-ink/20 p-7 sm:p-9 rounded-sm">
              <div className="font-display text-[36px] sm:text-[48px] text-rust leading-none mb-3">{v.stat}</div>
              <div className="font-mono text-[13px] text-muted uppercase tracking-wide">{v.label}</div>
            </div>
          ))}
        </div>
        <div className="max-w-[680px]">
          <p className="text-[17px] sm:text-xl leading-relaxed text-ink mb-5">
            Operational Intelligence is <strong className="text-amber">$3,000 per month</strong>. The target return is <strong className="text-amber">10X — $30,000 to $90,000 in first-year value</strong> through recovered profit, reduced waste, new revenue, and owner time freed.
          </p>
          <p className="text-base leading-relaxed text-muted mb-8">
            We don't take engagements where the math can't work. If your business doesn't have the scale or margin to support a 10X return, we'll tell you straight on the discovery call.
          </p>
          <a href="#contact" className="inline-block bg-rust hover:bg-rustLight text-[#fbf6ef] font-semibold text-[17px] px-8 py-4 rounded-sm transition-colors">
            Book a Discovery Call →
          </a>
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
            &quot;I&apos;ve spent 20+ years building and operating businesses in construction and operations. I started on
            the tools in demolition, moved into corporate operations during the recession, then came back to help scale
            and eventually exit a family construction business. Operational Intelligence is what I built for owners who
            are done running hard and want to start moving.&quot;
          </blockquote>
          <div className="font-mono text-sm text-muted">— Craig Nowotny, Founder</div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 text-sm">
            <div>
              <div className="font-mono text-amber tracking-[0.16em] uppercase text-xs mb-1">Field</div>
              <div className="text-ink">Started in demolition, spent 20+ years on job sites and in the office.</div>
            </div>
            <div>
              <div className="font-mono text-amber tracking-[0.16em] uppercase text-xs mb-1">Exit</div>
              <div className="text-ink">Helped scale and exit a family construction business in 2021.</div>
            </div>
            <div>
              <div className="font-mono text-amber tracking-[0.16em] uppercase text-xs mb-1">Now</div>
              <div className="text-ink">Runs Operational Intelligence for owner-led trades across the Southeast.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-[760px] mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="font-mono text-[13px] tracking-[0.16em] text-amber uppercase mb-4">Contact</div>
        <h2 className="font-display font-normal text-[30px] sm:text-5xl leading-[1.05] mb-4">LET&apos;S LOOK AT YOUR NUMBERS.</h2>
        <p className="text-base text-muted leading-relaxed max-w-[52ch] mb-10">
          20 minutes, no pitch deck. Tell us what&apos;s going on and we&apos;ll tell you straight whether Operational Intelligence is the right fit.
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
