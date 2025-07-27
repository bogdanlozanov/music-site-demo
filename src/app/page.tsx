'use client';

import CategoryGrid from '@/components/CategoryGrid';
import Header from '../components/Header';
import FeaturesStrip from '@/components/FeaturesStrip';
import HeroCarousel from '@/components/HeroCarousel';
import ProductSlider from '@/components/ProductSlider';
import { products } from '@/constants/mockData';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <FeaturesStrip />
        <CategoryGrid />
        <ProductSlider
          title="Product Highlights"
          products={products}
        />
      </main>
    </>
  );
}
