import { useEffect, useState } from "react";
import { Heart, Sparkles } from "lucide-react";

export const FloatingElements = () => {
  const [elements, setElements] = useState<
    Array<{
      id: number;
      type: "heart" | "sparkle" | "strawberry-emoji" | "strawberry-img";
      left: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const items = [];

    for (let i = 0; i < 5; i++) {
      items.push({ id: i, type: "heart", left: Math.random() * 100, delay: Math.random() * 6 });
    }
    for (let i = 5; i < 10; i++) {
      items.push({ id: i, type: "sparkle", left: Math.random() * 100, delay: Math.random() * 4 });
    }
    for (let i = 10; i < 13; i++) {
      items.push({ id: i, type: "strawberry-emoji", left: Math.random() * 100, delay: Math.random() * 6 });
    }
    for (let i = 13; i < 16; i++) {
      items.push({ id: i, type: "strawberry-img", left: Math.random() * 100, delay: Math.random() * 5 });
    }

    setElements(items);
  }, []);

  const playSound = () => {
    const pop = new Audio("/pop.mp3");
    pop.currentTime = 0;
    pop.play().catch(() => {});
  };

  return (
    <div className="floating-hearts">
      {elements.map((el) => (
        <div
          key={el.id}
          className={`absolute animate-float-up`}
          style={{
            left: `${el.left}%`,
            animationDelay: `${el.delay}s`,
            pointerEvents: "auto",
            cursor: "pointer",
          }}
          onClick={playSound}
        >
          {el.type === "heart" && (
            <Heart className="text-romantic/60" size={20} />
          )}
          {el.type === "sparkle" && (
            <Sparkles className="text-romantic/80" size={14} />
          )}
          {el.type === "strawberry-emoji" && (
            <span className="text-[24px] opacity-70 hover:scale-125 transition-transform duration-200">🍓</span>
          )}
          {el.type === "strawberry-img" && (
            <img
              src="/strawberry.png"
              alt="floating strawberry"
              className="w-6 h-6 opacity-70 hover:scale-125 transition-transform duration-200"
            />
          )}
        </div>
      ))}
    </div>
  );
};
