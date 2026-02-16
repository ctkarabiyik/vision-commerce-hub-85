import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface Spec {
  label: string;
  value: string;
}

interface ProductCardProps {
  name: string;
  brand: string;
  image: string;
  specs?: Spec[];
  slug?: string;
  // Legacy props for backward compatibility
  resolution?: string;
  fps?: string;
  interface?: string;
}

const ProductCard = ({ name, brand, image, specs, slug, resolution, fps, interface: interfaceType }: ProductCardProps) => {
  const productSlug = slug || name.toLowerCase().replace(/\s+/g, '-');

  // Use specs array if provided, otherwise fall back to legacy props
  const displaySpecs: Spec[] = specs && specs.length > 0
    ? specs
    : [
        { label: "Resolution", value: resolution || "-" },
        { label: "FPS", value: fps || "-" },
        { label: "Interface", value: interfaceType || "-" },
      ];
  
  return (
    <div className="group bg-card rounded-sm border border-border hover:border-primary/50 transition-all duration-300 hover-lift overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square bg-white overflow-hidden flex items-center justify-center p-10">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-accent text-accent-foreground text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-sm">
            {brand}
          </span>
        </div>
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/60 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <Link to={`/product/${productSlug}`}>
            <Button variant="default" size="icon" className="rounded-full">
              <Eye className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{name}</h3>
        
        {/* Specs */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {displaySpecs.map((spec, index) => (
            <div key={index} className="text-center bg-secondary rounded-sm py-2">
              <div className="text-xs text-muted-foreground">{spec.label}</div>
              <div className="text-sm font-semibold text-foreground">{spec.value}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link to={`/product/${productSlug}`}>
          <Button variant="default" size="sm" className="w-full">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
