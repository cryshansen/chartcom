import { useState } from 'react';

import ProductCard from './ProductCard';

type Product = {
 title: string;
  description?: string;
  price?: string;
  imgSrc: string;
  category: string;
};

export default function ProductGallery({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = Array.from(new Set(products.map(p => p.category)));

  const filtered = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="container my-5">
      <div className="d-flex flex-wrap gap-2 justify-content-center mb-4">
        <button className="btn btn-outline-primary" onClick={() => setSelectedCategory('all')}>
          All
        </button>
        {categories.map(cat => (
          <button key={cat} className="btn btn-outline-primary" onClick={() => setSelectedCategory(cat)}>
            {cat}
          </button>
        ))}
      </div>

      <div className="d-flex flex-wrap gap-4 justify-content-center">
        {filtered.map((product, idx) => (
          <ProductCard key={idx} {...product} />
        ))}
      </div>
    </section>
  );
}
