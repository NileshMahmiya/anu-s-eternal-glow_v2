// components/ScratchCard.tsx
import React, { useEffect, useRef, useState } from 'react';

const messages = [
  "Kahi tum swarg se utri hui apsara toh nahi? ✨",
  "Kahi tum meri adhuri kahani ka happy ending toh nahi? 💖",
  "Kahi tum meri zindagi ka magic button toh nahi? 🪄",
  "Kahi tum meri morning chai ki pehli sip toh nahi? ☕",
  "Kahi tum Netflix ki perfect recommendation toh nahi? 🎬",
  "Kahi tum meri story ka favourite plot twist toh nahi? 📖",
  "Kahi tum barish ki wo pehli boond toh nahi? 🌧️",
  "Kahi tum mere sapno ki permanent guest toh nahi? 😴",
  "Kahi tum mere har smile ke peeche ki wajah toh nahi? 😊",
  "Kahi tum meri life ki loading screen ka final result toh nahi? ⏳",
  "Kahi tum Google pe bhi na milne wali search result toh nahi? 🔍",
  "Kahi tum mere har dua ka hidden answer toh nahi? 🙏",
  "Kahi tum chand ke us paar wali fairytale queen toh nahi? 🌙👑",
  "Kahi tum meri playlist ka hidden love track toh nahi? 🎵",
  "Kahi tum dil ki diary ka secret page toh nahi? 📝",
  "Kahi tum meri boring life ka unlimited data pack toh nahi? 📶",
  "Kahi tum WhatsApp typing wali wait ka perfect reply toh nahi? 💬",
  "Kahi tum meri aankhon ka full HD dream toh nahi? 👀✨",
  "Kahi tum ek chutki sindoor mein simti zindagi toh nahi? 🥰",
  "Kahi tum chocolate ke beech chhupi soft filling toh nahi? 🍫",
  "Kahi tum mere life ka bonus level toh nahi? 🎮",
  "Kahi tum meri aankhon mein basa hua Ghar toh nahi? 🏠",
  "Kahi tum ek khamoshi mein chhupi dastaan toh nahi? 🔐",
  "Kahi tum Instagram reel ka perfect trend toh nahi? 🎥",
];

export const ScratchCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [message] = useState(() => {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    const { offsetWidth: width, offsetHeight: height } = container;

    canvas.width = width;
    canvas.height = height;

    // Fill with grey scratch layer
    if (ctx) {
      ctx.fillStyle = '#d3d3d3'; // Silver shade
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'destination-out';
    }

    let isDrawing = false;

    const draw = (x: number, y: number) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.arc(x, y, 24, 0, Math.PI * 2);
      ctx.fill();
    };

    const getXY = (e: any) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const handleStart = (e: any) => {
      isDrawing = true;
      const { x, y } = getXY(e);
      draw(x, y);
    };

    const handleMove = (e: any) => {
      if (!isDrawing) return;
      const { x, y } = getXY(e);
      draw(x, y);
    };

    const handleEnd = () => {
      isDrawing = false;
    };

    canvas.addEventListener('mousedown', handleStart);
    canvas.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleEnd);

    canvas.addEventListener('touchstart', handleStart);
    canvas.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleEnd);

    return () => {
      canvas.removeEventListener('mousedown', handleStart);
      canvas.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);

      canvas.removeEventListener('touchstart', handleStart);
      canvas.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-xl mx-auto h-48 my-20 rounded-xl overflow-hidden bg-pink-100 shadow-xl border-2 border-romantic-deep"
    >
      <div className="absolute inset-0 z-0 flex items-center justify-center px-6 text-center">
        <p className="text-2xl md:text-3xl font-dancing text-romantic-deep leading-snug">
          {message}
        </p>
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 z-10 touch-none" />
    </div>
  );
};
