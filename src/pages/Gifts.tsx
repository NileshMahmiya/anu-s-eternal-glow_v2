import { useEffect, useState } from 'react';
import { ArrowLeft, Gift, Play, Heart, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FloatingElements } from '@/components/FloatingElements';
import PasswordModal from '@/components/PasswordModal';

interface GiftVideo {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  occasion: string;
}

const Gifts = () => {
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    setUnlocked(false);
  }, []);

  // Back button listener for modal
  useEffect(() => {
    const handlePopState = () => {
      setSelectedVideo(null);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    window.history.pushState({ modalOpen: true }, '');
  };

  if (!unlocked) {
    return (
      <PasswordModal
        onClose={() => navigate('/')}
        onSuccess={() => setUnlocked(true)}
      />
    );
  }

  const giftVideos: GiftVideo[] = [
    {
      id: 1,
      title: "The Website of Us",
      description: "A digital world crafted just for you, where our love story lives forever.",
      thumbnail: "/videos/gift_1.jpg",
      videoUrl: "/videos/1_gift.mp4",
      occasion: "Her Birthday"
    },
    {
      id: 2,
      title: "Mood Changing Doll",
      description: "A cute little companion that matches your every expression.",
      thumbnail: "/videos/gift_2.jpg",
      videoUrl: "/videos/2_gift.mp4",
      occasion: "Just Because"
    },
    {
      id: 3,
      title: "Mini You Doll",
      description: "A doll with your face, because you're my favorite person in every form.",
      thumbnail: "/videos/gift_3.jpg",
      videoUrl: "/videos/3_gift.mp4",
      occasion: "Random Surprise"
    },
    {
      id: 4,
      title: "Timeless Gift",
      description: "A watch to remind you that every second with you is precious.",
      thumbnail: "/videos/gift_4.jpg",
      videoUrl: "/videos/4_gift.mp4",
      occasion: "Time Together"
    },
    {
      id: 5,
      title: "Care & Comfort Pad",
      description: "To ease your pain and show you that I’ll always care for your comfort.",
      thumbnail: "/videos/gift_5.jpg",
      videoUrl: "/videos/5_gift.mp4",
      occasion: "With Love"
    },
    {
      id: 6,
      title: "Moon Crystal Ball",
      description: "A glowing moon to hold in your hands—just like how you light up my world.",
      thumbnail: "/videos/gift_6.jpg",
      videoUrl: "/videos/6_gift.mp4",
      occasion: "Night Surprise"
    },
    {
      id: 7,
      title: "Galaxy Projector",
      description: "The stars, the moon, and the earth—all shining just for you.",
      thumbnail: "/videos/gift_7.jpg",
      videoUrl: "/videos/7_gift.mp4",
      occasion: "Stargazing Together"
    },
    {
      id: 8,
      title: "Radha Krishna Crystal Ball",
      description: "Their eternal love now sits by your side, just like ours forever will.",
      thumbnail: "/videos/gift_8.jpg",
      videoUrl: "/videos/8_gift.mp4",
      occasion: "Spiritual Love"
    },
    {
      id: 9,
      title: "Ram Sita Frame",
      description: "A divine frame of love, loyalty, and forever companionship.",
      thumbnail: "/videos/gift_9.jpg",
      videoUrl: "/videos/9_gift.mp4",
      occasion: "Blessings of Love"
    },
    {
      id: 10,
      title: "Musical Birthday Card",
      description: "A song-filled surprise to make your special day even sweeter.",
      thumbnail: "/videos/gift_10.jpg",
      videoUrl: "/videos/10_gift.mp4",
      occasion: "Happy Birthday"
    },
    {
      id: 11,
      title: "Best Wife Certificate",
      description: "Because there’s no award that can match the love you deserve.",
      thumbnail: "/videos/gift_11.jpg",
      videoUrl: "/videos/11_gift.mp4",
      occasion: "You Deserve the World"
    },
    {
      id: 12,
      title: "Custom Chocolate",
      description: "Sweet on the outside, sweeter on the inside—just like you.",
      thumbnail: "/videos/gift_12.jpg",
      videoUrl: "/videos/12_gift.mp4",
      occasion: "Sugar Rush of Love"
    },
    {
      id: 13,
      title: "Long Elegant Dress",
      description: "To see you shine like a queen in every step you take.",
      thumbnail: "/videos/gift_13.jpg",
      videoUrl: "/videos/13_gift.mp4",
      occasion: "Special Outing"
    },
    {
      id: 14,
      title: "Chic Short Dress",
      description: "A little dress, a lot of charm—just like my gorgeous girl.",
      thumbnail: "/videos/gift_14.jpg",
      videoUrl: "/videos/14_gift.mp4",
      occasion: "Cute Date"
    },
    {
      id: 15,
      title: "Handmade Cards",
      description: "Crafted with love, inked with feelings, sealed with my heart.",
      thumbnail: "/videos/gift_15.jpg",
      videoUrl: "/videos/15_gift.mp4",
      occasion: "From the Heart"
    }
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
      <main className="relative z-10 px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="section-header">
            <h1 className="section-title">Gifts From My Heart</h1>
            <p className="section-subtitle">
              Little tokens of my love, each one chosen with you in mind
            </p>
          </div>

          {/* Gifts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {giftVideos.map((gift, index) => (
              <div
                key={gift.id}
                className={`romantic-card group cursor-pointer hover:scale-105 transition-all duration-500 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Thumbnail with play button */}
                <div
                  className="relative mb-6 rounded-xl overflow-hidden"
                  onClick={() => openModal(gift.videoUrl)}
                >
                  <img
                    src={gift.thumbnail}
                    alt={gift.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-glow">
                      <Play className="w-6 h-6 text-romantic-deep ml-1 fill-current" />
                    </div>
                  </div>
                  {/* Occasion badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-romantic-deep px-3 py-1 rounded-full text-xs font-medium">
                      {gift.occasion}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Gift className="w-5 h-5 text-romantic-deep" />
                    <h3 className="text-xl font-dancing text-romantic-deep">
                      {gift.title}
                    </h3>
                  </div>
                  <p className="text-foreground-soft leading-relaxed">
                    {gift.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Love Note */}
          <div className="mt-16 text-center">
            <div className="romantic-card max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Heart className="w-6 h-6 text-romantic-deep fill-current animate-gentle-bounce" />
                <h3 className="text-3xl font-dancing text-romantic-deep">
                  Every Gift, A Love Letter
                </h3>
                <Heart className="w-6 h-6 text-romantic-deep fill-current animate-gentle-bounce delay-300" />
              </div>
              <p className="text-foreground-soft leading-relaxed">
                Each gift I give you isn't just an object — it's a piece of my heart, 
                a moment where I saw something and thought "this would make her smile." 
                Because your happiness is my greatest treasure.
              </p>
              <div className="mt-6 text-2xl">🎁💕</div>
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

export default Gifts;
