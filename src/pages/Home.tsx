import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Star, Heart, CheckCircle, ChevronRight, Droplet, ChefHat } from 'lucide-react';
import { CATEGORIES_LIST, PRODUCTS } from '../data';
import ProductCard from '../components/ProductCard';

// 1. Import your new local hero image
import kitchenHero from '../hero-kitchen.png';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      // 2. Use the imported kitchenHero variable here
      image: kitchenHero, 
      title: "Traditional Foods Made by Women",
      subtitle: "No sugar. Only organic bellam (jaggery).",
      cta: "View Products",
      link: "/products"
    },
    {
      id: 2,
      image: "https://picsum.photos/id/112/1920/1080",
      title: "Cold-Pressed Oils & Bilona Ghee",
      subtitle: "Made using grandma’s traditional methods.",
      cta: "Order Now",
      link: "/products"
    },
    {
      id: 3,
      image: "https://picsum.photos/id/225/1920/1080",
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
      {/* ... Rest of the file remains the same ... */}
      <section className="relative h-[500px] sm:h-[600px] overflow-hidden bg-primary">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
              <h1 className="font-serif text-4xl sm:text-6xl font-bold text-white mb-4 drop-shadow-md animate-in slide-in-from-bottom duration-700 fade-in">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-2xl text-cream mb-8 font-light drop-shadow-sm animate-in slide-in-from-bottom duration-1000 fade-in delay-100">
                {slide.subtitle}
              </p>
              <Link 
                to={slide.link}
                className="bg-accent hover:bg-white hover:text-primary text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2 animate-in slide-in-from-bottom duration-1000 fade-in delay-200"
              >
                {slide.cta} <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        ))}
        {/* ... Dots and rest of section ... */}
      </section>
      {/* Dots - Enhanced for visibility */}
<div className=\"absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-3\">
  {slides.map((_, idx) => (
    <button
      key={idx}
      onClick={() => setCurrentSlide(idx)}
      className={`w-3 h-3 rounded-full transition-all shadow-md border border-black/10 ${
        idx === currentSlide ? 'bg-accent w-8' : 'bg-white/60 hover:bg-white'
      }`}
    />
  ))}
</div>
  );
};

export default Home;