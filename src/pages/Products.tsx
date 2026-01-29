import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Grid3X3, LayoutList, Scan, Camera, Settings } from "lucide-react";
import cameraProduct1 from "@/assets/camera-product-1.jpg";
import cameraProduct2 from "@/assets/camera-product-2.jpg";
import cameraProduct3 from "@/assets/camera-product-3.jpg";
import cameraProduct4 from "@/assets/camera-product-4.jpg";

const cameraCategories = [
  { id: "all", title: "All Cameras", icon: Camera, count: 285 },
  { id: "line-scan", title: "Line Scan Cameras", icon: Scan, count: 84 },
  { id: "frame-scan", title: "Frame Scan Cameras", icon: Camera, count: 156 },
  { id: "other", title: "Other", icon: Settings, count: 45 },
];

const products = [
  {
    name: "ACE-2040 Pro Series",
    brand: "BASLER",
    image: cameraProduct1,
    resolution: "4.2 MP",
    fps: "120",
    interface: "GigE",
    category: "frame-scan",
  },
  {
    name: "DART-X Industrial",
    brand: "COGNEX",
    image: cameraProduct2,
    resolution: "12 MP",
    fps: "60",
    interface: "USB3",
    category: "frame-scan",
  },
  {
    name: "APEX Vision Core",
    brand: "FLIR",
    image: cameraProduct3,
    resolution: "5.1 MP",
    fps: "90",
    interface: "CoaXPress",
    category: "line-scan",
  },
  {
    name: "MV-8000 Ultra",
    brand: "HIKROBOT",
    image: cameraProduct4,
    resolution: "8.9 MP",
    fps: "45",
    interface: "GigE",
    category: "other",
  },
  {
    name: "Ace2 Pro GigE",
    brand: "BASLER",
    image: cameraProduct1,
    resolution: "20 MP",
    fps: "25",
    interface: "GigE",
    category: "frame-scan",
  },
  {
    name: "IS-5000 Vision",
    brand: "COGNEX",
    image: cameraProduct2,
    resolution: "5 MP",
    fps: "75",
    interface: "USB3",
    category: "other",
  },
  {
    name: "Blackfly S USB3",
    brand: "FLIR",
    image: cameraProduct3,
    resolution: "12.3 MP",
    fps: "30",
    interface: "USB3",
    category: "frame-scan",
  },
  {
    name: "MV-CA023-10GC",
    brand: "HIKROBOT",
    image: cameraProduct4,
    resolution: "2.3 MP",
    fps: "166",
    interface: "GigE",
    category: "line-scan",
  },
  {
    name: "Triton TRI-050S",
    brand: "LUCID",
    image: cameraProduct1,
    resolution: "5 MP",
    fps: "52",
    interface: "GigE",
    category: "other",
  },
  {
    name: "Phoenix PHX-016S",
    brand: "LUCID",
    image: cameraProduct2,
    resolution: "1.6 MP",
    fps: "226",
    interface: "GigE",
    category: "other",
  },
  {
    name: "Grasshopper3 GS3",
    brand: "FLIR",
    image: cameraProduct3,
    resolution: "20 MP",
    fps: "18",
    interface: "USB3",
    category: "frame-scan",
  },
  {
    name: "MV-SC2004-10GC",
    brand: "HIKROBOT",
    image: cameraProduct4,
    resolution: "4 MP",
    fps: "120",
    interface: "GigE",
    category: "line-scan",
  },
];

const Products = () => {
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
            <span className="text-foreground font-medium">All Cameras</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              All Cameras
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our complete range of industrial cameras, from high-speed line scan sensors 
              to precision frame scan and specialty imaging solutions. Find the perfect camera for your application.
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
                  {cameraCategories.map((category) => (
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

export default Products;
