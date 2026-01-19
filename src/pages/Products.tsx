import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Filter, Grid3X3, LayoutList } from "lucide-react";
import cameraProduct1 from "@/assets/camera-product-1.jpg";
import cameraProduct2 from "@/assets/camera-product-2.jpg";
import cameraProduct3 from "@/assets/camera-product-3.jpg";
import cameraProduct4 from "@/assets/camera-product-4.jpg";

const products = [
  {
    name: "ACE-2040 Pro Series",
    brand: "BASLER",
    image: cameraProduct1,
    resolution: "4.2 MP",
    fps: "120",
    interface: "GigE",
    category: "Area Scan",
  },
  {
    name: "DART-X Industrial",
    brand: "COGNEX",
    image: cameraProduct2,
    resolution: "12 MP",
    fps: "60",
    interface: "USB3",
    category: "Area Scan",
  },
  {
    name: "APEX Vision Core",
    brand: "FLIR",
    image: cameraProduct3,
    resolution: "5.1 MP",
    fps: "90",
    interface: "CoaXPress",
    category: "Line Scan",
  },
  {
    name: "MV-8000 Ultra",
    brand: "HIKROBOT",
    image: cameraProduct4,
    resolution: "8.9 MP",
    fps: "45",
    interface: "GigE",
    category: "3D Cameras",
  },
  {
    name: "Ace2 Pro GigE",
    brand: "BASLER",
    image: cameraProduct1,
    resolution: "20 MP",
    fps: "25",
    interface: "GigE",
    category: "Area Scan",
  },
  {
    name: "IS-5000 Vision",
    brand: "COGNEX",
    image: cameraProduct2,
    resolution: "5 MP",
    fps: "75",
    interface: "USB3",
    category: "Smart Cameras",
  },
  {
    name: "Blackfly S USB3",
    brand: "FLIR",
    image: cameraProduct3,
    resolution: "12.3 MP",
    fps: "30",
    interface: "USB3",
    category: "Area Scan",
  },
  {
    name: "MV-CA023-10GC",
    brand: "HIKROBOT",
    image: cameraProduct4,
    resolution: "2.3 MP",
    fps: "166",
    interface: "GigE",
    category: "Line Scan",
  },
  {
    name: "Triton TRI-050S",
    brand: "LUCID",
    image: cameraProduct1,
    resolution: "5 MP",
    fps: "52",
    interface: "GigE",
    category: "3D Cameras",
  },
  {
    name: "Phoenix PHX-016S",
    brand: "LUCID",
    image: cameraProduct2,
    resolution: "1.6 MP",
    fps: "226",
    interface: "GigE",
    category: "Smart Cameras",
  },
  {
    name: "Grasshopper3 GS3",
    brand: "FLIR",
    image: cameraProduct3,
    resolution: "20 MP",
    fps: "18",
    interface: "USB3",
    category: "Area Scan",
  },
  {
    name: "MV-SC2004-10GC",
    brand: "HIKROBOT",
    image: cameraProduct4,
    resolution: "4 MP",
    fps: "120",
    interface: "GigE",
    category: "Smart Cameras",
  },
];

const Products = () => {
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
            <span className="text-foreground font-medium">All Products</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              All Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our complete range of industrial cameras, from high-speed area scan sensors 
              to precision line scan and 3D imaging solutions. Find the perfect camera for your application.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{products.length}</span> products
            </p>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <div className="flex items-center border border-border rounded-md">
                <button className="p-2 hover:bg-secondary transition-colors border-r border-border bg-secondary">
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-secondary transition-colors">
                  <LayoutList className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
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
      </section>

      <Footer />
    </div>
  );
};

export default Products;
