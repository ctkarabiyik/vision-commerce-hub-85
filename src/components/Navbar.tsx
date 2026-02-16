import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera, ChevronDown, Scan, CircuitBoard, Settings, Microscope, Aperture, Focus, ZoomIn, Circle, Globe, Sun } from "lucide-react";
import alargeLogo from "@/assets/alarge-logo.svg";
import cameraProduct1 from "@/assets/camera-product-1.jpg";
import lineScanCamera1GigE from "@/assets/line-scan-camera-1gige.png";
import lineScanCamera25GigE from "@/assets/line-scan-camera-2-5gige.png";
import lineScanCamera10GigE from "@/assets/line-scan-camera-10gige.png";
import areaScanMgv from "@/assets/area-scan-mgv-1gige.png";
import areaScanMgs from "@/assets/area-scan-mgs-1gige.png";
import areaScanM3s from "@/assets/area-scan-m3s-usb3.png";
import areaScanU3p from "@/assets/area-scan-u3p-usb3.png";
import frameGrabber from "@/assets/frame-grabber-10-40gige.png";
import faLens117 from "@/assets/fa-lens-1-1-7.png";
import faLens23Standard from "@/assets/fa-lens-2-3-standard.png";
import faLens23Superior from "@/assets/fa-lens-2-3-superior.png";
import faLens11 from "@/assets/fa-lens-1-1.png";
// Telecentric lens images
import telecentric23Coaxial from "@/assets/telecentric-23-coaxial.png";
import telecentric11Coaxial from "@/assets/telecentric-11-coaxial.png";
import telecentric12Coaxial from "@/assets/telecentric-12-coaxial.png";
import telecentricLargeCoaxial from "@/assets/telecentric-large-coaxial.png";
import lineScan4k from "@/assets/line-scan-4k.png";
import lineScan8k from "@/assets/line-scan-8k.png";
import lineScan16k35u from "@/assets/line-scan-16k-35u.png";
import lineScan16k5u from "@/assets/line-scan-16k-5u.png";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
];

const cameraCategories = [
{
  icon: Scan,
  title: "Line Scan Cameras",
  description: "Continuous imaging for web inspection",
  count: 3,
  href: "#line-scan-cameras"
},
{
  icon: Camera,
  title: "Area Scan Cameras",
  description: "High-resolution sensors for quality inspection",
  count: 9,
  href: "#area-scan-cameras"
},
{
  icon: Settings,
  title: "Other",
  description: "Accessories and peripherals",
  count: 1,
  href: "#other-cameras"
}];


const lensCategories = [
{
  icon: Aperture,
  title: "FA Lenses",
  description: "Factory automation imaging lenses",
  count: 4,
  href: "#fa-lenses"
},
{
  icon: Focus,
  title: "Telecentric Lenses",
  description: "Distortion-free measurement optics",
  count: 10,
  href: "#telecentric-lenses"
},
{
  icon: Scan,
  title: "Line Scan Lenses",
  description: "Optimized for line scan cameras",
  count: 4,
  href: "#line-scan-lenses"
},
{
  icon: Microscope,
  title: "Large Format Lenses",
  description: "Large sensor coverage optics",
  count: 1,
  href: "#large-format"
},
{
  icon: ZoomIn,
  title: "Macro Lenses",
  description: "Close-up inspection optics",
  count: 1,
  href: "#macro"
},
{
  icon: Sun,
  title: "Infrared Lenses",
  description: "Thermal and IR imaging optics",
  count: 1,
  href: "#infrared"
},
{
  icon: Circle,
  title: "VR Lenses",
  description: "Virtual reality imaging optics",
  count: 1,
  href: "#vr"
},
{
  icon: Settings,
  title: "Scheimpflug Lenses",
  description: "Tilt-focus plane correction",
  count: 1,
  href: "#scheimpflug"
}];


