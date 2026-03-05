import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Grid3X3, LayoutList, Aperture, Focus, Scan, Circle, ZoomIn, Settings, Microscope, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import faLens117 from "@/assets/fa-lens-1-1-7.png";
import faLens23Standard from "@/assets/fa-lens-2-3-standard.png";
import faLens23Superior from "@/assets/fa-lens-2-3-superior.png";
import faLens11 from "@/assets/fa-lens-1-1.png";
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
import lineScan4k from "@/assets/line-scan-4k.png";
import lineScan8k from "@/assets/line-scan-8k.png";
import lineScan16k35u from "@/assets/line-scan-16k-35u.png";
import lineScan16k5u from "@/assets/line-scan-16k-5u.png";
import largeFormatLenses from "@/assets/large-format-lenses.png";
import macroLenses from "@/assets/macro-lenses.png";
import infraredLenses from "@/assets/infrared-lenses.png";
import vrLenses from "@/assets/vr-lenses.png";
import scheimpflugLenses from "@/assets/scheimpflug-lenses.png";

const products = [
  // FA Lenses
  { name: "1/1.7 inch FA Lenses", brand: "DZOPTICS", image: faLens117, specs: [{ label: "F#", value: "f/1.4–f/2.8" }, { label: "Mount", value: "C-Mount" }], category: "fa-lenses", slug: "1-1-7-inch-fa-lenses" },
  { name: "2/3 inch Budget FA Lenses", brand: "DZOPTICS", image: faLens23Standard, specs: [{ label: "F#", value: "f/1.4–f/2.8" }, { label: "Mount", value: "C-Mount" }], category: "fa-lenses", slug: "2-3-inch-standard-fa-lenses" },
  { name: "2/3 inch Superior FA Lenses", brand: "DZOPTICS", image: faLens23Superior, specs: [{ label: "F#", value: "f/1.4–f/2.8" }, { label: "Mount", value: "C-Mount" }], category: "fa-lenses", slug: "2-3-inch-superior-fa-lenses" },
  { name: "1.1 inch FA Lenses", brand: "DZOPTICS", image: faLens11, specs: [{ label: "F#", value: "f/1.6–f/2.8" }, { label: "Mount", value: "C-Mount" }], category: "fa-lenses", slug: "1-1-inch-fa-lenses" },
  // Telecentric Co-Axial
  { name: "2/3 inch Co-Axial Telecentric Lens", brand: "DZOPTICS", image: telecentric23Coaxial, specs: [{ label: "F#", value: "f/4–f/8" }, { label: "Mount", value: "C-Mount" }], category: "telecentric", slug: "23-coaxial-telecentric" },
  { name: "1.1 inch Co-Axial Telecentric Lens", brand: "DZOPTICS", image: telecentric11Coaxial, specs: [{ label: "F#", value: "f/4–f/8" }, { label: "Mount", value: "C-Mount" }], category: "telecentric", slug: "11-coaxial-telecentric" },
  { name: "1.2 inch Co-Axial Telecentric Lens", brand: "DZOPTICS", image: telecentric12Coaxial, specs: [{ label: "F#", value: "f/4–f/8" }, { label: "Mount", value: "C-Mount" }], category: "telecentric", slug: "12-coaxial-telecentric" },
  { name: "Large Format Co-Axial Telecentric Lens", brand: "DZOPTICS", image: telecentricLargeCoaxial, specs: [{ label: "F#", value: "f/6–f/12" }, { label: "Mount", value: "F-Mount" }], category: "telecentric", slug: "large-coaxial-telecentric" },
  // Telecentric Non-Co-Axial
  { name: "1/2 inch Non-Co-Axial Telecentric Lens", brand: "DZOPTICS", image: telecentric12NonCoaxial, specs: [{ label: "F#", value: "f/4–f/8" }, { label: "Mount", value: "C-Mount" }], category: "telecentric", slug: "half-inch-noncoaxial-telecentric" },
  { name: "2/3 inch Non-Co-Axial Telecentric Lens (WD 65/110)", brand: "DZOPTICS", image: telecentric23NonCoaxial, specs: [{ label: "F#", value: "f/4–f/8" }, { label: "Mount", value: "C-Mount" }], category: "telecentric", slug: "23-noncoaxial-telecentric" },
  { name: "2/3 inch Non-Co-Axial Telecentric Lens (WD 220)", brand: "DZOPTICS", image: telecentric11NonCoaxial, specs: [{ label: "F#", value: "f/4–f/8" }, { label: "Mount", value: "C-Mount" }], category: "telecentric", slug: "23-noncoaxial-telecentric-b" },
  { name: "1.1 inch Non-Co-Axial Telecentric Lens", brand: "DZOPTICS", image: telecentric12NonCoaxialAlt, specs: [{ label: "F#", value: "f/4–f/8" }, { label: "Mount", value: "C-Mount" }], category: "telecentric", slug: "11-noncoaxial-telecentric" },
  { name: "1.2 inch Non-Co-Axial Telecentric Lens", brand: "DZOPTICS", image: telecentric18, specs: [{ label: "F#", value: "f/4–f/8" }, { label: "Mount", value: "C-Mount" }], category: "telecentric", slug: "12-noncoaxial-telecentric" },
  { name: "Large Format Non-Co-Axial Telecentric Lens", brand: "DZOPTICS", image: telecentricLargeNonCoaxial, specs: [{ label: "F#", value: "f/6–f/12" }, { label: "Mount", value: "F-Mount" }], category: "telecentric", slug: "large-noncoaxial-telecentric" },
  // Line Scan Lenses
  { name: "4K Line Scan Lens", brand: "DZOPTICS", image: lineScan4k, specs: [{ label: "F#", value: "f/2.8–f/4" }, { label: "Mount", value: "M42" }], category: "line-scan", slug: "4k-line-scan-lens" },
  { name: "8K Line Scan Lens", brand: "DZOPTICS", image: lineScan8k, specs: [{ label: "F#", value: "f/2.8–f/4" }, { label: "Mount", value: "M42" }], category: "line-scan", slug: "8k-line-scan-lens" },
  { name: "16K / 3.5u Line Scan Lens", brand: "DZOPTICS", image: lineScan16k35u, specs: [{ label: "F#", value: "f/4" }, { label: "Mount", value: "M42" }], category: "line-scan", slug: "16k-35u-line-scan-lens" },
  { name: "16K / 5u Line Scan Lens", brand: "DZOPTICS", image: lineScan16k5u, specs: [{ label: "F#", value: "f/4" }, { label: "Mount", value: "M42" }], category: "line-scan", slug: "16k-5u-line-scan-lens" },
  // Other
  { name: "Macro Lenses", brand: "DZOPTICS", image: macroLenses, specs: [{ label: "F#", value: "f/2.8–f/6.5" }, { label: "Mount", value: "C-Mount" }], category: "macro", slug: "macro-lenses" },
  { name: "Infrared Lenses", brand: "DZOPTICS", image: infraredLenses, specs: [{ label: "F#", value: "f/1.4–f/2.0" }, { label: "Mount", value: "C-Mount" }], category: "infrared", slug: "infrared-lenses" },
  { name: "VR Lenses", brand: "DZOPTICS", image: vrLenses, specs: [{ label: "F#", value: "f/2.0" }, { label: "Mount", value: "Various" }], category: "vr", slug: "vr-lenses" },
  { name: "Scheimpflug Lenses", brand: "DZOPTICS", image: scheimpflugLenses, specs: [{ label: "F#", value: "f/2.8–f/4" }, { label: "Mount", value: "Various" }], category: "scheimpflug", slug: "scheimpflug-lenses" },
  { name: "Large Format Lenses", brand: "DZOPTICS", image: largeFormatLenses, specs: [{ label: "F#", value: "f/2.8–f/5.6" }, { label: "Mount", value: "Various" }], category: "large-format", slug: "large-format-lenses" },
];

