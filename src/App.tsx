import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import GreetingCard from "./pages/GreetingCard";
import Index from "./pages/Index";
import OurJourney from "./pages/OurJourney";
import SpecialWishes from "./pages/SpecialWishes";
import Gifts from "./pages/Gifts";
import SpecialMoments from "./pages/SpecialMoments";
import MyPromises from "./pages/MyPromises";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

// ✅ Scroll Behavior
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* ✅ Public Page */}
          <Route path="/" element={<Index />} />

          {/* 🔐 Pages now handle password protection internally */}
         <Route path="/our-journey" element={<OurJourney />} />
<Route path="/special-wishes" element={<SpecialWishes />} />
<Route path="/gifts" element={<Gifts />} />
<Route path="/special-moments" element={<SpecialMoments />} />
<Route path="/my-promises" element={<MyPromises />} />

          {/* Admin or Special */}
          <Route path="/admin" element={<Admin />} />

          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
