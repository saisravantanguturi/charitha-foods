import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus, Trash2, Camera, ShoppingBag } from 'lucide-react';

const Basket: React.FC = () => {
  const { isBasketOpen, closeBasket, cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  if (!isBasketOpen) return null;

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      "Hi Charitha Foods,\nI have added products to my basket.\nPlease check the attached screenshot and confirm availability and price."
    );
    window.open(`https://wa.me/919856235623?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
        onClick={closeBasket}
      ></div>

      {/* Drawer */}
      <div className="relative w-full md:w-[400px] h-full bg-cream shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="h-14 px-4 border-b border-primary/10 flex items-center justify-between bg-cream shrink-0">
          <div className="flex items-center gap-2 text-primary">
            <ShoppingBag className="w-5 h-5" />
            <h2 className="font-serif font-bold text-lg">Your Basket</h2>
          </div>
          <button onClick={closeBasket} className="p-2 hover:bg-black/5 rounded-full text-text">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Screenshot Instruction */}
        <div className="bg-accent/10 py-2 px-4 text-center border-b border-accent/20 shrink-0">
          <p className="text-xs font-bold text-primary tracking-wide uppercase">
            Screenshot this list & send on WhatsApp
          </p>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-cream">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-60">
              <ShoppingBag className="w-16 h-16 text-primary/30" />
              <p className="font-serif text-xl text-primary">Your basket is empty</p>
              <button 
                onClick={closeBasket} 
                className="text-primary underline font-bold"
              >
                Browse Products
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.productId}-${item.variantId}`} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-primary/5 shadow-sm">
                {/* Image */}
                <div className="w-14 h-14 shrink-0 bg-gray-100 rounded-md overflow-hidden">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-text text-sm leading-tight truncate">{item.product.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">Variant: {item.selectedVariantLabel}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={() => updateQuantity(item.productId, item.variantId, -1)}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-gray-200"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-4 text-center font-bold text-sm">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.productId, item.variantId, 1)}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-primary hover:bg-gray-200"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Remove */}
                <button 
                  onClick={() => removeFromCart(item.productId, item.variantId)}
                  className="p-2 text-gray-400 hover:text-red-500"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
          {cartItems.length > 0 && (
             <div className="py-2 text-center">
                <p className="text-[10px] text-gray-400">--- End of List ---</p>
             </div>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 bg-white border-t border-primary/10 p-4 space-y-4">
          
          {/* Info Box */}
          <div className="bg-cream rounded-md p-3 text-xs text-primary/80 border border-primary/5">
            <h4 className="font-bold mb-1 flex items-center gap-1">ℹ️ Ordering Information</h4>
            <ul className="space-y-1 list-disc list-inside opacity-90">
              <li>Prices confirmed on WhatsApp</li>
              <li>Payment only after confirmation</li>
              <li>UPI: <span className="font-mono font-bold select-all">9849452052</span></li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <button 
              onClick={handleWhatsAppOrder}
              disabled={cartItems.length === 0}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Camera className="w-5 h-5" />
              <span>Screenshot & WhatsApp</span>
            </button>
            
            {cartItems.length > 0 && (
              <button 
                onClick={clearCart}
                className="w-full py-2 text-xs text-red-500 hover:text-red-700 flex items-center justify-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                Clear Basket
              </button>
            )}
            
            <p className="text-[10px] text-center text-gray-400">
              Need help? Call <a href="tel:9856235623" className="underline">98 5623 5623</a>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Basket;