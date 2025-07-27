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
  { label: 'Drums and Percussion', icon: '/categories/drum.png', slug: "drums" },
  { label: 'Keys', icon: '/categories/piano.png', slug: "keys" },
  { label: 'Studio and Recording Equipment', icon: '/categories/stud.png'},
  { label: 'Software', icon: '/categories/software.png'},
  { label: 'PA Equipment', icon: '/categories/pa.png'},
  { label: 'Lighting and Stage', icon: '/categories/light.png' },
  { label: 'DJ Equipment', icon: '/categories/dj.png' },
  { label: 'Broadcast & Video', icon: '/categories/cam.png' },
  { label: 'Microphones', icon: '/categories/mic.png' },
  { label: 'Effect and Signal Processors', icon: '/categories/efx.png' },
  { label: 'Wind Instruments', icon: '/categories/wind.png' },
  { label: 'Traditional Instruments', icon: '/categories/tradi.png' },
  { label: 'Sheet Music', icon: '/categories/sheet.png' },
  { label: 'Cases, Racks and Bags', icon: '/categories/cases.png' },
  { label: 'Cables and Connectors', icon: '/categories/cable.png' },
  { label: 'Accessories', icon: '/categories/Accessories.png' },
  { label: 'Stompenberg FX', icon: '/categories/FX.png' },
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