const productsByCategory: Record<string, Array<{name: string;brand: string;image: string;resolution: string;slug: string;}>> = {
  "Line Scan Cameras": [
  { name: "1GigE Line Scan Camera", brand: "Do3Think", image: lineScanCamera1GigE, resolution: "1GigE", slug: "1gige-line-scan-camera" },
  { name: "2.5GigE Line Scan Camera", brand: "Do3Think", image: lineScanCamera25GigE, resolution: "2.5GigE", slug: "2-5gige-line-scan-camera" },
  { name: "10GigE Line Scan Camera", brand: "Do3Think", image: lineScanCamera10GigE, resolution: "10GigE", slug: "10gige-line-scan-camera" }],

  "Area Scan Cameras": [
  { name: "MGV Series 1GigE", brand: "Do3Think", image: areaScanMgv, resolution: "GigE", slug: "mgv-series-1gige-area-scan" },
  { name: "MGS Series 1GigE", brand: "Do3Think", image: areaScanMgs, resolution: "GigE", slug: "mgs-series-1gige-area-scan" },
  { name: "M3S Series USB3.0", brand: "Do3Think", image: areaScanM3s, resolution: "USB3.0", slug: "m3s-series-usb3-area-scan" },
  { name: "U3P Series USB3.0", brand: "Do3Think", image: areaScanU3p, resolution: "USB3.0", slug: "u3p-series-usb3-area-scan" }],

  "Other": [
  { name: "Frame Grabber 10-40GigE", brand: "Do3Think", image: frameGrabber, resolution: "PCIe", slug: "frame-grabber-10-40gige" }],

  "FA Lenses": [
  { name: "1/1.7 inch FA Lenses", brand: "DZOPTICS", image: faLens117, resolution: "1/1.7\"", slug: "1-1-7-inch-fa-lenses" },
  { name: "2/3 inch Standard FA Lenses", brand: "DZOPTICS", image: faLens23Standard, resolution: "2/3\"", slug: "2-3-inch-standard-fa-lenses" },
  { name: "2/3 inch Superior FA Lenses", brand: "DZOPTICS", image: faLens23Superior, resolution: "2/3\"", slug: "2-3-inch-superior-fa-lenses" },
  { name: "1.1 inch FA Lenses", brand: "DZOPTICS", image: faLens11, resolution: "1.1\"", slug: "1-1-inch-fa-lenses" }],

  "Telecentric Lenses": [
  { name: "2/3\" Co-Axial Telecentric", brand: "DZOPTICS", image: telecentric23Coaxial, resolution: "2/3\"", slug: "23-coaxial-telecentric" },
  { name: "1.1\" Co-Axial Telecentric", brand: "DZOPTICS", image: telecentric11Coaxial, resolution: "1.1\"", slug: "11-coaxial-telecentric" },
  { name: "1.2\" Co-Axial Telecentric", brand: "DZOPTICS", image: telecentric12Coaxial, resolution: "1.2\"", slug: "12-coaxial-telecentric" },
  { name: "Large Co-Axial Telecentric", brand: "DZOPTICS", image: telecentricLargeCoaxial, resolution: "Large", slug: "large-coaxial-telecentric" }],

  "Line Scan Lenses": [
  { name: "4K Line Scan Lens", brand: "DZOPTICS", image: lineScan4k, resolution: "4K", slug: "4k-line-scan-lens" },
  { name: "8K Line Scan Lens", brand: "DZOPTICS", image: lineScan8k, resolution: "8K", slug: "8k-line-scan-lens" },
  { name: "16K / 3.5u Line Scan Lens", brand: "DZOPTICS", image: lineScan16k35u, resolution: "16K", slug: "16k-35u-line-scan-lens" },
  { name: "16K / 5u Line Scan Lens", brand: "DZOPTICS", image: lineScan16k5u, resolution: "16K", slug: "16k-5u-line-scan-lens" }]

};

