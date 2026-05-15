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
    <section className="relative flex h-screen items-center justify-center overflow-hidden text-center">
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

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.18),rgba(0,0,0,0.5))]" />
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-4xl px-6">
        <h1 className="mb-6 font-serif text-5xl tracking-wide text-white drop-shadow-lg md:text-7xl">
          Find Your Paradise in Roatan
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg font-light tracking-wider text-gray-100 drop-shadow-md md:text-xl">
          Exclusive beachfront estates, luxury villas, and premier investment
          properties in the Bay Islands.
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/listings"
            className="bg-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-gray-900 shadow-lg transition-colors hover:bg-gray-200"
          >
            Explore Properties
          </Link>

          <Link
            to="/contact"
            className="border border-white px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-gray-900"
          >
            Speak to an Agent
          </Link>
        </div>
      </div>
    </section>
  );
}