const Lenses = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [visibleCount, setVisibleCount] = useState(9);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const lensCategories = [
    { id: "all", title: t("lensesPage.allLenses"), icon: Aperture, count: 23 },
    { id: "fa-lenses", title: t("lensCategories.fa"), icon: Aperture, count: 4 },
    { id: "telecentric", title: t("lensCategories.telecentric"), icon: Focus, count: 10 },
    { id: "line-scan", title: t("lensCategories.lineScan"), icon: Scan, count: 4 },
    { id: "large-format", title: t("lensCategories.largeFormat"), icon: Microscope, count: 1 },
    { id: "macro", title: t("lensCategories.macro"), icon: ZoomIn, count: 1 },
    { id: "infrared", title: t("lensCategories.infrared"), icon: Sun, count: 1 },
    { id: "vr", title: t("lensCategories.vr"), icon: Circle, count: 1 },
    { id: "scheimpflug", title: t("lensCategories.scheimpflug"), icon: Settings, count: 1 },
  ];

  useEffect(() => {
    if (categoryParam && lensCategories.some(c => c.id === categoryParam)) {
      setSelectedCategory(categoryParam);
      setVisibleCount(9);
    }
  }, [categoryParam]);

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const displayedProducts = selectedCategory === "all" 
    ? filteredProducts.slice(0, visibleCount) 
    : filteredProducts;

  const hasMoreProducts = selectedCategory === "all" && visibleCount < filteredProducts.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 9);
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setVisibleCount(9);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <LocaleLink to="/" className="hover:text-primary transition-colors">{t("common.home")}</LocaleLink>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{t("lensesPage.breadcrumb")}</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("lensesPage.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("lensesPage.description")}
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
                    {t("lensesPage.filters")}
                  </h3>
                  <div className="flex items-center border border-border rounded-md">
                    <button
                      onClick={() => setViewMode("grid")}
                      className={`p-1.5 hover:bg-secondary transition-colors border-r border-border ${viewMode === "grid" ? "bg-secondary" : ""}`}
                    >
                      <Grid3X3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setViewMode("list")}
                      className={`p-1.5 hover:bg-secondary transition-colors ${viewMode === "list" ? "bg-secondary" : ""}`}
                    >
                      <LayoutList className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  {lensCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
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
                        <div className="text-xs text-muted-foreground">{category.count} {category.count === 1 ? t("nav.productType") : t("nav.productTypes")}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
                {displayedProducts.map((product, index) => (
                  <ProductCard key={index} {...product} viewMode={viewMode} />
                ))}
              </div>

              {selectedCategory === "all" && (
                <div className="text-center mt-12">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={handleLoadMore}
                    disabled={!hasMoreProducts}
                    className={!hasMoreProducts ? "opacity-50 cursor-not-allowed" : ""}
                  >
                    {hasMoreProducts ? t("lensesPage.loadMore") : t("lensesPage.showingAll")}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Lenses;
