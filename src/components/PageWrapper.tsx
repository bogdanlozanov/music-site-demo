'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 192px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding-top: 161px;
  }
`;

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}
