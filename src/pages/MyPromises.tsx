import { useEffect, useState } from 'react';
import { ArrowLeft, Heart, Play, Crown, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FloatingElements } from '@/components/FloatingElements';
import PasswordModal from '@/components/PasswordModal';

interface PromiseItem {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnail: string;
}

const MyPromises = () => {
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    setUnlocked(false);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      setSelectedVideo(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    window.history.pushState({ modalOpen: true }, '');
  };

  if (!unlocked) {
    return (
      <PasswordModal onClose={() => navigate('/')} onSuccess={() => setUnlocked(true)} />
    );
  }

  const promises: PromiseItem[] = [
    {
      id: 1,
      title: "To Love You More Every Day",
      description: "I promise to love you more each day, in small moments and grand ones, no matter what life brings.",
      videoUrl: "/videos/1_promise.mp4",
      thumbnail: "/videos/1_promise.jpg",
    },
    {
      id: 2,
      title: "To Be Your Safe Space",
      description: "I promise to always be your safe space — someone you can laugh with, cry with, and trust with everything.",
      videoUrl: "/videos/2_promise.mp4",
      thumbnail: "/videos/2_promise.jpg",
    },
    {
      id: 3,
      title: "To Truly Listen",
      description: "I promise to listen — truly listen — to your words, your silence, and your heart.",
      videoUrl: "/videos/3_promise.mp4",
      thumbnail: "/videos/3_promise.jpg",
    },
    {
      id: 4,
      title: "To Stand By You Always",
      description: "I promise to stand by you, not just in your strongest moments, but also when you feel weakest.",
      videoUrl: "/videos/4_promise.mp4",
      thumbnail: "/videos/4_promise.jpg",
    },
    {
      id: 5,
      title: "To Grow With You",
      description: "I promise to grow with you, to support your dreams, and to never hold you back.",
      videoUrl: "/videos/5_promise.mp4",
      thumbnail: "/videos/5_promise.jpg",
    },
    {
      id: 6,
      title: "To Build a Warm Home",
      description: "I promise to make our home a place filled with warmth, peace, and laughter.",
      videoUrl: "/videos/6_promise.mp4",
      thumbnail: "/videos/6_promise.jpg",
    },
    {
      id: 7,
      title: "To Always Make Time",
      description: "I promise to never go to bed angry, and to always make time for us — no matter how busy life gets.",
      videoUrl: "/videos/7_promise.mp4",
      thumbnail: "/videos/7_promise.jpg",
    },
    {
      id: 8,
      title: "To Never Stop Loving You",
      description: "I promise to never stop dating you, flirting with you, and making you feel special.",
      videoUrl: "/videos/8_promise.mp4",
      thumbnail: "/videos/8_promise.jpg",
    },
    {
      id: 9,
      title: "To Say 'I Love You' With Meaning",
      description: "I promise to say “I love you” not out of habit, but from the deepest place in my heart.",
      videoUrl: "/videos/9_promise.mp4",
      thumbnail: "/videos/9_promise.jpg",
    },
    {
      id: 10,
      title: "To Walk With You Always",
      description: "I promise to walk with you — hand in hand, side by side — through every season of life.",
      videoUrl: "/videos/10_promise.mp4",
      thumbnail: "/videos/10_promise.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden">
      <FloatingElements />

      {/* Header */}
      <header className="relative z-10 p-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-romantic-deep hover:text-primary transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-poppins">Back to Home</span>
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-4 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="section-header">
            <h1 className="section-title">My Promises to You</h1>
            <p className="section-subtitle">
              Sacred vows from my heart to yours, promises I make with every beat of my heart
            </p>
          </div>

          {/* Promises Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promises.map((promise, index) => (
              <div
                key={promise.id}
                className="romantic-card group cursor-pointer hover:scale-105 transition-all duration-500 animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => openModal(promise.videoUrl)}
              >
                {/* Crown decoration for first 2 */}
                {index < 2 && (
                  <div className="absolute top-4 right-4 z-10">
                    <Crown className="w-5 h-5 text-yellow-400 fill-current animate-gentle-bounce" />
                  </div>
                )}

                {/* Thumbnail */}
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <img
                    src={promise.thumbnail}
                    alt={promise.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-glow">
                      <Play className="w-6 h-6 text-romantic-deep ml-1 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Heart className="w-5 h-5 text-romantic-deep fill-current" />
                    <h3 className="text-lg font-dancing text-romantic-deep">
                      {promise.title}
                    </h3>
                  </div>
                  <p className="text-sm text-foreground-soft leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Final Promise */}
          <div className="mt-16 text-center">
            <div className="romantic-card max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-2">
                  <Crown className="w-6 h-6 text-yellow-400 fill-current animate-gentle-bounce" />
                  <Crown className="w-6 h-6 text-yellow-400 fill-current animate-gentle-bounce delay-200" />
                  <Crown className="w-6 h-6 text-yellow-400 fill-current animate-gentle-bounce delay-400" />
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-4xl font-dancing text-romantic-deep mb-6">
                  My Greatest Promise
                </h3>
                <div className="space-y-4 text-foreground-soft leading-relaxed">
                  <p>
                    Above all else, I promise to love you not just for who you are today, 
                    but for who you're becoming, who you've been, and every version of yourself in between.
                  </p>
                  <p>
                    I promise that when life gets complicated, when days get hard, when we face challenges – 
                    my love for you will remain the one constant, the one thing you can always count on.
                  </p>
                  <p className="text-romantic-deep font-semibold text-lg font-dancing">
                    You are my forever, Anu. Today, tomorrow, and always. 💕
                  </p>
                </div>
                <div className="mt-8 text-3xl">👑💖👑</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => {
            setSelectedVideo(null);
            window.history.back();
          }}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={selectedVideo}
              className="w-full rounded-lg"
              controls
              preload="metadata"
            />
            <button
              onClick={() => {
                setSelectedVideo(null);
                window.history.back();
              }}
              className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-lg hover:bg-rose-200 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPromises;
