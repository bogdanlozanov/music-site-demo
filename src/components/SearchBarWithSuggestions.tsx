'use client';

import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { searchAll } from '@/utils/searchUtils';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 10px auto;
  padding: 0 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 40px 10px 15px;
  border-radius: 20px;
  border: 1px solid #ccc;
  font-size: 0.9rem;
`;

const Icon = styled(FiSearch)`
  position: absolute;
  right: 32px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
`;

const Suggestions = styled.div`
  position: absolute;
  top: 110%;
  left: 20px;
  right: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
  z-index: 999;
`;

const Group = styled.div`
  padding: 10px 12px;
  border-bottom: 1px solid #eee;

  h4 {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #666;
    margin-bottom: 4px;
  }

  a {
    display: block;
    padding: 6px 4px;
    font-size: 0.9rem;
    color: #222;
    border-radius: 4px;

    &.highlight {
      background: #f0f0f0;
    }

    &:hover {
      background: #eaeaea;
    }
  }
`;

const ProductPreview = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 6px;
  }

  .info {
    display: flex;
    flex-direction: column;
    font-size: 0.85rem;

    .name {
      font-weight: 500;
    }

    .meta {
      color: #777;
      font-size: 0.75rem;
    }
  }
`;

export default function SearchBarWithSuggestions() {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const [results, setResults] = useState<{ categories: any[]; products: any[] }>({
    categories: [],
    products: [],
  });

  const totalResults = [...results.categories, ...results.products];
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((prev) =>
        Math.min(prev + 1, totalResults.length - 1)
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter') {
      const item = totalResults[highlightIndex];
      if (item) {
        const href =
          item.type === 'category'
            ? `/category/${item.slug}`
            : `/product/${item.slug}`;
        window.location.href = href;
      }
    }
  };

  const handleChange = (value: string) => {
    setQuery(value);
    setHighlightIndex(0);
    const res = searchAll(value);
    setResults(res);
    setShowSuggestions(true);
  };

  return (
    <Wrapper ref={ref}>
      <Input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onKeyDown={handleKeyDown}
      />
      <Icon />

      {showSuggestions && query.length > 0 && (
        <Suggestions>
          {results.categories.length > 0 && (
            <Group>
              <h4>Categories</h4>
              {results.categories.map((cat, index) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className={highlightIndex === index ? 'highlight' : ''}
                >
                  {cat.name}
                </Link>
              ))}
            </Group>
          )}

          {results.products.length > 0 && (
            <Group>
              <h4>Products</h4>
              {results.products.map((prod, index) => {
                const i = index + results.categories.length;
                return (
                  <Link
                    key={prod.id}
                    href={`/product/${prod.slug}`}
                    className={highlightIndex === i ? 'highlight' : ''}
                  >
                    <ProductPreview>
                      <div className="info">
                        <span className="name">{prod.name}</span>
                        <span className="meta">
                          ${prod.price.toFixed(2)} · ⭐ {prod.rating.toFixed(1)}
                        </span>
                      </div>
                    </ProductPreview>
                  </Link>
                );
              })}
            </Group>
          )}

          {results.categories.length === 0 && results.products.length === 0 && (
            <Group>
              <h4>No results found</h4>
            </Group>
          )}
        </Suggestions>
      )}
    </Wrapper>
  );
}
