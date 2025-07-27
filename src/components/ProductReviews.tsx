'use client';

import styled from 'styled-components';

const Container = styled.section`
  margin-top: 64px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 16px;
`;

const OverallRating = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const RatingsBreakdown = styled.div`
  margin-top: 16px;
`;

const RatingRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ProgressBar = styled.div<{ width: number }>`
  background: #eee;
  flex: 1;
  height: 8px;
  margin: 0 8px;
  border-radius: 4px;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${({ width }) => width}%;
    background: #007aff;
  }
`;

const ReviewList = styled.div`
  margin-top: 32px;
`;

const Review = styled.div`
  border-top: 1px solid #ddd;
  padding: 16px 0;
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin-bottom: 4px;
`;

const ReviewText = styled.p`
  margin: 8px 0;
  color: #444;
`;

const SubRatings = styled.div`
  display: flex;
  gap: 16px;
  font-size: 0.875rem;

  span {
    color: #777;
  }
`;

const reviews = [
  {
    name: 'W.K. (US)',
    date: '03.12.2023',
    title: 'Musical pleasure',
    text:
      'Perfect instrument! I had a Genos 1, now I have the new generation. It’s amazing for both composing and live performance.',
    stars: 5,
    subRatings: {
      handling: 5,
      features: 5,
      sound: 5,
      quality: 5,
    },
  },
  {
    name: 'brocode (UK)',
    date: '10.11.2023',
    title: 'Fantastic new keyboard!',
    text:
      'Amazing quality of sounds and styles. Very inspirational!',
    stars: 5,
    subRatings: {
      handling: 5,
      features: 5,
      sound: 5,
      quality: 4,
    },
  },
  {
    name: 'midi man (DE)',
    date: '08.10.2024',
    title: 'thank you',
    text: 'Fast shipping. Arrived perfectly. Thanks!',
    stars: 5,
    subRatings: {
      handling: 5,
      features: 4,
      sound: 4,
      quality: 5,
    },
  },
];

export default function ProductReviews() {
  return (
    <Container>
      <Title>Customer Reviews</Title>

      <OverallRating>
        <span>⭐⭐⭐⭐☆</span>
        <span>4.8 / 5</span>
        <span>({reviews.length} reviews)</span>
      </OverallRating>

      <RatingsBreakdown>
        {['Handling', 'Features', 'Sound', 'Quality'].map((label, i) => (
          <RatingRow key={label}>
            <span style={{ width: 90 }}>{label}</span>
            <ProgressBar width={95 - i * 5} />
            <span>{5 - i * 0.2} / 5</span>
          </RatingRow>
        ))}
      </RatingsBreakdown>

      <ReviewList>
        {reviews.map((r, i) => (
          <Review key={i}>
            <ReviewHeader>
              <span>{r.title}</span>
              <span>{'★'.repeat(r.stars)}</span>
            </ReviewHeader>
            <ReviewText>{r.text}</ReviewText>
            <SubRatings>
              <span>Handling: {r.subRatings.handling}★</span>
              <span>Features: {r.subRatings.features}★</span>
              <span>Sound: {r.subRatings.sound}★</span>
              <span>Quality: {r.subRatings.quality}★</span>
            </SubRatings>
          </Review>
        ))}
      </ReviewList>
    </Container>
  );
}
