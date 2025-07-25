
import Fuse from 'fuse.js';
import { products } from '@/constants/mockData';
import { categoryAliases } from '@/constants/categoryAliases';

const categoryFuse = new Fuse(categoryAliases, {
  keys: ['name', 'aliases'],
  threshold: 0.3,
});

const productFuse = new Fuse(products, {
  keys: ['name', 'brand', 'category', 'subcategory'],
  threshold: 0.3,
});

export function searchAll(query: string) {
  const catResults = categoryFuse.search(query).map((res) => ({
    ...res.item,
    type: 'category',
  }));

  const prodResults = productFuse.search(query).map((res) => ({
    ...res.item,
    type: 'product',
  }));

  return {
    categories: catResults.slice(0, 5),
    products: prodResults.slice(0, 5),
  };
}
