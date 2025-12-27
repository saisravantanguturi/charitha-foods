import React, { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus, Minus, ShoppingBag, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0].id);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleIncrement = () => setQuantity(q => q + 1);
  const handleDecrement = () => setQuantity(q => Math.max(1, q - 1));

  const handleAdd = () => {
    addToCart(product, selectedVariant, quantity);
    setIsAdded(true);
    setQuantity(1);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-primary/5 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          loading="lazy"
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-accent text-white text-[8px] sm:text-[10px] font-bold px-1.5 py-0.5 rounded-sm uppercase tracking-wider">
            New
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-2 sm:p-4 flex flex-col flex-grow">
        <div className="mb-1 sm:mb-2">
          <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-secondary font-bold mb-0.5">{product.category}</p>
          <h3 className="font-serif text-sm sm:text-lg font-bold text-primary leading-tight mb-0.5 sm:mb-1">{product.name}</h3>
          {product.subtitle && (
            <p className="text-[10px] sm:text-xs text-gray-500 italic line-clamp-1">{product.subtitle}</p>
          )}
        </div>

        <div className="mt-auto pt-2 sm:pt-4 space-y-2">
          <div className="bg-cream rounded-lg p-1.5 sm:p-2 space-y-2">
            
            {/* Variant Selector - Scrollable on mobile if many */}
            <div className="flex flex-wrap gap-1">
              {product.variants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`flex-1 text-[9px] sm:text-xs py-1 px-1 sm:px-2 rounded-md border transition-all duration-200 ${
                    selectedVariant === variant.id 
                      ? 'bg-primary text-white border-primary shadow-sm' 
                      : 'bg-white text-gray-600 border-gray-200'
                  }`}
                >
                  {variant.label}
                </button>
              ))}
            </div>

            {/* Quantity & Add Button Row - Responsive Layout */}
            <div className="flex flex-col xs:flex-row items-stretch gap-1.5 sm:gap-2">
              {/* Quantity Controls - Narrower for mobile */}
              <div className="flex items-center justify-between bg-white rounded-md border border-gray-200 h-7 sm:h-8">
                <button 
                  onClick={handleDecrement}
                  className="w-7 sm:w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                >
                  <Minus className="w-2.5 h-2.5" />
                </button>
                <span className="text-[10px] sm:text-xs font-bold text-primary">{quantity}</span>
                <button 
                  onClick={handleIncrement}
                  className="w-7 sm:w-8 h-full flex items-center justify-center text-gray-500 hover:text-primary transition-colors"
                >
                  <Plus className="w-2.5 h-2.5" />
                </button>
              </div>

              {/* Add Button - Full width on tiny screens */}
              <button 
                onClick={handleAdd}
                className={`flex-1 ${isAdded ? 'bg-green-600' : 'bg-accent hover:bg-[#b89565]'} text-white text-[10px] sm:text-xs font-bold h-7 sm:h-8 rounded-md flex items-center justify-center gap-1 transition-all duration-300 active:scale-95`}
              >
                {isAdded ? (
                  <><Check className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> ADDED</>
                ) : (
                  <><ShoppingBag className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> ADD</>
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