import React from 'react';

const AnimatedLogo: React.FC = () => {
  // Oval Dimensions for SVG viewBox="0 0 200 200"
  // Center (100, 100)
  
  // Inner Oval for the Image Clip (Rx=75, Ry=50)
  // Path: M (100-75), 100 a 75, 50 0 1, 1 150, 0 a 75, 50 0 1, 1 -150, 0
  const imageClipPath = "M 25, 100 a 75, 50 0 1, 1 150, 0 a 75, 50 0 1, 1 -150, 0";

  // Outer Oval for the Text Path (Rx=88, Ry=63) - Slightly larger to sit outside the image
  // Path: M (100-88), 100 a 88, 63 0 1, 1 176, 0 a 88, 63 0 1, 1 -176, 0
  const textPath = "M 12, 100 a 88, 63 0 1, 1 176, 0 a 88, 63 0 1, 1 -176, 0";

  const rotatingText = "CHARITHA FOODS • TRADITIONAL • AUTHENTIC • ";

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 group cursor-pointer shrink-0 -my-4">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <defs>
          <clipPath id="logoClip">
            <path d={imageClipPath} />
          </clipPath>
          <path id="textOval" d={textPath} />
        </defs>

        {/* 
            Background Oval (Optional border/bg)
        */}
        <path d={imageClipPath} className="fill-white stroke-primary/10 stroke-2" />

        {/* 
            LOGO IMAGE
            Replace the href below with your actual logo URL. 
            The image is clipped to the oval shape.
        */}
        <image
          href="https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=400&auto=format&fit=crop" 
          width="200"
          height="200"
          clipPath="url(#logoClip)"
          preserveAspectRatio="xMidYMid slice"
          className="transition-transform duration-500 ease-in-out group-hover:scale-105 origin-center"
          style={{ transformOrigin: 'center' }}
        />

        {/* Rotating Text */}
        <text 
            className="text-[11px] font-bold uppercase tracking-[2.5px] fill-primary transition-colors duration-300 group-hover:fill-accent" 
            dy="-2"
        >
          {/* First loop of text */}
          <textPath href="#textOval" startOffset="0%">
            {rotatingText}
            <animate attributeName="startOffset" from="0%" to="100%" dur="20s" repeatCount="indefinite" />
          </textPath>
          
          {/* Second loop for seamless animation */}
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