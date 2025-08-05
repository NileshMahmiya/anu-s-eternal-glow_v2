import { useState } from "react";
import "./GreetingCard.css";

const GreetingCard = () => {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    const audio = new Audio("/greeting.mp3");
    audio.play().catch(() => {});
  };

  return (
    <div className="card-page bg-gradient-soft min-h-screen flex items-center justify-center p-6">
      <div
        className={`card-wrapper ${opened ? "open" : ""}`}
        onClick={!opened ? handleOpen : undefined}
      >
        <div className="greeting-card">
          <div className="card-left-panel">
            <img src="/card-photo.jpg" alt="Love" className="taped-photo" />
          </div>
          <div className="card-right-panel">
            <h2 className="font-dancing text-romantic-deep text-4xl mb-4">My Love,</h2>
            <p className="text-foreground-soft text-lg">
              This card unfolds just like our love — beautifully and endlessly. 💖
            </p>
            <p className="text-romantic mt-4 text-xl font-dancing">Happy Birthday, Ananya! 🎂</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
