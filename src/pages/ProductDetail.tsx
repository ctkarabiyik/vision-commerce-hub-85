import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { ChevronRight, Check, Download, ShoppingCart, FileText, Code, Star, Settings, Target } from "lucide-react";

// Model variant data keyed by slug
const modelVariants: Record<string, Array<Record<string, string>>> = {
  "1-1-7-inch-fa-lenses": [
    { model: "DZO_LA0628A_1712", efl: "6", imgCircle: "1/1.7\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.37%", mount: "C" },
    { model: "DZO_LA0828A_1712", efl: "8", imgCircle: "1/1.7\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.37%", mount: "C" },
    { model: "DZO_LA1228A_1712", efl: "12", imgCircle: "1/1.7\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.18%", mount: "C" },
    { model: "DZO_LA1628A_1712", efl: "16", imgCircle: "1/1.7\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.05%", mount: "C" },
    { model: "DZO_LA2528A_1712", efl: "25", imgCircle: "1/1.7\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "0.06%", mount: "C" },
    { model: "DZO_LA3528A_1712", efl: "35", imgCircle: "1/1.7\"", fNumber: "F2.8-16", wdRange: "200-inf", distortion: "0.03%", mount: "C" },
    { model: "DZO_LA5028A_1712", efl: "50", imgCircle: "1/1.7\"", fNumber: "F2.8-16", wdRange: "250-inf", distortion: "0.09%", mount: "C" },
  ],
  "2-3-inch-standard-fa-lenses": [
    { model: "DZO_LA0628A_2314", efl: "6", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.50%", mount: "C" },
    { model: "DZO_LA0828A_2314", efl: "8", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.40%", mount: "C" },
    { model: "DZO_LA1228A_2314", efl: "12", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.20%", mount: "C" },
    { model: "DZO_LA1628A_2314", efl: "16", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.10%", mount: "C" },
    { model: "DZO_LA2528A_2314", efl: "25", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "0.05%", mount: "C" },
    { model: "DZO_LA3528A_2314", efl: "35", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "200-inf", distortion: "0.03%", mount: "C" },
    { model: "DZO_LA5028A_2314", efl: "50", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "250-inf", distortion: "0.08%", mount: "C" },
  ],
  "2-3-inch-superior-fa-lenses": [
    { model: "DZO_LB0628A_2314", efl: "6", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.30%", mount: "C" },
    { model: "DZO_LB0828A_2314", efl: "8", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.25%", mount: "C" },
    { model: "DZO_LB1228A_2314", efl: "12", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.12%", mount: "C" },
    { model: "DZO_LB1628A_2314", efl: "16", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.05%", mount: "C" },
    { model: "DZO_LB2528A_2314", efl: "25", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "0.03%", mount: "C" },
    { model: "DZO_LB3528A_2314", efl: "35", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "200-inf", distortion: "0.02%", mount: "C" },
    { model: "DZO_LB5028A_2314", efl: "50", imgCircle: "2/3\"", fNumber: "F2.8-16", wdRange: "250-inf", distortion: "0.05%", mount: "C" },
  ],
  "1-1-inch-fa-lenses": [
    { model: "DZO_LA0828A_1116", efl: "8", imgCircle: "1.1\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.45%", mount: "C" },
    { model: "DZO_LA1228A_1116", efl: "12", imgCircle: "1.1\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.22%", mount: "C" },
    { model: "DZO_LA1628A_1116", efl: "16", imgCircle: "1.1\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "-0.08%", mount: "C" },
    { model: "DZO_LA2528A_1116", efl: "25", imgCircle: "1.1\"", fNumber: "F2.8-16", wdRange: "100-inf", distortion: "0.04%", mount: "C" },
    { model: "DZO_LA3528A_1116", efl: "35", imgCircle: "1.1\"", fNumber: "F2.8-16", wdRange: "200-inf", distortion: "0.02%", mount: "C" },
    { model: "DZO_LA5028A_1116", efl: "50", imgCircle: "1.1\"", fNumber: "F2.8-16", wdRange: "250-inf", distortion: "0.06%", mount: "C" },
    { model: "DZO_LA7528A_1116", efl: "75", imgCircle: "1.1\"", fNumber: "F2.8-16", wdRange: "400-inf", distortion: "0.04%", mount: "C" },
  ],
  // === LINE SCAN CAMERAS ===
  "1gige-line-scan-camera": [
    { model: "ALC-1001G", resolution: "1024 px", lineRate: "18 kHz", interface: "GigE", pixelSize: "14 µm", sensorType: "CMOS" },
    { model: "ALC-2001G", resolution: "2048 px", lineRate: "18 kHz", interface: "GigE", pixelSize: "14 µm", sensorType: "CMOS" },
    { model: "ALC-4001G", resolution: "4096 px", lineRate: "9 kHz", interface: "GigE", pixelSize: "10 µm", sensorType: "CMOS" },
    { model: "ALC-8001G", resolution: "8192 px", lineRate: "4.5 kHz", interface: "GigE", pixelSize: "7 µm", sensorType: "CMOS" },
  ],
  "2-5gige-line-scan-camera": [
    { model: "DSR4KC", resolution: "4096x3", lineRate: "23K (70K Bayer)", interface: "M42", pixelSize: "7 µm", sensorType: "Color" },
    { model: "DSR4KM", resolution: "4096x4", lineRate: "70K", interface: "M42", pixelSize: "7 µm", sensorType: "Mono" },
    { model: "DSR8KC", resolution: "8192x3", lineRate: "12.5K", interface: "M72x0.75", pixelSize: "7 µm", sensorType: "Color" },
    { model: "DSR8KM", resolution: "8192x1", lineRate: "37.5K", interface: "M72x0.75", pixelSize: "7 µm", sensorType: "Mono" },
  ],
  "10gige-line-scan-camera": [
    { model: "ALC-4010G", resolution: "4096 px", lineRate: "90 kHz", interface: "10GigE", pixelSize: "10 µm", sensorType: "CMOS" },
    { model: "ALC-8010G", resolution: "8192 px", lineRate: "45 kHz", interface: "10GigE", pixelSize: "7 µm", sensorType: "CMOS" },
    { model: "ALC-16010G", resolution: "16384 px", lineRate: "22 kHz", interface: "10GigE", pixelSize: "5 µm", sensorType: "CMOS" },
    { model: "ALC-16010G-HR", resolution: "16384 px", lineRate: "18 kHz", interface: "10GigE", pixelSize: "3.5 µm", sensorType: "CMOS" },
  ],
  // === AREA SCAN CAMERAS ===
  "mgv-series-1gige-area-scan": [
    { model: "MGV-030-G", resolution: "0.3 MP", fps: "120", interface: "GigE", pixelSize: "7.4 µm", sensorType: "CMOS" },
    { model: "MGV-050-G", resolution: "0.5 MP", fps: "90", interface: "GigE", pixelSize: "5.86 µm", sensorType: "CMOS" },
    { model: "MGV-130-G", resolution: "1.3 MP", fps: "60", interface: "GigE", pixelSize: "4.8 µm", sensorType: "CMOS" },
    { model: "MGV-200-G", resolution: "2.0 MP", fps: "45", interface: "GigE", pixelSize: "4.8 µm", sensorType: "CMOS" },
    { model: "MGV-500-G", resolution: "5.0 MP", fps: "22", interface: "GigE", pixelSize: "3.45 µm", sensorType: "CMOS" },
  ],
  "mgs-series-1gige-area-scan": [
    { model: "MGS-030-G", resolution: "0.3 MP", fps: "150", interface: "GigE", pixelSize: "7.4 µm", sensorType: "CMOS" },
    { model: "MGS-050-G", resolution: "0.5 MP", fps: "120", interface: "GigE", pixelSize: "5.86 µm", sensorType: "CMOS" },
    { model: "MGS-130-G", resolution: "1.3 MP", fps: "75", interface: "GigE", pixelSize: "4.8 µm", sensorType: "CMOS" },
    { model: "MGS-200-G", resolution: "2.0 MP", fps: "60", interface: "GigE", pixelSize: "4.8 µm", sensorType: "CMOS" },
    { model: "MGS-500-G", resolution: "5.0 MP", fps: "30", interface: "GigE", pixelSize: "3.45 µm", sensorType: "CMOS" },
  ],
  "m3s-series-usb3-area-scan": [
    { model: "M3S-030-U3", resolution: "0.3 MP", fps: "200", interface: "USB3.0", pixelSize: "7.4 µm", sensorType: "CMOS" },
    { model: "M3S-050-U3", resolution: "0.5 MP", fps: "150", interface: "USB3.0", pixelSize: "5.86 µm", sensorType: "CMOS" },
    { model: "M3S-130-U3", resolution: "1.3 MP", fps: "90", interface: "USB3.0", pixelSize: "4.8 µm", sensorType: "CMOS" },
    { model: "M3S-200-U3", resolution: "2.0 MP", fps: "75", interface: "USB3.0", pixelSize: "4.8 µm", sensorType: "CMOS" },
    { model: "M3S-500-U3", resolution: "5.0 MP", fps: "38", interface: "USB3.0", pixelSize: "3.45 µm", sensorType: "CMOS" },
  ],
  "u3p-series-usb3-area-scan": [
    { model: "U3P-200-U3", resolution: "2.0 MP", fps: "90", interface: "USB3.0", pixelSize: "4.8 µm", sensorType: "CMOS" },
    { model: "U3P-500-U3", resolution: "5.0 MP", fps: "45", interface: "USB3.0", pixelSize: "3.45 µm", sensorType: "CMOS" },
    { model: "U3P-900-U3", resolution: "9.0 MP", fps: "25", interface: "USB3.0", pixelSize: "3.45 µm", sensorType: "CMOS" },
    { model: "U3P-1200-U3", resolution: "12.0 MP", fps: "18", interface: "USB3.0", pixelSize: "3.45 µm", sensorType: "CMOS" },
  ],
  "m2s-series-usb2-area-scan": [
    { model: "M2S-030-U2", resolution: "0.3 MP", fps: "60", interface: "USB2.0", pixelSize: "7.4 µm", sensorType: "CMOS" },
    { model: "M2S-050-U2", resolution: "0.5 MP", fps: "45", interface: "USB2.0", pixelSize: "5.86 µm", sensorType: "CMOS" },
    { model: "M2S-130-U2", resolution: "1.3 MP", fps: "30", interface: "USB2.0", pixelSize: "4.8 µm", sensorType: "CMOS" },
    { model: "M2S-200-U2", resolution: "2.0 MP", fps: "22", interface: "USB2.0", pixelSize: "4.8 µm", sensorType: "CMOS" },
  ],
  "10gige-fiber-optic-area-scan": [
    { model: "AF10-2500", resolution: "25.0 MP", fps: "30", interface: "10GigE Fiber", pixelSize: "2.5 µm", sensorType: "CMOS" },
    { model: "AF10-5000", resolution: "50.0 MP", fps: "15", interface: "10GigE Fiber", pixelSize: "2.5 µm", sensorType: "CMOS" },
    { model: "AF10-6500", resolution: "65.0 MP", fps: "12", interface: "10GigE Fiber", pixelSize: "3.2 µm", sensorType: "CMOS" },
  ],
  "ds-series-dual-usb3-area-scan": [
    { model: "DS-200-DU3", resolution: "2.0 MP", fps: "180", interface: "Dual USB3.0", pixelSize: "4.8 µm", sensorType: "CMOS" },
    { model: "DS-500-DU3", resolution: "5.0 MP", fps: "90", interface: "Dual USB3.0", pixelSize: "3.45 µm", sensorType: "CMOS" },
    { model: "DS-900-DU3", resolution: "9.0 MP", fps: "50", interface: "Dual USB3.0", pixelSize: "3.45 µm", sensorType: "CMOS" },
    { model: "DS-1200-DU3", resolution: "12.0 MP", fps: "38", interface: "Dual USB3.0", pixelSize: "3.45 µm", sensorType: "CMOS" },
  ],
  "dsv-series-usb3-coin": [
    { model: "DSV-030-C", resolution: "0.3 MP", fps: "200", interface: "USB3.0", pixelSize: "7.4 µm", sensorType: "CMOS" },
    { model: "DSV-050-C", resolution: "0.5 MP", fps: "150", interface: "USB3.0", pixelSize: "5.86 µm", sensorType: "CMOS" },
    { model: "DSV-130-C", resolution: "1.3 MP", fps: "90", interface: "USB3.0", pixelSize: "4.8 µm", sensorType: "CMOS" },
  ],
  "lipstick-series-1gige-area-scan": [
    { model: "LP-030-G", resolution: "0.3 MP", fps: "120", interface: "GigE", pixelSize: "7.4 µm", sensorType: "CMOS" },
    { model: "LP-050-G", resolution: "0.5 MP", fps: "90", interface: "GigE", pixelSize: "5.86 µm", sensorType: "CMOS" },
    { model: "LP-130-G", resolution: "1.3 MP", fps: "60", interface: "GigE", pixelSize: "4.8 µm", sensorType: "CMOS" },
    { model: "LP-200-G", resolution: "2.0 MP", fps: "45", interface: "GigE", pixelSize: "4.8 µm", sensorType: "CMOS" },
  ],
  "frame-grabber-10-40gige": [
    { model: "FG-10G-4P", resolution: "10GigE x4", fps: "-", interface: "PCIe 3.0 x8", pixelSize: "-", sensorType: "Frame Grabber" },
    { model: "FG-25G-4P", resolution: "25GigE x4", fps: "-", interface: "PCIe 3.0 x8", pixelSize: "-", sensorType: "Frame Grabber" },
    { model: "FG-40G-2P", resolution: "40GigE x2", fps: "-", interface: "PCIe 3.0 x8", pixelSize: "-", sensorType: "Frame Grabber" },
  ],
};

interface ProductInfo {
  name: string;
  brand: string;
  category: string;
  categorySlug: string;
  image: string;
  shortDescription: string;
  description: string;
  resolution: string;
  fps: string;
  interface: string;
  sensor: string;
  sensorSize: string;
  pixelSize: string;
  dynamicRange: string;
  operatingTemp: string;
  dimensions: string;
  weight: string;
  features: string[];
  mainFeatures?: string[];
  quickSpecs?: string[];
  applications?: string[];
}

const productData: Record<string, ProductInfo> = {
  "ace-2040-pro-series": {
    name: "ACE-2040 Pro Series",
    brand: "BASLER",
    category: "Area Scan Cameras",
    categorySlug: "area-scan-cameras",
    image: "/src/assets/camera-product-1.jpg",
    shortDescription: "High-performance area scan camera with exceptional image quality for demanding industrial applications.",
    description: "The ACE-2040 Pro Series represents the pinnacle of industrial imaging technology. Featuring a state-of-the-art Sony IMX sensor, this camera delivers exceptional image quality with minimal noise, even in challenging lighting conditions.",
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
    features: ["Sony Pregius IMX267 CMOS sensor", "Power over Ethernet (PoE) support", "Hardware trigger with <1µs jitter", "Multi-ROI and sequencer mode", "Chunk data for image metadata", "GenICam compliant"],
  },

  // === FA LENSES ===
  "1-1-7-inch-fa-lenses": {
    name: "1/1.7 inch FA Lenses",
    brand: "DZOPTICS",
    category: "FA Lenses",
    categorySlug: "lenses",
    image: "/src/assets/fa-lens-1-1-7.png",
    shortDescription: "Compact high-resolution FA lenses designed for 1/1.7\" sensors in factory automation applications.",
    description: "The DZOPTICS 1/1.7 inch FA Lens series delivers exceptional optical performance for machine vision applications.",
    resolution: "1/1.7\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "1/1.7\" Sensors",
    sensorSize: "1/1.7\"",
    pixelSize: "Compatible with 2.5µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø29 x 32 mm",
    weight: "45g",
    features: ["Optimized for 1/1.7\" image sensors", "Low distortion design (<0.5%)", "High resolution across full image circle", "Compact C-Mount form factor", "Robust metal housing construction", "Anti-reflection multi-coating"],
    mainFeatures: ["Applicable for 3.45µm pixel size sensor (2.74µm for option)", "Image uniformity (resolution, distortion and chromatic aberration correction etc.) @full image circle & F#2.8", "Stable imaging quality over working distances for diverse applications", "Design for visible light application"],
    quickSpecs: ["Imaging circle: 1/1.7\"", "Wavelength: 400-700nm", "Focal length: 6mm - 50mm", "C Mount"],
    applications: ["Scan Code", "Color Selection", "2D Ranging", "3D Ranging"],
  },
  "2-3-inch-standard-fa-lenses": {
    name: "2/3 inch Standard FA Lenses",
    brand: "DZOPTICS",
    category: "FA Lenses",
    categorySlug: "lenses",
    image: "/src/assets/fa-lens-2-3-standard.png",
    shortDescription: "Standard-grade FA lenses optimized for 2/3\" sensors, delivering reliable performance for factory automation.",
    description: "The DZOPTICS 2/3 inch Standard FA Lens series provides cost-effective, high-quality imaging for mainstream machine vision applications.",
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "2/3\" Sensors",
    sensorSize: "2/3\"",
    pixelSize: "Compatible with 3.45µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø29 x 34 mm",
    weight: "50g",
    features: ["Optimized for 2/3\" image sensors", "Low distortion design", "Consistent edge-to-edge sharpness", "C-Mount compatibility", "Industrial-grade housing", "Multi-coated optics"],
    mainFeatures: ["Applicable for 3.45µm pixel size sensor", "Balanced cost-performance ratio for standard FA applications", "Stable imaging quality across working distance range", "Design for visible light application"],
    quickSpecs: ["Imaging circle: 2/3\"", "Wavelength: 400-700nm", "Focal length: 6mm - 50mm", "C Mount"],
    applications: ["Scan Code", "Color Selection", "2D Ranging", "3D Ranging"],
  },
  "2-3-inch-superior-fa-lenses": {
    name: "2/3 inch Superior FA Lenses",
    brand: "DZOPTICS",
    category: "FA Lenses",
    categorySlug: "lenses",
    image: "/src/assets/fa-lens-2-3-superior.png",
    shortDescription: "Premium-grade FA lenses for 2/3\" sensors with superior optical performance and ultra-low distortion.",
    description: "The DZOPTICS 2/3 inch Superior FA Lens series represents the highest optical quality for 2/3\" sensor applications, with enhanced resolution and minimized aberrations.",
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "2/3\" Sensors",
    sensorSize: "2/3\"",
    pixelSize: "Compatible with 2.5µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø29 x 36 mm",
    weight: "55g",
    features: ["Premium optics for 2/3\" sensors", "Ultra-low distortion (<0.3%)", "Superior edge resolution", "C-Mount form factor", "Precision metal housing", "Advanced anti-reflection coating"],
    mainFeatures: ["Applicable for 2.74µm pixel size sensor and below", "Superior image uniformity with enhanced chromatic aberration correction @F#2.8", "Ultra-stable imaging over extended working distances", "Design for visible light application"],
    quickSpecs: ["Imaging circle: 2/3\"", "Wavelength: 400-700nm", "Focal length: 6mm - 50mm", "C Mount"],
    applications: ["Precision Measurement", "Color Inspection", "2D Ranging", "3D Ranging"],
  },
  "1-1-inch-fa-lenses": {
    name: "1.1 inch FA Lenses",
    brand: "DZOPTICS",
    category: "FA Lenses",
    categorySlug: "lenses",
    image: "/src/assets/fa-lens-1-1.png",
    shortDescription: "Large-format FA lenses designed for 1.1\" sensors, providing wide coverage for high-resolution imaging.",
    description: "The DZOPTICS 1.1 inch FA Lens series covers larger sensor formats for demanding machine vision applications requiring higher pixel counts.",
    resolution: "1.1\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "1.1\" Sensors",
    sensorSize: "1.1\"",
    pixelSize: "Compatible with 2.5µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø33 x 38 mm",
    weight: "65g",
    features: ["Optimized for 1.1\" image sensors", "Large image circle coverage", "High resolution across full field", "C-Mount compatibility", "Robust industrial housing", "Multi-coated glass elements"],
    mainFeatures: ["Applicable for 2.74µm pixel size sensor (2.5µm for option)", "Full image circle coverage for 1.1\" sensors @F#2.8", "Stable imaging quality over extended working distances", "Design for visible light application"],
    quickSpecs: ["Imaging circle: 1.1\"", "Wavelength: 400-700nm", "Focal length: 8mm - 75mm", "C Mount"],
    applications: ["Scan Code", "Precision Measurement", "2D Ranging", "3D Ranging"],
  },

  // === TELECENTRIC LENSES - CO-AXIAL ===
  "23-coaxial-telecentric": {
    name: "2/3 inch Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    category: "Telecentric Lenses",
    categorySlug: "lenses",
    image: "/src/assets/telecentric-23-coaxial.png",
    shortDescription: "Co-axial telecentric lens for 2/3\" sensors with integrated illumination for precise dimensional measurement.",
    description: "The DZOPTICS 2/3\" Co-Axial Telecentric Lens provides distortion-free imaging with built-in co-axial illumination, ideal for precision measurement applications.",
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "2/3\" Sensors",
    sensorSize: "2/3\"",
    pixelSize: "Compatible with 3.45µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø50 x 120 mm",
    weight: "320g",
    features: ["Zero parallax error", "Built-in co-axial illumination port", "Ultra-low distortion (<0.1%)", "Telecentric on both object and image side", "High depth of field", "Anti-reflection coated"],
    mainFeatures: ["Bi-telecentric design eliminating perspective errors", "Integrated co-axial illumination for surface inspection", "Ultra-low distortion for precision dimensional measurement", "Constant magnification independent of working distance"],
    quickSpecs: ["Imaging circle: 2/3\"", "Telecentricity: <0.1°", "Distortion: <0.1%", "C Mount"],
    applications: ["Dimensional Measurement", "Surface Inspection", "Flatness Detection", "Defect Inspection"],
  },
  "11-coaxial-telecentric": {
    name: "1.1 inch Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    category: "Telecentric Lenses",
    categorySlug: "lenses",
    image: "/src/assets/telecentric-11-coaxial.png",
    shortDescription: "Co-axial telecentric lens for 1.1\" sensors with integrated illumination for high-resolution measurement.",
    description: "The DZOPTICS 1.1\" Co-Axial Telecentric Lens delivers distortion-free imaging for larger sensors with co-axial illumination capability.",
    resolution: "1.1\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "1.1\" Sensors",
    sensorSize: "1.1\"",
    pixelSize: "Compatible with 2.5µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø55 x 130 mm",
    weight: "380g",
    features: ["Bi-telecentric optical design", "Co-axial illumination port", "Ultra-low distortion", "1.1\" sensor coverage", "High resolution optics", "Industrial-grade construction"],
    mainFeatures: ["Bi-telecentric design for 1.1\" sensor coverage", "Integrated co-axial illumination for reflective surfaces", "Minimal distortion for precision gauging", "Stable magnification across depth of field"],
    quickSpecs: ["Imaging circle: 1.1\"", "Telecentricity: <0.1°", "Distortion: <0.08%", "C Mount"],
    applications: ["Precision Gauging", "Surface Inspection", "Component Measurement", "Assembly Verification"],
  },
  "12-coaxial-telecentric": {
    name: "1.2 inch Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    category: "Telecentric Lenses",
    categorySlug: "lenses",
    image: "/src/assets/telecentric-12-coaxial.png",
    shortDescription: "Co-axial telecentric lens for 1.2\" sensors providing distortion-free measurement with integrated illumination.",
    description: "The DZOPTICS 1.2\" Co-Axial Telecentric Lens supports larger format sensors for high-precision measurement applications.",
    resolution: "1.2\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "1.2\" Sensors",
    sensorSize: "1.2\"",
    pixelSize: "Compatible with 2.5µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø58 x 135 mm",
    weight: "420g",
    features: ["Bi-telecentric design", "Co-axial illumination port", "1.2\" full coverage", "Ultra-low distortion", "High MTF performance", "Robust metal construction"],
    mainFeatures: ["Bi-telecentric design for 1.2\" large format sensors", "Co-axial illumination for uniform surface lighting", "Ultra-precise dimensional measurement capability", "Consistent magnification through full depth of field"],
    quickSpecs: ["Imaging circle: 1.2\"", "Telecentricity: <0.1°", "Distortion: <0.08%", "C Mount"],
    applications: ["Large Field Measurement", "PCB Inspection", "Wafer Inspection", "Precision Metrology"],
  },
  "large-coaxial-telecentric": {
    name: "Large Format Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    category: "Telecentric Lenses",
    categorySlug: "lenses",
    image: "/src/assets/telecentric-large-coaxial.png",
    shortDescription: "Large format co-axial telecentric lens for oversized sensor coverage in demanding measurement applications.",
    description: "The DZOPTICS Large Format Co-Axial Telecentric Lens provides telecentric imaging for the largest sensor formats available.",
    resolution: "Large",
    fps: "-",
    interface: "F-Mount",
    sensor: "Large Format Sensors",
    sensorSize: "Large Format",
    pixelSize: "Compatible with 3.45µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø80 x 180 mm",
    weight: "850g",
    features: ["Large format sensor coverage", "Co-axial illumination", "Ultra-low distortion", "Bi-telecentric design", "High-resolution optics", "Premium metal housing"],
    mainFeatures: ["Full coverage for large format industrial sensors", "Integrated co-axial illumination for complex surface analysis", "Bi-telecentric design with minimal distortion", "Designed for high-accuracy metrology applications"],
    quickSpecs: ["Imaging circle: Large Format", "Telecentricity: <0.1°", "Distortion: <0.05%", "F Mount"],
    applications: ["Large Area Inspection", "Display Panel Inspection", "Solar Cell Inspection", "Precision Metrology"],
  },

  // === TELECENTRIC LENSES - NON-CO-AXIAL ===
  "half-inch-noncoaxial-telecentric": {
    name: "1/2 inch Non-Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    category: "Telecentric Lenses",
    categorySlug: "lenses",
    image: "/src/assets/telecentric-12-noncoaxial.png",
    shortDescription: "Compact non-co-axial telecentric lens for 1/2\" sensors, ideal for space-constrained measurement setups.",
    description: "The DZOPTICS 1/2\" Non-Co-Axial Telecentric Lens provides distortion-free imaging in a compact form factor for smaller sensor applications.",
    resolution: "1/2\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "1/2\" Sensors",
    sensorSize: "1/2\"",
    pixelSize: "Compatible with 3.45µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø42 x 95 mm",
    weight: "200g",
    features: ["Compact telecentric design", "Non-co-axial configuration", "Low distortion optics", "1/2\" sensor coverage", "C-Mount interface", "External illumination compatible"],
    mainFeatures: ["Object-side telecentric design for 1/2\" sensors", "Compact form factor for tight integration spaces", "Low distortion for reliable dimensional measurement", "Compatible with external ring or diffuse illumination"],
    quickSpecs: ["Imaging circle: 1/2\"", "Telecentricity: <0.1°", "Distortion: <0.1%", "C Mount"],
    applications: ["Dimensional Measurement", "Part Inspection", "Gap Measurement", "Pin Inspection"],
  },
  "23-noncoaxial-telecentric": {
    name: "2/3 inch Non-Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    category: "Telecentric Lenses",
    categorySlug: "lenses",
    image: "/src/assets/telecentric-23-noncoaxial.png",
    shortDescription: "Non-co-axial telecentric lens for 2/3\" sensors with external illumination compatibility.",
    description: "The DZOPTICS 2/3\" Non-Co-Axial Telecentric Lens provides precise measurement capabilities with flexibility in illumination setup.",
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "2/3\" Sensors",
    sensorSize: "2/3\"",
    pixelSize: "Compatible with 3.45µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø48 x 110 mm",
    weight: "280g",
    features: ["Object-side telecentric", "Non-co-axial design", "Ultra-low distortion", "2/3\" coverage", "C-Mount interface", "Flexible illumination options"],
    mainFeatures: ["Object-side telecentric design eliminating perspective errors", "Non-co-axial configuration for flexible lighting setups", "Ultra-low distortion for dimensional measurement", "Optimized for 2/3\" sensor formats"],
    quickSpecs: ["Imaging circle: 2/3\"", "Telecentricity: <0.1°", "Distortion: <0.1%", "C Mount"],
    applications: ["Edge Detection", "Dimensional Measurement", "Profile Inspection", "Contour Measurement"],
  },
  "23-noncoaxial-telecentric-b": {
    name: "2/3 inch Non-Co-Axial Telecentric Lens (Type B)",
    brand: "DZOPTICS",
    category: "Telecentric Lenses",
    categorySlug: "lenses",
    image: "/src/assets/telecentric-11-noncoaxial.png",
    shortDescription: "Alternative non-co-axial telecentric lens for 2/3\" sensors with different magnification options.",
    description: "The DZOPTICS 2/3\" Non-Co-Axial Telecentric Lens Type B offers an alternative magnification range for specialized measurement needs.",
    resolution: "2/3\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "2/3\" Sensors",
    sensorSize: "2/3\"",
    pixelSize: "Compatible with 3.45µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø48 x 115 mm",
    weight: "290g",
    features: ["Object-side telecentric", "Alternative magnification range", "Low distortion", "2/3\" coverage", "C-Mount interface", "Industrial-grade build"],
    mainFeatures: ["Alternative magnification for specialized measurement tasks", "Object-side telecentric design", "Low distortion for reliable gauging", "Designed for 2/3\" sensor compatibility"],
    quickSpecs: ["Imaging circle: 2/3\"", "Telecentricity: <0.1°", "Distortion: <0.1%", "C Mount"],
    applications: ["Precision Gauging", "Micro-part Inspection", "Thread Inspection", "Gear Measurement"],
  },
  "11-noncoaxial-telecentric": {
    name: "1.1 inch Non-Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    category: "Telecentric Lenses",
    categorySlug: "lenses",
    image: "/src/assets/telecentric-12-noncoaxial-alt.png",
    shortDescription: "Non-co-axial telecentric lens for 1.1\" sensors with high-resolution measurement capability.",
    description: "The DZOPTICS 1.1\" Non-Co-Axial Telecentric Lens provides large-field telecentric imaging for demanding measurement applications.",
    resolution: "1.1\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "1.1\" Sensors",
    sensorSize: "1.1\"",
    pixelSize: "Compatible with 2.5µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø55 x 125 mm",
    weight: "350g",
    features: ["1.1\" sensor coverage", "Non-co-axial telecentric", "High-resolution optics", "Low distortion", "C-Mount interface", "External illumination compatible"],
    mainFeatures: ["Object-side telecentric for 1.1\" large format sensors", "Non-co-axial design for versatile illumination setups", "High-resolution optics for detailed measurement", "Minimal distortion across full field of view"],
    quickSpecs: ["Imaging circle: 1.1\"", "Telecentricity: <0.1°", "Distortion: <0.08%", "C Mount"],
    applications: ["Large Field Measurement", "Multi-part Inspection", "Connector Inspection", "Precision Metrology"],
  },
  "12-noncoaxial-telecentric": {
    name: "1.2 inch Non-Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    category: "Telecentric Lenses",
    categorySlug: "lenses",
    image: "/src/assets/telecentric-18.png",
    shortDescription: "Non-co-axial telecentric lens for 1.2\" sensors, designed for high-precision large-field measurement.",
    description: "The DZOPTICS 1.2\" Non-Co-Axial Telecentric Lens supports large format sensors for precise dimensional measurement.",
    resolution: "1.2\"",
    fps: "-",
    interface: "C-Mount",
    sensor: "1.2\" Sensors",
    sensorSize: "1.2\"",
    pixelSize: "Compatible with 2.5µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø58 x 130 mm",
    weight: "400g",
    features: ["1.2\" full sensor coverage", "Non-co-axial configuration", "Ultra-low distortion", "High MTF", "C-Mount compatible", "Robust construction"],
    mainFeatures: ["Full 1.2\" sensor coverage for maximum field of view", "Non-co-axial design with external illumination flexibility", "Ultra-low distortion for critical measurement", "High MTF across entire image field"],
    quickSpecs: ["Imaging circle: 1.2\"", "Telecentricity: <0.1°", "Distortion: <0.08%", "C Mount"],
    applications: ["PCB Inspection", "Display Inspection", "Large Area Metrology", "Wafer Measurement"],
  },
  "large-noncoaxial-telecentric": {
    name: "Large Format Non-Co-Axial Telecentric Lens",
    brand: "DZOPTICS",
    category: "Telecentric Lenses",
    categorySlug: "lenses",
    image: "/src/assets/telecentric-large-noncoaxial.png",
    shortDescription: "Large format non-co-axial telecentric lens for oversized sensor coverage in industrial metrology.",
    description: "The DZOPTICS Large Format Non-Co-Axial Telecentric Lens provides the widest field telecentric imaging for large-area inspection.",
    resolution: "Large",
    fps: "-",
    interface: "F-Mount",
    sensor: "Large Format Sensors",
    sensorSize: "Large Format",
    pixelSize: "Compatible with 3.45µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø75 x 170 mm",
    weight: "780g",
    features: ["Large format coverage", "Non-co-axial telecentric", "High-precision optics", "Ultra-low distortion", "F-Mount interface", "Premium build quality"],
    mainFeatures: ["Maximum field coverage for large format sensors", "Non-co-axial design for flexible illumination schemes", "Ultra-low distortion for precision metrology", "Engineered for continuous industrial operation"],
    quickSpecs: ["Imaging circle: Large Format", "Telecentricity: <0.1°", "Distortion: <0.05%", "F Mount"],
    applications: ["Large Panel Inspection", "Solar Cell Measurement", "Flat Panel Display QC", "Industrial Metrology"],
  },

  // === LINE SCAN LENSES ===
  "4k-line-scan-lens": {
    name: "4K Line Scan Lens",
    brand: "DZOPTICS",
    category: "Line Scan Lenses",
    categorySlug: "lenses",
    image: "/src/assets/line-scan-4k.png",
    shortDescription: "High-performance line scan lens optimized for 4K line scan cameras in web inspection applications.",
    description: "The DZOPTICS 4K Line Scan Lens is engineered for optimal line-rate imaging with 4K resolution line scan cameras.",
    resolution: "4K",
    fps: "-",
    interface: "M42",
    sensor: "4K Line Sensors",
    sensorSize: "Line Scan",
    pixelSize: "Compatible with 7µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø42 x 65 mm",
    weight: "180g",
    features: ["Optimized for 4K line sensors", "High line-rate performance", "Low chromatic aberration", "M42 mount interface", "Industrial-grade housing", "Anti-reflection coated"],
    mainFeatures: ["Optimized MTF for 4K line scan sensor resolution", "Minimal chromatic aberration for color line scan applications", "Uniform illumination across full line length", "Designed for continuous high-speed web inspection"],
    quickSpecs: ["Resolution: 4K", "Wavelength: 400-700nm", "Sensor compatibility: 4K line scan", "M42 Mount"],
    applications: ["Web Inspection", "Print Inspection", "Textile Inspection", "Surface Scanning"],
  },
  "8k-line-scan-lens": {
    name: "8K Line Scan Lens",
    brand: "DZOPTICS",
    category: "Line Scan Lenses",
    categorySlug: "lenses",
    image: "/src/assets/line-scan-8k.png",
    shortDescription: "High-resolution line scan lens for 8K cameras, delivering superior image quality for demanding inspection tasks.",
    description: "The DZOPTICS 8K Line Scan Lens provides enhanced resolution for high-pixel-count line scan imaging applications.",
    resolution: "8K",
    fps: "-",
    interface: "M42",
    sensor: "8K Line Sensors",
    sensorSize: "Line Scan",
    pixelSize: "Compatible with 5µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø48 x 72 mm",
    weight: "220g",
    features: ["Optimized for 8K line sensors", "High MTF at Nyquist", "Low distortion", "M42 mount", "Robust construction", "Multi-coated elements"],
    mainFeatures: ["High MTF performance at 8K resolution", "Optimized for 5µm pixel pitch sensors", "Edge-to-edge sharpness across full line length", "Designed for high-throughput inspection systems"],
    quickSpecs: ["Resolution: 8K", "Wavelength: 400-700nm", "Sensor compatibility: 8K line scan", "M42 Mount"],
    applications: ["High-res Web Inspection", "PCB Scanning", "Film Inspection", "Material Surface Analysis"],
  },
  "16k-35u-line-scan-lens": {
    name: "16K / 3.5u Line Scan Lens",
    brand: "DZOPTICS",
    category: "Line Scan Lenses",
    categorySlug: "lenses",
    image: "/src/assets/line-scan-16k-35u.png",
    shortDescription: "Ultra-high resolution 16K line scan lens optimized for 3.5µm pixel pitch sensors.",
    description: "The DZOPTICS 16K/3.5µ Line Scan Lens delivers maximum resolution for the finest pixel pitch 16K line scan cameras.",
    resolution: "16K",
    fps: "-",
    interface: "M42",
    sensor: "16K Line Sensors (3.5µm)",
    sensorSize: "Line Scan",
    pixelSize: "Compatible with 3.5µm",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø52 x 80 mm",
    weight: "280g",
    features: ["16K resolution support", "3.5µm pixel pitch optimized", "Ultra-high MTF", "M42 mount", "Premium glass elements", "Industrial-grade build"],
    mainFeatures: ["Designed specifically for 3.5µm pixel pitch 16K sensors", "Ultra-high MTF for maximum resolving power", "Minimal chromatic and geometric aberration", "Premium optical glass for superior imaging"],
    quickSpecs: ["Resolution: 16K", "Pixel pitch: 3.5µm", "Wavelength: 400-700nm", "M42 Mount"],
    applications: ["Ultra-high-res Inspection", "Semiconductor Wafer Scanning", "Precision Film Inspection", "Advanced Material Analysis"],
  },
  "16k-5u-line-scan-lens": {
    name: "16K / 5u Line Scan Lens",
    brand: "DZOPTICS",
    category: "Line Scan Lenses",
    categorySlug: "lenses",
    image: "/src/assets/line-scan-16k-5u.png",
    shortDescription: "16K line scan lens optimized for 5µm pixel pitch sensors, balancing resolution and light throughput.",
    description: "The DZOPTICS 16K/5µ Line Scan Lens provides excellent imaging for 5µm pixel pitch 16K line scan cameras.",
    resolution: "16K",
    fps: "-",
    interface: "M42",
    sensor: "16K Line Sensors (5µm)",
    sensorSize: "Line Scan",
    pixelSize: "Compatible with 5µm",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Ø52 x 78 mm",
    weight: "270g",
    features: ["16K resolution support", "5µm pixel pitch optimized", "High light throughput", "M42 mount", "Multi-coated optics", "Robust housing"],
    mainFeatures: ["Optimized for 5µm pixel pitch 16K sensors", "Balanced resolution and light throughput", "High MTF at Nyquist frequency", "Designed for high-speed continuous operation"],
    quickSpecs: ["Resolution: 16K", "Pixel pitch: 5µm", "Wavelength: 400-700nm", "M42 Mount"],
    applications: ["Web Inspection", "Large Format Scanning", "Industrial Print QC", "Continuous Surface Inspection"],
  },

  // === SPECIALTY LENSES ===
  "macro-lenses": {
    name: "Macro Lenses",
    brand: "DZOPTICS",
    category: "Macro Lenses",
    categorySlug: "lenses",
    image: "/src/assets/macro-lenses.png",
    shortDescription: "High-magnification macro lenses for close-up inspection of small components and fine details.",
    description: "The DZOPTICS Macro Lens series provides high-magnification imaging for detailed inspection of miniature components.",
    resolution: "Various",
    fps: "-",
    interface: "C-Mount",
    sensor: "Various Sensors",
    sensorSize: "Various",
    pixelSize: "Application dependent",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Various",
    weight: "Various",
    features: ["High magnification ratios", "Excellent close-focus performance", "Low distortion at macro range", "C-Mount compatibility", "Flat field design", "Multi-coated elements"],
    mainFeatures: ["High magnification ratios (1x to 10x) for micro-inspection", "Flat field design for uniform sharpness across image", "Optimized for short working distance applications", "Compatible with a wide range of sensor formats"],
    quickSpecs: ["Magnification: 1x - 10x", "Working distance: 20-100mm", "Wavelength: 400-700nm", "C Mount"],
    applications: ["Micro-component Inspection", "Solder Joint Analysis", "Surface Texture Analysis", "Biological Imaging"],
  },
  "infrared-lenses": {
    name: "Infrared Lenses",
    brand: "DZOPTICS",
    category: "Infrared Lenses",
    categorySlug: "lenses",
    image: "/src/assets/infrared-lenses.png",
    shortDescription: "Specialized lenses for infrared imaging applications including SWIR and thermal wavelength ranges.",
    description: "The DZOPTICS Infrared Lens series is designed for imaging beyond the visible spectrum, supporting SWIR and thermal applications.",
    resolution: "Various",
    fps: "-",
    interface: "C-Mount",
    sensor: "IR Sensors",
    sensorSize: "Various",
    pixelSize: "Application dependent",
    dynamicRange: "-",
    operatingTemp: "-20°C to 60°C",
    dimensions: "Various",
    weight: "Various",
    features: ["IR-optimized optical design", "SWIR wavelength support", "Low thermal drift", "C-Mount interface", "AR-coated for IR transmission", "Industrial-grade housing"],
    mainFeatures: ["Optimized for SWIR (900-1700nm) wavelength range", "IR-specific anti-reflection coatings for maximum transmission", "Minimal thermal focus shift for stable operation", "Compatible with InGaAs and other IR sensor technologies"],
    quickSpecs: ["Wavelength: 900-1700nm (SWIR)", "Coating: IR-optimized AR", "Thermal stability: Low drift", "C Mount"],
    applications: ["Moisture Detection", "Silicon Wafer Inspection", "Thermal Imaging", "Food Quality Inspection"],
  },
  "vr-lenses": {
    name: "VR Lenses",
    brand: "DZOPTICS",
    category: "VR Lenses",
    categorySlug: "lenses",
    image: "/src/assets/vr-lenses.png",
    shortDescription: "Wide field-of-view lenses designed for virtual reality and panoramic imaging applications.",
    description: "The DZOPTICS VR Lens series provides ultra-wide field of view imaging for VR content capture and panoramic systems.",
    resolution: "Wide FOV",
    fps: "-",
    interface: "Various",
    sensor: "Various Sensors",
    sensorSize: "Various",
    pixelSize: "Application dependent",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Various",
    weight: "Various",
    features: ["Ultra-wide field of view", "Low chromatic aberration", "Optimized for VR capture", "Multiple mount options", "High-quality glass elements", "Compact design"],
    mainFeatures: ["Ultra-wide field of view (up to 220°) for immersive capture", "Low chromatic aberration for high-quality VR content", "Optimized distortion profile for VR stitching software", "Compact form factor for multi-camera VR rigs"],
    quickSpecs: ["Field of view: up to 220°", "Low chromatic aberration", "VR-optimized distortion", "Multiple mounts available"],
    applications: ["VR Content Capture", "360° Panoramic Imaging", "Surveillance Systems", "Autonomous Navigation"],
  },
  "scheimpflug-lenses": {
    name: "Scheimpflug Lenses",
    brand: "DZOPTICS",
    category: "Scheimpflug Lenses",
    categorySlug: "lenses",
    image: "/src/assets/scheimpflug-lenses.png",
    shortDescription: "Tilt-capable lenses utilizing the Scheimpflug principle for extended depth of field on tilted planes.",
    description: "The DZOPTICS Scheimpflug Lens series features adjustable tilt mechanisms for imaging tilted planes with full sharpness.",
    resolution: "Various",
    fps: "-",
    interface: "Adjustable",
    sensor: "Various Sensors",
    sensorSize: "Various",
    pixelSize: "Application dependent",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Various",
    weight: "Various",
    features: ["Adjustable tilt mechanism", "Scheimpflug principle imaging", "Extended depth of field", "Lockable tilt angles", "Industrial-grade construction", "Multi-coated optics"],
    mainFeatures: ["Adjustable tilt (±15°) for Scheimpflug plane alignment", "Extended depth of field on tilted object planes", "Precision lockable tilt mechanism for stable operation", "Compatible with line scan and area scan configurations"],
    quickSpecs: ["Tilt range: ±15°", "Lockable tilt mechanism", "Extended depth of field", "Adjustable mount"],
    applications: ["3D Laser Triangulation", "Tilted Surface Inspection", "Weld Seam Inspection", "Profile Measurement"],
  },
  "large-format-lenses": {
    name: "Large Format Lenses",
    brand: "DZOPTICS",
    category: "Large Format Lenses",
    categorySlug: "lenses",
    image: "/src/assets/large-format-lenses.png",
    shortDescription: "High-coverage lenses designed for large format sensors in high-resolution industrial imaging.",
    description: "The DZOPTICS Large Format Lens series provides full coverage for oversized sensors used in high-resolution applications.",
    resolution: "Large",
    fps: "-",
    interface: "Various",
    sensor: "Large Format Sensors",
    sensorSize: "Large Format",
    pixelSize: "Compatible with 3.45µm+",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "Various",
    weight: "Various",
    features: ["Large sensor format coverage", "High-resolution optics", "Low vignetting", "Multiple mount options", "Robust construction", "Premium glass elements"],
    mainFeatures: ["Full coverage for APS-C, APS-H and larger sensor formats", "High-resolution optics with minimal vignetting", "Optimized for high pixel count sensors (50MP+)", "Designed for flat-field industrial imaging"],
    quickSpecs: ["Sensor coverage: up to Medium Format", "Low vignetting design", "High resolution optics", "Multiple mounts available"],
    applications: ["Aerial Imaging", "Large Area Inspection", "High-res Document Scanning", "Flat Panel Inspection"],
  },

  // === LINE SCAN CAMERAS ===
  "1gige-line-scan-camera": {
    name: "1GigE Line Scan Camera",
    brand: "Do3Think",
    category: "Line Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/line-scan-camera-1gige.png",
    shortDescription: "Cost-effective 1GigE line scan camera for standard-speed continuous inspection applications.",
    description: "The Do3Think 1GigE Line Scan Camera provides reliable line scan imaging over standard Gigabit Ethernet for mainstream inspection tasks.",
    resolution: "1GigE",
    fps: "-",
    interface: "GigE",
    sensor: "Linear CMOS",
    sensorSize: "Line Scan",
    pixelSize: "7-14 µm",
    dynamicRange: "60 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "62 x 62 x 44 mm",
    weight: "150g",
    features: ["GigE Vision interface", "Power over Ethernet", "Hardware trigger", "GenICam compliant", "Compact housing", "Industrial-grade"],
    mainFeatures: ["Standard GigE Vision interface for easy integration", "Resolutions from 1K to 8K pixels for versatile applications", "Power over Ethernet (PoE) for simplified cabling", "Compact industrial design for space-constrained environments"],
    quickSpecs: ["Interface: 1GigE (1 Gbps)", "Resolution: 1024 - 8192 px", "Line rate: up to 18 kHz", "GigE Vision / GenICam"],
    applications: ["Web Inspection", "Print Inspection", "Food Sorting", "Textile Inspection"],
  },
  "2-5gige-line-scan-camera": {
    name: "2.5GigE Line Scan Camera",
    brand: "Do3Think",
    category: "Line Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/line-scan-camera-2-5gige.png",
    shortDescription: "High-throughput 2.5GigE line scan camera for demanding continuous inspection with increased bandwidth.",
    description: "The Do3Think 2.5GigE Line Scan Camera delivers 2.5x the bandwidth of standard GigE for higher line rates and resolutions.",
    resolution: "2.5GigE",
    fps: "-",
    interface: "2.5GigE",
    sensor: "Linear CMOS",
    sensorSize: "Line Scan",
    pixelSize: "5-14 µm",
    dynamicRange: "64 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "62 x 62 x 44 mm",
    weight: "155g",
    features: ["2.5GigE Vision interface", "High line rates", "Power over Ethernet", "GenICam compliant", "Multi-line TDI support", "Robust housing"],
    mainFeatures: ["2.5 Gbps bandwidth for higher line rates and resolutions", "Support for up to 16K resolution line sensors", "NBASE-T compatible for use with standard Cat5e cabling", "Advanced triggering and multi-ROI capabilities"],
    quickSpecs: ["Interface: 2.5GigE (2.5 Gbps)", "Resolution: 2048 - 16384 px", "Line rate: up to 45 kHz", "GigE Vision / GenICam"],
    applications: ["High-speed Web Inspection", "PCB Inspection", "Pharmaceutical Packaging", "Surface Scanning"],
  },
  "10gige-line-scan-camera": {
    name: "10GigE Line Scan Camera",
    brand: "Do3Think",
    category: "Line Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/line-scan-camera-10gige.png",
    shortDescription: "Ultra-high bandwidth 10GigE line scan camera for the most demanding high-speed, high-resolution inspection tasks.",
    description: "The Do3Think 10GigE Line Scan Camera delivers maximum bandwidth for ultra-high-speed line scan applications requiring top resolution and line rates.",
    resolution: "10GigE",
    fps: "-",
    interface: "10GigE",
    sensor: "Linear CMOS",
    sensorSize: "Line Scan",
    pixelSize: "3.5-10 µm",
    dynamicRange: "68 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "72 x 72 x 52 mm",
    weight: "200g",
    features: ["10GigE Vision interface", "Ultra-high line rates", "Hardware trigger", "GenICam compliant", "Active cooling", "Industrial-grade"],
    mainFeatures: ["10 Gbps bandwidth for maximum throughput applications", "Ultra-high line rates up to 90 kHz for fastest inspection", "Support for 16K resolution with 3.5µm pixel pitch sensors", "Active thermal management for continuous 24/7 operation"],
    quickSpecs: ["Interface: 10GigE (10 Gbps)", "Resolution: 4096 - 16384 px", "Line rate: up to 90 kHz", "GigE Vision / GenICam"],
    applications: ["Ultra-high-speed Inspection", "Semiconductor Wafer Scanning", "High-res Print QC", "Advanced Material Analysis"],
  },
  // === AREA SCAN CAMERAS ===
  "mgv-series-1gige-area-scan": {
    name: "MGV Series 1GigE Area Scan Cameras",
    brand: "Do3Think",
    category: "Area Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/area-scan-mgv-1gige.png",
    shortDescription: "Versatile 1GigE area scan cameras with Sony sensors for general-purpose machine vision applications.",
    description: "The MGV Series delivers reliable GigE Vision imaging for a wide range of industrial inspection tasks.",
    resolution: "Various",
    fps: "-",
    interface: "GigE",
    sensor: "Sony CMOS",
    sensorSize: "Various",
    pixelSize: "3.45-7.4 µm",
    dynamicRange: "60 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "44 x 29 x 29 mm",
    weight: "80g",
    features: ["GigE Vision interface", "Sony CMOS sensors", "Power over Ethernet", "Hardware trigger", "GenICam compliant", "Compact housing"],
    mainFeatures: ["Sony Pregius CMOS sensors for excellent image quality", "GigE Vision interface with Power over Ethernet", "Compact industrial design for space-constrained setups", "Wide range of resolutions from 0.3 MP to 5.0 MP"],
    quickSpecs: ["Interface: GigE (1 Gbps)", "Resolution: 0.3 - 5.0 MP", "Frame rate: up to 120 fps", "GigE Vision / GenICam"],
    applications: ["Quality Inspection", "Assembly Verification", "Barcode Reading", "Defect Detection"],
  },
  "mgs-series-1gige-area-scan": {
    name: "MGS Series 1GigE Area Scan Cameras",
    brand: "Do3Think",
    category: "Area Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/area-scan-mgs-1gige.png",
    shortDescription: "High-performance 1GigE area scan cameras with enhanced sensitivity for demanding inspection environments.",
    description: "The MGS Series offers higher frame rates and improved sensitivity compared to standard GigE cameras.",
    resolution: "Various",
    fps: "-",
    interface: "GigE",
    sensor: "Sony CMOS",
    sensorSize: "Various",
    pixelSize: "3.45-7.4 µm",
    dynamicRange: "64 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "44 x 29 x 29 mm",
    weight: "82g",
    features: ["Enhanced sensitivity", "Higher frame rates", "GigE Vision interface", "PoE support", "GenICam compliant", "Robust metal housing"],
    mainFeatures: ["Enhanced sensitivity for low-light inspection environments", "Higher frame rates for faster production line speeds", "GigE Vision with Power over Ethernet for simple cabling", "Wide resolution range from 0.3 MP to 5.0 MP"],
    quickSpecs: ["Interface: GigE (1 Gbps)", "Resolution: 0.3 - 5.0 MP", "Frame rate: up to 150 fps", "GigE Vision / GenICam"],
    applications: ["High-speed Inspection", "Packaging Inspection", "Electronics Assembly", "Label Verification"],
  },
  "m3s-series-usb3-area-scan": {
    name: "M3S Series USB3.0 Area Scan Cameras",
    brand: "Do3Think",
    category: "Area Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/area-scan-m3s-usb3.png",
    shortDescription: "High-bandwidth USB3.0 area scan cameras for applications requiring maximum data throughput.",
    description: "The M3S Series leverages USB3.0 bandwidth for higher frame rates and lower latency imaging.",
    resolution: "Various",
    fps: "-",
    interface: "USB3.0",
    sensor: "Sony CMOS",
    sensorSize: "Various",
    pixelSize: "3.45-7.4 µm",
    dynamicRange: "62 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "40 x 29 x 29 mm",
    weight: "75g",
    features: ["USB3 Vision interface", "High frame rates", "Compact design", "Hardware trigger", "GenICam compliant", "Low power consumption"],
    mainFeatures: ["USB3.0 interface delivering up to 5 Gbps bandwidth", "Ultra-compact form factor for embedded applications", "Frame rates up to 200 fps for high-speed capture", "Plug-and-play operation without network configuration"],
    quickSpecs: ["Interface: USB3.0 (5 Gbps)", "Resolution: 0.3 - 5.0 MP", "Frame rate: up to 200 fps", "USB3 Vision / GenICam"],
    applications: ["Embedded Vision", "Robotics Guidance", "3D Scanning", "Motion Analysis"],
  },
  "u3p-series-usb3-area-scan": {
    name: "U3P Series USB3.0 Area Scan Cameras",
    brand: "Do3Think",
    category: "Area Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/area-scan-u3p-usb3.png",
    shortDescription: "Premium USB3.0 area scan cameras with large sensors for high-resolution imaging applications.",
    description: "The U3P Series provides high-resolution USB3.0 imaging for demanding measurement and inspection tasks.",
    resolution: "Various",
    fps: "-",
    interface: "USB3.0",
    sensor: "Sony CMOS",
    sensorSize: "Various",
    pixelSize: "3.45-4.8 µm",
    dynamicRange: "66 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "58 x 58 x 44 mm",
    weight: "150g",
    features: ["High-resolution sensors", "USB3 Vision interface", "Large sensor coverage", "GenICam compliant", "Precision trigger", "Industrial-grade housing"],
    mainFeatures: ["High-resolution sensors up to 12 MP for detailed imaging", "USB3.0 bandwidth for large image transfer", "Large sensor formats for wide field of view", "Precision triggering for synchronized capture"],
    quickSpecs: ["Interface: USB3.0 (5 Gbps)", "Resolution: 2.0 - 12.0 MP", "Frame rate: up to 90 fps", "USB3 Vision / GenICam"],
    applications: ["Precision Measurement", "Semiconductor Inspection", "Medical Imaging", "Scientific Research"],
  },
  "m2s-series-usb2-area-scan": {
    name: "M2S Series USB2.0 Area Scan Cameras",
    brand: "Do3Think",
    category: "Area Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/area-scan-m2s-usb2.png",
    shortDescription: "Cost-effective USB2.0 area scan cameras for standard-speed imaging and legacy system integration.",
    description: "The M2S Series offers reliable USB2.0 imaging for cost-sensitive applications and legacy system upgrades.",
    resolution: "Various",
    fps: "-",
    interface: "USB2.0",
    sensor: "CMOS",
    sensorSize: "Various",
    pixelSize: "4.8-7.4 µm",
    dynamicRange: "56 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "36 x 36 x 30 mm",
    weight: "45g",
    features: ["USB2.0 interface", "Compact form factor", "Low power consumption", "UVC compatible", "Plug-and-play", "Cost-effective"],
    mainFeatures: ["Cost-effective USB2.0 interface for budget-conscious projects", "Ultra-compact design for the tightest integration spaces", "UVC compatibility for broad OS support", "Low power consumption for portable and embedded systems"],
    quickSpecs: ["Interface: USB2.0 (480 Mbps)", "Resolution: 0.3 - 2.0 MP", "Frame rate: up to 60 fps", "DirectShow / UVC"],
    applications: ["Legacy System Integration", "Teaching & Research", "Basic Inspection", "Document Scanning"],
  },
  "10gige-fiber-optic-area-scan": {
    name: "10GigE Fiber Optic Area Scan Cameras",
    brand: "Do3Think",
    category: "Area Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/area-scan-10gige-fiber.png",
    shortDescription: "Ultra-high resolution 10GigE fiber optic area scan cameras for the most demanding large-sensor applications.",
    description: "The 10GigE Fiber Optic Series delivers maximum bandwidth over fiber for ultra-high resolution imaging at distance.",
    resolution: "Various",
    fps: "-",
    interface: "10GigE",
    sensor: "Sony CMOS",
    sensorSize: "Large Format",
    pixelSize: "2.5-3.2 µm",
    dynamicRange: "72 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "86 x 86 x 62 mm",
    weight: "350g",
    features: ["10GigE fiber optic interface", "Ultra-high resolution", "Long-distance transmission", "Active cooling", "GenICam compliant", "Industrial-grade"],
    mainFeatures: ["10 Gbps fiber optic for ultra-high bandwidth at distance", "Resolutions up to 65 MP for maximum detail capture", "Fiber optic transmission up to 10 km without signal loss", "Active thermal management for 24/7 continuous operation"],
    quickSpecs: ["Interface: 10GigE Fiber Optic", "Resolution: 25 - 65 MP", "Frame rate: up to 30 fps", "GigE Vision / GenICam"],
    applications: ["Flat Panel Display Inspection", "Semiconductor Wafer Inspection", "Large Area Metrology", "High-res Aerial Imaging"],
  },
  "ds-series-dual-usb3-area-scan": {
    name: "DS Series Dual USB3.0 High-speed Area Scan Cameras",
    brand: "Do3Think",
    category: "Area Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/area-scan-ds-dual-usb3.png",
    shortDescription: "Dual USB3.0 interface area scan cameras delivering double the bandwidth for ultra-high-speed imaging.",
    description: "The DS Series uses dual USB3.0 ports for doubled bandwidth, enabling exceptional frame rates at high resolutions.",
    resolution: "Various",
    fps: "-",
    interface: "USB3.0",
    sensor: "Sony CMOS",
    sensorSize: "Various",
    pixelSize: "3.45-4.8 µm",
    dynamicRange: "68 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "58 x 58 x 52 mm",
    weight: "180g",
    features: ["Dual USB3.0 interface", "Ultra-high frame rates", "High-resolution sensors", "Hardware trigger", "GenICam compliant", "Active cooling"],
    mainFeatures: ["Dual USB3.0 interface for 10 Gbps aggregate bandwidth", "Ultra-high frame rates up to 180 fps at 2 MP", "Ideal for high-speed production line inspection", "Advanced triggering for multi-camera synchronization"],
    quickSpecs: ["Interface: Dual USB3.0 (10 Gbps)", "Resolution: 2.0 - 12.0 MP", "Frame rate: up to 180 fps", "USB3 Vision / GenICam"],
    applications: ["High-speed Sorting", "Sports Analysis", "Motion Capture", "Rapid Inspection"],
  },
  "dsv-series-usb3-coin": {
    name: "DSV Series USB3.0 Super-mini Coin Cameras",
    brand: "Do3Think",
    category: "Area Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/area-scan-dsv-coin.png",
    shortDescription: "Ultra-compact coin-sized USB3.0 cameras for the most space-constrained embedded vision applications.",
    description: "The DSV Series packs high-performance imaging into an ultra-miniature coin-sized form factor.",
    resolution: "Various",
    fps: "-",
    interface: "USB3.0",
    sensor: "CMOS",
    sensorSize: "Various",
    pixelSize: "4.8-7.4 µm",
    dynamicRange: "58 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "26.5 x 26.5 x 14 mm",
    weight: "12g",
    features: ["Ultra-compact coin size", "USB3.0 interface", "Lightweight design", "Board-level option", "GenICam compliant", "Low power"],
    mainFeatures: ["Ultra-miniature 26.5mm coin-sized form factor", "USB3.0 bandwidth in the smallest possible package", "Weight under 12g for drone and portable applications", "Board-level version available for OEM integration"],
    quickSpecs: ["Interface: USB3.0 (5 Gbps)", "Resolution: 0.3 - 1.3 MP", "Frame rate: up to 200 fps", "USB3 Vision / GenICam"],
    applications: ["Drone Vision", "Wearable Devices", "Endoscopy", "Embedded OEM Systems"],
  },
  "lipstick-series-1gige-area-scan": {
    name: "Lipstick Series 1GigE Area Scan Cameras",
    brand: "Do3Think",
    category: "Area Scan Cameras",
    categorySlug: "products",
    image: "/src/assets/area-scan-lipstick-1gige.png",
    shortDescription: "Slim lipstick-form-factor 1GigE cameras designed for tight integration in confined spaces.",
    description: "The Lipstick Series features an elongated slim design for installations where standard cameras cannot fit.",
    resolution: "Various",
    fps: "-",
    interface: "GigE",
    sensor: "CMOS",
    sensorSize: "Various",
    pixelSize: "4.8-7.4 µm",
    dynamicRange: "60 dB",
    operatingTemp: "-10°C to 50°C",
    dimensions: "112 x 29 x 29 mm",
    weight: "65g",
    features: ["Slim lipstick form factor", "GigE Vision interface", "PoE support", "Hardware trigger", "GenICam compliant", "Remote head option"],
    mainFeatures: ["Ultra-slim lipstick design for confined installation spaces", "GigE Vision with Power over Ethernet for single-cable setup", "Ideal for robotic arm and tight-space integration", "Remote head option for sensor/body separation"],
    quickSpecs: ["Interface: GigE (1 Gbps)", "Resolution: 0.3 - 2.0 MP", "Frame rate: up to 120 fps", "GigE Vision / GenICam"],
    applications: ["Robotic Vision", "Conveyor Inspection", "In-line Measurement", "Confined Space Imaging"],
  },

  // === OTHER ===
  "frame-grabber-10-40gige": {
    name: "Frame Grabber For 10-40GigE Optical Fiber Camera",
    brand: "Do3Think",
    category: "Other",
    categorySlug: "products",
    image: "/src/assets/frame-grabber-10-40gige.png",
    shortDescription: "High-performance PCIe frame grabber supporting 10GigE to 40GigE optical fiber camera interfaces.",
    description: "The Do3Think Frame Grabber enables seamless integration of 10-40GigE fiber optic cameras with host PCs via PCIe.",
    resolution: "Various",
    fps: "-",
    interface: "PCIe",
    sensor: "-",
    sensorSize: "-",
    pixelSize: "-",
    dynamicRange: "-",
    operatingTemp: "-10°C to 50°C",
    dimensions: "168 x 69 mm (half-height PCIe)",
    weight: "120g",
    features: ["10/25/40GigE support", "PCIe 3.0 x8 interface", "4x SFP28 ports", "Low-latency DMA", "Active cooling", "Multi-camera support"],
    mainFeatures: ["Supports 10GigE, 25GigE, and 40GigE fiber optic cameras", "PCIe 3.0 x8 for maximum host bandwidth", "Up to 4 independent camera connections via SFP28 ports", "Ultra-low latency DMA engine for real-time processing"],
    quickSpecs: ["Host interface: PCIe 3.0 x8", "Network: 10/25/40GigE", "Ports: 4x SFP28", "GigE Vision compliant"],
    applications: ["Multi-camera Systems", "High-bandwidth Imaging", "Fiber Optic Camera Integration", "Real-time Processing Pipelines"],
  },
};

const lensTableHeaders = ["Model", "EFL (mm)", "Img. Circle", "F#", "WD Range (mm)", "Optical Distortion", "Mount"];
const lensTableKeys = ["model", "efl", "imgCircle", "fNumber", "wdRange", "distortion", "mount"];

const lineScanCameraTableHeaders = ["Model", "Resolution", "Line Rate", "Interface", "Pixel Size", "Sensor Type"];
const lineScanCameraTableKeys = ["model", "resolution", "lineRate", "interface", "pixelSize", "sensorType"];

const areaScanCameraTableHeaders = ["Model", "Resolution", "FPS", "Interface", "Pixel Size", "Sensor Type"];
const areaScanCameraTableKeys = ["model", "resolution", "fps", "interface", "pixelSize", "sensorType"];

const lineScanCameraSlugs = ["1gige-line-scan-camera", "2-5gige-line-scan-camera", "10gige-line-scan-camera"];
const areaScanCameraSlugs = [
  "mgv-series-1gige-area-scan", "mgs-series-1gige-area-scan", "m3s-series-usb3-area-scan",
  "u3p-series-usb3-area-scan", "m2s-series-usb2-area-scan", "10gige-fiber-optic-area-scan",
  "ds-series-dual-usb3-area-scan", "dsv-series-usb3-coin", "lipstick-series-1gige-area-scan",
  "frame-grabber-10-40gige",
];

const ProductDetail = () => {
  const { slug } = useParams();
  const product = productData[slug as keyof typeof productData];
  const variants = slug ? modelVariants[slug] : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-2xl font-bold">Product not found</h1>
          <Link to="/lenses" className="text-primary hover:underline mt-4 inline-block">
            Back to products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const hasLensLayout = !!product.mainFeatures;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
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
            {/* Product Image */}
            <div className="aspect-square bg-white rounded-lg border border-border overflow-hidden flex items-center justify-center">
              <img src={product.image} alt={product.name} className="w-full h-full object-contain p-8" />
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
              <div className="flex flex-col sm:flex-row gap-4 min-w-0">
                <Button size="lg" className="gap-2 w-full sm:w-auto">
                  <ShoppingCart className="w-5 h-5 flex-shrink-0" />
                  Request Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Three Column Overview for Lens Products */}
          {hasLensLayout ? (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Main Features */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <Star className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Main features</h3>
                </div>
                <ul className="space-y-3">
                  {product.mainFeatures!.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specification Summary */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <Settings className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Technical Specifications</h3>
                </div>
                <ul className="space-y-3">
                  {product.quickSpecs!.map((spec, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application */}
              <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Applications</h3>
                </div>
                <ul className="space-y-3">
                  {product.applications!.map((app, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                {product.description}
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4">Key Features</h3>
              <ul className="grid md:grid-cols-2 gap-3">
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
          )}

          {/* Product Models / Technical Specs */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Product Models</h2>
            {variants ? (
              <div className="bg-card border border-border rounded-lg overflow-x-auto">
                {(() => {
                  const isLineScan = lineScanCameraSlugs.includes(slug as string);
                  const isAreaScan = areaScanCameraSlugs.includes(slug as string);
                  const headers = isLineScan ? lineScanCameraTableHeaders : isAreaScan ? areaScanCameraTableHeaders : lensTableHeaders;
                  const keys = isLineScan ? lineScanCameraTableKeys : isAreaScan ? areaScanCameraTableKeys : lensTableKeys;
                  return (
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-secondary/50">
                          {headers.map((header) => (
                            <TableHead key={header} className="font-semibold text-foreground">{header}</TableHead>
                          ))}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {variants.map((variant, index) => (
                          <TableRow key={variant.model} className={index % 2 === 0 ? "bg-secondary/30" : ""}>
                            {keys.map((key) => (
                              <TableCell key={key} className={key === "model" ? "font-medium text-foreground" : "text-muted-foreground"}>
                                {variant[key]}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  );
                })()}
              </div>
            ) : (
              <div className="bg-card border border-border rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {[
                      { label: "Resolution", value: product.resolution },
                      { label: "Interface", value: product.interface },
                      { label: "Sensor", value: product.sensor },
                      { label: "Sensor Size", value: product.sensorSize },
                      { label: "Pixel Size", value: product.pixelSize },
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
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
