import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SpinningCube from "@/components/SpinningCube";
import { Button } from "@/components/ui/button";
import { ChevronRight, Check, Download, ShoppingCart } from "lucide-react";

const productData = {
  "ace-2040-pro-series": {
    name: "ACE-2040 Pro Series",
    brand: "BASLER",
    category: "Area Scan Cameras",
    categorySlug: "area-scan-cameras",
    shortDescription: "High-performance area scan camera with exceptional image quality for demanding industrial applications.",
    description: "The ACE-2040 Pro Series represents the pinnacle of industrial imaging technology. Featuring a state-of-the-art Sony IMX sensor, this camera delivers exceptional image quality with minimal noise, even in challenging lighting conditions. The robust housing is designed for 24/7 operation in harsh industrial environments.",
    resolution: "4.2 MP",
    fps: "120",
    interface: "GigE",
    sensor: "Sony IMX267",
    sensorSize: "1/1.8\"",
    pixelSize: "3.45 µm",
    dynamicRange: "72 dB",
    operatingTemp: "-20°C to 60°C",
    dimensions: "29 x 29 x 41.5 mm",
    weight: "80g",
    features: [
      "Sony Pregius IMX267 CMOS sensor",
      "Power over Ethernet (PoE) support",
      "Hardware trigger with <1µs jitter",
      "Multi-ROI and sequencer mode",
      "Chunk data for image metadata",
      "GenICam compliant",
    ],
  },
};

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productData[slug as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link to="/area-scan-cameras" className="text-primary hover:underline mt-4 inline-block">
            Back to products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section with 3D Model */}
      <section className="pt-24 lg:pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/${product.categorySlug}`} className="hover:text-primary transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 3D Model */}
            <div className="aspect-square bg-card rounded-lg border border-border overflow-hidden">
              <SpinningCube />
            </div>

            {/* Product Info */}
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">{product.brand}</span>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {product.shortDescription}
              </p>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Resolution</div>
                  <div className="text-xl font-bold text-foreground">{product.resolution}</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Frame Rate</div>
                  <div className="text-xl font-bold text-foreground">{product.fps} fps</div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 text-center">
                  <div className="text-xs text-muted-foreground mb-1">Interface</div>
                  <div className="text-xl font-bold text-foreground">{product.interface}</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Request Quote
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Download Datasheet
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}
              </p>

              <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specs */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Technical Specifications</h2>
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {[
                      { label: "Resolution", value: product.resolution },
                      { label: "Frame Rate", value: `${product.fps} fps` },
                      { label: "Interface", value: product.interface },
                      { label: "Sensor", value: product.sensor },
                      { label: "Sensor Size", value: product.sensorSize },
                      { label: "Pixel Size", value: product.pixelSize },
                      { label: "Dynamic Range", value: product.dynamicRange },
                      { label: "Operating Temp", value: product.operatingTemp },
                      { label: "Dimensions", value: product.dimensions },
                      { label: "Weight", value: product.weight },
                    ].map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-secondary/50" : ""}>
                        <td className="px-4 py-3 text-sm font-medium text-muted-foreground">{spec.label}</td>
                        <td className="px-4 py-3 text-sm font-semibold text-foreground text-right">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
