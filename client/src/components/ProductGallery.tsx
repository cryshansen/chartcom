import { useState, useEffect } from 'react';

import ProductCard from './ProductCard';
import { useLoading } from "../context/LoadingContext";

type Product = {
  title: string;
  description?: string;
  price?: string;
  imgSrc: string;
  category: string;
};

export default function ProductGallery({ products }: { products: Product[] }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const baseUrl = import.meta.env.VITE_API_URL;
  const categories = Array.from(new Set(products.map(p => p.category)));
  const [productList, setProducts] = useState<Product[]>([]);
  const filtered = selectedCategory === 'all'
    ? productList
    : productList.filter(p => p.category === selectedCategory);
  const { showLoader, hideLoader } = useLoading();
    /** endpoints in package
     * NODE:     fetch(`/api/products`)
     * PHP endpoint used see readme for link to project
     */

  useEffect(() => {
    showLoader();
    fetch(`${baseUrl}/api/index-products.php/product/list`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch images:', err))
      .finally(hideLoader);
  }, []);


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
