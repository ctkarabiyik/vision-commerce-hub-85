import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Grid3X3, LayoutList, Aperture, Focus, Scan, Circle, ZoomIn, Settings, Microscope, Sun } from "lucide-react";
import cameraProduct1 from "@/assets/camera-product-1.jpg";
import cameraProduct2 from "@/assets/camera-product-2.jpg";
import cameraProduct3 from "@/assets/camera-product-3.jpg";
import cameraProduct4 from "@/assets/camera-product-4.jpg";
import faLens117 from "@/assets/fa-lens-1-1-7.png";
import faLens23Standard from "@/assets/fa-lens-2-3-standard.png";
import faLens23Superior from "@/assets/fa-lens-2-3-superior.png";
import faLens11 from "@/assets/fa-lens-1-1.png";
// Telecentric lens images
import telecentric23Coaxial from "@/assets/telecentric-23-coaxial.png";
import telecentric11Coaxial from "@/assets/telecentric-11-coaxial.png";
import telecentric12Coaxial from "@/assets/telecentric-12-coaxial.png";
import telecentricLargeCoaxial from "@/assets/telecentric-large-coaxial.png";
import telecentric12NonCoaxial from "@/assets/telecentric-12-noncoaxial.png";
import telecentric23NonCoaxial from "@/assets/telecentric-23-noncoaxial.png";
import telecentric11NonCoaxial from "@/assets/telecentric-11-noncoaxial.png";
import telecentric12NonCoaxialAlt from "@/assets/telecentric-12-noncoaxial-alt.png";
import telecentric18 from "@/assets/telecentric-18.png";

import telecentricLargeNonCoaxial from "@/assets/telecentric-large-noncoaxial.png";
// Line Scan lens images
import lineScan4k from "@/assets/line-scan-4k.png";
import lineScan8k from "@/assets/line-scan-8k.png";
import lineScan16k35u from "@/assets/line-scan-16k-35u.png";
import lineScan16k5u from "@/assets/line-scan-16k-5u.png";
import largeFormatLenses from "@/assets/large-format-lenses.png";
// Other category lens images
import macroLenses from "@/assets/macro-lenses.png";
import infraredLenses from "@/assets/infrared-lenses.png";
import vrLenses from "@/assets/vr-lenses.png";
import scheimpflugLenses from "@/assets/scheimpflug-lenses.png";

const lensCategories = [
  { id: "all", title: "All Lenses", icon: Aperture, count: 367 },
  { id: "fa-lenses", title: "FA Lenses", icon: Aperture, count: 4 },
  { id: "telecentric", title: "Telecentric Lenses", icon: Focus, count: 10 },
  { id: "line-scan", title: "Line Scan Lenses", icon: Scan, count: 4 },
  { id: "large-format", title: "Large Format Lenses", icon: Microscope, count: 1 },
  { id: "macro", title: "Macro Lenses", icon: ZoomIn, count: 1 },
  { id: "infrared", title: "Infrared Lenses", icon: Sun, count: 1 },
  { id: "vr", title: "VR Lenses", icon: Circle, count: 1 },
  { id: "scheimpflug", title: "Scheimpflug Lenses", icon: Settings, count: 1 },
];

