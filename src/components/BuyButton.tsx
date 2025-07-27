'use client';

import { Product } from '@/types/Product';
import styled from 'styled-components';

const Button = styled.button`
  background: #111;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  width: fit-content;

  &:hover {
    background: #333;
  }
`;

type Props = {
  product: Product;
};

const BuyButton = ({ product }: Props) => {
  const handleClick = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: product.name,
        price: product.price,
        slug: product.slug
      }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert('Failed to create Stripe session');
    }
  };

  return (
    <Button onClick={handleClick}>
      Buy {product.name} for ${product.price}
    </Button>
  );
};

export default BuyButton;
