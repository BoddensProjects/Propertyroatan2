import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import bgPR1 from '../assets/bgPR1.jpg';
import bgPR2 from '../assets/bgPR2.jpg';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const mediaItems = [
  { type: 'video', src: video1 },
  { type: 'image', src: bgPR1 },
  { type: 'video', src: video2 },
  { type: 'image', src: bgPR2 },
];

const SLIDE_DURATION = 4000;

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    mediaItems.forEach((item) => {
      if (item.type === 'image') {
        const img = new Image();
        img.src = item.src;
      }
    });
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % mediaItems.length);
    }, SLIDE_DURATION);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center">
      <div className="absolute inset-0">
        {mediaItems.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={`${item.type}-${index}`}
              className={`absolute inset-0 transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {item.type === 'video' ? (
                <video
                  className="h-full w-full object-cover"
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              ) : (
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={item.src}
                    alt=""
                    className={`hero-image-layer h-full w-full object-cover ${
                      isActive ? 'hero-kenburns-active' : 'hero-kenburns-idle'
                    }`}
                    draggable="false"
                  />
                </div>
              )}
            </div>
          );
        })}

        <div className="absolute inset-0 bg-slate-950/54" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.16),rgba(2,6,23,0.28),rgba(2,6,23,0.82))]" />
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-6xl px-6">
        <p className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-white/75 sm:text-xs">
          Luxury guidance. Local insight. Real results.
        </p>

        <h1 className="mx-auto mb-6 max-w-5xl font-serif text-5xl leading-[0.98] tracking-wide text-white drop-shadow-lg md:text-7xl lg:text-8xl">
          Property Roatan
        </h1>

        <p className="mx-auto mb-10 max-w-3xl text-lg font-light leading-relaxed tracking-wide text-gray-100 drop-shadow-md md:text-xl">
          Roatan real estate guidance for curated homes for sale, land for sale,
          waterfront estates, condos, villas, and income-minded investment
          properties across the Bay Islands.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/listings"
            className="bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-gray-900 shadow-lg transition-colors hover:bg-gray-200"
          >
            View Exclusive Listings
          </Link>

          <a
            href="https://wa.me/50432377727?text=Hi%20Gavy%2C%20I%27d%20like%20to%20request%20a%20private%20Roatan%20real%20estate%20consultation."
            target="_blank"
            rel="noreferrer"
            className="border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            Request Private Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
