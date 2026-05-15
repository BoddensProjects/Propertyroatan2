import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Listings', to: '/listings' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7fafc_0%,#edf4f7_100%)]" />

      <div className="relative z-10 w-full rounded-t-[1.75rem] border-t border-white/70 bg-white/72 shadow-[0_-18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:rounded-t-[2rem]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:gap-14">
            <div className="max-w-lg">
              <Link to="/" className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
                  <img
                    src={logo}
                    alt="Property Roatan"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div>
                  <p className="font-serif text-2xl tracking-wide text-slate-900">
                    Property Roatan
                  </p>
                  <p className="mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-slate-500">
                    Roatan Real Estate
                  </p>
                </div>
              </Link>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                Personalized real estate guidance in Roatan for buyers, sellers,
                and investors looking for the right property and the right support.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-900">
                Navigation
              </h4>

              <nav className="grid grid-cols-2 gap-3 text-sm text-slate-600 sm:block sm:space-y-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="rounded-full border border-white/50 bg-white/45 px-4 py-3 text-center transition hover:bg-white hover:text-slate-900 sm:block sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-left"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-900">
                Contact
              </h4>

              <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                <a
                  href="mailto:Gavy@propertyroatan.com"
                  className="block transition hover:text-slate-900"
                >
                  Gavy@propertyroatan.com
                </a>

                <a
                  href="tel:+50432377727"
                  className="block transition hover:text-slate-900"
                >
                  +504 3237-7727
                </a>

                <p>Roatan, Bay Islands, Honduras</p>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.facebook.com/gavy.hernandez.728743/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/65 text-slate-600 transition hover:bg-white hover:text-slate-900"
                  aria-label="Facebook"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/propertyroatanrealestate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/65 text-slate-600 transition hover:bg-white hover:text-slate-900"
                  aria-label="Instagram"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/60 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {currentYear} Property Roatan. All rights reserved.</p>
            <p>Guided by Gavy Hernandez.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
