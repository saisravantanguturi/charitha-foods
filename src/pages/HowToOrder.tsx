import React from 'react';
import { Smartphone, ShoppingBag, Camera, Send, CreditCard, Truck } from 'lucide-react';

const HowToOrder: React.FC = () => {
  const steps = [
    { icon: <ShoppingBag className="w-6 h-6" />, title: "1. Browse & Add", desc: "Select products and add to basket." },
    { icon: <Camera className="w-6 h-6" />, title: "2. Screenshot", desc: "Open basket and take a screenshot." },
    { icon: <Send className="w-6 h-6" />, title: "3. WhatsApp Us", desc: "Send the screenshot to 9856235623." },
    { icon: <CreditCard className="w-6 h-6" />, title: "4. Confirm & Pay", desc: "We confirm price. You pay via UPI." },
    { icon: <Truck className="w-6 h-6" />, title: "5. Delivery", desc: "We dispatch your fresh goodies." },
  ];

  return (
    <div className="bg-cream min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-primary/5">
        <div className="bg-primary p-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-cream">How to Order</h1>
          <p className="text-accent/80 mt-2">Simple, Human, and Easy.</p>
        </div>
        
        <div className="p-8 space-y-8">
          <div className="space-y-6">
             {steps.map((step, idx) => (
               <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-cream transition-colors">
                 <div className="w-12 h-12 shrink-0 bg-accent/20 text-primary rounded-full flex items-center justify-center">
                   {step.icon}
                 </div>
                 <div>
                   <h3 className="font-serif text-xl font-bold text-primary">{step.title}</h3>
                   <p className="text-gray-600">{step.desc}</p>
                 </div>
               </div>
             ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="font-serif text-xl font-bold text-primary mb-4">Important Policies</h3>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
              <li>Orders are confirmed only after payment.</li>
              <li>No cancellations once the order is confirmed.</li>
              <li>Returns are accepted only if the package is damaged during transit (video proof required).</li>
              <li>Delivery timelines depend on your location (usually 3-5 days).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToOrder;