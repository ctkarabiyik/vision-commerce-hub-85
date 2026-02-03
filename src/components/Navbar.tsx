import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Camera, ChevronDown, Scan, CircuitBoard, Settings, Microscope, Aperture, Focus, ZoomIn, Circle, Globe } from "lucide-react";
import alargeLogo from "@/assets/alarge-logo.svg";
import cameraProduct1 from "@/assets/camera-product-1.jpg";
import faLens117 from "@/assets/fa-lens-1-1-7.png";
import faLens23Standard from "@/assets/fa-lens-2-3-standard.png";
import faLens23Superior from "@/assets/fa-lens-2-3-superior.png";
import faLens11 from "@/assets/fa-lens-1-1.png";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
];
import cameraProduct2 from "@/assets/camera-product-2.jpg";
import cameraProduct3 from "@/assets/camera-product-3.jpg";
import cameraProduct4 from "@/assets/camera-product-4.jpg";
import solutionManufacturing from "@/assets/solution-manufacturing.jpg";
import solutionAutomotive from "@/assets/solution-automotive.jpg";
import solutionPharmaceutical from "@/assets/solution-pharmaceutical.jpg";
import solutionLogistics from "@/assets/solution-logistics.jpg";
import solutionElectronics from "@/assets/solution-electronics.jpg";
import solutionResearch from "@/assets/solution-research.jpg";

const solutions = [
  {
    image: solutionManufacturing,
    title: "Manufacturing & Quality Control",
    description: "Automated defect detection and measurement",
    href: "/solutions/manufacturing",
  },
  {
    image: solutionAutomotive,
    title: "Automotive Industry",
    description: "Vision-guided robotics and inspection",
    href: "#",
  },
  {
    image: solutionPharmaceutical,
    title: "Pharmaceutical & Medical",
    description: "Label verification and contamination detection",
    href: "#",
  },
  {
    image: solutionLogistics,
    title: "Logistics & Packaging",
    description: "Barcode reading and sorting automation",
    href: "#",
  },
  {
    image: solutionElectronics,
    title: "Electronics & Semiconductor",
    description: "PCB inspection and chip alignment",
    href: "#",
  },
  {
    image: solutionResearch,
    title: "Research & Laboratory",
    description: "High-resolution scientific imaging",
    href: "#",
  },
];

const cameraCategories = [
  {
    icon: Scan,
    title: "Line Scan Cameras",
    description: "Continuous imaging for web inspection",
    count: 84,
    href: "#line-scan-cameras",
  },
  {
    icon: Camera,
    title: "Frame Scan Cameras",
    description: "High-resolution sensors for quality inspection",
    count: 156,
    href: "#frame-scan-cameras",
  },
  {
    icon: Settings,
    title: "Other",
    description: "Specialty cameras and accessories",
    count: 45,
    href: "#other-cameras",
  },
];

const lensCategories = [
  {
    icon: Aperture,
    title: "FA Lenses",
    description: "Factory automation imaging lenses",
    count: 120,
    href: "#fa-lenses",
  },
  {
    icon: Focus,
    title: "Telecentric Lenses",
    description: "Distortion-free measurement optics",
    count: 48,
    href: "#telecentric-lenses",
  },
  {
    icon: Scan,
    title: "Line Scan Lenses",
    description: "Optimized for line scan cameras",
    count: 56,
    href: "#line-scan-lenses",
  },
];

const productsByCategory: Record<string, Array<{ name: string; brand: string; image: string; resolution: string; slug: string }>> = {
  "Line Scan Cameras": [
    { name: "LineScan Pro 8K", brand: "BASLER", image: cameraProduct2, resolution: "8K", slug: "linescan-pro-8k" },
    { name: "SpeedLine X200", brand: "COGNEX", image: cameraProduct3, resolution: "4K", slug: "speedline-x200" },
    { name: "WebScan Elite", brand: "FLIR", image: cameraProduct1, resolution: "16K", slug: "webscan-elite" },
    { name: "RapidScan LS", brand: "HIKROBOT", image: cameraProduct4, resolution: "12K", slug: "rapidscan-ls" },
  ],
  "Frame Scan Cameras": [
    { name: "ACE-2040 Pro Series", brand: "BASLER", image: cameraProduct1, resolution: "4.2 MP", slug: "ace-2040-pro-series" },
    { name: "DART-X Industrial", brand: "COGNEX", image: cameraProduct2, resolution: "12 MP", slug: "dart-x-industrial" },
    { name: "APEX Vision Core", brand: "FLIR", image: cameraProduct3, resolution: "5.1 MP", slug: "apex-vision-core" },
    { name: "MV-8000 Ultra", brand: "HIKROBOT", image: cameraProduct4, resolution: "8.9 MP", slug: "mv-8000-ultra" },
  ],
  "Other": [
    { name: "VisionAI 5000", brand: "COGNEX", image: cameraProduct3, resolution: "5 MP", slug: "visionai-5000" },
    { name: "DepthSense 3D", brand: "FLIR", image: cameraProduct4, resolution: "1.3 MP", slug: "depthsense-3d" },
    { name: "MicroVision OEM", brand: "BASLER", image: cameraProduct1, resolution: "2 MP", slug: "microvision-oem" },
    { name: "CompactCore X", brand: "FLIR", image: cameraProduct3, resolution: "5 MP", slug: "compactcore-x" },
  ],
  "FA Lenses": [
    { name: "1/1.7 inch FA Lenses", brand: "DZOPTICS", image: faLens117, resolution: "1/1.7\"", slug: "1-1-7-inch-fa-lenses" },
    { name: "2/3 inch Standard FA Lenses", brand: "DZOPTICS", image: faLens23Standard, resolution: "2/3\"", slug: "2-3-inch-standard-fa-lenses" },
    { name: "2/3 inch Superior FA Lenses", brand: "DZOPTICS", image: faLens23Superior, resolution: "2/3\"", slug: "2-3-inch-superior-fa-lenses" },
    { name: "1.1 inch FA Lenses", brand: "DZOPTICS", image: faLens11, resolution: "1.1\"", slug: "1-1-inch-fa-lenses" },
  ],
  "Telecentric Lenses": [
    { name: "TelePrecision 0.5x", brand: "BASLER", image: cameraProduct4, resolution: "0.5x Mag", slug: "teleprecision-05x" },
    { name: "MeasureOptic 1x", brand: "COGNEX", image: cameraProduct1, resolution: "1x Mag", slug: "measureoptic-1x" },
    { name: "AccuView 2x", brand: "FLIR", image: cameraProduct2, resolution: "2x Mag", slug: "accuview-2x" },
    { name: "BiTelecentric 1.5x", brand: "HIKROBOT", image: cameraProduct3, resolution: "1.5x Mag", slug: "bitelecentric-15x" },
  ],
  "VR Lenses": [
    { name: "WideVR 180", brand: "BASLER", image: cameraProduct3, resolution: "180° FOV", slug: "widevr-180" },
    { name: "PanoView Ultra", brand: "COGNEX", image: cameraProduct2, resolution: "220° FOV", slug: "panoview-ultra" },
    { name: "ImmerseLens 360", brand: "FLIR", image: cameraProduct4, resolution: "360° FOV", slug: "immerselens-360" },
    { name: "VR-Optic Pro", brand: "HIKROBOT", image: cameraProduct1, resolution: "200° FOV", slug: "vr-optic-pro" },
  ],
  "Macro Lenses": [
    { name: "MacroVision 5x", brand: "BASLER", image: cameraProduct1, resolution: "5x Mag", slug: "macrovision-5x" },
    { name: "CloseUp Pro 3x", brand: "COGNEX", image: cameraProduct3, resolution: "3x Mag", slug: "closeup-pro-3x" },
    { name: "MicroInspect 10x", brand: "FLIR", image: cameraProduct4, resolution: "10x Mag", slug: "microinspect-10x" },
    { name: "DetailLens 7x", brand: "HIKROBOT", image: cameraProduct2, resolution: "7x Mag", slug: "detaillens-7x" },
  ],
  "Scheimpflug Lenses": [
    { name: "TiltShift Pro", brand: "BASLER", image: cameraProduct2, resolution: "±8° Tilt", slug: "tiltshift-pro" },
    { name: "ScheimView 45", brand: "COGNEX", image: cameraProduct1, resolution: "±12° Tilt", slug: "scheimview-45" },
    { name: "FocusPlane X", brand: "FLIR", image: cameraProduct3, resolution: "±10° Tilt", slug: "focusplane-x" },
    { name: "AngleFocus Elite", brand: "HIKROBOT", image: cameraProduct4, resolution: "±15° Tilt", slug: "anglefocus-elite" },
  ],
  "Line Scan Lenses": [
    { name: "LineScan Optic 35", brand: "BASLER", image: cameraProduct4, resolution: "8K Ready", slug: "linescan-optic-35" },
    { name: "WebView LS Pro", brand: "COGNEX", image: cameraProduct2, resolution: "16K Ready", slug: "webview-ls-pro" },
    { name: "ScanLine Ultra", brand: "FLIR", image: cameraProduct1, resolution: "12K Ready", slug: "scanline-ultra" },
    { name: "LinearOptic 50", brand: "HIKROBOT", image: cameraProduct3, resolution: "8K Ready", slug: "linearoptic-50" },
  ],
  "Large Format Lenses": [
    { name: "LargeView 120mm", brand: "BASLER", image: cameraProduct1, resolution: "APS-H", slug: "largeview-120mm" },
    { name: "BigSensor Pro", brand: "COGNEX", image: cameraProduct4, resolution: "Full Frame", slug: "bigsensor-pro" },
    { name: "MegaFormat 80mm", brand: "FLIR", image: cameraProduct2, resolution: "Medium Format", slug: "megaformat-80mm" },
    { name: "LF-Vision Elite", brand: "HIKROBOT", image: cameraProduct3, resolution: "APS-C", slug: "lf-vision-elite" },
  ],
};

const supportLinks = [
  { title: "Software Downloads", description: "Drivers, SDKs, and utilities", href: "/software-downloads" },
  { title: "Knowledge Base", description: "Tutorials and documentation", href: "/knowledge-base" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileCameras, setMobileCameras] = useState(false);
  const [mobileLenses, setMobileLenses] = useState(false);
  const [mobileSolutions, setMobileSolutions] = useState(false);
  const [mobileSupport, setMobileSupport] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
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
      productsDropdownOpen || solutionsDropdownOpen || supportDropdownOpen ? 'bg-background' : 'bg-background/95 backdrop-blur-sm'
    }`}>
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
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group outline-none">
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 group outline-none">
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About Us
            </a>
            <div 
              className="relative"
              onMouseEnter={() => setSupportDropdownOpen(true)}
              onMouseLeave={() => setSupportDropdownOpen(false)}
            >
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
              onMouseLeave={() => setLanguageDropdownOpen(false)}
            >
              <button className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors outline-none px-2 py-1 rounded-md hover:bg-muted">
                <span className="text-lg">{selectedLanguage.flag}</span>
                <span className="hidden xl:inline">{selectedLanguage.code.toUpperCase()}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Language Dropdown */}
              <div className={`absolute right-0 top-full mt-2 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[160px] transition-all duration-200 z-50 ${
                languageDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLanguage(lang);
                      setLanguageDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-muted transition-colors text-left ${
                      selectedLanguage.code === lang.code ? 'text-primary bg-muted/50' : 'text-foreground'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
            
            <Link to="/contact-us">
              <Button variant="default">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => setMobileProducts(!mobileProducts)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 text-left"
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileProducts ? 'rotate-180' : ''}`} />
              </button>
              {mobileProducts && (
                <div className="pl-4 flex flex-col gap-3">
                  <button 
                    onClick={() => setMobileCameras(!mobileCameras)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-left"
                  >
                    Cameras
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileCameras ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileCameras && (
                    <div className="pl-4 flex flex-col gap-2">
                      {cameraCategories.map((category, index) => (
                        <a 
                          key={index}
                          href={category.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        >
                          <category.icon className="w-4 h-4" />
                          {category.title}
                        </a>
                      ))}
                    </div>
                  )}
                  <button 
                    onClick={() => setMobileLenses(!mobileLenses)}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 text-left"
                  >
                    Lenses
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileLenses ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileLenses && (
                    <div className="pl-4 flex flex-col gap-2">
                      {lensCategories.map((category, index) => (
                        <a 
                          key={index}
                          href={category.href}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        >
                          <category.icon className="w-4 h-4" />
                          {category.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
              <button 
                onClick={() => setMobileSolutions(!mobileSolutions)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 text-left"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutions ? 'rotate-180' : ''}`} />
              </button>
              {mobileSolutions && (
                <div className="pl-4 flex flex-col gap-2">
                  {solutions.map((solution, index) => (
                    <a 
                      key={index}
                      href="#"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      <img src={solution.image} alt={solution.title} className="w-8 h-8 rounded object-cover" />
                      {solution.title}
                    </a>
                  ))}
                </div>
              )}
              <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <button 
                onClick={() => setMobileSupport(!mobileSupport)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1 text-left"
              >
                Support
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSupport ? 'rotate-180' : ''}`} />
              </button>
              {mobileSupport && (
                <div className="pl-4 flex flex-col gap-2">
                  {supportLinks.map((link, index) => (
                    <Link 
                      key={index}
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
              )}
              <Link to="/contact-us">
                <Button variant="default" className="w-full mt-4">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Products Mega Menu */}
      <div 
        className={`absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg transition-all duration-200 z-50 ${
          productsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onMouseEnter={() => setProductsDropdownOpen(true)}
        onMouseLeave={() => setProductsDropdownOpen(false)}
      >
        <div className="container mx-auto px-4 py-6">
          {/* Tabs for Cameras/Lenses */}
          <div className="flex gap-1 mb-6 border-b border-border">
            <button
              className={`px-4 py-2 text-sm font-semibold transition-colors relative ${
                activeProductTab === "cameras" 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onMouseEnter={() => setActiveProductTab("cameras")}
            >
              Cameras
              {activeProductTab === "cameras" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
            <button
              className={`px-4 py-2 text-sm font-semibold transition-colors relative ${
                activeProductTab === "lenses" 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              onMouseEnter={() => setActiveProductTab("lenses")}
            >
              Lenses
              {activeProductTab === "lenses" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          </div>

          {/* Cameras Content */}
          {activeProductTab === "cameras" && (
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Camera Types</h3>
                <div className="flex flex-col gap-1">
                  {cameraCategories.map((category, index) => (
                    <a 
                      key={index}
                      href={category.href}
                      className={`flex items-center gap-3 p-2 rounded-lg transition-colors group ${
                        hoveredCameraCategory === category.title ? 'bg-secondary' : 'hover:bg-secondary'
                      }`}
                      onMouseEnter={() => setHoveredCameraCategory(category.title)}
                    >
                      <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                        hoveredCameraCategory === category.title ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/20'
                      }`}>
                        <category.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold text-sm transition-colors ${
                          hoveredCameraCategory === category.title ? 'text-primary' : 'text-foreground group-hover:text-primary'
                        }`}>{category.title}</div>
                        <div className="text-xs text-muted-foreground">{category.count} Products</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-6">
                  <Link 
                    to="/products"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-background text-primary border-2 border-primary text-sm font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    View All Cameras
                  </Link>
                </div>
              </div>
              <div className="col-span-9 border-l border-border pl-6 py-4 flex flex-col justify-center">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Featured Cameras</h3>
                <div className="grid grid-cols-4 gap-4">
                  {currentCameraProducts.map((product, index) => (
                    <Link 
                      key={index}
                      to={`/product/${product.slug}`}
                      className="group"
                    >
                      <div className="aspect-square bg-secondary rounded-md overflow-hidden mb-2">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-xs text-primary font-semibold">{product.brand}</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">{product.name}</div>
                      <div className="text-xs text-muted-foreground">{product.resolution}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Lenses Content */}
          {activeProductTab === "lenses" && (
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Lens Types</h3>
                <div className="flex flex-col gap-1">
                  {lensCategories.map((category, index) => (
                    <a 
                      key={index}
                      href={category.href}
                      className={`flex items-center gap-3 p-2 rounded-lg transition-colors group ${
                        hoveredLensCategory === category.title ? 'bg-secondary' : 'hover:bg-secondary'
                      }`}
                      onMouseEnter={() => setHoveredLensCategory(category.title)}
                    >
                      <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                        hoveredLensCategory === category.title ? 'bg-primary/20' : 'bg-primary/10 group-hover:bg-primary/20'
                      }`}>
                        <category.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-semibold text-sm transition-colors ${
                          hoveredLensCategory === category.title ? 'text-primary' : 'text-foreground group-hover:text-primary'
                        }`}>{category.title}</div>
                        <div className="text-xs text-muted-foreground">{category.count} Products</div>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-6">
                  <Link 
                    to="/lenses"
                    className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-background text-primary border-2 border-primary text-sm font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    View All Lenses
                  </Link>
                </div>
              </div>
              <div className="col-span-9 border-l border-border pl-6 py-4 flex flex-col justify-center">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Featured Lenses</h3>
                <div className="grid grid-cols-4 gap-4">
                  {currentLensProducts.map((product, index) => (
                    <Link 
                      key={index}
                      to={`/product/${product.slug}`}
                      className="group"
                    >
                      <div className="aspect-square bg-white rounded-md overflow-hidden mb-2 flex items-center justify-center p-2">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-xs text-primary font-semibold">{product.brand}</div>
                      <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">{product.name}</div>
                      <div className="text-xs text-muted-foreground">{product.resolution}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Solutions Dropdown Menu */}
      <div 
        className={`absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg transition-all duration-200 z-50 ${
          solutionsDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onMouseEnter={() => setSolutionsDropdownOpen(true)}
        onMouseLeave={() => setSolutionsDropdownOpen(false)}
      >
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-3 gap-6">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="group rounded-lg overflow-hidden hover:bg-secondary transition-colors"
              >
                <div className="aspect-[16/7] bg-secondary overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <div className="font-semibold text-foreground group-hover:text-primary transition-colors">{solution.title}</div>
                  <div className="text-sm text-muted-foreground mb-3">{solution.description}</div>
                  <Link 
                    to={solution.href}
                    className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Support Dropdown Menu */}
      <div 
        className={`absolute left-0 right-0 top-full bg-card border-b border-border shadow-lg transition-all duration-200 z-50 ${
          supportDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onMouseEnter={() => setSupportDropdownOpen(true)}
        onMouseLeave={() => setSupportDropdownOpen(false)}
      >
        <div className="container mx-auto px-4 py-6">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">Support Resources</h3>
          <div className="flex flex-row gap-4">
            {supportLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group flex-1"
              >
                <div className="flex-1">
                  <div className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">{link.title}</div>
                  <div className="text-xs text-muted-foreground">{link.description}</div>
                </div>
                <ChevronDown className="w-4 h-4 rotate-[-90deg] text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;