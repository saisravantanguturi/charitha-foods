import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Heart, CheckCircle, ChevronRight, Droplet, ChefHat } from 'lucide-react';
import { CATEGORIES_LIST, PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

// Import local hero images
import kitchenHero from '../hero-kitchen.png';
import productsHero from '../hero-products.png';
import orderHero from '../hero-order.png';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: kitchenHero,
      title: "Traditional Foods Made by Women",
      subtitle: "No sugar. Only organic bellam (jaggery).",
      cta: "View Products",
      link: "/products"
    },
    {
      id: 2,
      image: productsHero,
      title: "Cold-Pressed Oils & Bilona Ghee",
      subtitle: "Made using grandma’s traditional methods.",
      cta: "Order Now",
      link: "/products"
    },
    {
      id: 3,
      image: orderHero,
      title: "Order via WhatsApp",
      subtitle: "Pan-India delivery available.",
      cta: "Start Ordering",
      link: "/products"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col gap-12 pb-12">
      
      {/* FIXED HERO SECTION: Uses a taller aspect ratio on mobile to prevent cropping */}
      <section className="relative w-full aspect-[4/5] sm:aspect-[16/9] md:h-[600px] overflow-hidden bg-primary">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black/30 z-10"></div>
            
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover object-center" 
            />
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
              <h1 className="font-serif text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 md:mb-4 drop-shadow-md animate-in slide-in-from-bottom duration-700 fade-in">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-lg md:text-2xl text-cream mb-4 md:mb-8 font-light drop-shadow-sm animate-in slide-in-from-bottom duration-1000 fade-in delay-100">
                {slide.subtitle}
              </p>
              <Link 
                to={slide.link}
                className="bg-accent hover:bg-white hover:text-primary text-white font-bold py-2 px-6 md:py-3 md:px-8 rounded-full text-xs md:text-base transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 animate-in slide-in-from-bottom duration-1000 fade-in delay-200"
              >
                {slide.cta} <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </Link>
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-4' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-cream -mt-4 sm:-mt-8 relative z-20 max-w-7xl mx-auto w-full px-4">
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border border-primary/5">
          {[
            { icon: <ChefHat className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />, title: "Women-led", desc: "Empowering rural women" },
            { icon: <Star className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />, title: "Traditional", desc: "Hand-made methods" },
            { icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />, title: "Zero Sugar", desc: "Organic Jaggery only" },
            { icon: <Droplet className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />, title: "Pure Oils", desc: "Wood-pressed oils" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-2 bg-cream p-2 rounded-full">{item.icon}</div>
              <h3 className="font-serif font-bold text-primary text-sm sm:text-lg mb-0.5">{item.title}</h3>
              <p className="text-[10px] text-gray-500 leading-tight">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="flex justify-between items-end mb-6">
          <div>
            <span className="text-accent font-bold uppercase tracking-wider text-xs sm:text-sm">Our Range</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-primary mt-1">Explore Categories</h2>
          </div>
          <Link to="/products" className="hidden sm:flex items-center text-primary font-bold hover:text-accent transition-colors">
            View All <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES_LIST.map((cat) => (
            <Link 
              key={cat.id} 
              to={`/products?category=${encodeURIComponent(cat.id)}`}
              className="group relative h-40 sm:h-64 rounded-xl overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
              <img 
                src={cat.image} 
                alt={cat.id} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-3 sm:p-4">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-1 drop-shadow-md">{cat.id}</h3>
                <span className="text-cream text-[10px] sm:text-xs opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300 flex items-center">
                  Shop Now <ChevronRight className="w-3 h-3 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="bg-[#F5F2EA] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary">Best Sellers</h2>
            <p className="text-sm text-gray-600 mt-1">Loved by families across India</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
             {PRODUCTS.slice(0, 4).map(product => (
               <ProductCard key={product.id} product={product} />
             ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              to="/products"
              className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-sm transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;