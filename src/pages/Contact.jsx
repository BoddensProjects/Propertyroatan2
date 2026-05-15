import { useMemo, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { allProperties } from '../data/propertiesData';

const inquiryTypes = [
  'General Inquiry',
  'Schedule a Showing',
  'Ask About a Property',
  'Selling a Property',
  'Investment Question',
];

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const propertyOptions = useMemo(() => {
    return [...allProperties]
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((property) => ({
        id: property.id,
        label: `${property.title} (${property.mls})`,
      }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    setSending(true);
    setStatusMessage('');

    const timeField = formRef.current.querySelector('input[name="time"]');
    if (timeField) {
      timeField.value = new Date().toLocaleString();
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatusMessage('Message sent successfully.');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatusMessage('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f7fafc_0%,#edf5f7_44%,#f6f3ee_100%)] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="mb-12 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-12">
          <div className="flex flex-col justify-between rounded-[2rem] border border-white/60 bg-slate-900 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] sm:p-10">
            <div>
              <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/60">
                Contact Property Roatan
              </p>

              <h1 className="mb-5 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Let’s talk about your next move in Roatan.
              </h1>

              <p className="max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
                Whether you are buying, investing, scheduling a showing, or just
                starting to explore, this is the easiest way to reach out with clarity.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/50">
                  Email
                </p>
                <p className="text-sm text-white/85 sm:text-base">gavy@propertyroatan.com</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/50">
                  Phone
                </p>
                <p className="text-sm text-white/85 sm:text-base">+504 3237-7727</p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:col-span-2 lg:col-span-1">
                <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/50">
                  Best For
                </p>
                <p className="text-sm leading-relaxed text-white/85 sm:text-base">
                  Showings, property questions, investment conversations, and guidance for buyers coming to Roatan from abroad.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white/72 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="time" />

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                    placeholder="+504 ..."
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiry_type"
                    defaultValue="General Inquiry"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                  >
                    {inquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Property of Interest
                </label>
                <select
                  name="property_interest"
                  defaultValue=""
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                >
                  <option value="">No specific property selected</option>
                  {propertyOptions.map((property) => (
                    <option key={property.id} value={property.label}>
                      {property.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="7"
                  required
                  className="w-full rounded-[1.5rem] border border-slate-200 bg-white px-4 py-4 text-sm leading-relaxed text-slate-800 outline-none transition focus:border-slate-400"
                  placeholder="Tell us what you're looking for, what area you like, or which property caught your eye."
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 disabled:opacity-70"
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </button>

                {statusMessage && (
                  <p className="text-sm text-slate-600">{statusMessage}</p>
                )}
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
