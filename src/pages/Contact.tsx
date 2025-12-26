import React from 'react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-primary/5">
        <h1 className="font-serif text-4xl font-bold text-primary mb-8 text-center">Get in Touch</h1>
        
        <div className="grid gap-8">
          
          <a href="tel:9856235623" className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-wide">Call Us</p>
              <p className="text-xl font-serif font-bold text-primary">98 5623 5623</p>
            </div>
          </a>

          <a href="https://wa.me/919856235623" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors group">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-wide">WhatsApp</p>
              <p className="text-xl font-serif font-bold text-primary">98 5623 5623</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500 uppercase font-bold tracking-wide">Kitchen Address</p>
              <p className="text-lg text-primary">Plot 45, Green Valley, Hyderabad, India</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl">
             <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">
               <Clock className="w-6 h-6" />
             </div>
             <div>
               <p className="text-sm text-gray-500 uppercase font-bold tracking-wide">Working Hours</p>
               <p className="text-lg text-primary">Mon - Sat: 9:00 AM - 7:00 PM</p>
             </div>
           </div>

        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-400">
          No forms. Just call or message us directly.
        </div>
      </div>
    </div>
  );
};

export default Contact;