import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Grid3X3, LayoutList, Scan, Camera, Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import lineScanCamera1GigE from "@/assets/line-scan-camera-1gige.png";
import lineScanCamera25GigE from "@/assets/line-scan-camera-2-5gige.png";
import lineScanCamera10GigE from "@/assets/line-scan-camera-10gige.png";
import areaScanMgv from "@/assets/area-scan-mgv-1gige.png";
import areaScanMgs from "@/assets/area-scan-mgs-1gige.png";
import areaScanM3s from "@/assets/area-scan-m3s-usb3.png";
import areaScanU3p from "@/assets/area-scan-u3p-usb3.png";
import areaScanM2s from "@/assets/area-scan-m2s-usb2.png";
import areaScan10gige from "@/assets/area-scan-10gige-fiber.png";
import areaScanDs from "@/assets/area-scan-ds-dual-usb3.png";
import areaScanDsv from "@/assets/area-scan-dsv-coin.png";
import areaScanLipstick from "@/assets/area-scan-lipstick-1gige.png";
import frameGrabber from "@/assets/frame-grabber-10-40gige.png";

const getProducts = (t: (key: string, options?: Record<string, string>) => string) => [
// Line Scan Cameras
{
  name: "1GigE Line Scan Camera",
  brand: "Do3Think",
  image: lineScanCamera1GigE,
  specs: [
    { label: "Resolution", value: "2K–8K" },
    { label: "Mount", value: "C / M42" },
  ],
  category: "line-scan",
  slug: "1gige-line-scan-camera"
},
{
  name: "2.5GigE Line Scan Camera",
  brand: "Do3Think",
  image: lineScanCamera25GigE,
  specs: [
    { label: "Resolution", value: "2K–8K" },
    { label: "Mount", value: "M42 / M72" },
  ],
  category: "line-scan",
  slug: "2-5gige-line-scan-camera"
},
{
  name: "10GigE Line Scan Camera",
  brand: "Do3Think",
  image: lineScanCamera10GigE,
  specs: [
    { label: "Resolution", value: "4K–16K" },
    { label: "Mount", value: "M72 / M90" },
  ],
  category: "line-scan",
  slug: "10gige-line-scan-camera"
},
// Area Scan Cameras
{
  name: "MGV Series 1GigE Area Scan Cameras",
  brand: "Do3Think",
  image: areaScanMgv,
  specs: [
    { label: "Resolution", value: "0.3–20 MP" },
    { label: "FPS", value: t("specValues.upTo", { value: "300" }) },
  ],
  category: "area-scan",
  slug: "mgv-series-1gige-area-scan"
},
{
  name: "MGS Series 1GigE Area Scan Cameras",
  brand: "Do3Think",
  image: areaScanMgs,
  specs: [
    { label: "Resolution", value: "0.3–20 MP" },
    { label: "FPS", value: t("specValues.upTo", { value: "300" }) },
  ],
  category: "area-scan",
  slug: "mgs-series-1gige-area-scan"
},
{
  name: "M3S Series USB3.0 Area Scan Cameras",
  brand: "Do3Think",
  image: areaScanM3s,
  specs: [
    { label: "Resolution", value: "0.3–20 MP" },
    { label: "FPS", value: t("specValues.upTo", { value: "500" }) },
  ],
  category: "area-scan",
  slug: "m3s-series-usb3-area-scan"
},
{
  name: "U3P Series USB3.0 Area Scan Cameras",
  brand: "Do3Think",
  image: areaScanU3p,
  specs: [
    { label: "Resolution", value: "0.3–20 MP" },
    { label: "FPS", value: t("specValues.upTo", { value: "500" }) },
  ],
  category: "area-scan",
  slug: "u3p-series-usb3-area-scan"
},
{
  name: "M2S Series USB2.0 Area Scan Cameras",
  brand: "Do3Think",
  image: areaScanM2s,
  specs: [
    { label: "Resolution", value: "0.3–5 MP" },
    { label: "FPS", value: t("specValues.upTo", { value: "120" }) },
  ],
  category: "area-scan",
  slug: "m2s-series-usb2-area-scan"
},
{
  name: "10GigE Fiber Optic Area Scan Cameras",
  brand: "Do3Think",
  image: areaScan10gige,
  specs: [
    { label: "Resolution", value: "5–45 MP" },
    { label: "FPS", value: t("specValues.upTo", { value: "200" }) },
  ],
  category: "area-scan",
  slug: "10gige-fiber-optic-area-scan"
},
{
  name: "DS Series Dual USB3.0 Area Scan Cameras",
  brand: "Do3Think",
  image: areaScanDs,
  specs: [
    { label: "Resolution", value: "1–5 MP" },
    { label: "FPS", value: t("specValues.upTo", { value: "300" }) },
  ],
  category: "area-scan",
  slug: "ds-series-dual-usb3-area-scan"
},
{
  name: "DSV Series USB3.0 Super-mini Coin Cameras",
  brand: "Do3Think",
  image: areaScanDsv,
  specs: [
    { label: "Resolution", value: "0.3–5 MP" },
    { label: "FPS", value: t("specValues.upTo", { value: "250" }) },
  ],
  category: "area-scan",
  slug: "dsv-series-usb3-coin"
},
{
  name: "Lipstick Series 1GigE Area Scan Cameras",
  brand: "Do3Think",
  image: areaScanLipstick,
  specs: [
    { label: "Resolution", value: "0.3–5 MP" },
    { label: "FPS", value: t("specValues.upTo", { value: "200" }) },
  ],
  category: "area-scan",
  slug: "lipstick-series-1gige-area-scan"
},
// Other
{
  name: "Frame Grabber For 10-40GigE Optical Fiber Camera",
  brand: "Do3Think",
  image: frameGrabber,
  specs: [
    { label: "Resolution", value: "10–40G" },
    { label: "Channels", value: t("specValues.channels", { value: "1–4" }) },
  ],
  category: "other",
  slug: "frame-grabber-10-40gige"
}];


