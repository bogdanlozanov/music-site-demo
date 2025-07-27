'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from 'react-icons/fi';
import { headerLinks, headerCategories } from '@/constants/mockHeaderData';
import SearchBarWithSuggestions from '@/components/SearchBarWithSuggestions';

const PromoBanner = styled.div`
  background: #A9D6FF;
  color: #2359C3;
  text-align: center;
  font-size: 0.85rem;
  padding: 6px 10px;

  a {
    color: #3A86FF;
    font-weight: 500;
    text-decoration: underline;
  }
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap;
`;

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
`;

const BurgerButton = styled.button`
  background: none;
  border: none;
  font-size: 1.6rem;
  color: #333;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    display: none;
  }
`;


const IconGroup = styled.div`
  display: flex;
  gap: 16px;
  font-size: 1.2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background: white;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  overflow-y: auto;
  padding: 20px;
  gap: 24px;
  z-index: 998;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  a {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
    color: #222;
  }

  &.group-title {
    font-weight: bold;
    font-size: 1.05rem;
    margin-top: 8px;
    text-align: center;
  }

  &.with-border {
    border-top: 1px solid #ddd;
    padding-top: 16px;
  }
`;

const MobileIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  font-size: 1.4rem;
`;

const CategoryStrip = styled.div`
  background: #1a1a1a;
  color: white;
  font-size: 0.9rem;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li a {
    white-space: nowrap;
    cursor: pointer;
    color: white;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <HeaderContainer>
      <PromoBanner>
        🎉 Music World: now up to 65% off! <a href="#">Shop now</a>
      </PromoBanner>

      <TopRow>
        <BurgerButton onClick={toggleMenu} aria-label="Toggle menu">
          {menuOpen ? <FiX /> : <FiMenu />}
        </BurgerButton>

        <Link href="/" passHref>
          <Logo>Music World</Logo>
        </Link>

        <NavLinks>
          {headerLinks.map(({ name, slug }) => (
            <Link key={slug} href={`/${slug}`}>
              {name}
            </Link>
          ))}
        </NavLinks>

        <IconGroup>
          <span>EN · $</span>
          <FiUser />
          <FiHeart />
          <FiShoppingCart />
        </IconGroup>
      </TopRow>

      <SearchBarWithSuggestions />

      <MobileMenu $isOpen={menuOpen}>
        <MobileSection>
          {headerLinks.map(({ name, slug }) => (
            <Link key={slug} href={`/${slug}`} onClick={() => setMenuOpen(false)}>
              {name}
            </Link>
          ))}
        </MobileSection>

        <MobileSection className="with-border">
          <Link href="#">Service</Link>
          <Link href="#">Contact us</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Repair Service</Link>
          <Link href="#">3-Year Warranty</Link>
        </MobileSection>

        <MobileSection className="with-border">
          <span>EN · $</span>
          <MobileIcons>
            <FiUser />
            <FiHeart />
            <FiShoppingCart />
          </MobileIcons>
        </MobileSection>

        <MobileSection className="with-border">
          <span className="group-title">Categories</span>
          {headerCategories.map(({ name, slug }) => (
            <Link key={slug} href={`/category/${slug}`} onClick={() => setMenuOpen(false)}>
              {name}
            </Link>
          ))}
        </MobileSection>
      </MobileMenu>

      <CategoryStrip>
        <ul>
          {headerCategories.map(({ name, slug }) => (
            <li key={slug}>
              <Link href={`/category/${slug}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </CategoryStrip>
    </HeaderContainer>
  );
};

export default Header;
