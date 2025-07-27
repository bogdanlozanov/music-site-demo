'use client';

import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 60px 20px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #f9f9f9;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin: 0;
  color: #222;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin: 16px 0 8px;
`;

const Joke = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 32px;
  font-style: italic;
`;

const StyledLink = styled(Link)`
  background: #1a1a1a;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s;

  &:hover {
    background: #333;
  }
`;

export default function NotFound() {
  return (
    <Wrapper>
      <Title>404</Title>
      <Subtitle>This page is out of tune 🎸</Subtitle>
      <Joke>
        This is just a demo... did you really expect to find everything?
      </Joke>
      <StyledLink href="/">Back to Home</StyledLink>
    </Wrapper>
  );
}
