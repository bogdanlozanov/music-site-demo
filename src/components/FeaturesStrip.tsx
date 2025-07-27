'use client';

import styled from 'styled-components';
import Image from 'next/image';

const Container = styled.section`
  max-width: 1200px;
  margin: 48px auto;
  padding: 0 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.div`
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  position: relative;
`;

const Label = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #222;
`;

// TODO change images
const features = [
  {
    icon: '/features/2.png',
    label: 'Days Money-Back',
  },
  {
    icon: '/features/5.png',
    label: 'Free Delivery',
  },
  {
    icon: '/features/3.png',
    label: 'Best service in Bulgaria',
  },
  {
    icon: '/features/4.png',
    label: 'Bulgaria’s Largest Warehouse',
  },
];

export default function FeaturesStrip() {
  return (
    <Container>
      <Grid>
        {features.map((feature) => (
          <FeatureCard key={feature.label}>
            <Icon>
              <Image
                src={feature.icon}
                alt={feature.label}
                fill
                style={{ objectFit: 'contain' }}
              />
            </Icon>
            <Label>{feature.label}</Label>
          </FeatureCard>
        ))}
      </Grid>
    </Container>
  );
}
