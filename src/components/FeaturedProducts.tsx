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
    brand: "DZOPTICS",
    image: areaScanMgv,
    resolution: "5.0 MP",
    fps: "120",
    interface: "GigE",
    slug: "mgv-series-1gige-area-scan",
  },
  {
    name: "1GigE Line Scan Camera",
    brand: "DZOPTICS",
    image: lineScan1gige,
    resolution: "4K",
    fps: "80 kHz",
    interface: "GigE",
    slug: "1gige-line-scan-camera",
  },
  {
    name: '1/1" FA Lens',
    brand: "DZOPTICS",
    image: faLens1,
    resolution: "25 MP",
    fps: "—",
    interface: "C-Mount",
    slug: "fa-lens-1-1",
  },
  {
    name: "1/1\" Telecentric Lens (Co-Axial)",
    brand: "DZOPTICS",
    image: telecentricLens,
    resolution: "20 MP",
    fps: "—",
    interface: "F-Mount",
    slug: "telecentric-1-1-coaxial",
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
