'use client';

import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 171px;

  @media (max-width: 768px) {
    padding-top: 141px;
  }
`;

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}
