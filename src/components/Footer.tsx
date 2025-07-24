// components/Footer.tsx
'use client';

import styled from 'styled-components';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
} from 'react-icons/fa';
import Image from 'next/image';

const FooterWrapper = styled.footer`
  background-color: #181818;
  color: #ccc;
  padding: 48px 16px 24px;
  font-size: 0.875rem;
`;

const FooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 32px;
`;

const Socials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .icon-row {
    display: flex;
    gap: 12px;
  }

  svg {
    width: 24px;
    height: 24px;
    color: #fff;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const LinksColumn = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    color: #ccc;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const BottomLine = styled.div`
  text-align: center;
  font-size: 0.75rem;
  color: #999;
  margin-top: 48px;

  i {
    font-style: italic;
    color: #aaa;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <Socials>
          <div className="icon-row">
            <FaFacebookF />
            <FaYoutube />
            <FaInstagram />
            <FaPinterestP />
            <FaTiktok />
          </div>
        </Socials>

        <LinksColumn>
          <a href="#">Terms & Conditions / Imprint</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Settings</a>
          <a href="#">Right of Withdrawal</a>
          <a href="#">Online Ordering Process</a>
          <a href="#">Statutory Warranty Rights</a>
          <a href="#">Accessibility Statement</a>
        </LinksColumn>

        <LinksColumn>
          <a href="#">About Us</a>
          <a href="#">Jobs & Careers</a>
          <a href="#">Blog</a>
          <a href="#">Classified Ads</a>
          <a href="#">Whistleblower system</a>
        </LinksColumn>
      </FooterInner>

      <BottomLine>
        © 1996–2025 Music World <i>We love you, because you rock!</i>
      </BottomLine>
    </FooterWrapper>
  );
}
