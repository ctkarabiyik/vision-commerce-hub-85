import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera, ChevronDown, Scan, CircuitBoard, Settings, Microscope, Box } from "lucide-react";
import cameraProduct1 from "@/assets/camera-product-1.jpg";
import cameraProduct2 from "@/assets/camera-product-2.jpg";
import cameraProduct3 from "@/assets/camera-product-3.jpg";
import cameraProduct4 from "@/assets/camera-product-4.jpg";

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

const featuredProducts = [
  {
    name: "ACE-2040 Pro Series",
    brand: "BASLER",
    image: cameraProduct1,
    resolution: "4.2 MP",
  },
  {
    name: "DART-X Industrial",
    brand: "COGNEX",
    image: cameraProduct2,
    resolution: "12 MP",
  },
  {
    name: "APEX Vision Core",
    brand: "FLIR",
    image: cameraProduct3,
    resolution: "5.1 MP",
  },
  {
    name: "MV-8000 Ultra",
    brand: "HIKROBOT",
    image: cameraProduct4,
    resolution: "8.9 MP",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCategories, setMobileCategories] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

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
            <div 
              className="relative"
              onMouseEnter={() => setDesktopDropdownOpen(true)}
              onMouseLeave={() => setDesktopDropdownOpen(false)}
            >
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group outline-none">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${desktopDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
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
              <button 
                onClick={() => setMobileCategories(!mobileCategories)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 text-left"
              >
                Products
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

      {/* Full-width Mega Menu */}
      <div 
        className={`absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg transition-all duration-200 z-50 ${
          desktopDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onMouseEnter={() => setDesktopDropdownOpen(true)}
        onMouseLeave={() => setDesktopDropdownOpen(false)}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex gap-6">
            {/* Categories Section */}
            <div className="w-48 flex-shrink-0">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Categories</h3>
              <div className="flex flex-col gap-1">
                {categories.map((category, index) => (
                  <a 
                    key={index}
                    href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 p-1.5 rounded hover:bg-secondary transition-colors group"
                  >
                    <category.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors">{category.title}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Featured Products Section */}
            <div className="flex-1 border-l border-border pl-6 overflow-hidden">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Featured Products</h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {featuredProducts.map((product, index) => (
                  <a 
                    key={index}
                    href="#products"
                    className="group flex-shrink-0"
                  >
                    <div className="w-24 h-24 bg-secondary rounded-md overflow-hidden mb-1.5">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-[10px] text-primary font-semibold">{product.brand}</div>
                    <div className="text-xs font-medium text-foreground group-hover:text-primary transition-colors truncate w-24">{product.name}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;