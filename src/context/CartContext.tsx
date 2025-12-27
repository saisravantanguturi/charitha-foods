import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, Product } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  isBasketOpen: boolean;
  addToCart: (product: Product, variantId: string, quantity: number) => void;
  removeFromCart: (productId: string, variantId: string) => void;
  updateQuantity: (productId: string, variantId: string, delta: number) => void;
  clearCart: () => void;
  openBasket: () => void;
  closeBasket: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  // Load from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('charitha_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    localStorage.setItem('charitha_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product, variantId: string, quantity: number) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(
        item => item.productId === product.id && item.variantId === variantId
      );

      const variantLabel = product.variants.find(v => v.id === variantId)?.label || 'Standard';

      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        return [...prev, {
          productId: product.id,
          variantId,
          quantity,
          product,
          selectedVariantLabel: variantLabel
        }];
      }
    });
    // Line removed: setIsBasketOpen(true);
  };

  const removeFromCart = (productId: string, variantId: string) => {
    setCartItems(prev => prev.filter(item => !(item.productId === productId && item.variantId === variantId)));
  };

  const updateQuantity = (productId: string, variantId: string, delta: number) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.productId === productId && item.variantId === variantId) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      });
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const openBasket = () => setIsBasketOpen(true);
  const closeBasket = () => setIsBasketOpen(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{
      cartItems,
      isBasketOpen,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      openBasket,
      closeBasket,
      totalItems
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};