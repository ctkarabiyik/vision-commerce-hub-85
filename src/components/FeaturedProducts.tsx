import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, FileText, BookOpen, Code, Wrench, HelpCircle } from "lucide-react";
import cameraProduct1 from "@/assets/camera-product-1.jpg";
import cameraProduct2 from "@/assets/camera-product-2.jpg";
import cameraProduct3 from "@/assets/camera-product-3.jpg";
import cameraProduct4 from "@/assets/camera-product-4.jpg";

const products = [
  {
    name: "ACE-2040 Pro Series",
    brand: "BASLER",
    image: cameraProduct1,
    resolution: "4.2 MP",
    fps: "120",
    interface: "GigE",
    slug: "ace-2040-pro-series",
  },
  {
    name: "DART-X Industrial",
    brand: "COGNEX",
    image: cameraProduct2,
    resolution: "12 MP",
    fps: "60",
    interface: "USB 3.0",
    slug: "dart-x-industrial",
  },
  {
    name: "APEX Vision Core",
    brand: "FLIR",
    image: cameraProduct3,
    resolution: "5.1 MP",
    fps: "90",
    interface: "CoaXPress",
    slug: "apex-vision-core",
  },
  {
    name: "MV-8000 Ultra",
    brand: "HIKROBOT",
    image: cameraProduct4,
    resolution: "8.9 MP",
    fps: "75",
    interface: "10GigE",
    slug: "mv-8000-ultra",
  },
];

const softwareDownloads = [
  {
    title: "VisionTech SDK",
    description: "Complete software development kit for camera integration",
    version: "v3.2.1",
    icon: Code,
  },
  {
    title: "Camera Viewer",
    description: "Live preview and configuration utility",
    version: "v2.1.0",
    icon: Wrench,
  },
  {
    title: "Firmware Updates",
    description: "Latest firmware for all camera models",
    version: "v1.8.4",
    icon: Download,
  },
];

const knowledgeArticles = [
  {
    title: "Getting Started Guide",
    description: "Step-by-step setup instructions for first-time users",
    category: "Tutorial",
    icon: BookOpen,
  },
  {
    title: "Integration Best Practices",
    description: "Optimize camera performance in industrial environments",
    category: "Technical",
    icon: FileText,
  },
  {
    title: "Troubleshooting FAQ",
    description: "Solutions to common issues and questions",
    category: "Support",
    icon: HelpCircle,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-2">
              <div className="w-8 h-0.5 bg-primary" />
              Featured Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Industrial-Grade Cameras
            </h2>
          </div>
          <Link to="/area-scan-cameras">
            <Button variant="outline" className="mt-4 md:mt-0 group">
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Resources Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Software Downloads */}
          <div className="bg-secondary rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground">Software Downloads</h3>
              <Button variant="link" className="px-0 text-sm">
                View all →
              </Button>
            </div>
            <div className="space-y-3">
              {softwareDownloads.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-3 flex items-center gap-3 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-xs text-muted-foreground bg-background px-2 py-0.5 rounded hidden sm:block">
                      {item.version}
                    </span>
                    <Button size="sm" variant="outline" className="h-8 px-3 gap-1">
                      <Download className="w-3 h-3" />
                      <span className="hidden sm:inline">Download</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Knowledge Articles */}
          <div className="bg-secondary rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground">Knowledge Base</h3>
              <Button variant="link" className="px-0 text-sm">
                Browse all →
              </Button>
            </div>
            <div className="space-y-3">
              {knowledgeArticles.map((article, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-card border border-border rounded-lg p-3 flex items-center gap-3 hover:border-primary/50 transition-colors group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/50 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <article.icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-xs text-muted-foreground truncate">{article.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-background px-2 py-0.5 rounded flex-shrink-0">
                    {article.category}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
