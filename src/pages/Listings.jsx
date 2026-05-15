import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { allProperties } from '../data/propertiesData';

function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function formatNumber(value) {
  if (value === null || value === undefined || value === 0) return 'N/A';
  return new Intl.NumberFormat('en-US').format(value);
}

function getPropertyImages(property) {
  if (property.images?.length) return property.images;
  if (property.image) return [property.image];
  return [];
}

const CONTACT_EMAIL = 'info@propertyroatan.com';

function buildInquiryMailto(property, formType, formData) {
  const subject =
    formType === 'showing'
      ? `Showing Request - ${property.title} (MLS ${property.mls})`
      : `Question About Property - ${property.title} (MLS ${property.mls})`;

  const intro =
    formType === 'showing'
      ? 'I would like to schedule a showing for this property.'
      : 'I have a question about this property.';

  const messageLabel =
    formType === 'showing' ? 'Preferred dates/times' : 'Question';

  const body = `Hello Gavy,

${intro}

Property: ${property.title}
MLS: ${property.mls}
Area: ${property.area}
Address: ${property.address}
Price: ${formatPrice(property.price)}

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}

${messageLabel}:
${formData.message}

Thank you.`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function PropertyCard({ property, onViewDetails }) {
  const images = getPropertyImages(property);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [property.id]);

  useEffect(() => {
    if (images.length <= 1) return undefined;

    const interval = window.setInterval(() => {
      setImageIndex((current) => (current + 1) % images.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [images]);

  const goPrev = (event) => {
    event.stopPropagation();
    setImageIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goNext = (event) => {
    event.stopPropagation();
    setImageIndex((current) => (current + 1) % images.length);
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/50 bg-white/65 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition duration-500 hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden sm:h-60">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[imageIndex] || property.image}
            src={images[imageIndex] || property.image}
            alt={property.title}
            initial={{ opacity: 0.4, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0.3, scale: 1.01 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,23,42,0.62),transparent_48%)]" />

        <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-slate-700">
          {property.status}
        </div>

        {property.waterfront && (
          <div className="absolute right-4 top-4 rounded-full bg-sky-500/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white">
            Waterfront
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-sm backdrop-blur-xl transition hover:bg-white"
              aria-label="Previous property image"
            >
              <span className="text-lg leading-none">‹</span>
            </button>

            <button
              type="button"
              onClick={goNext}
              className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-sm backdrop-blur-xl transition hover:bg-white"
              aria-label="Next property image"
            >
              <span className="text-lg leading-none">›</span>
            </button>

            <div className="absolute bottom-20 right-4 rounded-full bg-slate-950/45 px-3 py-1 text-[0.65rem] font-bold text-white backdrop-blur-xl">
              {imageIndex + 1} / {images.length}
            </div>
          </>
        )}

        <div className="absolute bottom-4 left-4 right-4">
          <p className="mb-1 text-[0.72rem] uppercase tracking-[0.16em] text-white/80">
            MLS {property.mls}
          </p>
          <h2 className="line-clamp-1 font-serif text-xl text-white sm:text-2xl">
            {property.title}
          </h2>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-2 text-2xl font-semibold text-slate-900">
          {formatPrice(property.price)}
        </p>

        <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-slate-600">
          {property.address}
        </p>

        <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-slate-500">
          {property.description}
        </p>

        <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl bg-slate-50/90 p-3 text-xs text-slate-700">
          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-slate-400">
              Type
            </p>
            <p>{property.propertyType}</p>
          </div>

          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-slate-400">
              Area
            </p>
            <p>{property.area}</p>
          </div>

          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-slate-400">
              Lot Acres
            </p>
            <p>{property.lotAcres ?? 'N/A'}</p>
          </div>

          <div>
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-slate-400">
              Sq Ft
            </p>
            <p>{formatNumber(property.sqft)}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onViewDetails(property)}
          className="mt-auto w-full rounded-full bg-slate-900 px-5 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-slate-800"
        >
          View Details
        </button>
      </div>
    </article>
  );
}

export default function Listings() {
  const [search, setSearch] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [area, setArea] = useState('all');
  const [waterfrontOnly, setWaterfrontOnly] = useState(false);
  const [maxPrice, setMaxPrice] = useState(2000000);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [inquiryType, setInquiryType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const propertyTypes = useMemo(() => {
    return ['all', ...new Set(allProperties.map((item) => item.propertyType))];
  }, []);

  const areas = useMemo(() => {
    return ['all', ...new Set(allProperties.map((item) => item.area))];
  }, []);

  const filteredProperties = useMemo(() => {
    return allProperties.filter((property) => {
      const matchesSearch =
        search.trim() === '' ||
        property.title.toLowerCase().includes(search.toLowerCase()) ||
        property.address.toLowerCase().includes(search.toLowerCase()) ||
        property.mls.toLowerCase().includes(search.toLowerCase());

      const matchesType =
        propertyType === 'all' || property.propertyType === propertyType;

      const matchesArea = area === 'all' || property.area === area;

      const matchesWaterfront = !waterfrontOnly || property.waterfront;

      const matchesPrice =
        maxPrice >= 2000000 || property.price <= maxPrice;

      return (
        matchesSearch &&
        matchesType &&
        matchesArea &&
        matchesWaterfront &&
        matchesPrice
      );
    });
  }, [search, propertyType, area, waterfrontOnly, maxPrice]);

  const galleryImages = selectedProperty ? getPropertyImages(selectedProperty) : [];

  useEffect(() => {
    if (!selectedProperty && !inquiryType) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        if (inquiryType) {
          setInquiryType(null);
        } else {
          setSelectedProperty(null);
        }
      }

      if (selectedProperty && !inquiryType && galleryImages.length > 1) {
        if (event.key === 'ArrowRight') {
          setActiveGalleryIndex((current) => (current + 1) % galleryImages.length);
        }

        if (event.key === 'ArrowLeft') {
          setActiveGalleryIndex(
            (current) => (current - 1 + galleryImages.length) % galleryImages.length
          );
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProperty, inquiryType, galleryImages.length]);

  const openProperty = (property) => {
    setSelectedProperty(property);
    setActiveGalleryIndex(0);
    setInquiryType(null);
  };

  const openInquiryForm = (type) => {
    setInquiryType(type);
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: type === 'showing' ? 'My preferred dates/times are:' : '',
    });
  };

  const closeInquiryForm = () => {
    setInquiryType(null);
  };

  const handleInquirySubmit = (event) => {
    event.preventDefault();

    if (!selectedProperty) return;

    const mailto = buildInquiryMailto(selectedProperty, inquiryType, formData);
    window.location.href = mailto;
  };

  const goToPrevGalleryImage = () => {
    setActiveGalleryIndex(
      (current) => (current - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const goToNextGalleryImage = () => {
    setActiveGalleryIndex((current) => (current + 1) % galleryImages.length);
  };

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#edf4f7_50%,#f8f7f4_100%)] px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-14">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Roatan Listings
          </p>
          <h1 className="mb-5 font-serif text-4xl text-slate-900 sm:text-5xl md:text-6xl">
            Explore Available Properties
          </h1>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            Browse current listings by area, property type, price, and waterfront access.
          </p>
        </div>

        <section className="mb-10 rounded-[1.75rem] border border-white/50 bg-white/55 p-5 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:mb-12 sm:rounded-[2rem] sm:p-6 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <div className="xl:col-span-2">
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Search
              </label>
              <input
                type="text"
                placeholder="Search by MLS, title, or location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Type
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
              >
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type === 'all' ? 'All Types' : type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Area
              </label>
              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
              >
                {areas.map((itemArea) => (
                  <option key={itemArea} value={itemArea}>
                    {itemArea === 'all' ? 'All Areas' : itemArea}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                Max Price
              </label>
              <div className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 transition focus-within:border-slate-400">
                <input
                  type="range"
                  min="100000"
                  max="2000000"
                  step="50000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-slate-900 outline-none"
                />
                <span className="whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-[0.7rem] font-bold text-white shadow-sm">
                  {maxPrice >= 2000000 ? 'No Max' : formatPrice(maxPrice)}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <label className="inline-flex items-center gap-3 text-sm text-slate-700">
              <input
                type="checkbox"
                checked={waterfrontOnly}
                onChange={(e) => setWaterfrontOnly(e.target.checked)}
                className="h-4 w-4 rounded border-slate-300"
              />
              Waterfront only
            </label>

            <p className="text-sm text-slate-500">
              {filteredProperties.length} property
              {filteredProperties.length === 1 ? '' : 'ies'} found
            </p>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onViewDetails={openProperty}
            />
          ))}
        </section>
      </div>

      <AnimatePresence>
        {selectedProperty && (
          <motion.div
            className="fixed inset-0 z-[100] bg-[#f7f8f5]/96 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 overflow-y-auto">
              <div className="min-h-screen px-4 py-5 sm:px-6 lg:px-8">
                <div className="sticky top-4 z-20 mb-4 flex justify-start">
                  <button
                    type="button"
                    onClick={() => {
                      setInquiryType(null);
                      setSelectedProperty(null);
                    }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/88 px-4 py-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-900 shadow-[0_10px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl transition hover:bg-white"
                  >
                    <span className="text-base leading-none">←</span>
                    Back
                  </button>
                </div>

                <motion.div
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 18, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="mx-auto max-w-7xl"
                >
                  <section className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/72 shadow-[0_24px_80px_rgba(15,23,42,0.1)] backdrop-blur-2xl">
                    <div className="p-4 sm:p-5 lg:p-6">
                      <div className="mb-4 flex flex-wrap gap-3">
                        <span className="rounded-full bg-slate-900 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white">
                          {selectedProperty.status}
                        </span>

                        {selectedProperty.waterfront && (
                          <span className="rounded-full bg-sky-500/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white">
                            Waterfront
                          </span>
                        )}

                        <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-700">
                          MLS {selectedProperty.mls}
                        </span>

                        {galleryImages.length > 1 && (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-slate-700">
                            {activeGalleryIndex + 1} / {galleryImages.length}
                          </span>
                        )}
                      </div>

                      <h2 className="max-w-4xl font-serif text-3xl text-slate-900 sm:text-4xl lg:text-5xl">
                        {selectedProperty.title}
                      </h2>

                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base lg:text-lg">
                        {selectedProperty.address}
                      </p>

                      <div className="mt-6 rounded-[1.5rem] bg-slate-950 p-3 sm:p-4">
                        <div className="relative flex h-[34vh] min-h-[18rem] items-center justify-center overflow-hidden rounded-[1.25rem] bg-slate-950 sm:h-[42vh] lg:h-[50vh]">
                          <AnimatePresence mode="wait">
                            <motion.img
                              key={galleryImages[activeGalleryIndex]}
                              src={galleryImages[activeGalleryIndex]}
                              alt={selectedProperty.title}
                              initial={{ opacity: 0.4, scale: 1.02 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0.2, scale: 1.01 }}
                              transition={{ duration: 0.35, ease: 'easeOut' }}
                              className="max-h-full max-w-full object-contain"
                            />
                          </AnimatePresence>

                          {galleryImages.length > 1 && (
                            <>
                              <button
                                type="button"
                                onClick={goToPrevGalleryImage}
                                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/82 text-slate-900 shadow-sm backdrop-blur-xl transition hover:bg-white sm:left-4"
                                aria-label="Previous image"
                              >
                                <span className="text-lg leading-none">‹</span>
                              </button>

                              <button
                                type="button"
                                onClick={goToNextGalleryImage}
                                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/82 text-slate-900 shadow-sm backdrop-blur-xl transition hover:bg-white sm:right-4"
                                aria-label="Next image"
                              >
                                <span className="text-lg leading-none">›</span>
                              </button>
                            </>
                          )}
                        </div>

                        {galleryImages.length > 1 && (
                          <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                            {galleryImages.map((image, index) => (
                              <button
                                key={`${image}-${index}`}
                                type="button"
                                onClick={() => setActiveGalleryIndex(index)}
                                className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-xl border transition sm:h-20 sm:w-28 ${
                                  index === activeGalleryIndex
                                    ? 'border-white shadow-sm'
                                    : 'border-white/15'
                                }`}
                              >
                                <img
                                  src={image}
                                  alt={`${selectedProperty.title} ${index + 1}`}
                                  className="h-full w-full object-cover"
                                />
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </section>

                  <section className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                    <div>
                      <div className="mb-6 rounded-[1.75rem] border border-white/60 bg-white/72 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                          Overview
                        </p>
                        <p className="mb-5 text-3xl font-semibold text-slate-900 sm:text-4xl">
                          {formatPrice(selectedProperty.price)}
                        </p>
                        <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                          {selectedProperty.description}
                        </p>
                      </div>

                      <div className="rounded-[1.75rem] border border-white/60 bg-white/72 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                          Property Details
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="rounded-2xl bg-slate-50/80 p-4">
                            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                              Property Type
                            </p>
                            <p className="mt-1 text-slate-800">{selectedProperty.propertyType}</p>
                          </div>

                          <div className="rounded-2xl bg-slate-50/80 p-4">
                            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                              Area
                            </p>
                            <p className="mt-1 text-slate-800">{selectedProperty.area}</p>
                          </div>

                          <div className="rounded-2xl bg-slate-50/80 p-4">
                            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                              Lot Acres
                            </p>
                            <p className="mt-1 text-slate-800">{selectedProperty.lotAcres ?? 'N/A'}</p>
                          </div>

                          <div className="rounded-2xl bg-slate-50/80 p-4">
                            <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                              Total Sq Ft
                            </p>
                            <p className="mt-1 text-slate-800">{formatNumber(selectedProperty.sqft)}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="rounded-[1.75rem] border border-white/60 bg-slate-900 p-6 text-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] sm:p-8">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                          Take the Next Step
                        </p>

                        <h3 className="mb-5 font-serif text-3xl sm:text-4xl">
                          Interested in this property?
                        </h3>

                        <p className="mb-5 text-sm leading-relaxed text-white/80 sm:text-base">
                          Open a quick form inside the site, add your details, and then send the prefilled draft directly through Outlook or your default mail app.
                        </p>

                        <div className="mt-8 flex flex-col gap-3">
                          <button
                            type="button"
                            onClick={() => openInquiryForm('showing')}
                            className="rounded-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-900 transition hover:bg-slate-100"
                          >
                            Schedule a Showing
                          </button>

                          <button
                            type="button"
                            onClick={() => openInquiryForm('question')}
                            className="rounded-full border border-white/30 bg-white/10 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur-xl transition hover:bg-white/15"
                          >
                            Ask About This Property
                          </button>
                        </div>
                      </div>

                      <div className="mt-6 rounded-[1.75rem] border border-white/60 bg-white/72 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8">
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                          At a Glance
                        </p>

                        <div className="space-y-4">
                          <div className="flex items-center justify-between rounded-2xl bg-slate-50/80 px-4 py-4">
                            <span className="text-sm text-slate-500">Waterfront</span>
                            <span className="font-semibold text-slate-900">
                              {selectedProperty.waterfront ? 'Yes' : 'No'}
                            </span>
                          </div>

                          <div className="flex items-center justify-between rounded-2xl bg-slate-50/80 px-4 py-4">
                            <span className="text-sm text-slate-500">MLS Number</span>
                            <span className="font-semibold text-slate-900">
                              {selectedProperty.mls}
                            </span>
                          </div>

                          <div className="flex items-center justify-between rounded-2xl bg-slate-50/80 px-4 py-4">
                            <span className="text-sm text-slate-500">Status</span>
                            <span className="font-semibold capitalize text-slate-900">
                              {selectedProperty.status}
                            </span>
                          </div>

                          <div className="flex items-center justify-between rounded-2xl bg-slate-50/80 px-4 py-4">
                            <span className="text-sm text-slate-500">Location</span>
                            <span className="font-semibold text-right text-slate-900">
                              {selectedProperty.area}
                            </span>
                          </div>

                          <div className="flex items-center justify-between rounded-2xl bg-slate-50/80 px-4 py-4">
                            <span className="text-sm text-slate-500">Gallery</span>
                            <span className="font-semibold text-slate-900">
                              {galleryImages.length} photos
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedProperty && inquiryType && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-end justify-center bg-slate-950/45 p-3 sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeInquiryForm}
          >
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              className="w-full max-w-2xl rounded-[2rem] border border-white/60 bg-white/88 p-6 shadow-[0_24px_90px_rgba(15,23,42,0.18)] backdrop-blur-2xl sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-500">
                    {inquiryType === 'showing' ? 'Schedule a Showing' : 'Ask About This Property'}
                  </p>
                  <h3 className="font-serif text-2xl text-slate-900 sm:text-3xl">
                    {selectedProperty.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    MLS {selectedProperty.mls} • {selectedProperty.area}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={closeInquiryForm}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:text-slate-900"
                  aria-label="Close inquiry form"
                >
                  <span className="text-lg leading-none">×</span>
                </button>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData((current) => ({ ...current, name: e.target.value }))
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData((current) => ({ ...current, phone: e.target.value }))
                      }
                      className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                      placeholder="+504 ..."
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((current) => ({ ...current, email: e.target.value }))
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-400"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                    {inquiryType === 'showing' ? 'Preferred Dates / Times' : 'Your Message'}
                  </label>
                  <textarea
                    rows="5"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((current) => ({ ...current, message: e.target.value }))
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-relaxed text-slate-800 outline-none transition focus:border-slate-400"
                    placeholder={
                      inquiryType === 'showing'
                        ? 'Tell Gavy when you would like to see this property.'
                        : 'Write your question about this property.'
                    }
                  />
                </div>

                <div className="rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-relaxed text-slate-600">
                  This will open a prefilled email draft with the property details already included.
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={closeInquiryForm}
                    className="rounded-full border border-slate-200 bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-700 transition hover:bg-slate-50"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="rounded-full bg-slate-900 px-6 py-4 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-slate-800"
                  >
                    Open Email Draft
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
