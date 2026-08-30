import FadeIn from './FadeIn';

export default function HomeSectionIntro({ eyebrow, title, text }) {
  return (
    <section className="bg-white px-4 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-20 lg:pb-12 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
              {eyebrow}
            </p>

            <h2 className="mb-4 font-serif text-4xl leading-tight text-slate-900 sm:text-5xl">
              {title}
            </h2>

            {text && (
              <p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                {text}
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
