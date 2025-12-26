import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBasket, Phone, MessageCircle, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Basket from './Basket';
import AnimatedLogo from './AnimatedLogo';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openBasket, totalItems } = useCart();
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'About', path: '/about' },
    { label: 'How to Order', path: '/how-to-order' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col font-sans text-text bg-cream selection:bg-accent/30">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-primary/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-24">
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <AnimatedLogo />
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold text-primary tracking-tight group-hover:text-secondary transition-colors">
                  Charitha Foods
                </span>
                <span className="text-[10px] sm:text-xs text-accent uppercase tracking-widest font-bold">
                  Since 2020
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-sm font-medium tracking-wide transition-colors hover:text-accent ${isActive(link.path) ? 'text-primary font-bold border-b-2 border-accent' : 'text-gray-600'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <a 
                href="https://wa.me/919856235623" 
                target="_blank" 
                rel="noreferrer"
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 hover:bg-green-200 transition-colors"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a 
                href="tel:9856235623" 
                className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors"
                title="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>
              
              {/* Basket Icon */}
              <button 
                onClick={openBasket}
                className="relative p-2 text-primary hover:text-accent transition-colors"
              >
                <ShoppingBasket className="w-7 h-7" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-sm">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute top-0 left-0 w-[280px] h-full bg-cream shadow-2xl p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-8">
               <div className="flex items-center gap-2">
                 <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="font-serif font-bold text-primary">CF</span>
                 </div>
                 <span className="font-serif text-xl font-bold text-primary">Charitha Foods</span>
               </div>
               <button onClick={() => setIsMobileMenuOpen(false)}>
                 <X className="w-6 h-6 text-gray-500" />
               </button>
            </div>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className={`text-lg font-medium ${isActive(link.path) ? 'text-primary pl-2 border-l-4 border-accent' : 'text-gray-600'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
               <a href="tel:9856235623" className="flex items-center space-x-3 text-gray-700">
                 <Phone className="w-5 h-5" /> <span>Call Us</span>
               </a>
               <a href="https://wa.me/919856235623" className="flex items-center space-x-3 text-green-700">
                 <MessageCircle className="w-5 h-5" /> <span>WhatsApp</span>
               </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Sticky Mobile Basket Trigger if items exist (Optional but good UX) */}
      <div className="md:hidden fixed bottom-6 right-6 z-30">
        <a 
          href="https://wa.me/919856235623"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-105"
        >
          <MessageCircle className="w-8 h-8" />
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-primary text-cream py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl font-bold text-accent mb-2">Charitha Foods</h3>
              <p className="text-sm opacity-80 max-w-xs">Traditional tastes from a women-led kitchen. Bringing grandma's recipes to your home.</p>
            </div>
            
            <div className="flex gap-4">
               <a href="https://wa.me/919856235623" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors flex items-center gap-2">
                 <MessageCircle className="w-4 h-4" /> WhatsApp Order
               </a>
               <a href="tel:9856235623" className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm transition-colors flex items-center gap-2">
                 <Phone className="w-4 h-4" /> Call 98 5623 5623
               </a>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs opacity-60">
            <p className="mb-2">⚠️ Disclaimer: This website is for product viewing only. Orders are accepted via WhatsApp or phone call.</p>
            <p>&copy; {new Date().getFullYear()} Charitha Foods. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <Basket />
    </div>
  );
};

export default Layout;