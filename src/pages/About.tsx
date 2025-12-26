import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen">
      <div className="bg-primary/5 py-16 text-center px-4">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-primary mb-4">Our Story</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Bringing back the forgotten tastes of our grandmothers, one recipe at a time.</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        
        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <img 
              src="https://picsum.photos/id/431/600/400" 
              alt="Women Cooking" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="font-serif text-3xl font-bold text-primary">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Charitha Foods is more than just a brand; it is a movement to preserve traditional cooking methods. 
              Our kitchen is entirely run by women from rural backgrounds, empowering them while ensuring 
              that every sweet and snack is made with the same love and care as home.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="flex-1">
            <img 
              src="https://picsum.photos/id/292/600/400" 
              alt="Ingredients" 
              className="rounded-2xl shadow-xl w-full"
            />
          </div>
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="font-serif text-3xl font-bold text-primary">Our Promise</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span><strong>No White Sugar:</strong> We only use organic Bellam (Jaggery).</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span><strong>Cold Pressed Oils:</strong> Healthy fats only. No refined oils.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span><strong>Zero Preservatives:</strong> Freshly made in small batches.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;