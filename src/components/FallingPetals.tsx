import React, { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number; // percentage 0-100
  size: number; // px
  duration: number; // seconds
  delay: number; // seconds
  swayAmount: number;
  rotateZ: number;
  opacity: number;
}

export const FallingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsEnabled(false);
    }

    // Generate balanced, gentle petals
    const newPetals: Petal[] = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 12 + 10, // 10px to 22px
      duration: Math.random() * 8 + 9, // 9s to 17s
      delay: Math.random() * 10,
      swayAmount: (Math.random() - 0.5) * 80,
      rotateZ: Math.random() * 360,
      opacity: Math.random() * 0.4 + 0.3,
    }));

    setPetals(newPetals);
  }, []);

  if (!isEnabled) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-20 overflow-hidden"
      aria-hidden="true"
    >
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute -top-10"
          style={{
            left: `${petal.left}%`,
            animation: `petalFall ${petal.duration}s linear infinite`,
            animationDelay: `${petal.delay}s`,
            opacity: petal.opacity,
          }}
        >
          {/* Stylized organic sakura petal SVG */}
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 30 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: `rotate(${petal.rotateZ}deg)`,
              filter: 'drop-shadow(0 2px 4px rgba(247, 200, 216, 0.4))',
            }}
          >
            <path
              d="M15 0 C 7 10, 0 22, 5 33 C 9 40, 21 40, 25 33 C 30 22, 23 10, 15 0 Z"
              fill="#F7C8D8"
            />
            <path
              d="M15 0 C 13 8, 11 18, 14 28 C 15 32, 16 35, 15 38"
              stroke="#FCE8ED"
              strokeWidth="0.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
