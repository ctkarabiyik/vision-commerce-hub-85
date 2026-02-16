import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { ChevronRight, Grid3X3, LayoutList, Scan, Camera } from "lucide-react";
import lineScanCamera1GigE from "@/assets/line-scan-camera-1gige.png";
import lineScanCamera25GigE from "@/assets/line-scan-camera-2-5gige.png";
import lineScanCamera10GigE from "@/assets/line-scan-camera-10gige.png";

const cameraCategories = [
  { id: "all", title: "All Cameras", icon: Camera, count: 3 },
  { id: "line-scan", title: "Line Scan Cameras", icon: Scan, count: 3 },
];

const products = [
  {
    name: "1GigE Line Scan Camera",
    brand: "ALARGE",
    image: lineScanCamera1GigE,
    resolution: "1GigE",
    fps: "-",
    interface: "GigE",
    category: "line-scan",
    slug: "1gige-line-scan-camera",
  },
  {
    name: "2.5GigE Line Scan Camera",
    brand: "ALARGE",
    image: lineScanCamera25GigE,
    resolution: "2.5GigE",
    fps: "-",
    interface: "GigE",
    category: "line-scan",
    slug: "2-5gige-line-scan-camera",
  },
  {
    name: "10GigE Line Scan Camera",
    brand: "ALARGE",
    image: lineScanCamera10GigE,
    resolution: "10GigE",
    fps: "-",
    interface: "GigE",
    category: "line-scan",
    slug: "10gige-line-scan-camera",
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
                        <div className="text-xs text-muted-foreground">{category.count} Product {category.count === 1 ? 'Type' : 'Types'}</div>
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;