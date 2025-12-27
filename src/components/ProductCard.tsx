import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ShoppingBag, Check } from 'lucide-react'; // Added Check icon

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false); // State to track success animation

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

  const handleAdd = () => {
    addToCart(product, selectedVariant, quantity);
    setIsAdded(true); // Start animation
    setQuantity(1); // Reset quantity after adding
    
    // Reset the button back to "ADD" after 2 seconds
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-primary/5 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-accent text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
            New
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="mb-2">
          <p className="text-[10px] uppercase tracking-widest text-secondary font-bold mb-1">{product.category}</p>
          <h3 className="font-serif text-lg font-bold text-primary leading-tight mb-1">{product.name}</h3>
          {product.subtitle && (
            <p className="text-xs text-gray-500 italic">{product.subtitle}</p>
          )}
        </div>

        <div className="mt-auto pt-4 space-y-3">
          {/* Controls Container */}
          <div className="bg-cream rounded-lg p-2 space-y-2">
            
            {/* Variant Selector */}
            <div className="flex flex-wrap gap-1">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`flex-1 text-xs py-1 px-2 rounded-md border transition-all duration-200 ${
                    selectedVariant === variant.id 
                      ? 'bg-primary text-white border-primary shadow-sm' 
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {variant.label}
                </button>
              ))}
            </div>

            {/* Quantity & Add Button Row */}
            <div className="flex items-center gap-2">
              {/* Quantity */}
              <div className="flex items-center bg-white rounded-md border border-gray-200 h-8">
                <button 
                  onClick={handleDecrement}
                  className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary hover:bg-gray-50 rounded-l-md transition-colors"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="w-6 text-center text-xs font-bold text-primary">{quantity}</span>
                <button 
                  onClick={handleIncrement}
                  className="w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary hover:bg-gray-50 rounded-r-md transition-colors"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              {/* Add Button with Animation */}
              <button 
                onClick={handleAdd}
                className={`flex-1 ${isAdded ? 'bg-green-600' : 'bg-accent hover:bg-[#b89565]'} text-white text-xs font-bold h-8 rounded-md flex items-center justify-center gap-1 transition-all duration-300 shadow-sm active:transform active:scale-95`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-3 h-3" />
                    ADDED
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3 h-3" />
                    ADD
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;