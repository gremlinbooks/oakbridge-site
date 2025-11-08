import React, { useState } from "react";
import { Menu, X, Mail, Linkedin, Twitter, ArrowRight, CheckCircle, Lock } from "lucide-react";
import logo from './assets/OakbridgeLabsLogo.png';


/** -------------------------
 *  MVP storage shim (localStorage)
 *  Replace with real API later
 * --------------------------*/
declare global {
  interface Window {
    storage: {
      set: (key: string, value: string) => Promise<void>;
      get: (key: string) => Promise<{ value: string | null }>;
      list: (prefix: string) => Promise<{ keys: string[] }>;
    };
  }
}
if (!window.storage) {
  window.storage = {
    set: async (key, value) => { localStorage.setItem(key, value); },
    get: async (key) => ({ value: localStorage.getItem(key) }),
    list: async (prefix) => {
      const keys = Object.keys(localStorage).filter(k => k.startsWith(prefix));
      return { keys };
    },
  };
}

/** -------------------------
 *  Your component (with 2 fixes):
 *  1) make the beta checkbox a boolean (checked={!!betaEmail})
 *  2) keep ADMIN_PASSWORD only for demo (frontend is public)
 * --------------------------*/
const OakbridgeHomepage: React.FC = () => {
  const [page, setPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [betaEmail, setBetaEmail] = useState("");
  const [betaSubmitted, setBetaSubmitted] = useState(false);
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Admin
  const [adminPassword, setAdminPassword] = useState("");
  const [adminUnlocked, setAdminUnlocked] = useState(false);
  const [submissions, setSubmissions] = useState<{ beta: any[]; contact: any[] }>({ beta: [], contact: [] });

  const ADMIN_PASSWORD = "oakbridge2024"; // DEMO ONLY. Use a backend in production.

  const handleBetaSubmit = async () => {
    if (betaEmail) {
      const timestamp = new Date().toISOString();
      const key = `beta:${timestamp}`;
      try {
        await window.storage.set(key, JSON.stringify({ email: betaEmail, timestamp }));
        setBetaSubmitted(true);
        setBetaEmail("");
        setTimeout(() => setBetaSubmitted(false), 5000);
      } catch (error) {
        console.error("Storage error:", error);
        alert("Error saving submission. Please try again.");
      }
    }
  };

  const handleContactSubmit = async () => {
    if (contactEmail && contactMessage) {
      const timestamp = new Date().toISOString();
      const key = `contact:${timestamp}`;
      try {
        await window.storage.set(key, JSON.stringify({ email: contactEmail, message: contactMessage, timestamp }));
        setContactSubmitted(true);
        setContactEmail("");
        setContactMessage("");
        setTimeout(() => setContactSubmitted(false), 5000);
      } catch (error) {
        console.error("Storage error:", error);
        alert("Error saving submission. Please try again.");
      }
    }
    // If user checked the beta box (we store email in betaEmail), also save a beta record
    if (betaEmail) {
      await handleBetaSubmit();
    }
  };

  const loadSubmissions = async () => {
    try {
      const betaKeys = await window.storage.list("beta:");
      const contactKeys = await window.storage.list("contact:");

      const betaData: any[] = [];
      const contactData: any[] = [];

      if (betaKeys?.keys) {
        for (const key of betaKeys.keys) {
          const result = await window.storage.get(key);
          if (result?.value) betaData.push(JSON.parse(result.value));
        }
      }
      if (contactKeys?.keys) {
        for (const key of contactKeys.keys) {
          const result = await window.storage.get(key);
          if (result?.value) contactData.push(JSON.parse(result.value));
        }
      }

      setSubmissions({
        beta: betaData.sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp)),
        contact: contactData.sort((a, b) => +new Date(b.timestamp) - +new Date(a.timestamp)),
      });
    } catch (e) {
      console.error("Error loading submissions:", e);
    }
  };

  const handleAdminLogin = () => {
    if (adminPassword === ADMIN_PASSWORD) {
      setAdminUnlocked(true);
      loadSubmissions();
    } else {
      alert("Incorrect password");
    }
  };

  if (page === "admin") {
    return (
      <div className="min-h-screen bg-stone-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-stone-900">Admin Dashboard</h1>
            <button onClick={() => setPage("home")} className="text-amber-700 hover:text-amber-800 font-semibold">
              ← Back to Site
            </button>
          </div>

          {!adminUnlocked ? (
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
              <Lock className="mx-auto mb-4 text-stone-400" size={48} />
              <h2 className="text-xl font-bold text-center mb-4">Enter Admin Password</h2>
              <input
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdminLogin()}
                placeholder="Password"
                className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-amber-700 focus:outline-none mb-4"
              />
              <button
                onClick={handleAdminLogin}
                className="w-full bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
              >
                Unlock
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-stone-900">Beta Signups ({submissions.beta.length})</h2>
                  <button onClick={loadSubmissions} className="text-sm text-amber-700 hover:text-amber-800">
                    Refresh
                  </button>
                </div>
                <div className="space-y-3">
                  {submissions.beta.length === 0 ? (
                    <p className="text-stone-500">No beta signups yet</p>
                  ) : (
                    submissions.beta.map((item, idx) => (
                      <div key={idx} className="border-b border-stone-200 pb-3">
                        <p className="font-semibold text-stone-900">{item.email}</p>
                        <p className="text-sm text-stone-500">{new Date(item.timestamp).toLocaleString()}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-stone-900">Contact Messages ({submissions.contact.length})</h2>
                  <button onClick={loadSubmissions} className="text-sm text-amber-700 hover:text-amber-800">
                    Refresh
                  </button>
                </div>
                <div className="space-y-4">
                  {submissions.contact.length === 0 ? (
                    <p className="text-stone-500">No contact messages yet</p>
                  ) : (
                    submissions.contact.map((item, idx) => (
                      <div key={idx} className="border-b border-stone-200 pb-4">
                        <p className="font-semibold text-stone-900">{item.email}</p>
                        <p className="text-stone-700 mt-2">{item.message}</p>
                        <p className="text-sm text-stone-500 mt-2">{new Date(item.timestamp).toLocaleString()}</p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center">
                <png viewBox="0 0 100 100" className="w-8 h-8">
                  <img src={logo} alt="Oakbridge Labs" className="h-10 w-auto" />
                </png>
              </div>
              <span className="text-xl font-serif text-stone-800">Oakbridge Labs</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-stone-700 hover:text-amber-700 transition">Services</a>
              <a href="#lineal" className="text-stone-700 hover:text-amber-700 transition">Lineal</a>
              <a href="#contact" className="text-stone-700 hover:text-amber-700 transition">Contact</a>
              <button onClick={() => setPage("admin")} className="text-xs text-stone-400 hover:text-stone-600">•</button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(v => !v)}>
              {/* icons controlled below with state */}
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Build Your Bridge to Better Operations</h1>
          <p className="text-lg text-stone-600 mb-6 max-w-2xl mx-auto">
            Custom software and strategic consulting for contractors and small businesses ready to stop fighting chaos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition inline-flex items-center justify-center">
              Let's Talk <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#lineal" className="bg-white text-amber-700 border-2 border-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">
              Try Lineal Beta
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-stone-900 mb-10">What We Build</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-stone-200 rounded-lg hover:border-amber-700 transition">
              <h3 className="text-lg font-bold text-stone-900 mb-2">Business Consulting</h3>
              <p className="text-stone-600 text-sm">Fractional COO/CFO services. Get C-suite expertise without the full-time cost.</p>
            </div>
            <div className="p-6 border-2 border-stone-200 rounded-lg hover:border-amber-700 transition">
              <h3 className="text-lg font-bold text-stone-900 mb-2">Custom Software</h3>
              <p className="text-stone-600 text-sm">Build exactly what you need. No bloat. Just tools that solve your problems.</p>
            </div>
            <div className="p-6 border-2 border-stone-200 rounded-lg hover:border-amber-700 transition">
              <h3 className="text-lg font-bold text-stone-900 mb-2">AI Integration</h3>
              <p className="text-stone-600 text-sm">Automate estimating, scheduling, and communications for field businesses.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lineal */}
      <section id="lineal" className="py-16 px-4 bg-stone-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-amber-700 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">BETA AVAILABLE</div>
            <h2 className="text-3xl font-bold text-stone-900 mb-3">Meet Lineal</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Operations software for contractors. Job tracking, scheduling, payments—all in one place.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-start space-x-2">
              <CheckCircle className="text-amber-700 flex-shrink-0 mt-0.5" size={18} />
              <span className="text-stone-700 text-sm">Job tracking that makes sense</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="text-amber-700 flex-shrink-0 mt-0.5" size={18} />
              <span className="text-stone-700 text-sm">Built-in invoicing</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle className="text-amber-700 flex-shrink-0 mt-0.5" size={18} />
              <span className="text-stone-700 text-sm">Mobile-first design</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-stone-900 mb-3">Get Started</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">Try Lineal beta, schedule consulting, or discuss custom software.</p>
          </div>

          <div className="bg-stone-50 p-8 rounded-lg max-w-2xl mx-auto">
            {contactSubmitted ? (
              <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center justify-center">
                <CheckCircle className="text-green-500 mr-2" size={24} />
                <span className="text-green-700 font-semibold">Thanks! We'll be in touch soon.</span>
              </div>
            ) : (
              <div className="space-y-4">
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-amber-700 focus:outline-none bg-white"
                />
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  rows={4}
                  placeholder="Tell us what you need... (consulting, custom software, or just trying Lineal)"
                  className="w-full px-4 py-3 border-2 border-stone-300 rounded-lg focus:border-amber-700 focus:outline-none bg-white"
                />
                <label className="flex items-center space-x-3 p-4 bg-amber-50 border-2 border-amber-200 rounded-lg cursor-pointer hover:border-amber-400 transition">
                  <input
                    type="checkbox"
                    checked={!!betaEmail}              
                    onChange={(e) => setBetaEmail(e.target.checked ? contactEmail : "")}
                    className="w-5 h-5 text-amber-700 rounded focus:ring-amber-500"
                  />
                  <span className="text-stone-700 font-medium">I'm interested in trying Lineal beta</span>
                </label>
                <button
                  onClick={() => handleContactSubmit()}
                  className="w-full bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-800 transition"
                >
                  Send Request
                </button>
                <p className="text-center text-stone-500 text-sm">
                  Or email directly:{" "}
                  <a href="mailto:info@oakbridgelabs.com" className="text-amber-700 hover:text-amber-800 font-semibold">
                    info@oakbridgelabs.com
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <span className="text-xl font-serif">Oakbridge Labs</span>
              <p className="text-stone-400 text-sm mt-1">Building bridges to better operations.</p>
            </div>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/oakbridge-labs" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-500 transition">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com/oakbridgelabs" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-amber-500 transition">
                <Twitter size={20} />
              </a>
              <a href="mailto:info@oakbridgelabs.com" className="text-stone-400 hover:text-amber-500 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-6 pt-6 text-center text-stone-400 text-xs">
            <p>&copy; {new Date().getFullYear()} Oakbridge Labs</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OakbridgeHomepage;
