import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    slug: "ace-2040-pro-series",
  },
  {
    name: "DART-X Industrial",
    brand: "COGNEX",
    image: cameraProduct2,
    resolution: "12 MP",
    fps: "60",
    interface: "USB 3.0",
    slug: "dart-x-industrial",
  },
  {
    name: "APEX Vision Core",
    brand: "FLIR",
    image: cameraProduct3,
    resolution: "5.1 MP",
    fps: "90",
    interface: "CoaXPress",
    slug: "apex-vision-core",
  },
  {
    name: "MV-8000 Ultra",
    brand: "HIKROBOT",
    image: cameraProduct4,
    resolution: "8.9 MP",
    fps: "75",
    interface: "10GigE",
    slug: "mv-8000-ultra",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-2">
              <div className="w-8 h-0.5 bg-primary" />
              Featured Products
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Industrial-Grade Cameras
            </h2>
          </div>
          <Link to="/area-scan-cameras">
            <Button variant="outline" className="mt-4 md:mt-0 group">
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
