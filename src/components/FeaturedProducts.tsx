import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import areaScanMgv from "@/assets/area-scan-mgv-1gige.png";
import lineScan1gige from "@/assets/line-scan-camera-1gige.png";
import faLens1 from "@/assets/fa-lens-1-1.png";
import telecentricLens from "@/assets/telecentric-11-coaxial.png";

const products = [
  {
    name: "MGV Series 1GigE Area Scan",
    brand: "Do3Think",
    image: areaScanMgv,
    specs: [
      { label: "Resolution", value: "0.3–20 MP" },
      { label: "FPS", value: "Up to 300" },
    ],
    slug: "mgv-series-1gige-area-scan",
  },
  {
    name: "1GigE Line Scan Camera",
    brand: "Do3Think",
    image: lineScan1gige,
    specs: [
      { label: "Resolution", value: "2K–8K" },
      { label: "FPS", value: "18–80 kHz" },
    ],
    slug: "1gige-line-scan-camera",
  },
  {
    name: '1.1" FA Lens',
    brand: "DZOPTICS",
    image: faLens1,
    specs: [
      { label: "F#", value: "f/1.6–f/2.8" },
      { label: "Mount", value: "C-Mount" },
    ],
    slug: "1-1-inch-fa-lenses",
  },
  {
    name: "1.1\" Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    image: telecentricLens,
    specs: [
      { label: "F#", value: "f/4–f/8" },
      { label: "Mount", value: "C-Mount" },
    ],
    slug: "11-coaxial-telecentric",
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
              Cameras & Lenses
            </h2>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Link to="/products">
              <Button variant="outline" className="group">
                View All Cameras
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/lenses">
              <Button variant="outline" className="group">
                View All Lenses
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
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
