import { useEffect, useState } from 'react';
import { ArrowLeft, Heart, Calendar, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FloatingElements } from '@/components/FloatingElements';
import PasswordModal from '@/components/PasswordModal';

interface JourneyMilestone {
  id: number;
  date: string;
  title: string;
  description: string;
  video: string;
  thumbnail: string;
}

const OurJourney = () => {
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

  const milestones: JourneyMilestone[] = [
    {
      id: 1,
      date: "1 March",
      title: "The Day We Met",
      description: "The first glance, the first smile — and something clicked deep in my heart. That day, destiny introduced me to the love of my life.",
      video: "/videos/1_march.mp4",
      thumbnail: "/videos/1_march_thumb.jpg",
    },
    {
      id: 2,
      date: "3 March",
      title: "Our First Dinner Together",
      description: "Nervous laughter, shy smiles, and stolen glances — our first dinner together felt like a scene from a romantic movie.",
      video: "/videos/3_march.mp4",
      thumbnail: "/videos/3_march_thumb.jpg",
    },
    {
      id: 3,
      date: "4 March",
      title: "The First Hellor",
      description: "That first WhatsApp message lit up my screen… and unknowingly, my world too",
      video: "/videos/4_march.mp4",
      thumbnail: "/videos/4_march_thumb.jpg",
    },
    {
      id: 4,
      date: "7 March",
      title: "Another Magical Dinner",
      description: "Another evening, another dinner, another reason to fall a little more for you.",
      video: "/videos/7_march.mp4",
      thumbnail: "/videos/7_march_thumb.jpg",
    },
    {
      id: 5,
      date: "9 March",
      title: "Reel of Emotions",
      description: "You sent me that first reel — silly yet sweet. And just like that, you started living in my heart, rent-free.",
      video: "/videos/9_march.mp4",
      thumbnail: "/videos/9_march_thumb.jpg",
    },
    {
      id: 6,
      date: "14 March",
      title: "Love in the Silence of Night",
      description: "That long night call — words flowed, hearts opened. Somewhere between the pauses, love quietly bloomed.",
      video: "/videos/14_march.mp4",
      thumbnail: "/videos/14_march_thumb.jpg",
    },
    {
      id: 7,
      date: "17 March",
      title: "I Said It First",
      description: "With a pounding heart and trembling voice, I said those three words… and meant every syllable.",
      video: "/videos/17_march.mp4",
      thumbnail: "/videos/17_march_thumb.jpg",
    },
    {
      id: 8,
      date: "20 March",
      title: "You Said It Back",
      description: "You said it — and in that moment, the whole world faded. Just you, me, and 'I love you' echoing in our souls.",
      video: "/videos/20_march.mp4",
      thumbnail: "/videos/20_march_thumb.jpg",
    },
    {
      id: 9,
      date: "30 March",
      title: "Love in Real Life",
      description: "We met again, this time with ‘I love you’ wrapped around every glance and smile. Everything had changed.",
      video: "/videos/30_march.mp4",
      thumbnail: "/videos/30_march_thumb.jpg",
    },
    {
      id: 10,
      date: "3 May",
      title: "My Birthday, Her Surprise",
      description: "You surprised me like a dream come true — making my birthday the most unforgettable one ever.",
      video: "/videos/3_may.mp4",
      thumbnail: "/videos/3_may_thumb.jpg",
    },
    {
      id: 11,
      date: "15 August",
      title: "Her Day, My Angel",
      description: "Your birthday, but I was the one gifted — with your smile, your love, your everything. My precious girl.",
      video: "/videos/15_auguest.mp4",
      thumbnail: "/videos/15_auguest_thumb.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden">
      <FloatingElements />

      <header className="relative z-10 p-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 text-romantic-deep hover:text-primary transition-colors duration-300"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-poppins">Back to Home</span>
        </button>
      </header>

      <main className="relative z-10 px-4 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="section-header">
            <h1 className="section-title">Our Beautiful Journey</h1>
            <p className="section-subtitle">
              The story of us, written in moments, sealed in memories ✨
            </p>
          </div>

          <div className="grid gap-10">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.id}
                className="romantic-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Calendar className="w-5 h-5 text-romantic-deep" />
                  <span className="text-romantic-deep font-semibold font-dancing text-lg">
                    {milestone.date}
                  </span>
                </div>
                <h3 className="text-2xl font-dancing text-romantic-deep mb-3">
                  {milestone.title}
                </h3>

                <div
                  className="w-full max-w-[720px] aspect-video rounded-xl overflow-hidden shadow-soft cursor-pointer hover:scale-105 transition"
                  onClick={() => openModal(milestone.video)}
                >
                  <img
                    src={milestone.thumbnail}
                    alt={`Thumbnail for ${milestone.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-foreground-soft mt-4">{milestone.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <div className="romantic-card max-w-2xl mx-auto">
              <h3 className="text-3xl font-dancing text-romantic-deep mb-4">
                Our Story Continues...
              </h3>
              <p className="text-foreground-soft leading-relaxed">
This is just the beginning of our beautiful journey together. Every day with you adds a new page to our love story, and I can't wait to see what adventures await us.              </p>
              <div className="mt-6 text-2xl">💕</div>
            </div>
          </div>
        </div>
      </main>

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

export default OurJourney;
