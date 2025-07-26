'use client';

import CategoryGrid from '@/components/CategoryGrid';
import Header from '../components/Header';
import FeaturesStrip from '@/components/FeaturesStrip';
import HeroCarousel from '@/components/HeroCarousel';
import BuyButton from '@/components/BuyButton';
import ProductSlider from '@/components/ProductSlider';
import NewsletterSignup from '@/components/NewsletterSignup';

const products = [
  {
    image: '/products/image.png',
    title: 'Yamaha P-525 B',
    price: '$1,599',
    rating: 5,
    reviews: 13,
  },
  {
    image: '/products/image.png',
    title: 'Yamaha DM7',
    price: '$26,190',
    rating: 5,
    reviews: 7,
  },
  {
    image: '/products/image.png',
    title: 'ApeLight maxi V2 TB 6 grey',
    price: '$1,959',
    rating: 4,
    reviews: 16,
  },
  {
    image: '/products/image.png',
    title: 'Fender Tone Master Pro',
    price: '$1,499',
    rating: 5,
    reviews: 52,
  },
  {
    image: '/products/image.png',
    title: 'Yamaha P-525 B',
    price: '$1,599',
    rating: 5,
    reviews: 13,
  },
  {
    image: '/products/image.png',
    title: 'Yamaha DM7',
    price: '$26,190',
    rating: 5,
    reviews: 7,
  },
  {
    image: '/products/image.png',
    title: 'ApeLight maxi V2 TB 6 grey',
    price: '$1,959',
    rating: 4,
    reviews: 16,
  },
  {
    image: '/products/image.png',
    title: 'Fender Tone Master Pro',
    price: '$1,499',
    rating: 5,
    reviews: 52,
  },
  {
    image: '/products/image.png',
    title: 'Yamaha P-525 B',
    price: '$1,599',
    rating: 5,
    reviews: 13,
  },
  {
    image: '/products/image.png',
    title: 'Yamaha DM7',
    price: '$26,190',
    rating: 5,
    reviews: 7,
  },
  {
    image: '/products/image.png',
    title: 'ApeLight maxi V2 TB 6 grey',
    price: '$1,959',
    rating: 4,
    reviews: 16,
  },
  {
    image: '/products/image.png',
    title: 'Fender Tone Master Pro',
    price: '$1,499',
    rating: 5,
    reviews: 52,
  },
];

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
          tabs={['Trends', 'Top Sellers']}
          activeTab="Trends"
          onTabChange={(tab) => console.log('Tab changed:', tab)}
          products={products}
        />
        <NewsletterSignup />
        <BuyButton />
      </main>
    </>
  );
}
