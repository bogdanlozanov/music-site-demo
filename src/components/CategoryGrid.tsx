'use client';

import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const Section = styled.section`
  padding: 40px 16px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 32px;

  span {
    background: #ddd;
    padding: 0 6px;
    border-radius: 4px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 12px 8px;
  gap: 20px;
`;

const Label = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

const ClickableRow = styled(Link)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 12px 8px;
  gap: 20px;
  text-decoration: none;
  color: inherit;
  transition: background 0.2s;

  &:hover {
    background: #f9f9f9;
  }
`;


// TODO change images
export const categories = [
  { label: 'Guitars and Basses', icon: '/categories/gi.jpg', slug: "guit-bass" },
  { label: 'Drums and Percussion', icon: '/categories/gi.jpg', slug: "drums" },
  { label: 'Keys', icon: '/categories/gi.jpg', slug: "keys" },
  { label: 'Studio and Recording Equipment', icon: '/categories/gi.jpg' },
  { label: 'Software', icon: '/categories/gi.jpg' },
  { label: 'PA Equipment', icon: '/categories/gi.jpg' },
  { label: 'Lighting and Stage', icon: '/categories/gi.jpg' },
  { label: 'DJ Equipment', icon: '/categories/gi.jpg' },
  { label: 'Broadcast & Video', icon: '/categories/gi.jpg' },
  { label: 'Microphones', icon: '/categories/gi.jpg' },
  { label: 'Effect and Signal Processors', icon: '/categories/gi.jpg' },
  { label: 'Wind Instruments', icon: '/categories/gi.jpg' },
  { label: 'Traditional Instruments', icon: '/categories/gi.jpg' },
  { label: 'Sheet Music', icon: '/categories/gi.jpg' },
  { label: 'Cases, Racks and Bags', icon: '/categories/gi.jpg' },
  { label: 'Cables and Connectors', icon: '/categories/gi.jpg' },
  { label: 'Accessories', icon: '/categories/gi.jpg' },
  { label: 'Stompenberg FX', icon: '/categories/gi.jpg' },
];


export default function CategoryGrid() {
  return (
    <Section>
      <Title>
        Our <span>Categories</span>
      </Title>
      <Grid>
        {categories.map((item) =>
          item.slug ? (
            <ClickableRow key={item.label} href={`/category/${item.slug}`}>
              <Image
                src={item.icon}
                alt={item.label}
                width={60}
                height={60}
                style={{ objectFit: 'contain' }}
              />
              <Label>{item.label}</Label>
            </ClickableRow>
          ) : (
            <Row key={item.label}>
              <Image
                src={item.icon}
                alt={item.label}
                width={60}
                height={60}
                style={{ objectFit: 'contain' }}
              />
              <Label>{item.label}</Label>
            </Row>
          )
        )}
      </Grid>
    </Section>
  );
}