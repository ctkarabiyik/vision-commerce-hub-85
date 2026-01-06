import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Eye, Zap } from "lucide-react";
import heroImage from "@/assets/hero-camera.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial Camera"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-accent/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground">
              Authorized Distributor
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Industrial Vision
            <span className="block text-gradient-red">Engineered for Excellence</span>
          </h1>

          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl leading-relaxed">
            Premium machine vision cameras for quality inspection, robotics, and automation. 
            Trusted by industry leaders worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="hero" className="group">
              Browse Cameras
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline">
              Request Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-foreground/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">500+</div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-wide">Camera Models</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">20+</div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-wide">Top Brands</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-primary/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">24/7</div>
                <div className="text-xs text-primary-foreground/60 uppercase tracking-wide">Tech Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      
    </section>
  );
};

export default Hero;
