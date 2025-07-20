import CategoryGrid from '@/components/CategoryGrid';
import Header from '../components/Header';
import FeaturesStrip from '@/components/FeaturesStrip';
import HeroCarousel from '@/components/HeroCarousel';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <FeaturesStrip />
        <CategoryGrid />
      </main>
    </>
  );
}
