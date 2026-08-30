import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';

const options = [
  'Access exclusive listings',
  'Receive personalized recommendations',
  'Schedule a private consultation',
];

export default function LeadMagnet() {
  return (
    <section className="bg-[#f7f4ef] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="grid gap-8 rounded-[2rem] bg-slate-900 p-6 text-white shadow-[0_26px_90px_rgba(2,6,23,0.22)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div>
              <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/55 sm:text-xs">
                Begin Your Search With Confidence
              </p>

              <h2 className="mb-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
                Access the right Roatan opportunities before the market feels crowded.
              </h2>

              <p className="max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                Access exclusive listings, receive personalized recommendations,
                or schedule a private consultation to discuss your goals in Roatan.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-6 border border-white/10 bg-white/5 p-5 sm:p-6">
              <div className="grid gap-3">
                {options.map((option) => (
                  <div
                    key={option}
                    className="flex items-center justify-between border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80"
                  >
                    <span>{option}</span>
                    <span className="text-white/45">/</span>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <a
                  href="https://wa.me/50432377727?text=Hi%20Gavy%2C%20I%27d%20like%20to%20begin%20my%20Roatan%20property%20search."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-white px-5 py-4 text-center text-[0.65rem] font-bold uppercase tracking-[0.16em] text-slate-900 transition hover:bg-slate-100"
                >
                  WhatsApp Me Now
                </a>

                <Link
                  to="/listings"
                  className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-5 py-4 text-center text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
                >
                  Explore Listings
                </Link>

                <Link
                  to="/contact?intent=buyer-brief"
                  className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-5 py-4 text-center text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white transition hover:bg-white/10"
                >
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
