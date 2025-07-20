'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from 'react-icons/fi';

const PromoBanner = styled.div`
  background: #f3e8ff;
  color: #8a4af3;
  text-align: center;
  font-size: 0.85rem;
  padding: 6px 10px;

  a {
    color: #6b21a8;
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

  @media (max-width: 768px) {
    padding: 10px 14px;
  }
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

const SearchBar = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  padding: 0 20px;
  position: relative;

  input {
    width: 100%;
    padding: 10px 40px 10px 15px;
    border-radius: 20px;
    border: 1px solid #ccc;
    font-size: 0.9rem;
  }

  svg {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
    color: #888;
  }
`;

const IconGroup = styled.div`
  display: flex;
  gap: 16px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  height: calc(100vh - 70px);
  background: white;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
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

  span {
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
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

  li {
    white-space: nowrap;
    cursor: pointer;
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

        <Logo>Music World</Logo>

        <NavLinks>
          <span>Hot Deals</span>
          <span>New</span>
          <span>Top-Seller</span>
          <span>Bargains</span>
        </NavLinks>

        <IconGroup>
          <span>EN · $</span>
          <FiUser />
          <FiHeart />
          <FiShoppingCart />
        </IconGroup>
      </TopRow>

      <SearchBar>
        <input type="text" placeholder="Search" />
        <FiSearch />
      </SearchBar>

      <MobileMenu isOpen={menuOpen}>
        <MobileSection>
          <span>Hot Deals</span>
          <span>New</span>
          <span>Top-Seller</span>
          <span>Bargains</span>
        </MobileSection>

        <MobileSection className="with-border">
          <span>Service</span>
          <span>Contact us</span>
          <span>About Us</span>
          <span>Repair Service</span>
          <span>3-Year Warranty</span>
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
          <span>Guit/Bass</span>
          <span>Drums</span>
          <span>Keys</span>
          <span>Studio</span>
          <span>Software</span>
          <span>PA</span>
          <span>Lighting</span>
          <span>DJ</span>
          <span>Video</span>
          <span>Microphones</span>
          <span>Signal Proc.</span>
          <span>Brass</span>
          <span>Traditional</span>
          <span>Sheet</span>
          <span>Cases</span>
          <span>Cables</span>
          <span>Accessories</span>
        </MobileSection>
      </MobileMenu>

      <CategoryStrip>
        <ul>
          <li>Guit/Bass</li>
          <li>Drums</li>
          <li>Keys</li>
          <li>Studio</li>
          <li>Software</li>
          <li>PA</li>
          <li>Lighting</li>
          <li>DJ</li>
          <li>Video</li>
          <li>Microphones</li>
          <li>Signal Proc.</li>
          <li>Brass</li>
          <li>Traditional</li>
          <li>Sheet</li>
          <li>Cases</li>
          <li>Cables</li>
          <li>Accessories</li>
        </ul>
      </CategoryStrip>
    </HeaderContainer>
  );
};

export default Header;
