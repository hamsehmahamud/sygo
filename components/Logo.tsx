import React from 'react';

const Logo: React.FC<{ className?: string; size?: string; useImage?: boolean }> = ({ className = "", size = "size-16", useImage = true }) => {
  // Determine if we are in a small context (like footer)
  const isSmall = size.includes('size-10') || size.includes('size-8');

  return (
    <div className={`${size} ${className} relative flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
      {useImage ? (
        <img 
          src="/logo.png" 
          alt="SYGO Logo" 
          className="w-full h-full object-contain z-10"
          onError={(e) => {
            // Fallback to SVG if image fails to load
            (e.target as HTMLImageElement).style.display = 'none';
            const svg = e.currentTarget.nextElementSibling as HTMLElement;
            if (svg) svg.style.display = 'block';
          }}
        />
      ) : null}
      
      <svg 
        viewBox="0 0 120 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full z-10"
        style={{ display: useImage ? 'none' : 'block' }}
      >
        {/* Outer Circular Border - Yellow */}
        <circle cx="60" cy="60" r="54" fill="var(--color-sygo-yellow)" />
        <circle cx="60" cy="60" r="46" fill="white" />
        
        {/* Circular Text Path */}
        <defs>
          <path id="circlePath" d="M 60, 60 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
        </defs>
        <text fill="white" fontSize="6.5" fontWeight="900" letterSpacing="0.2">
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            SOMALI YOUTH GROWTH MIND ORGANIZATION
          </textPath>
        </text>

        {/* Stars */}
        <path d="M22 82L24 86L28 86L25 89L26 93L22 91L18 93L19 89L16 86L20 86L22 82Z" fill="white" />
        <path d="M98 82L100 86L104 86L101 89L102 93L98 91L94 93L95 89L92 86L96 86L98 82Z" fill="white" />

        {/* Hands - Yellow */}
        <path 
          d="M35 90C30 80 25 70 25 60C25 50 30 40 40 35" 
          stroke="var(--color-sygo-yellow)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none"
        />
        <path 
          d="M85 90C90 80 95 70 95 60C95 50 90 40 80 35" 
          stroke="var(--color-sygo-yellow)" 
          strokeWidth="6" 
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Lightbulb - Yellow */}
        <circle cx="60" cy="45" r="15" fill="var(--color-sygo-yellow)" fillOpacity="0.8" />
        <path 
          d="M52 58V65H68V58" 
          fill="var(--color-sygo-red)" 
        />
        
        {/* Rays */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
          <line 
            key={angle}
            x1={60 + 18 * Math.cos(angle * Math.PI / 180)}
            y1={45 + 18 * Math.sin(angle * Math.PI / 180)}
            x2={60 + 25 * Math.cos(angle * Math.PI / 180)}
            y2={45 + 25 * Math.sin(angle * Math.PI / 180)}
            stroke="var(--color-sygo-yellow)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        ))}
      </svg>
      
      {/* Red Ribbon at bottom */}
      <div className={`absolute bottom-0 w-[130%] ${isSmall ? 'h-4' : 'h-7'} bg-sygo-red rounded-sm flex items-center justify-center shadow-lg transform -rotate-1 z-20`}>
        <span className={`${isSmall ? 'text-[8px]' : 'text-[14px]'} font-black text-white uppercase tracking-[0.2em]`}>SYGO</span>
        {/* Ribbon Ends */}
        <div className={`absolute -left-3 top-1 w-4 ${isSmall ? 'h-4' : 'h-7'} bg-sygo-red/80 clip-path-ribbon-left -z-10`}></div>
        <div className={`absolute -right-3 top-1 w-4 ${isSmall ? 'h-4' : 'h-7'} bg-sygo-red/80 clip-path-ribbon-right -z-10`}></div>
      </div>
    </div>
  );
};






export default Logo;
