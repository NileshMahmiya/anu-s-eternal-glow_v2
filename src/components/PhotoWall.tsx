import { useEffect, useState } from "react";
import Modal from "react-modal";

interface Photo {
  id: number;
  src: string;
  alt: string;
}

Modal.setAppElement("#root"); // For accessibility

export const PhotoWall = () => {
  const [photos] = useState<Photo[]>([
   { id: 1, src: '/Wimg1.jpeg', alt: 'Kahi tum meri zindagi ka sabse khoobsurat pal toh nahi? 💖' },
  { id: 2, src: '/Wimg2.jpeg', alt: 'Kahi tum chocolate se bhi zyada meethi toh nahi? 🍫' },
  { id: 3, src: '/Wimg3.jpeg', alt: 'Kahi tum chandni raat ka sapna toh nahi? 🌙' },
  { id: 4, src: '/Wimg4.jpeg', alt: 'Kahi tum meri aankhon ka sparkle toh nahi? ✨' },
  { id: 5, src: '/Wimg5.jpeg', alt: 'Kahi tum barish ki pehli boond toh nahi? ☔️' },
  { id: 6, src: '/Wimg6.jpeg', alt: 'Kahi tum meri khamoshi mein chhupi mohabbat toh nahi? 💞' },
  { id: 7, src: '/Wimg7.jpeg', alt: 'Kahi tum kisi fairy tale ki lost princess toh nahi? 👑' },
  { id: 8, src: '/Wimg8.jpeg', alt: 'Kahi tum meri coffee ka perfect sugar level toh nahi? ☕️🍬' },
  { id: 9, src: '/Wimg9.jpeg', alt: 'Kahi tum meri smile ka secret reason toh nahi? 😊' },
  { id: 10, src: '/Wimg10.jpeg', alt: 'Kahi tum meri life ka sabse pyara wallpaper toh nahi? 🖼️' },
  { id: 11, src: '/Wimg11.jpeg', alt: 'Kahi tum ek dua ka hasil toh nahi? 🙏' },
  { id: 12, src: '/Wimg12.jpeg', alt: 'Kahi tum Rab ki personal creation toh nahi? 🎨' },
  { id: 13, src: '/Wimg13.jpeg', alt: 'Kahi tum meri adhoori kahani ki poori shayari toh nahi? 📖' },
  { id: 14, src: '/Wimg14.jpeg', alt: 'Kahi tum meri playlist ka sabse pyaara gaana toh nahi? 🎶' },
  { id: 15, src: '/Wimg15.jpeg', alt: 'Kahi tum meri duniya ka cutest bug toh nahi? 🐞' },
  { id: 16, src: '/Wimg16.jpeg', alt: 'Kahi tum chand ka tukda toh nahi? 🌙' },
  { id: 17, src: '/Wimg17.jpeg', alt: 'Kahi tum meri har subah ki sabse pyaari wajah toh nahi? 🌅' },
  { id: 18, src: '/Wimg18.jpeg', alt: 'Kahi tum meri aankhon mein basa hua sapna toh nahi? 💫' },
  { id: 19, src: '/Wimg19.jpeg', alt: 'Kahi tum meri har khushi ka raaz toh nahi? 🗝️' },
  { id: 20, src: '/Wimg20.jpeg', alt: 'Kahi tum swarg se utri hui apsara toh nahi? ✨' }
  ]);

  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handlePhotoClick = (photo: Photo) => {
    const sound = new Audio("/click.mp3");
    sound.play().catch((e) => console.warn("Sound error", e));
    setSelectedPhoto(photo);
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(40px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease both;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      if (selectedPhoto) {
        setSelectedPhoto(null);
        window.history.pushState(null, "", window.location.pathname);
      }
    };

    window.addEventListener("popstate", handlePopState);

    if (selectedPhoto) {
      window.history.pushState(null, "", window.location.pathname);
    }

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [selectedPhoto]);

  return (
    <section className="py-16 px-4 bg-white/10 rounded-2xl shadow-xl backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-dancing text-romantic-deep mb-2">
            A Gallery of Your Beauty
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Every photo tells a story of your grace, your smile, and the light you bring into my world.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="relative rounded-xl overflow-hidden shadow-romantic transform transition duration-500 hover:scale-105 hover:shadow-glow animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
              onClick={() => handlePhotoClick(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-48 md:h-64 object-cover cursor-pointer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm">{photo.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-romantic-deep font-dancing text-2xl">
            Each moment captured, each memory treasured... just like you 💕
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={!!selectedPhoto}
        onRequestClose={() => setSelectedPhoto(null)}
        contentLabel="Photo Modal"
        className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
        overlayClassName="overlay"
      >
        {selectedPhoto && (
          <div className="relative max-w-3xl mx-auto p-4 bg-white rounded-2xl shadow-xl">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-2 right-3 text-black text-2xl"
            >
              ✖
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="max-w-full max-h-[80vh] rounded-lg"
            />
            <p className="text-center text-lg font-dancing mt-2">{selectedPhoto.alt}</p>
          </div>
        )}
      </Modal>
    </section>
  );
};
