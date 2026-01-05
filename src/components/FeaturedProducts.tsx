import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "ACE-2040 Pro Series",
    brand: "BASLER",
    image: "https://images.unsplash.com/photo-1606986628253-e24a7e9b7d2e?w=400&h=400&fit=crop",
    resolution: "4.2 MP",
    fps: "120",
    interface: "GigE",
    price: "$849",
  },
  {
    name: "DART-X Industrial",
    brand: "COGNEX",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    resolution: "12 MP",
    fps: "60",
    interface: "USB 3.0",
    price: "$1,249",
  },
  {
    name: "APEX Vision Core",
    brand: "FLIR",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
    resolution: "5.1 MP",
    fps: "90",
    interface: "CoaXPress",
    price: "$1,599",
  },
  {
    name: "MV-8000 Ultra",
    brand: "HIKROBOT",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
    resolution: "8.9 MP",
    fps: "75",
    interface: "10GigE",
    price: "$2,199",
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
          <Button variant="outline" className="mt-4 md:mt-0 group">
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
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
