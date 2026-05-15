import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Listings', to: '/listings' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const navRef = useRef(null);
  const linkRefs = useRef({});
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const isHomePage = location.pathname === '/';
  const isHeroTop = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    const updatePill = () => {
      const activeLink = linkRefs.current[location.pathname];
      const nav = navRef.current;

      if (!activeLink || !nav) return;

      const navRect = nav.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();

      setPillStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    };

    updatePill();
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [location.pathname]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div
        className={`w-full rounded-b-[1.75rem] border-b transition-all duration-500 sm:rounded-b-[2rem] ${
          isHeroTop
            ? 'border-white/35 bg-white/18 shadow-none backdrop-blur-xl'
            : 'border-white/70 bg-white/88 shadow-[0_16px_50px_rgba(15,23,42,0.12)] backdrop-blur-2xl'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <NavLink
            to="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Property Roatan home"
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border transition-all duration-500 ${
                isHeroTop
                  ? 'border-white/60 bg-white/28 backdrop-blur-xl'
                  : 'border-slate-200 bg-white shadow-sm'
              }`}
            >
              <img
                src={logo}
                alt="Property Roatan"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="min-w-0">
              <p
                className={`truncate font-serif text-xl tracking-wide transition-colors duration-500 sm:text-2xl ${
                  isHeroTop ? 'text-white drop-shadow-sm' : 'text-slate-900'
                }`}
              >
                Property Roatan
              </p>
              <p
                className={`hidden text-[0.62rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-500 sm:block ${
                  isHeroTop ? 'text-white/80' : 'text-slate-500'
                }`}
              >
                Luxury Real Estate
              </p>
            </div>
          </NavLink>

          <nav
            ref={navRef}
            className={`relative hidden items-center rounded-full border p-1 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-500 lg:flex ${
              isHeroTop
                ? 'border-white/45 bg-white/18 backdrop-blur-xl'
                : 'border-slate-200 bg-slate-100/80'
            }`}
            aria-label="Main navigation"
          >
            <span
              className={`absolute bottom-1 top-1 rounded-full transition-all duration-500 ease-out ${
                isHeroTop
                  ? 'bg-white shadow-[0_8px_24px_rgba(15,23,42,0.16)]'
                  : 'bg-white shadow-[0_8px_24px_rgba(15,23,42,0.12)]'
              }`}
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
            />

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                ref={(node) => {
                  linkRefs.current[item.to] = node;
                }}
                className={({ isActive }) =>
                  `relative z-10 rounded-full px-5 py-3 transition-colors duration-300 ${
                    isActive
                      ? 'text-slate-900'
                      : isHeroTop
                        ? 'text-white/88 hover:text-white'
                        : 'text-slate-500 hover:text-slate-900'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <NavLink
            to="/contact"
            className={`hidden rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-all duration-500 xl:inline-flex ${
              isHeroTop
                ? 'border border-white/55 bg-white/18 text-white backdrop-blur-xl hover:bg-white/28'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            Talk to Gavy
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 lg:hidden ${
              isHeroTop
                ? 'border-white/50 bg-white/20 text-white backdrop-blur-xl'
                : 'border-slate-200 bg-white/85 text-slate-900 shadow-sm'
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-px w-5 bg-current transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-px w-5 bg-current transition-transform duration-300 ${
                  isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>

        <div
          className={`grid overflow-hidden px-4 transition-all duration-500 ease-out sm:px-6 lg:hidden ${
            isMenuOpen ? 'grid-rows-[1fr] pb-4' : 'grid-rows-[0fr] pb-0'
          }`}
        >
          <div className="min-h-0">
            <nav
              className={`rounded-[1.35rem] border p-2 transition-all duration-500 ${
                isHeroTop
                  ? 'border-white/45 bg-white/22 backdrop-blur-2xl'
                  : 'border-slate-200 bg-white/92 shadow-[0_12px_34px_rgba(15,23,42,0.1)] backdrop-blur-2xl'
              }`}
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center justify-between rounded-2xl px-4 py-4 text-sm font-bold uppercase tracking-[0.18em] transition-all ${
                      isActive
                        ? 'bg-slate-900 text-white shadow-sm'
                        : isHeroTop
                          ? 'text-white/92 hover:bg-white/15 hover:text-white'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  {item.label}
                  <span className="text-base leading-none">/</span>
                </NavLink>
              ))}

              <NavLink
                to="/contact"
                className="mt-2 flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
              >
                Talk to Gavy
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
