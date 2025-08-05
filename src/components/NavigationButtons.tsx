import { useNavigate } from "react-router-dom";
import {
  Heart, Clock, Gift, Camera, MessageCircle, Music,
} from "lucide-react";
import { Card } from "./ui/card";

const navigationItems = [
  {
    title: "Our Journey",
    subtitle: "The beautiful moments we've lived together",
    icon: Clock,
    route: "/our-journey",
    color: "bg-gradient-to-br from-[#FFB6C1] to-[#FFC0CB]",
  },

  {
    title: "Gifts",
    subtitle: "Little tokens of love",
    icon: Gift,
    route: "/gifts",
    color: "bg-gradient-to-br from-[#E6E6FA] to-[#DDA0DD]",
  },

  {
    title: "My Promises",
    subtitle: "My loving vows to you",
    icon: Heart,
    route: "/my-promises",
    color: "bg-gradient-to-br from-[#FFD700] to-[#FFB6C1]",
  },

];

export const NavigationButtons = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.route}
                onClick={() => navigate(item.route)}
                className={`group relative btn-romantic-glow animate-fade-in-up hover:animate-gentle-bounce bg-gradient-to-br ${item.color} p-8 rounded-3xl shadow-romantic hover:shadow-glow transition-all duration-500 hover:scale-105 text-left border-2 border-white/20`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-dancing">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm font-light leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="animate-sparkle text-white">✨</div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
