'use client';

import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/Product';

type Props = {
  title: string;
  products: Product[];
};

const Container = styled.section`
  max-width: 1200px;
  margin: 48px auto;
  padding: 0 16px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const ProductCard = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  cursor: pointer;
`;

const ProductImage = styled(Image)`
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  border-radius: 10px;
`;

const ProductName = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  margin-top: 12px;
`;

const ProductPrice = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 6px;
`;

const ProductRating = styled.div`
  margin-top: 6px;
  font-size: 0.875rem;
  color: #777;
`;

export default function ProductSlider({
  title,
  products,
}: Props) {
  return (
    <Container>
      <Title>{title}</Title>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.slug}>
            <Link href={`/product/${product.slug}`} passHref>
              <ProductCard>
                <ProductImage
                  src={"/products/image.png"}
                  alt={product.name}
                  width={300}
                  height={200}
                />
                <ProductName>{product.name}</ProductName>
                <ProductRating>
                  {'★'.repeat(product.rating || 0)}{' '}
                  <span style={{ color: '#aaa' }}>({product.reviews || 0})</span>
                </ProductRating>
                <ProductPrice>$ {product.price}</ProductPrice>
              </ProductCard>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
