import Hero from '../components/Hero';
import Agents from '../components/Agents';
import ExperienceStats from '../components/ExperienceStats';
import FeaturedListings from '../components/FeaturedListings';
import WhatsAppBubble from '../components/WhatsAppBubble';


export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedListings />
      <Agents />
      <ExperienceStats />
      <WhatsAppBubble />
    </main>
  );
}
