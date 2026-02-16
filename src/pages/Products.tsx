import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight, Grid3X3, LayoutList, Scan, Camera, Settings } from "lucide-react";
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

const cameraCategories = [
{ id: "all", title: "All Camera Products", icon: Camera, count: 13 },
{ id: "line-scan", title: "Line Scan Cameras", icon: Scan, count: 3 },
{ id: "area-scan", title: "Area Scan Cameras", icon: Camera, count: 9 },
{ id: "other", title: "Other", icon: Settings, count: 1 }];


const products = [
// Line Scan Cameras
{
  name: "1GigE Line Scan Camera",
  brand: "ALARGE",
  image: lineScanCamera1GigE,
  resolution: "1GigE",
  fps: "-",
  interface: "GigE",
  category: "line-scan",
  slug: "1gige-line-scan-camera"
},
{
  name: "2.5GigE Line Scan Camera",
  brand: "ALARGE",
  image: lineScanCamera25GigE,
  resolution: "2.5GigE",
  fps: "-",
  interface: "GigE",
  category: "line-scan",
  slug: "2-5gige-line-scan-camera"
},
{
  name: "10GigE Line Scan Camera",
  brand: "ALARGE",
  image: lineScanCamera10GigE,
  resolution: "10GigE",
  fps: "-",
  interface: "GigE",
  category: "line-scan",
  slug: "10gige-line-scan-camera"
},
// Area Scan Cameras
{
  name: "MGV Series 1GigE Area Scan Cameras",
  brand: "ALARGE",
  image: areaScanMgv,
  resolution: "Various",
  fps: "-",
  interface: "GigE",
  category: "area-scan",
  slug: "mgv-series-1gige-area-scan"
},
{
  name: "MGS Series 1GigE Area Scan Cameras",
  brand: "ALARGE",
  image: areaScanMgs,
  resolution: "Various",
  fps: "-",
  interface: "GigE",
  category: "area-scan",
  slug: "mgs-series-1gige-area-scan"
},
{
  name: "M3S Series USB3.0 Area Scan Cameras",
  brand: "ALARGE",
  image: areaScanM3s,
  resolution: "Various",
  fps: "-",
  interface: "USB3.0",
  category: "area-scan",
  slug: "m3s-series-usb3-area-scan"
},
{
  name: "U3P Series USB3.0 Area Scan Cameras",
  brand: "ALARGE",
  image: areaScanU3p,
  resolution: "Various",
  fps: "-",
  interface: "USB3.0",
  category: "area-scan",
  slug: "u3p-series-usb3-area-scan"
},
{
  name: "M2S Series USB2.0 Area Scan Cameras",
  brand: "ALARGE",
  image: areaScanM2s,
  resolution: "Various",
  fps: "-",
  interface: "USB2.0",
  category: "area-scan",
  slug: "m2s-series-usb2-area-scan"
},
{
  name: "10GigE Fiber Optic Area Scan Cameras",
  brand: "ALARGE",
  image: areaScan10gige,
  resolution: "Various",
  fps: "-",
  interface: "10GigE",
  category: "area-scan",
  slug: "10gige-fiber-optic-area-scan"
},
{
  name: "DS Series Dual USB3.0 Area Scan Cameras",
  brand: "ALARGE",
  image: areaScanDs,
  resolution: "Various",
  fps: "-",
  interface: "USB3.0",
  category: "area-scan",
  slug: "ds-series-dual-usb3-area-scan"
},
{
  name: "DSV Series USB3.0 Super-mini Coin Cameras",
  brand: "ALARGE",
  image: areaScanDsv,
  resolution: "Various",
  fps: "-",
  interface: "USB3.0",
  category: "area-scan",
  slug: "dsv-series-usb3-coin"
},
{
  name: "Lipstick Series 1GigE Area Scan Cameras",
  brand: "ALARGE",
  image: areaScanLipstick,
  resolution: "Various",
  fps: "-",
  interface: "GigE",
  category: "area-scan",
  slug: "lipstick-series-1gige-area-scan"
},
// Other
{
  name: "Frame Grabber For 10-40GigE Optical Fiber Camera",
  brand: "ALARGE",
  image: frameGrabber,
  resolution: "Various",
  fps: "-",
  interface: "PCIe",
  category: "other",
  slug: "frame-grabber-10-40gige"
}];


const PRODUCTS_PER_PAGE = 9;

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);

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
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">All Camera Products</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">All Cameras and Accessories

            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our complete range of industrial cameras, from high-speed line scan sensors 
              to precision area scan and specialty imaging solutions. Find the perfect camera for your application.
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
                        <div className="text-xs text-muted-foreground">{category.count} Product {category.count === 1 ? 'Type' : 'Types'}</div>
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {displayedProducts.map((product, index) =>
                <ProductCard key={index} {...product} />
                )}
              </div>

              {/* Load More */}
              {filteredProducts.length > PRODUCTS_PER_PAGE &&
              <div className="text-center mt-12">
                  <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setVisibleCount((prev) => prev + PRODUCTS_PER_PAGE)}
                  disabled={!hasMore}>

                    {hasMore ? 'Load More Products' : 'Showing All Products'}
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