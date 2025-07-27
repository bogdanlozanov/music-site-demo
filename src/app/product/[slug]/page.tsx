'use client';

import { notFound } from 'next/navigation';
import { products } from '@/constants/mockData';
import Image from 'next/image';
import styled from 'styled-components';
import ProductSlider from '@/components/ProductSlider';
import { use } from 'react';
import BuyButton from '@/components/BuyButton';
import ProductReviews from '@/components/ProductReviews';

type Props = {
  params: Promise<{ slug: string }>;
};

const Container = styled.main`
  max-width: 1200px;
  margin: 80px auto;
  padding: 24px 16px;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 10px;
  img {
    width: 100%;
    max-width: 500px;
    object-fit: contain;
    border-radius: 10px;
  }
`;

const Info = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Rating = styled.div`
  color: #888;
`;

const Section = styled.section`
  margin-top: 48px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 12px;
  }

  ul, p {
    color: #333;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    line-height: 1.8;
  }
`;

export default function ProductPage({ params }: Props) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);

  if (!product) return notFound();

  return (
    <Container>
      <TopRow>
        <ImageWrapper>
          <Image
            src={'/products/image.png'}
            alt={product.name}
            width={500}
            height={500}
          />
        </ImageWrapper>

        <Info>
          <h1>{product.name}</h1>
          <Rating>
            {'★'.repeat(product.rating || 0)} ({product.reviews} reviews)
          </Rating>
          <Price>${product.price}</Price>
          <BuyButton product={product}/>
          <p>
            Experience the next generation of sound with {product.name}. Designed for professionals and enthusiasts alike, it combines modern aesthetics with high-end audio fidelity and versatility.
          </p>
        </Info>
      </TopRow>

      <Section>
        <h2>Product Highlights</h2>
        <ul>
          <li>Studio-quality sound engine with real-time performance response</li>
          <li>88 weighted keys with adjustable velocity sensitivity</li>
          <li>Wireless connectivity + onboard recording</li>
          <li>Multi-language touchscreen interface</li>
        </ul>
      </Section>

      <Section>
        <h2>Technical Specifications</h2>
        <ul>
          <li>Dimensions: 1320 × 380 × 160 mm</li>
          <li>Weight: 12.5 kg</li>
          <li>USB, MIDI, Line-In, and Headphone ports</li>
          <li>Compatible with Mac, Windows, and iOS</li>
          <li>Power supply: 100–240V AC, 50/60Hz</li>
        </ul>
      </Section>

      <Section>
        <h2>Media & Demos</h2>
        <p>
          Watch product walkthroughs, tutorials, and unboxings:
        </p>
        <ul>
          <li><a href="#">🎥 Yamaha Genos 2 – Sound Test</a></li>
          <li><a href="#">🎥 Feature Overview – Genos Series</a></li>
        </ul>
      </Section>

      <Section>
        <h2>FAQs</h2>
        <ul>
          <li>Does this product come with a stand?</li>
          <li>Can I connect it to my computer for recording?</li>
          <li>Is there a mobile app for this model?</li>
          <li>What’s the warranty period?</li>
        </ul>
      </Section>
      <ProductReviews />
      <ProductSlider
        title="Compare options"
        products={products}
      />
    </Container>
  );
}
