import { useNavigate } from 'react-router-dom';
import { FloatingElements } from '@/components/FloatingElements';
import { NavigationButtons } from '@/components/NavigationButtons';
import { PhotoWall } from '@/components/PhotoWall';
import { Countdown } from '@/components/Countdown';
import { ScratchCard } from '@/components/ScratchCard';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden">
      <FloatingElements />

      <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 animate-fade-in-up">
            <h1 className="zoom-title text-5xl md:text-7xl lg:text-8xl font-dancing text-romantic-deep mb-8 leading-tight">
              Happy Birthday, Ananya
              <span
                role="button"
                onClick={() => {
                  const pop = new Audio('/pop.mp3');
                  pop.currentTime = 0;
                  pop.play().catch((err) => console.error("Audio play error", err));
                }}
                className="inline-block cursor-pointer transition-transform hover:scale-125"
                title="Click me 🍓"
              >
                🍓
              </span>
            </h1>

            <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg md:text-xl text-foreground-soft leading-relaxed sm:leading-relaxed md:leading-loose">
              <p className="animate-fade-in-up delay-200">
                My dearest love, on this special day, I want you to know that you are the most beautiful chapter in the story of my life.
              </p>
              <p className="animate-fade-in-up delay-300">
                Every sunrise is brighter because you're in it, every sunset more beautiful because I get to share it with you.
              </p>
              <p className="animate-fade-in-up delay-400">
                Today, I celebrate not just your birthday, but the incredible woman you are —
                your kindness, your strength, your love that makes everything in this world feel possible.
              </p>
              <p className="animate-fade-in-up delay-500 text-romantic-deep font-semibold text-2xl font-dancing">
                You are my forever, my always, my everything. 💕
              </p>
            </div>
          </div>

          <Countdown />

          <div className="flex justify-center space-x-8 mb-16 animate-fade-in-up delay-600">
            <div className="animate-gentle-bounce delay-100">🌸</div>
            <div className="animate-gentle-bounce delay-200">💖</div>
            <div className="animate-gentle-bounce delay-300">🌟</div>
            <div className="animate-gentle-bounce delay-400">💕</div>
            <div className="animate-gentle-bounce delay-500">🌸</div>
          </div>
        </div>
      </section>

      {/* Flipbook */}
      <div className="flipbook-wrapper">
        <div className="gallery">
          <img src="/img1.jpg" alt="a lovely kiss in the night" />
          <img src="/img2.jpg" alt="a woman inside a car" />
          <img src="/img3.jpg" alt="cute memory" />
          <img src="/img4.jpg" alt="sweet couple" />
          <img src="/img5.jpg" alt="smiling together" />
        </div>
      </div>

      {/* Navigation + PhotoWall */}
      <NavigationButtons />
      <PhotoWall />

      {/* Footer with Miss You Line and Scratch Card */}
      <section className="py-16 px-4 text-center relative">
        <div className="max-w-2xl mx-auto">
          <p
            onClick={() => {
              const miss = new Audio('/miss.mp3');
              miss.currentTime = 0;
              miss.play().catch((err) => console.error("Audio play error", err));
            }}
            className="text-3xl font-dancing text-romantic-deep mb-6 cursor-pointer hover:scale-105 transition-transform duration-300"
            title="Click to hear"
          >
            Tumhe Miss Karta Hu! 💖
          </p>

          <div className="mt-6">
            {/* <ScratchCard /> */}
          </div>
        </div>
      </section>

      {/* CSS for Zoom Animation */}
      <style>{`
        .zoom-title {
          animation: zoomPulse 4s ease-in-out infinite;
          display: inline-block;
        }

        @keyframes zoomPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.06);
          }
        }

        .gallery {
          --d: 10s;
          display: grid;
          place-items: right;
          width: 200px;
          margin-left: auto;
          margin-right: auto;
        }

        .gallery > img {
          grid-area: 1/1;
          width: 100%;
          aspect-ratio: 1;
          object-fit: cover;
          border: 10px solid #f2f2f2;
          box-shadow: 0 0 4px #0007;
          z-index: 2;
          animation: slide var(--d) infinite, z-order var(--d) infinite steps(1);
        }

        .gallery img:last-child {
          animation-name: slide, z-order-last;
        }

        .gallery > img:nth-child(1) { animation-delay: calc(0*var(--d)); --r: 16deg; }
        .gallery > img:nth-child(2) { animation-delay: calc(-0.2*var(--d)); --r: -1deg; }
        .gallery > img:nth-child(3) { animation-delay: calc(-0.4*var(--d)); --r: -19deg; }
        .gallery > img:nth-child(4) { animation-delay: calc(-0.6*var(--d)); --r: 6deg; }
        .gallery > img:nth-child(5) { animation-delay: calc(-0.8*var(--d)); --r: -8deg; }

        @keyframes slide {
          10% { transform: translateX(120%) rotate(var(--r)); }
          0%, 100%, 20% { transform: translateX(0%) rotate(var(--r)); }
        }

        @keyframes z-order {
          10%, 20% { z-index: 1; }
          80% { z-index: 2; }
        }

        @keyframes z-order-last {
          10%, 20% { z-index: 1; }
          90% { z-index: 2; }
        }

        @media only screen and (max-width: 600px) {
          .zoom-title {
            font-size: 36px;
          }

          .gallery {
            width: 150px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default Index;
