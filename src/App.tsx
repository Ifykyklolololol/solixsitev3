import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Scripts from "./pages/Scripts";
import Loader from "./pages/Loader";
import RawLoader from "./pages/RawLoader";
import GameDetail from "./pages/GameDetail";
import Tutorials from "./pages/Tutorials";
import Social from "./pages/Social";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/scripts" element={<Scripts />} />
          <Route path="/scripts/:slug" element={<GameDetail />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/social" element={<Social />} />
          <Route path="/loader" element={<RawLoader />} />
          <Route path="/loader-ui" element={<Loader />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
