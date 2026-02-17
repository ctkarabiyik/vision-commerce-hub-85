import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroImage from "@/assets/hero-camera.jpg";
const Hero = () => {
  return <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Industrial Camera" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-accent/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center min-h-[95vh] justify-center">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-medium uppercase tracking-wider text-primary-foreground">DZOPTICS AND DO3THINK AUTHORIZED DISTRIBUTOR

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
              <Download className="w-5 h-5" />
              Download Our Catalog
            </Button>
          </div>

        </div>
      </div>

      {/* Decorative Elements */}
      
    </section>;
};
export default Hero;