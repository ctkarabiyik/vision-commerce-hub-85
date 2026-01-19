import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import AreaScanCameras from "./pages/AreaScanCameras";
import ProductDetail from "./pages/ProductDetail";
import ContactUs from "./pages/ContactUs";
import SoftwareDownloads from "./pages/SoftwareDownloads";
import KnowledgeBase from "./pages/KnowledgeBase";
import ManufacturingSolutions from "./pages/ManufacturingSolutions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/area-scan-cameras" element={<AreaScanCameras />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/software-downloads" element={<SoftwareDownloads />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/solutions/manufacturing" element={<ManufacturingSolutions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
