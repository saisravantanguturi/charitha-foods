import React from 'react';
// Import your local logo file
import charithaLogo from '../charitha-logo.png';

const AnimatedLogo: React.FC = () => {
  // Oval Dimensions for SVG viewBox="0 0 200 200"
  const imageClipPath = "M 25, 100 a 75, 50 0 1, 1 150, 0 a 75, 50 0 1, 1 -150, 0";
  const textPath = "M 12, 100 a 88, 63 0 1, 1 176, 0 a 88, 63 0 1, 1 -176, 0";
  const rotatingText = "CHARITHA FOODS • TRADITIONAL • AUTHENTIC • BEST QUALITY • ";

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 group cursor-pointer shrink-0 -my-4">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <clipPath id="logoClip">
            <path d={imageClipPath} />
          </clipPath>
          <path id="textOval" d={textPath} />
        </defs>

        <path d={imageClipPath} className="fill-white stroke-primary/10 stroke-2" />

        <image
          href={charithaLogo} 
          width="200"
          height="200"
          clipPath="url(#logoClip)"
          preserveAspectRatio="xMidYMid slice"
          className="transition-transform duration-500 ease-in-out group-hover:scale-105 origin-center"
          style={{ transformOrigin: 'center' }}
        />

        <text 
            className="text-[11px] font-bold uppercase tracking-[2.5px] fill-primary transition-colors duration-300 group-hover:fill-accent" 
            dy="-2"
        >
          <textPath href="#textOval" startOffset="0%">
            {rotatingText}
            <animate attributeName="startOffset" from="0%" to="100%" dur="20s" repeatCount="indefinite" />
          </textPath>
          
          <textPath href="#textOval" startOffset="100%">
             {rotatingText}
            <animate attributeName="startOffset" from="-100%" to="0%" dur="20s" repeatCount="indefinite" />
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default AnimatedLogo;