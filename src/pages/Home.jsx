import Hero from '../components/Hero';
import HomeSectionIntro from '../components/HomeSectionIntro';
import LuxuryIntro from '../components/LuxuryIntro';
import AuthorityProof from '../components/AuthorityProof';
import BuySellGateway from '../components/BuySellGateway';
import Agents from '../components/Agents';
import ExperienceStats from '../components/ExperienceStats';
import FeaturedListings from '../components/FeaturedListings';
import LeadMagnet from '../components/LeadMagnet';
import AdvisoryServices from '../components/AdvisoryServices';

const searchFocusAreas = [
  'Roatan homes for sale',
  'Roatan land for sale',
  'Roatan condos and villas',
  'Roatan beachfront property',
  'Roatan waterfront real estate',
  'Bay Islands investment property',
];

const roatanServiceAreas = [
  'West Bay',
  'West End',
  'Sandy Bay',
  'French Cay',
  'Pristine Bay',
  'First Bight',
  'Calabash Bight',
  'East Roatan',
];


export default function Home() {
  return (
    <main>
      <Hero />
      <LuxuryIntro />
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-500 sm:text-xs">
              Roatan Real Estate
            </p>
            <h2 className="font-serif text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Property Roatan helps you find the right island property.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            <p>
              If you are searching for Roatan real estate, Property Roatan gives
              you local guidance for homes, land, condos, villas, waterfront
              property, beachfront property, commercial opportunities, and
              investment-focused purchases across the Bay Islands of Honduras.
            </p>
            <p>
              Gavy Hernandez helps local and international buyers compare areas,
              understand practical due diligence, evaluate rental potential, and
              move from broad search results into a focused short list of Roatan
              properties that fit the goal.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {searchFocusAreas.map((item) => (
                <div
                  key={item}
                  className="border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-semibold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AuthorityProof />
      <HomeSectionIntro
        eyebrow="Choose Your Advisory Path"
        title="Start with buying or selling, then move with a clearer strategy."
        text="The goal is not just browsing. It is creating the right conversation around timing, property fit, pricing, and next steps."
      />
      <BuySellGateway />
      <HomeSectionIntro
        eyebrow="Featured Listings"
        title="Featured Properties"
        text="Hand-selected opportunities representing the best value, location, and lifestyle on the island."
      />
      <FeaturedListings />
      <HomeSectionIntro
        eyebrow="Market Perspective"
        title="Why Invest in Roatan"
        text="The island rewards buyers who understand coastal scarcity, tourism demand, access, rental potential, and long-term positioning."
      />
      <ExperienceStats />
      <section className="bg-slate-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-white/55">
              Areas We Serve
            </p>
            <h2 className="mb-5 font-serif text-4xl leading-tight sm:text-5xl">
              Local real estate guidance across Roatan and the Bay Islands.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Every area has a different rhythm, buyer profile, access story,
              and investment logic. Property Roatan helps you compare the island
              with context before you choose where to buy.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {roatanServiceAreas.map((area) => (
              <div
                key={area}
                className="border border-white/10 bg-white/5 px-5 py-5 text-sm text-white/82"
              >
                {area} real estate
              </div>
            ))}
          </div>
        </div>
      </section>
      <HomeSectionIntro
        eyebrow="Advisor Trust"
        title="Local Expertise. International Standards."
        text="Real estate in Roatan requires relationships, timing, and local intelligence, not just access to listings."
      />
      <Agents />
      <AdvisoryServices />
      <HomeSectionIntro
        eyebrow="Client Experience"
        title="A Relationship-Based Approach"
        text="Every client journey is handled with direct communication, transparency, and tailored guidance from first contact to closing."
      />
      <LeadMagnet />
    </main>
  );
}
