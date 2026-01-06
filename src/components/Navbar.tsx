import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera, ChevronDown, Scan, CircuitBoard, Settings, Microscope, Box } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  {
    icon: Camera,
    title: "Area Scan Cameras",
    description: "High-resolution sensors for quality inspection and measurement",
    count: 156,
  },
  {
    icon: Scan,
    title: "Line Scan Cameras",
    description: "Continuous imaging for web inspection and sorting",
    count: 84,
  },
  {
    icon: CircuitBoard,
    title: "Smart Cameras",
    description: "Built-in processing for edge AI applications",
    count: 62,
  },
  {
    icon: Microscope,
    title: "3D Cameras",
    description: "Depth sensing and volumetric measurement",
    count: 45,
  },
  {
    icon: Settings,
    title: "Embedded Vision",
    description: "Compact modules for OEM integration",
    count: 98,
  },
  {
    icon: Box,
    title: "Accessories",
    description: "Lenses, cables, lighting, and enclosures",
    count: 320,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCategories, setMobileCategories] = useState(false);

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
            <a href="#products" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group outline-none">
                Categories
                <ChevronDown className="w-4 h-4 group-data-[state=open]:rotate-180 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-card border border-border shadow-lg z-50">
                {categories.map((category, index) => (
                  <DropdownMenuItem key={index} className="p-3 cursor-pointer focus:bg-secondary">
                    <a 
                      href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-start gap-3 w-full"
                    >
                      <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-foreground text-sm">{category.title}</div>
                        <div className="text-xs text-muted-foreground">{category.description}</div>
                        <div className="text-xs font-semibold text-primary mt-1">{category.count} Products</div>
                      </div>
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <a href="#support" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Support
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
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
              <button 
                onClick={() => setMobileCategories(!mobileCategories)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 text-left"
              >
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileCategories ? 'rotate-180' : ''}`} />
              </button>
              {mobileCategories && (
                <div className="pl-4 flex flex-col gap-2">
                  {categories.map((category, index) => (
                    <a 
                      key={index}
                      href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      <category.icon className="w-4 h-4" />
                      {category.title}
                    </a>
                  ))}
                </div>
              )}
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
