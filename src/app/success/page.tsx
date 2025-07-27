'use client';

import { useSearchParams } from 'next/navigation';
import { products } from '@/constants/mockData';
import styled from 'styled-components';
import Image from 'next/image';
import { Suspense } from 'react';

const Container = styled.main`
  max-width: 800px;
  margin: 80px auto;
  padding: 24px 16px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 16px;
  color: #2ecc71;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #444;
`;

const ProductCard = styled.div`
  margin-top: 40px;
  background: #fff;
  border-radius: 12px;
  padding: 24px;
`;

const ProductImage = styled(Image)`
  border-radius: 12px;
  object-fit: contain;
  max-width: 100%;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ProductName = styled.h2`
  margin-top: 16px;
  font-size: 1.5rem;
`;

const ProductPrice = styled.p`
  margin-top: 4px;
  font-weight: bold;
  color: #111;
`;

// This is the part that uses `useSearchParams`
function SuccessContent() {
  const searchParams = useSearchParams();
  const slug = searchParams.get('product');
  const product = products.find((p) => p.slug === slug);

  return (
    <>
      <Title>🎉 Thank you for your purchase!</Title>
      <Description>Your order was successful.</Description>

      {product && (
        <ProductCard>
          <ProductImage
            src="/products/image.png"
            alt={product.name}
            width={300}
            height={200}
          />
          <ProductName>{product.name}</ProductName>
          <ProductPrice>${product.price}</ProductPrice>
        </ProductCard>
      )}
    </>
  );
}

export const dynamic = 'force-dynamic';
export default function SuccessPage() {
  return (
    <Container>
      <Suspense fallback={<p>Loading...</p>}>
        <SuccessContent />
      </Suspense>
    </Container>
  );
}
