import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera, Phone, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <Camera className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-foreground">VISIONTECH</span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground -mt-1">Industrial Cameras</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group">
              Products
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </a>
            <a href="#categories" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Support
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Phone className="w-4 h-4" />
              <span>1-800-VISION</span>
            </a>
            <Button variant="default">Get Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="#categories" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Categories
              </a>
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Support
              </a>
              <Button variant="default" className="w-full mt-4">Get Quote</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
