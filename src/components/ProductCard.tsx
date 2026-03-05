import LocaleLink from "@/components/LocaleLink";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

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
  viewMode?: "grid" | "list";
  resolution?: string;
  fps?: string;
  interface?: string;
}

const ProductCard = ({ name, brand, image, specs, slug, viewMode = "grid", resolution, fps, interface: interfaceType }: ProductCardProps) => {
  const { t } = useTranslation();
  const productSlug = slug || name.toLowerCase().replace(/\s+/g, '-');

  const specLabelMap: Record<string, string> = {
    "Resolution": "tableHeaders.resolution",
    "FPS": "tableHeaders.fps",
    "Mount": "tableHeaders.mount",
    "F#": "tableHeaders.fNumber",
    "Channels": "specLabels.channels",
  };

  const displaySpecs: Spec[] = specs && specs.length > 0
    ? specs
    : [
        { label: "Resolution", value: resolution || "-" },
        { label: "FPS", value: fps || "-" },
      ];
  
  if (viewMode === "list") {
    return (
      <div className="group bg-card rounded-sm border border-border hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-row">
        <div className="relative w-40 h-40 flex-shrink-0 bg-white overflow-hidden flex items-center justify-center p-6">
          <img src={image} alt={name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-4 flex flex-1 items-center gap-6">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-2">{name}</h3>
            <div className="flex gap-3">
              {displaySpecs.map((spec, index) => (
                <div key={index} className="text-center bg-secondary rounded-sm py-1.5 px-3">
                  <div className="text-xs text-muted-foreground">{specLabelMap[spec.label] ? t(specLabelMap[spec.label]) : spec.label}</div>
                  <div className="text-sm font-semibold text-foreground">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
          <LocaleLink to={`/product/${productSlug}`}>
            <Button variant="default" size="sm">
              {t("productCard.viewDetails")}
            </Button>
          </LocaleLink>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-card rounded-sm border border-border hover:border-primary/50 transition-all duration-300 hover-lift overflow-hidden">
      <div className="relative aspect-square bg-white overflow-hidden flex items-center justify-center p-14">
        <img src={image} alt={name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/60 transition-colors duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <LocaleLink to={`/product/${productSlug}`}>
            <Button variant="default" size="icon" className="rounded-full">
              <Eye className="w-4 h-4" />
            </Button>
          </LocaleLink>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-1">{name}</h3>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {displaySpecs.map((spec, index) => (
            <div key={index} className="text-center bg-secondary rounded-sm py-2">
              <div className="text-xs text-muted-foreground">{specLabelMap[spec.label] ? t(specLabelMap[spec.label]) : spec.label}</div>
              <div className="text-sm font-semibold text-foreground">{spec.value}</div>
            </div>
          ))}
        </div>
        <LocaleLink to={`/product/${productSlug}`}>
          <Button variant="default" size="sm" className="w-full">
            {t("productCard.viewDetails")}
          </Button>
        </LocaleLink>
      </div>
    </div>
  );
};

export default ProductCard;
