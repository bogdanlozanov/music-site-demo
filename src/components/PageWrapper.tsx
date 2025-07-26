'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 200px;
  margin: 48px auto;

  @media (max-width: 768px) {
    padding-top: 161px;
  }
`;

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}