const products = [
  // FA Lenses
  {
    name: "1/1.7 inch FA Lenses",
    brand: "DZOPTICS",
    image: faLens117,
    resolution: "1/1.7\"",
    fps: "-",
    interface: "C-Mount",
    category: "fa-lenses",
  },
  {
    name: "2/3 inch Standard FA Lenses",
    brand: "DZOPTICS",
    image: faLens23Standard,
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    category: "fa-lenses",
  },
  {
    name: "2/3 inch Superior FA Lenses",
    brand: "DZOPTICS",
    image: faLens23Superior,
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    category: "fa-lenses",
  },
  {
    name: "1.1 inch FA Lenses",
    brand: "DZOPTICS",
    image: faLens11,
    resolution: "1.1\"",
    fps: "-",
    interface: "C-Mount",
    category: "fa-lenses",
  },
  // Telecentric Lenses - Co-Axial
  {
    name: "2/3 inch Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    image: telecentric23Coaxial,
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    category: "telecentric",
  },
  {
    name: "1.1 inch Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    image: telecentric11Coaxial,
    resolution: "1.1\"",
    fps: "-",
    interface: "C-Mount",
    category: "telecentric",
  },
  {
    name: "1.2 inch Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    image: telecentric12Coaxial,
    resolution: "1.2\"",
    fps: "-",
    interface: "C-Mount",
    category: "telecentric",
  },
  {
    name: "Large Format Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    image: telecentricLargeCoaxial,
    resolution: "Large",
    fps: "-",
    interface: "C-Mount",
    category: "telecentric",
  },
  // Telecentric Lenses - Non-Co-Axial
  {
    name: "1/2 inch Non-Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    image: telecentric12NonCoaxial,
    resolution: "1/2\"",
    fps: "-",
    interface: "C-Mount",
    category: "telecentric",
  },
  {
    name: "2/3 inch Non-Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    image: telecentric23NonCoaxial,
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    category: "telecentric",
  },
  {
    name: "2/3 inch Non-Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    image: telecentric11NonCoaxial,
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    category: "telecentric",
  },
  {
    name: "1.1 inch Non-Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    image: telecentric12NonCoaxialAlt,
    resolution: "1.1\"",
    fps: "-",
    interface: "C-Mount",
    category: "telecentric",
  },
  {
    name: "1.2 inch Non-Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    image: telecentric18,
    resolution: "1.2\"",
    fps: "-",
    interface: "C-Mount",
    category: "telecentric",
  },
  {
    name: "Large Format Non-Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    image: telecentricLargeNonCoaxial,
    resolution: "Large",
    fps: "-",
    interface: "C-Mount",
    category: "telecentric",
  },
  // Line Scan Lenses
  {
    name: "4K Line Scan Lens",
    brand: "DZOPTICS",
    image: lineScan4k,
    resolution: "4K",
    fps: "-",
    interface: "M42",
    category: "line-scan",
  },
  {
    name: "8K Line Scan Lens",
    brand: "DZOPTICS",
    image: lineScan8k,
    resolution: "8K",
    fps: "-",
    interface: "M42",
    category: "line-scan",
  },
  {
    name: "16K / 3.5u Line Scan Lens",
    brand: "DZOPTICS",
    image: lineScan16k35u,
    resolution: "16K",
    fps: "-",
    interface: "M42",
    category: "line-scan",
  },
  {
    name: "16K / 5u Line Scan Lens",
    brand: "DZOPTICS",
    image: lineScan16k5u,
    resolution: "16K",
    fps: "-",
    interface: "M42",
    category: "line-scan",
  },
  // Macro Lenses
  {
    name: "Macro Lenses",
    brand: "DZOPTICS",
    image: macroLenses,
    resolution: "Various",
    fps: "-",
    interface: "C-Mount",
    category: "macro",
  },
  // Infrared Lenses
  {
    name: "Infrared Lenses",
    brand: "DZOPTICS",
    image: infraredLenses,
    resolution: "Various",
    fps: "-",
    interface: "C-Mount",
    category: "infrared",
  },
  // VR Lenses
  {
    name: "VR Lenses",
    brand: "DZOPTICS",
    image: vrLenses,
    resolution: "Wide FOV",
    fps: "-",
    interface: "Various",
    category: "vr",
  },
  // Scheimpflug Lenses
  {
    name: "Scheimpflug Lenses",
    brand: "DZOPTICS",
    image: scheimpflugLenses,
    resolution: "Various",
    fps: "-",
    interface: "Adjustable",
    category: "scheimpflug",
  },
  // Large Format Lenses
  {
    name: "Large Format Lenses",
    brand: "DZOPTICS",
    image: largeFormatLenses,
    resolution: "Large",
    fps: "-",
    interface: "Various",
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