const supportLinks = [
{ title: "Software Downloads", description: "Drivers, SDKs, and utilities", href: "/software-downloads" },
{ title: "Knowledge Base", description: "Tutorials and documentation", href: "/knowledge-base" }];


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCameras, setMobileCameras] = useState(false);
  const [mobileLenses, setMobileLenses] = useState(false);

  const [mobileSupport, setMobileSupport] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [activeProductTab, setActiveProductTab] = useState<"cameras" | "lenses">("cameras");
  const [hoveredCameraCategory, setHoveredCameraCategory] = useState<string>("Line Scan Cameras");
  const [hoveredLensCategory, setHoveredLensCategory] = useState<string>("FA Lenses");

  const currentCameraProducts = productsByCategory[hoveredCameraCategory] || productsByCategory["Line Scan Cameras"];
  const currentLensProducts = productsByCategory[hoveredLensCategory] || productsByCategory["FA Lenses"];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-colors duration-200 ${
    productsDropdownOpen || supportDropdownOpen ? 'bg-background' : 'bg-background/95 backdrop-blur-sm'}`
    }>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={alargeLogo} alt="Alarge Logo" className="h-8 w-auto max-w-[180px]" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}>

              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group outline-none">Products

                <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setSupportDropdownOpen(true)}
              onMouseLeave={() => setSupportDropdownOpen(false)}>

              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group outline-none">
                Support
                <ChevronDown className={`w-4 h-4 transition-transform ${supportDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Selector */}
            <div
              className="relative"
              onMouseEnter={() => setLanguageDropdownOpen(true)}
              onMouseLeave={() => setLanguageDropdownOpen(false)}>

              <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none px-2 py-1 rounded-md hover:bg-muted">
                <span className="text-lg">{selectedLanguage.flag}</span>
                <span className="hidden xl:inline">{selectedLanguage.code.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Language Dropdown */}
              <div className={`absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[160px] transition-all duration-200 z-50 ${
              languageDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`
              }>
                {languages.map((lang) =>
                <button
                  key={lang.code}
                  onClick={() => {
                    setSelectedLanguage(lang);
                    setLanguageDropdownOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors text-left ${
                  selectedLanguage.code === lang.code ? 'text-primary bg-muted/50' : 'text-foreground'}`
                  }>

                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                )}
              </div>
            </div>
            
            <Link to="/contact-us">
              <Button variant="default">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}>

            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen &&
        <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
              onClick={() => setMobileProducts(!mobileProducts)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 text-left">

                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProducts ? 'rotate-180' : ''}`} />
              </button>
              {mobileProducts &&
            <div className="pl-4 flex flex-col gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">Cameras</p>
                  {cameraCategories.map((category, index) =>
                    <Link
                      key={`cam-${index}`}
                      to={`/products?category=${encodeURIComponent(category.title)}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      <category.icon className="w-4 h-4" />
                      {category.title}
                    </Link>
                  )}
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60 mt-2">Lenses</p>
                  {lensCategories.map((category, index) =>
                    <Link
                      key={`lens-${index}`}
                      to={`/lenses?category=${encodeURIComponent(category.title)}`}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1">
                      <category.icon className="w-4 h-4" />
                      {category.title}
                    </Link>
                  )}
                </div>
            }
              <Link to="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <button
              onClick={() => setMobileSupport(!mobileSupport)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 text-left">

                Support
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSupport ? 'rotate-180' : ''}`} />
              </button>
              {mobileSupport &&
            <div className="pl-4 flex flex-col gap-2">
                  {supportLinks.map((link, index) =>
              <Link
                key={index}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors py-1">

                      {link.title}
                    </Link>
              )}
                </div>
            }
              <Link to="/contact-us">
                <Button variant="default" className="w-full mt-4">Contact Us</Button>
              </Link>
            </div>
          </div>
        }
      </div>

      {/* Products Mega Menu */}
      <div
        className={`absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg transition-all duration-200 z-50 ${
        productsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`
        }
        onMouseEnter={() => setProductsDropdownOpen(true)}
        onMouseLeave={() => setProductsDropdownOpen(false)}>

        <div className="container mx-auto px-4 py-6">
          {/* Tabs for Cameras/Lenses */}
          <div className="flex gap-1 mb-6 border-b border-border">
            <button
              className={`px-4 py-2 text-sm font-semibold transition-colors relative ${
              activeProductTab === "cameras" ?
              'text-primary' :
              'text-muted-foreground hover:text-foreground'}`
              }
              onMouseEnter={() => setActiveProductTab("cameras")}>

              Cameras
              {activeProductTab === "cameras" &&
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              }
            </button>
            <button
              className={`px-4 py-2 text-sm font-semibold transition-colors relative ${
              activeProductTab === "lenses" ?
              'text-primary' :
              'text-muted-foreground hover:text-foreground'}`
              }
              onMouseEnter={() => setActiveProductTab("lenses")}>

              Lenses
              {activeProductTab === "lenses" &&
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              }
            </button>
          </div>

          {/* Cameras Content */}
          {activeProductTab === "cameras" &&
          <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Camera Types</h3>
                <div className="flex flex-col gap-1">
                  {cameraCategories.map((category, index) =>
                <a
                  key={index}
                  href={category.href}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors group ${
                  hoveredCameraCategory === category.title ? 'bg-secondary' : 'hover:bg-secondary'}`
                  }
                  onMouseEnter={() => setHoveredCameraCategory(category.title)}>

                      <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                  hoveredCameraCategory === category.title ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/20'}`
                  }>
                        <category.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold text-sm transition-colors ${
                    hoveredCameraCategory === category.title ? 'text-primary' : 'text-foreground group-hover:text-primary'}`
                    }>{category.title}</div>
                        <div className="text-xs text-muted-foreground">{category.count} Product {category.count === 1 ? 'Type' : 'Types'}</div>
                      </div>
                    </a>
                )}
                </div>
                <div className="mt-6">
                  <Link
                  to="/products"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-background text-primary border-2 border-primary text-sm font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors">

                    View All Cameras
                  </Link>
                </div>
              </div>
              <div className="col-span-9 border-l border-border pl-6 py-4 flex flex-col justify-center">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Featured Cameras</h3>
                <div className="grid grid-cols-4 gap-4">
                  {currentCameraProducts.map((product, index) =>
                <Link
                  key={index}
                  to={`/product/${product.slug}`}
                  className="group">

                      <div className="aspect-square bg-white rounded-md overflow-hidden mb-2 flex items-center justify-center p-6">
                        <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />

                      </div>
                      <div className="text-xs text-primary font-semibold">{product.brand}</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">{product.name}</div>
                      <div className="text-xs text-muted-foreground">{product.resolution}</div>
                    </Link>
                )}
                </div>
              </div>
            </div>
          }

          {/* Lenses Content */}
          {activeProductTab === "lenses" &&
          <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Lens Types</h3>
                <div className="flex flex-col gap-1">
                  {lensCategories.map((category, index) =>
                <a
                  key={index}
                  href={category.href}
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors group ${
                  hoveredLensCategory === category.title ? 'bg-secondary' : 'hover:bg-secondary'}`
                  }
                  onMouseEnter={() => setHoveredLensCategory(category.title)}>

                      <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                  hoveredLensCategory === category.title ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/20'}`
                  }>
                        <category.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold text-sm transition-colors ${
                    hoveredLensCategory === category.title ? 'text-primary' : 'text-foreground group-hover:text-primary'}`
                    }>{category.title}</div>
                        <div className="text-xs text-muted-foreground">{category.count} Product {category.count === 1 ? 'Type' : 'Types'}</div>
                      </div>
                    </a>
                )}
                </div>
                <div className="mt-6">
                  <Link
                  to="/lenses"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-background text-primary border-2 border-primary text-sm font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors">

                    View All Lenses
                  </Link>
                </div>
              </div>
              <div className="col-span-9 border-l border-border pl-6 py-4 flex flex-col justify-center">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Featured Lenses</h3>
                <div className="grid grid-cols-4 gap-4">
                  {currentLensProducts.map((product, index) =>
                <Link
                  key={index}
                  to={`/product/${product.slug}`}
                  className="group">

                      <div className="aspect-square bg-white rounded-md overflow-hidden mb-2 flex items-center justify-center p-6">
                        <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />

                      </div>
                      <div className="text-xs text-primary font-semibold">{product.brand}</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">{product.name}</div>
                      <div className="text-xs text-muted-foreground">{product.resolution}</div>
                    </Link>
                )}
                </div>
              </div>
            </div>
          }
        </div>
      </div>

      {/* Support Dropdown Menu */}
      <div
        className={`absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg transition-all duration-200 z-50 ${
        supportDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`
        }
        onMouseEnter={() => setSupportDropdownOpen(true)}
        onMouseLeave={() => setSupportDropdownOpen(false)}>

        <div className="container mx-auto px-4 py-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Support Resources</h3>
          <div className="flex flex-row gap-4">
            {supportLinks.map((link, index) =>
            <Link
              key={index}
              to={link.href}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group flex-1">

                <div className="flex-1">
                  <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{link.title}</div>
                  <div className="text-xs text-muted-foreground">{link.description}</div>
                </div>
                <ChevronDown className="w-4 h-4 rotate-[-90deg] text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>);

};

export default Navbar;