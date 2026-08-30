import FadeIn from './FadeIn';

const services = [
  {
    title: 'Buyer Representation',
    text: 'Guided support for local and international clients comparing Roatan homes, condos, land, and coastal assets.',
  },
  {
    title: 'Investment Analysis',
    text: 'A practical look at location, access, rental appeal, ownership goals, and long-term island positioning.',
  },
  {
    title: 'Rental Strategy Guidance',
    text: 'Conversation around vacation rental fit, guest appeal, management needs, and lifestyle-use balance.',
  },
  {
    title: 'Private Property Access',
    text: 'Curated recommendations and off-market conversations when a client brief calls for discretion.',
  },
  {
    title: 'Seller Positioning',
    text: 'Premium property presentation, local market perspective, and buyer-focused messaging for Roatan owners.',
  },
];

export default function AdvisoryServices() {
  return (
    <section className="bg-[#f7f4ef] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-500">
              Advisory Services
            </p>
            <h2 className="font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
              Strategic guidance for buyers, investors, and sellers.
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-3 md:grid-cols-5">
          {services.map((service, index) => (
            <FadeIn key={service.title}>
              <div className="flex min-h-[16rem] flex-col justify-between border border-slate-200 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(15,23,42,0.1)]">
                <span className="font-serif text-4xl text-slate-200">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="mb-3 font-serif text-xl leading-tight text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {service.text}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
