import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Grid3X3, LayoutList, Aperture, Focus, Scan, Circle, ZoomIn, Settings, Microscope } from "lucide-react";
import cameraProduct1 from "@/assets/camera-product-1.jpg";
import cameraProduct2 from "@/assets/camera-product-2.jpg";
import cameraProduct3 from "@/assets/camera-product-3.jpg";
import cameraProduct4 from "@/assets/camera-product-4.jpg";

const lensCategories = [
  { id: "all", title: "All Lenses", icon: Aperture, count: 367 },
  { id: "fa-lenses", title: "FA Lenses", icon: Aperture, count: 4 },
  { id: "telecentric", title: "Telecentric Lenses", icon: Focus, count: 48 },
  { id: "vr", title: "VR Lenses", icon: Circle, count: 42 },
  { id: "macro", title: "Macro Lenses", icon: ZoomIn, count: 35 },
  { id: "scheimpflug", title: "Scheimpflug Lenses", icon: Settings, count: 28 },
  { id: "line-scan", title: "Line Scan Lenses", icon: Scan, count: 56 },
  { id: "large-format", title: "Large Format Lenses", icon: Microscope, count: 38 },
];

const products = [
  // FA Lenses
  {
    name: "1/1.7 inch",
    brand: "FA LENS",
    image: cameraProduct2,
    resolution: "1/1.7\"",
    fps: "-",
    interface: "C-Mount",
    category: "fa-lenses",
  },
  {
    name: "2/3 inch Standard",
    brand: "FA LENS",
    image: cameraProduct1,
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    category: "fa-lenses",
  },
  {
    name: "2/3 inch Superior",
    brand: "FA LENS",
    image: cameraProduct3,
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    category: "fa-lenses",
  },
  {
    name: "1.1 inch",
    brand: "FA LENS",
    image: cameraProduct4,
    resolution: "1.1\"",
    fps: "-",
    interface: "C-Mount",
    category: "fa-lenses",
  },
  {
    name: "TelePrecision 0.5x",
    brand: "BASLER",
    image: cameraProduct4,
    resolution: "0.5x Mag",
    fps: "-",
    interface: "Fixed",
    category: "telecentric",
  },
  {
    name: "MeasureOptic 1x",
    brand: "COGNEX",
    image: cameraProduct1,
    resolution: "1x Mag",
    fps: "-",
    interface: "Fixed",
    category: "telecentric",
  },
  {
    name: "AccuView 2x",
    brand: "FLIR",
    image: cameraProduct2,
    resolution: "2x Mag",
    fps: "-",
    interface: "Fixed",
    category: "telecentric",
  },
  {
    name: "BiTelecentric 1.5x",
    brand: "HIKROBOT",
    image: cameraProduct3,
    resolution: "1.5x Mag",
    fps: "-",
    interface: "Fixed",
    category: "telecentric",
  },
  {
    name: "LineScan Optic 35",
    brand: "BASLER",
    image: cameraProduct4,
    resolution: "8K Ready",
    fps: "-",
    interface: "Fixed",
    category: "line-scan",
  },
  {
    name: "WebView LS Pro",
    brand: "COGNEX",
    image: cameraProduct2,
    resolution: "16K Ready",
    fps: "-",
    interface: "Fixed",
    category: "line-scan",
  },
  {
    name: "ScanLine Ultra",
    brand: "FLIR",
    image: cameraProduct1,
    resolution: "12K Ready",
    fps: "-",
    interface: "Fixed",
    category: "line-scan",
  },
  {
    name: "LinearOptic 50",
    brand: "HIKROBOT",
    image: cameraProduct3,
    resolution: "8K Ready",
    fps: "-",
    interface: "Fixed",
    category: "line-scan",
  },
  {
    name: "WideVR 180",
    brand: "BASLER",
    image: cameraProduct3,
    resolution: "180° FOV",
    fps: "-",
    interface: "Fixed",
    category: "vr",
  },
  {
    name: "PanoView Ultra",
    brand: "COGNEX",
    image: cameraProduct2,
    resolution: "220° FOV",
    fps: "-",
    interface: "Fixed",
    category: "vr",
  },
  {
    name: "ImmerseLens 360",
    brand: "FLIR",
    image: cameraProduct4,
    resolution: "360° FOV",
    fps: "-",
    interface: "Fixed",
    category: "vr",
  },
  {
    name: "MacroVision 5x",
    brand: "BASLER",
    image: cameraProduct1,
    resolution: "5x Mag",
    fps: "-",
    interface: "Fixed",
    category: "macro",
  },
  {
    name: "CloseUp Pro 3x",
    brand: "COGNEX",
    image: cameraProduct3,
    resolution: "3x Mag",
    fps: "-",
    interface: "Fixed",
    category: "macro",
  },
  {
    name: "MicroInspect 10x",
    brand: "FLIR",
    image: cameraProduct4,
    resolution: "10x Mag",
    fps: "-",
    interface: "Fixed",
    category: "macro",
  },
  {
    name: "TiltShift Pro",
    brand: "BASLER",
    image: cameraProduct2,
    resolution: "±8° Tilt",
    fps: "-",
    interface: "Adjustable",
    category: "scheimpflug",
  },
  {
    name: "ScheimView 45",
    brand: "COGNEX",
    image: cameraProduct1,
    resolution: "±12° Tilt",
    fps: "-",
    interface: "Adjustable",
    category: "scheimpflug",
  },
  {
    name: "FocusPlane X",
    brand: "FLIR",
    image: cameraProduct3,
    resolution: "±10° Tilt",
    fps: "-",
    interface: "Adjustable",
    category: "scheimpflug",
  },
  {
    name: "LargeView 120mm",
    brand: "BASLER",
    image: cameraProduct1,
    resolution: "APS-H",
    fps: "-",
    interface: "Fixed",
    category: "large-format",
  },
  {
    name: "BigSensor Pro",
    brand: "COGNEX",
    image: cameraProduct4,
    resolution: "Full Frame",
    fps: "-",
    interface: "Fixed",
    category: "large-format",
  },
  {
    name: "MegaFormat 80mm",
    brand: "FLIR",
    image: cameraProduct2,
    resolution: "Medium Format",
    fps: "-",
    interface: "Fixed",
    category: "large-format",
  },
];

const Lenses = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">All Lenses</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              All Lenses
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our complete range of industrial lenses, from FA lenses for factory automation 
              to telecentric and line scan optics. Find the perfect lens for your application.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="bg-card border border-border rounded-lg p-5 sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Filters
                  </h3>
                  <div className="flex items-center border border-border rounded-md">
                    <button className="p-1.5 hover:bg-secondary transition-colors border-r border-border bg-secondary">
                      <Grid3X3 className="w-3.5 h-3.5" />
                    </button>
                    <button className="p-1.5 hover:bg-secondary transition-colors">
                      <LayoutList className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  {lensCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-left w-full ${
                        selectedCategory === category.id 
                          ? 'bg-primary/10 border border-primary' 
                          : 'hover:bg-secondary border border-transparent'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                        selectedCategory === category.id ? 'bg-primary/20' : 'bg-secondary'
                      }`}>
                        <category.icon className={`w-4 h-4 ${
                          selectedCategory === category.id ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium text-sm transition-colors ${
                          selectedCategory === category.id ? 'text-primary' : 'text-foreground'
                        }`}>
                          {category.title}
                        </div>
                        <div className="text-xs text-muted-foreground">{category.count} Products</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Products
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lenses;
