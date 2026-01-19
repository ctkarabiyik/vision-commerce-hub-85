import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Factory, Gauge, ShieldCheck, Zap, Camera, Settings } from "lucide-react";
import solutionManufacturing from "@/assets/solution-manufacturing.jpg";

const features = [
  {
    icon: Gauge,
    title: "High-Speed Inspection",
    description: "Capture and analyze products at line speeds up to 1000+ parts per minute with sub-millisecond exposure times.",
  },
  {
    icon: ShieldCheck,
    title: "Defect Detection",
    description: "Identify surface defects, dimensional variations, and assembly errors with micron-level precision.",
  },
  {
    icon: Zap,
    title: "Real-Time Processing",
    description: "On-board processing capabilities enable immediate pass/fail decisions without latency.",
  },
  {
    icon: Factory,
    title: "Production Integration",
    description: "Seamlessly integrate with PLCs, SCADA systems, and existing manufacturing infrastructure.",
  },
];

const applications = [
  "Surface inspection and defect detection",
  "Dimensional measurement and gauging",
  "Assembly verification",
  "Label and print quality inspection",
  "Color and texture analysis",
  "Barcode and OCR reading",
  "Robot guidance and pick-and-place",
  "Weld seam inspection",
];

const recommendedProducts = [
  {
    name: "ACE-2040 Pro Series",
    description: "High-resolution area scan camera ideal for detailed surface inspection",
    resolution: "4.2 MP",
    slug: "ace-2040-pro-series",
  },
  {
    name: "DART-X Industrial",
    description: "Rugged design for harsh manufacturing environments",
    resolution: "12 MP",
    slug: "dart-x-industrial",
  },
  {
    name: "MV-8000 Ultra",
    description: "Ultra-fast frame rates for high-speed production lines",
    resolution: "8.9 MP",
    slug: "mv-8000-ultra",
  },
];

const ManufacturingSolutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <span>Solutions</span>
            <span>/</span>
            <span className="text-foreground">Manufacturing & Quality Control</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Factory className="w-4 h-4" />
                Industry Solution
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Manufacturing & Quality Control
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your production line with advanced machine vision systems. Our industrial cameras 
                enable automated defect detection, precise measurement, and real-time quality assurance 
                to maximize efficiency and minimize waste.
              </p>
              <Link to="/products">
                <Button size="lg" className="group">
                  Browse Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src={solutionManufacturing} 
                  alt="Manufacturing quality control" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Machine Vision for Manufacturing?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industrial cameras provide consistent, objective inspection that outperforms manual quality control
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Common Applications</h2>
              <p className="text-muted-foreground mb-8">
                Our machine vision solutions address a wide range of manufacturing challenges, from simple 
                presence/absence detection to complex multi-point inspection systems.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{app}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Camera className="w-5 h-5 text-primary" />
                Recommended Products
              </h3>
              <div className="space-y-4">
                {recommendedProducts.map((product, index) => (
                  <Link 
                    key={index}
                    to={`/product/${product.slug}`}
                    className="block p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </div>
                        <div className="text-sm text-muted-foreground">{product.description}</div>
                      </div>
                      <div className="text-sm font-medium text-primary">{product.resolution}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Settings className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Help Choosing the Right Solution?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our application engineers can help you select the optimal camera system for your 
              specific manufacturing requirements. Get a free consultation today.
            </p>
            <Link to="/contact-us">
              <Button size="lg" className="group">
                Request a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ManufacturingSolutions;
