import { useEffect, useState } from "react";

export const Countdown = () => {
  const calculateTimeLeft = () => {
    const weddingDate = new Date("2025-11-22T00:00:00");
    const now = new Date();
    const difference = weddingDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container px-4">
      <h2 className="countdown-title text-xl sm:text-2xl md:text-3xl font-dancing text-romantic-deep mb-4">
        Countdown to Our Wedding 💍 (22nd Nov)
      </h2>
      <div className="flex justify-center flex-wrap gap-4 md:gap-6">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="countdown-box min-w-[70px] sm:min-w-[90px] px-4 py-3 rounded-2xl shadow-soft bg-card text-center"
          >
            <span className="countdown-number block text-3xl sm:text-4xl font-bold text-romantic-deep">
              {String(value).padStart(2, "0")}
            </span>
            <span className="countdown-label text-xs sm:text-sm capitalize text-foreground-soft">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
