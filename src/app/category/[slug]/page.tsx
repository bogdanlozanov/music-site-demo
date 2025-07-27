'use client';

import { useParams } from 'next/navigation';
import { categories, products } from '@/constants/mockData';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import ProductSlider from '@/components/ProductSlider';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 24px;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  max-width: 100%;
  gap: 24px;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const SubcategoryCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: #f9f9f9;
  border-radius: 10px;
  transition: all 0.2s ease;
  text-decoration: none;
  color: #111;

  &:hover {
    background: #eaeaea;
  }

  span {
    margin-top: 12px;
    text-align: center;
    font-size: 0.9rem;
  }

  img {
    height: 80px;
    object-fit: contain;
  }
`;

const CategoryPage = () => {
  const { slug } = useParams();

  const category = categories.find((c) => c.slug === slug);

  if (!category) return <PageWrapper><h2>Category not found</h2></PageWrapper>;

  return (
    <PageWrapper>
      <Title>{category.name}</Title>
      <Grid>
        {category.subcategories.map((sub) => (
          <SubcategoryCard href={`/subcategory/${sub.slug}`} key={sub.slug}>
            <Image
              src={`/categories/gi.jpg`}
              alt={sub.name}
              width={80}
              height={80}
            />
            <span>{sub.name}</span>
          </SubcategoryCard>
        ))}
      </Grid>
      <ProductSlider
        title="Products from the category"
        products={products}
      />
    </PageWrapper>
  );
};

export default CategoryPage;