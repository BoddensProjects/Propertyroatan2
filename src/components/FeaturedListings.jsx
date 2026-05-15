import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from './FadeIn';
import { allProperties } from '../data/propertiesData';

function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatSqft(value) {
  if (!value || value === 0) return 'N/A';
  return new Intl.NumberFormat('en-US').format(value);
}

function getPropertyImages(property) {
  if (Array.isArray(property.images) && property.images.length > 0) {
    return property.images;
  }

  if (property.image) {
    return [property.image];
  }

  return [];
}

function FeaturedPropertyCard({ property }) {
  const images = getPropertyImages(property);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [property.id]);

  useEffect(() => {
    if (images.length <= 1) return undefined;

    const interval = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % images.length);
    }, 3800);

    return () => window.clearInterval(interval);
  }, [images]);

  const goPrev = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveImageIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goNext = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveImageIndex((current) => (current + 1) % images.length);
  };

  return (
    <article className="group w-[72vw] max-w-[18.75rem] shrink-0 snap-start sm:w-[56vw] sm:max-w-[19.5rem] md:w-[41vw] md:max-w-[20.5rem] lg:w-[30vw] lg:max-w-[21rem] xl:w-[24vw] xl:max-w-[21.5rem]">
      <div className="flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/60 bg-white/82 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 sm:rounded-[1.5rem] xl:rounded-[1.75rem]">
        <div className="relative h-40 overflow-hidden sm:h-44 md:h-44 lg:h-48 xl:h-52">
          <img
            src={images[activeImageIndex] || property.image}
            alt={property.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

          <div className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-slate-700 sm:left-4 sm:top-4 sm:px-3 sm:text-[0.62rem]">
            Active
          </div>

          {property.waterfront && (
            <div className="absolute right-3 top-3 rounded-full bg-sky-500/92 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-white sm:right-4 sm:top-4 sm:px-3 sm:text-[0.62rem]">
              Waterfront
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/82 text-slate-900 shadow-sm backdrop-blur-xl transition hover:bg-white sm:left-4 sm:h-9 sm:w-9"
                aria-label="Previous image"
              >
                <span className="text-lg leading-none">‹</span>
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/82 text-slate-900 shadow-sm backdrop-blur-xl transition hover:bg-white sm:right-4 sm:h-9 sm:w-9"
                aria-label="Next image"
              >
                <span className="text-lg leading-none">›</span>
              </button>

              <div className="absolute bottom-12 right-3 rounded-full bg-slate-950/45 px-3 py-1 text-[0.62rem] font-bold text-white backdrop-blur-xl sm:bottom-14 sm:right-4">
                {activeImageIndex + 1} / {images.length}
              </div>
            </>
          )}

          <div className="absolute bottom-4 left-4 right-4">
            <p className="mb-1 text-[0.68rem] uppercase tracking-[0.16em] text-white/80 sm:text-[0.72rem]">
              MLS {property.mls}
            </p>
            <h3 className="line-clamp-1 font-serif text-lg text-white sm:text-xl xl:text-2xl">
              {property.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
          <div className="mb-2 flex items-start justify-between gap-3">
            <p className="text-xl font-semibold text-slate-900 sm:text-2xl">
              {formatPrice(property.price)}
            </p>
            <span className="mt-1 whitespace-nowrap text-[0.58rem] uppercase tracking-[0.16em] text-slate-400 sm:text-[0.62rem]">
              {images.length} photos
            </span>
          </div>

          <p className="mb-2 line-clamp-2 text-xs leading-relaxed text-slate-500 sm:text-sm">
            {property.address}
          </p>

          <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-slate-600">
            {property.description}
          </p>

          <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl bg-slate-50/90 p-3 text-slate-700 sm:gap-3 sm:p-4">
            <div>
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-[0.62rem]">
                Type
              </p>
              <p className="text-xs sm:text-sm">{property.propertyType}</p>
            </div>

            <div>
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-[0.62rem]">
                Area
              </p>
              <p className="text-xs sm:text-sm">{property.area}</p>
            </div>

            <div>
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-[0.62rem]">
                Lot Acres
              </p>
              <p className="text-xs sm:text-sm">{property.lotAcres ?? 'N/A'}</p>
            </div>

            <div>
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.14em] text-slate-400 sm:text-[0.62rem]">
                Sq Ft
              </p>
              <p className="text-xs sm:text-sm">{formatSqft(property.sqft)}</p>
            </div>
          </div>

          <Link
            to={`/listings?mls=${property.mls}`}
            className="mt-auto inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-4 py-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800 sm:text-[0.68rem]"
          >
            View Listing
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedListings() {
  const carouselRef = useRef(null);

  const displayedProperties = useMemo(() => {
    return allProperties
      .filter((property) => property.status === 'active')
      .slice(0, 6);
  }, []);

  const scrollCarousel = (direction) => {
    if (!carouselRef.current || !carouselRef.current.firstElementChild) return;

    const cardWidth = carouselRef.current.firstElementChild.offsetWidth;
    const styles = window.getComputedStyle(carouselRef.current);
    const gap = parseFloat(styles.columnGap || styles.gap || '0');
    const scrollAmount = cardWidth + gap;

    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="listings"
      className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f6f9fb_100%)] px-4 py-16 sm:px-6 sm:py-20 lg:py-24"
    >
      <style>{`
        .hide-scroll::-webkit-scrollbar { display: none; }
        .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="mx-auto max-w-[92rem]">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-12 xl:gap-16">
          <div className="flex shrink-0 flex-col justify-center lg:w-[26%] xl:w-1/4">
            <FadeIn>
              <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
                <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
                  Featured Collection
                </p>

                <h2 className="mb-4 font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
                  In the
                  <br />
                  spotlight
                </h2>

                <p className="mb-8 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Explore a curated selection of standout Roatan properties, from
                  ocean-view land to luxury beachfront homes and investment
                  opportunities.
                </p>

                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-center lg:flex-col lg:items-start lg:justify-start">
                  <Link
                    to="/listings"
                    className="group inline-flex items-center justify-center gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-900 transition-colors hover:text-slate-500 sm:text-xs lg:justify-start"
                  >
                    Show me more
                    <span className="h-px w-10 bg-slate-900 transition-all duration-300 group-hover:translate-x-2 group-hover:bg-slate-500 sm:w-12" />
                  </Link>

                  <div className="flex items-center justify-center gap-3 lg:justify-start">
                    <button
                      onClick={() => scrollCarousel('left')}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:border-slate-900 hover:text-slate-900 sm:h-11 sm:w-11"
                      aria-label="Scroll left"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>

                    <button
                      onClick={() => scrollCarousel('right')}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-colors hover:border-slate-900 hover:text-slate-900 sm:h-11 sm:w-11"
                      aria-label="Scroll right"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="min-w-0 overflow-hidden lg:w-[74%] xl:w-3/4">
            <FadeIn>
              <div className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-slate-900 sm:text-xs">
                    Active Listings
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Handpicked properties currently available in Roatan
                  </p>
                </div>

                <Link
                  to="/listings"
                  className="inline-flex text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-900 sm:text-xs"
                >
                  View all
                </Link>
              </div>

              <div
                ref={carouselRef}
                className="hide-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 sm:gap-5 lg:gap-6"
              >
                {displayedProperties.map((property) => (
                  <FeaturedPropertyCard key={property.id} property={property} />
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