const PRODUCTS_PER_PAGE = 9;

const Products = () => {
  const { t } = useTranslation();
  const products = getProducts(t);
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "all");
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const cameraCategories = [
    { id: "all", title: t("productsPage.allCameraProducts"), icon: Camera, count: 13 },
    { id: "line-scan", title: t("cameraCategories.lineScan"), icon: Scan, count: 3 },
    { id: "area-scan", title: t("cameraCategories.areaScan"), icon: Camera, count: 9 },
    { id: "other", title: t("cameraCategories.other"), icon: Settings, count: 1 },
  ];

  useEffect(() => {
    if (categoryParam && cameraCategories.some(c => c.id === categoryParam)) {
      setSelectedCategory(categoryParam);
      setVisibleCount(PRODUCTS_PER_PAGE);
    }
  }, [categoryParam]);

  const filteredProducts = selectedCategory === "all" ?
  products :
  products.filter((product) => product.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setVisibleCount(PRODUCTS_PER_PAGE);
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
            <span className="text-foreground font-medium">{t("productsPage.breadcrumb")}</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">{t("productsPage.title")}</h1>
            <p className="text-lg text-muted-foreground">
              {t("productsPage.description")}
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
                    {t("productsPage.filters")}
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
                  {cameraCategories.map((category) =>
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors text-left w-full ${
                    selectedCategory === category.id ?
                    'bg-primary/10 border border-primary' :
                    'hover:bg-secondary border border-transparent'}`
                    }>
                      <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                    selectedCategory === category.id ? 'bg-primary/20' : 'bg-secondary'}`
                    }>
                        <category.icon className={`w-4 h-4 ${
                      selectedCategory === category.id ? 'text-primary' : 'text-muted-foreground'}`
                      } />
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium text-sm transition-colors ${
                      selectedCategory === category.id ? 'text-primary' : 'text-foreground'}`
                      }>
                          {category.title}
                        </div>
                        <div className="text-xs text-muted-foreground">{category.count} {category.count === 1 ? t("nav.productType") : t("nav.productTypes")}</div>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" : "flex flex-col gap-4"}>
                {displayedProducts.map((product, index) =>
                <ProductCard key={index} {...product} viewMode={viewMode} />
                )}
              </div>

              {filteredProducts.length > PRODUCTS_PER_PAGE &&
              <div className="text-center mt-12">
                  <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE)}
                  disabled={!hasMore}>
                    {hasMore ? t("productsPage.loadMore") : t("productsPage.showingAll")}
                  </Button>
                </div>
              }
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default Products;
