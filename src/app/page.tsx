import Hero from '@/components/Hero';
import StatsSimple from '@/components/StatsSimple';
import EventsSection from '@/components/EventsSection';
import MenuSection from '@/components/MenuSection';
import Testimonials from '@/components/Testimonials';
import Staff from '@/components/Staff';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main style={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      <Hero />
      <StatsSimple />
      <EventsSection />
      <MenuSection />
      <Staff />
      <Testimonials />
      <Footer />
    </main>
  );
}
