import React, { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES_LIST } from '../data';
import ProductCard from '../components/ProductCard';

const Products: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeCategory = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    if (!activeCategory) return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-cream min-h-screen pb-20">
      
      {/* Header Banner */}
      <div className="bg-primary text-cream py-12 px-4 text-center">
        <h1 className="font-serif text-4xl font-bold mb-2">Our Menu</h1>
        <p className="text-accent/80 text-lg">Pure, Traditional, and Homemade</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Link
            to="/products"
            className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${!activeCategory ? 'bg-accent text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
          >
            All
          </Link>
          {CATEGORIES_LIST.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${encodeURIComponent(cat.id)}`}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${activeCategory === cat.id ? 'bg-accent text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
            >
              {cat.id}
            </Link>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;