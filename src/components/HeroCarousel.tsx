'use client';

import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

const Container = styled.section`
  max-width: 2000px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const SlideImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`;

// TODO change images
const images = [
  {
    src: '/carousel/electric_basses_topseller.jpg',
    alt: 'Music Days Banner',
  },
  {
    src: '/carousel/ZLX.png',
    alt: 'Music Days Banner',
  },
  {
    src: '/carousel/Roland.png',
    alt: 'Music Days Banner',
  },
  {
    src: '/carousel/electric_basses_topseller.jpg',
    alt: 'Music Days Banner',
  },
  {
    src: '/carousel/ZLX.png',
    alt: 'Music Days Banner',
  },
  {
    src: '/carousel/Roland.png',
    alt: 'Music Days Banner',
  },
  {
    src: '/carousel/electric_basses_topseller.jpg',
    alt: 'Music Days Banner',
  },
  {
    src: '/carousel/ZLX.png',
    alt: 'Music Days Banner',
  },
];

export default function HeroCarousel() {
  return (
    <Container>
      <Title>Welcome to Music World 👋</Title>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={16}
        loop
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={image.alt + index}>
            <SlideImage
              src={image.src}
              alt={image.alt}
              width={400}
              height={250}
              priority
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
