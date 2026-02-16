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
    { model: "DZO_LA0820A", efl: "8", imgCircle: "2/3\"", fNumber: "F2.0-16", wdRange: "100-inf", distortion: "-1.49%", mount: "C" },
    { model: "DZO_LA1220A", efl: "12", imgCircle: "2/3\"", fNumber: "F2.0-16", wdRange: "150-inf", distortion: "-1.17%", mount: "C" },
    { model: "DZO_LA1620A", efl: "16", imgCircle: "2/3\"", fNumber: "F2.0-16", wdRange: "150-inf", distortion: "-0.01%", mount: "C" },
    { model: "DZO_LA2520A", efl: "25", imgCircle: "2/3\"", fNumber: "F2.0-16", wdRange: "150-inf", distortion: "-0.84%", mount: "C" },
    { model: "DZO_LA3520A", efl: "35", imgCircle: "2/3\"", fNumber: "F2.0-16", wdRange: "200-inf", distortion: "-0.72%", mount: "C" },
    { model: "DZO_LA5020A", efl: "50", imgCircle: "2/3\"", fNumber: "F2.0-16", wdRange: "300-inf", distortion: "0.63%", mount: "C" },
    { model: "DZO_LA7524A", efl: "75", imgCircle: "2/3\"", fNumber: "F2.0-16", wdRange: "500-inf", distortion: "0.27%", mount: "C" },
  ],
  "2-3-inch-superior-fa-lenses": [
    { model: "DZO_LA0818A_2310", efl: "8", imgCircle: "2/3\"", fNumber: "F1.8-16", wdRange: "100-inf", distortion: "-2.19%", mount: "C" },
    { model: "DZO_LA1218A_2310", efl: "12", imgCircle: "2/3\"", fNumber: "F1.8-16", wdRange: "100-inf", distortion: "-0.45%", mount: "C" },
    { model: "DZO_LA1618A_2310", efl: "16", imgCircle: "2/3\"", fNumber: "F1.8-16", wdRange: "150-inf", distortion: "-0.14%", mount: "C" },
    { model: "DZO_LA2518A_2310", efl: "25", imgCircle: "2/3\"", fNumber: "F1.8-16", wdRange: "150-inf", distortion: "-0.26%", mount: "C" },
    { model: "DZO_LA3518A_2310", efl: "35", imgCircle: "2/3\"", fNumber: "F1.8-16", wdRange: "200-inf", distortion: "-0.09%", mount: "C" },
    { model: "DZO_LA5024A_2310", efl: "50", imgCircle: "2/3\"", fNumber: "F2.4-16", wdRange: "300-inf", distortion: "0.01%", mount: "C" },
  ],
  "1-1-inch-fa-lenses": [
    { model: "DZO_LA1224A_1120", efl: "12", imgCircle: "1.1\"", fNumber: "F2.4-16", wdRange: "100-inf", distortion: "-1.22%", mount: "C" },
    { model: "DZO_LA1624A_1120", efl: "16", imgCircle: "1.1\"", fNumber: "F2.4-16", wdRange: "100-inf", distortion: "-1.06%", mount: "C" },
    { model: "DZO_LA2524A_1120", efl: "25", imgCircle: "1.1\"", fNumber: "F2.4-16", wdRange: "150-inf", distortion: "-0.44%", mount: "C" },
    { model: "DZO_LA3524A_1120", efl: "35", imgCircle: "1.1\"", fNumber: "F2.4-16", wdRange: "150-inf", distortion: "-0.38%", mount: "C" },
    { model: "DZO_LA5024A_1120", efl: "50", imgCircle: "1.1\"", fNumber: "F2.4-16", wdRange: "250-inf", distortion: "0.09%", mount: "C" },
    { model: "DZO_LA7524A_1120", efl: "75", imgCircle: "1.1\"", fNumber: "F2.4-16", wdRange: "500-inf", distortion: "0.12%", mount: "C" },
  ],
  // === LINE SCAN CAMERAS ===
  "1gige-line-scan-camera": [
    { model: "DSG2KC", resolution: "2048x3", lineRate: "cont: 19K / burst: 55K", interface: "C", pixelSize: "7 µm", sensorType: "Color" },
    { model: "DSG4KM", resolution: "4096x4", lineRate: "cont: 30K / burst: 110K", interface: "M42", pixelSize: "7 µm", sensorType: "Mono" },
    { model: "DSG4KC", resolution: "4096x3", lineRate: "cont: 30K Bayer / 10K RGB", interface: "M42", pixelSize: "7 µm", sensorType: "Color" },
    { model: "DSG4KE", resolution: "4096x4", lineRate: "cont: 30K / burst: 120K", interface: "M42", pixelSize: "7 µm", sensorType: "NIR" },
  ],
  "2-5gige-line-scan-camera": [
    { model: "DSR4KC", resolution: "4096x3", lineRate: "23K (70K Bayer)", interface: "M42", pixelSize: "7 µm", sensorType: "Color" },
    { model: "DSR4KM", resolution: "4096x4", lineRate: "70K", interface: "M42", pixelSize: "7 µm", sensorType: "Mono" },
    { model: "DSR8KC", resolution: "8192x3", lineRate: "12.5K", interface: "M72x0.75", pixelSize: "7 µm", sensorType: "Color" },
    { model: "DSR8KM", resolution: "8192x1", lineRate: "37.5K", interface: "M72x0.75", pixelSize: "7 µm", sensorType: "Mono" },
  ],
  "10gige-line-scan-camera": [
    { model: "DSX8KM", resolution: "8192x4", lineRate: "110K (29K 4TDI)", interface: "M72x0.75", pixelSize: "7 µm", sensorType: "Mono" },
    { model: "DSX8KC", resolution: "8192x6", lineRate: "37K (20K 2TDI)", interface: "M72x0.75", pixelSize: "7 µm", sensorType: "Color" },
    { model: "DSX16KC", resolution: "16384x3", lineRate: "23.6K", interface: "M90x1", pixelSize: "5 µm", sensorType: "Color" },
    { model: "DSX16KM", resolution: "16384x2", lineRate: "57K (28K 2TDI)", interface: "M72x0.75", pixelSize: "3.5 µm", sensorType: "Mono" },
  ],
  // === AREA SCAN CAMERAS ===
  "mgv-series-1gige-area-scan": [
    { model: "MGV040M-H2", resolution: "720×540", fps: "313", interface: "GigE", pixelSize: "8.0 µm", sensorType: "Mono" },
    { model: "MGV136-H2", resolution: "1280×1024", fps: "93", interface: "GigE", pixelSize: "4.0 µm", sensorType: "Color" },
    { model: "MGV136M-H2", resolution: "1280×1024", fps: "93", interface: "GigE", pixelSize: "4.0 µm", sensorType: "Mono" },
    { model: "MGV160-H2", resolution: "1480×1092", fps: "75", interface: "GigE", pixelSize: "4.0 µm", sensorType: "Color" },
    { model: "MGV160M-H2", resolution: "1480×1092", fps: "75", interface: "GigE", pixelSize: "4.0 µm", sensorType: "Mono" },
    { model: "MGV231-H2", resolution: "2048×1200", fps: "49", interface: "GigE", pixelSize: "4.0 µm", sensorType: "Color" },
    { model: "MGV231M-H2", resolution: "2048×1200", fps: "49", interface: "GigE", pixelSize: "4.0 µm", sensorType: "Mono" },
    { model: "MGV518-H2", resolution: "2448×2048", fps: "24", interface: "GigE", pixelSize: "3.4 µm", sensorType: "Color" },
    { model: "MGV518M-H2", resolution: "2448×2048", fps: "24", interface: "GigE", pixelSize: "3.4 µm", sensorType: "Mono" },
    { model: "MGV1209M-H2-NP", resolution: "4096×3072", fps: "9.4", interface: "GigE", pixelSize: "3.4 µm", sensorType: "Mono" },
    { model: "MGV2001-H2-NP", resolution: "5480×3648", fps: "5.8", interface: "GigE", pixelSize: "2.4 µm", sensorType: "Color" },
  ],
  "mgs-series-1gige-area-scan": [
    { model: "MGS130-H2", resolution: "1280x1024", fps: "92", interface: "GigE", pixelSize: "4.0 µm", sensorType: "Color" },
    { model: "MGS130M-H2", resolution: "1280x1024", fps: "92", interface: "GigE", pixelSize: "4.0 µm", sensorType: "Mono" },
    { model: "MGS230-H2", resolution: "1920x1200", fps: "40", interface: "GigE", pixelSize: "5.86 µm", sensorType: "Color" },
    { model: "MGS230M-H2", resolution: "1920x1200", fps: "40", interface: "GigE", pixelSize: "5.86 µm", sensorType: "Mono" },
    { model: "MGS502-H2", resolution: "2592x1944", fps: "23.8", interface: "GigE", pixelSize: "2.2 µm", sensorType: "Color" },
    { model: "MGS502M-H2", resolution: "2592x1944", fps: "23.8", interface: "GigE", pixelSize: "2.2 µm", sensorType: "Mono" },
    { model: "MGS507-H2", resolution: "2448x2048", fps: "24", interface: "GigE", pixelSize: "3.45 µm", sensorType: "Color" },
    { model: "MGS507M-H2", resolution: "2448x2048", fps: "24", interface: "GigE", pixelSize: "3.45 µm", sensorType: "Mono" },
    { model: "MGS630-H2", resolution: "3072x2048", fps: "19", interface: "GigE", pixelSize: "2.4 µm", sensorType: "Color" },
    { model: "MGS630M-H2", resolution: "3072x2048", fps: "19", interface: "GigE", pixelSize: "2.4 µm", sensorType: "Mono" },
    { model: "MGS1207-H2", resolution: "4096x3072", fps: "9.7", interface: "GigE", pixelSize: "3.2 µm", sensorType: "Color" },
    { model: "MGS2000-H2", resolution: "5480x3648", fps: "6.0", interface: "GigE", pixelSize: "2.4 µm", sensorType: "Color" },
    { model: "MGS2000M-H2", resolution: "5480x3648", fps: "6.0", interface: "GigE", pixelSize: "2.4 µm", sensorType: "Mono" },
  ],
  "m3s-series-usb3-area-scan": [
    { model: "M3ST040M-H-O2C", resolution: "720x540", fps: "901.8", interface: "USB3.0", pixelSize: "8.0 µm", sensorType: "Mono" },
    { model: "M3ST130-H-O2C", resolution: "1280x1024", fps: "213.9", interface: "USB3.0", pixelSize: "4.0 µm", sensorType: "Color" },
    { model: "M3ST130M-H-O2C", resolution: "1280x1024", fps: "213.9", interface: "USB3.0", pixelSize: "4.0 µm", sensorType: "Mono" },
    { model: "M3ST136-H-O2C", resolution: "1280x1024", fps: "257", interface: "USB3.0", pixelSize: "4.0 µm", sensorType: "Color" },
    { model: "M3ST136M-H-O2C", resolution: "1280x1024", fps: "257", interface: "USB3.0", pixelSize: "4.0 µm", sensorType: "Mono" },
    { model: "M3ST160-H-O2C", resolution: "1480x1092", fps: "240", interface: "USB3.0", pixelSize: "4.0 µm", sensorType: "Color" },
    { model: "M3ST160M-H-O2C", resolution: "1480x1092", fps: "240", interface: "USB3.0", pixelSize: "4.0 µm", sensorType: "Mono" },
    { model: "M3ST230-H-O2C", resolution: "1920x1200", fps: "40", interface: "USB3.0", pixelSize: "5.86 µm", sensorType: "Color" },
    { model: "M3ST230M-H-O2C", resolution: "1920x1200", fps: "40", interface: "USB3.0", pixelSize: "5.86 µm", sensorType: "Mono" },
    { model: "M3ST231-H-O2C", resolution: "2048x1200", fps: "170", interface: "USB3.0", pixelSize: "4.0 µm", sensorType: "Color" },
    { model: "M3ST231M-H-O2C", resolution: "2048x1200", fps: "170", interface: "USB3.0", pixelSize: "4.0 µm", sensorType: "Mono" },
    { model: "M3ST502M-H-O2C", resolution: "2592x1944", fps: "30", interface: "USB3.0", pixelSize: "2.2 µm", sensorType: "Mono" },
    { model: "M3ST507-H-O2C", resolution: "2448x2048", fps: "52", interface: "USB3.0", pixelSize: "3.45 µm", sensorType: "Color" },
    { model: "M3ST507M-H-O2C", resolution: "2448x2048", fps: "52", interface: "USB3.0", pixelSize: "3.45 µm", sensorType: "Mono" },
    { model: "M3ST630-H-O2C", resolution: "3072x2048", fps: "70", interface: "USB3.0", pixelSize: "2.4 µm", sensorType: "Color" },
    { model: "M3ST630M-H-O2C", resolution: "3072x2048", fps: "70", interface: "USB3.0", pixelSize: "2.4 µm", sensorType: "Mono" },
    { model: "M3ST1201-H-O2C", resolution: "4000x3000", fps: "37", interface: "USB3.0", pixelSize: "1.85 µm", sensorType: "Color" },
    { model: "M3ST1201M-H-O2C", resolution: "4000x3000", fps: "37", interface: "USB3.0", pixelSize: "1.85 µm", sensorType: "Mono" },
    { model: "M3ST1207-H-O2C", resolution: "4096x3072", fps: "31", interface: "USB3.0", pixelSize: "3.2 µm", sensorType: "Color" },
    { model: "M3ST1209M-H-O2C", resolution: "4096x3072", fps: "33", interface: "USB3.0", pixelSize: "3.4 µm", sensorType: "Mono" },
    { model: "M3ST2000-H-O2C", resolution: "5480x3648", fps: "22", interface: "USB3.0", pixelSize: "2.4 µm", sensorType: "Color" },
    { model: "M3ST2000M-H-O2C", resolution: "5480x3648", fps: "22", interface: "USB3.0", pixelSize: "2.4 µm", sensorType: "Mono" },
  ],
  "u3p-series-usb3-area-scan": [
    { model: "U3P520M-H", resolution: "2640x1978", fps: "27", interface: "USB3.0", pixelSize: "6.9 µm", sensorType: "Mono" },
    { model: "U3P2500-H", resolution: "5120x5120", fps: "17", interface: "USB3.0", pixelSize: "2.5 µm", sensorType: "Color" },
  ],
  "m2s-series-usb2-area-scan": [
    { model: "M2S132M-H2", resolution: "1280x1024", fps: "30", interface: "USB2.0", pixelSize: "4.0 µm", sensorType: "Mono" },
    { model: "M2S138M-H2", resolution: "1280x1024", fps: "30", interface: "USB2.0", pixelSize: "4.8 µm", sensorType: "Mono" },
    { model: "M2S502M-H2", resolution: "2592x1944", fps: "8.1", interface: "USB2.0", pixelSize: "2.2 µm", sensorType: "Mono" },
  ],
  "10gige-fiber-optic-area-scan": [
    { model: "DSX2502M", resolution: "5120x5120", fps: "39.26", interface: "10GigE Fiber", pixelSize: "2.5 µm", sensorType: "Mono" },
    { model: "DSX6500M", resolution: "9344×7000", fps: "15.5", interface: "10GigE Fiber", pixelSize: "3.2 µm", sensorType: "Mono" },
  ],
  "ds-series-dual-usb3-area-scan": [
    { model: "DS2502M", resolution: "5120x5120", fps: "30", interface: "Dual USB3.0", pixelSize: "2.5 µm", sensorType: "Mono" },
  ],
  "dsv-series-usb3-coin": [
    { model: "DSV501M", resolution: "2568x1920", fps: "60", interface: "USB3.0", pixelSize: "2.2 µm", sensorType: "Mono" },
  ],
  "lipstick-series-1gige-area-scan": [
    { model: "DSG135M", resolution: "1000x1000", fps: "120", interface: "GigE", pixelSize: "2.7 µm", sensorType: "Mono" },
  ],
  "frame-grabber-10-40gige": [],
  "23-coaxial-telecentric": [
    { model: "TC030065A", imgCircle: "2/3\"", mag: "0.3", wd: "65", fHash: "10", oi: "172.1", mount: "C" },
    { model: "TC050065A", imgCircle: "2/3\"", mag: "0.5", wd: "65", fHash: "10", oi: "174.426", mount: "C" },
    { model: "TC080065A", imgCircle: "2/3\"", mag: "0.8", wd: "65", fHash: "10", oi: "175.5", mount: "C" },
    { model: "TC100065A", imgCircle: "2/3\"", mag: "1", wd: "65", fHash: "11", oi: "166", mount: "C" },
    { model: "DZO_TC150065A", imgCircle: "2/3\"", mag: "1.5", wd: "65", fHash: "12.5", oi: "160", mount: "C" },
    { model: "TC200065A", imgCircle: "2/3\"", mag: "2", wd: "65", fHash: "13.2", oi: "166", mount: "C" },
    { model: "TC300065A", imgCircle: "2/3\"", mag: "3", wd: "65", fHash: "20.2", oi: "170.6", mount: "C" },
    { model: "TC400065A", imgCircle: "2/3\"", mag: "4", wd: "65", fHash: "17.9", oi: "191.4", mount: "C" },
    { model: "DZO_TC500065A", imgCircle: "2/3\"", mag: "5", wd: "65", fHash: "22", oi: "203", mount: "C" },
    { model: "TC600065A", imgCircle: "2/3\"", mag: "6", wd: "65", fHash: "24.6", oi: "200", mount: "C" },
    { model: "DZO_TC030110A", imgCircle: "2/3\"", mag: "0.3", wd: "110", fHash: "5.6", oi: "248", mount: "C" },
    { model: "TC050110B", imgCircle: "2/3\"", mag: "0.5", wd: "110", fHash: "9.6", oi: "257.8", mount: "C" },
    { model: "TC050110C", imgCircle: "2/3\"", mag: "0.5", wd: "110", fHash: "9.6", oi: "257.8", mount: "C" },
    { model: "TC080110B", imgCircle: "2/3\"", mag: "0.8", wd: "110", fHash: "11", oi: "248.726", mount: "C" },
    { model: "TC100110B", imgCircle: "2/3\"", mag: "1", wd: "110", fHash: "11", oi: "261.526", mount: "C" },
    { model: "TC150110A", imgCircle: "2/3\"", mag: "1.5", wd: "110", fHash: "10", oi: "261.6", mount: "C" },
    { model: "TC200110A", imgCircle: "2/3\"", mag: "2", wd: "110", fHash: "12.2", oi: "265.3", mount: "C" },
    { model: "TC300110A", imgCircle: "2/3\"", mag: "3", wd: "110", fHash: "18.3", oi: "298", mount: "C" },
    { model: "TC400110A", imgCircle: "2/3\"", mag: "4", wd: "110", fHash: "22", oi: "262", mount: "C" },
    { model: "DZO_TC500110A", imgCircle: "2/3\"", mag: "5", wd: "110", fHash: "31", oi: "293", mount: "C" },
    { model: "TC600110A", imgCircle: "2/3\"", mag: "6", wd: "110", fHash: "38.7", oi: "288.1", mount: "C" },
  ],
  "11-coaxial-telecentric": [
    { model: "TC025150F", imgCircle: "1.1\"", mag: "0.25", wd: "150", fHash: "8-22", oi: "415", mount: "C" },
    { model: "TC0287150A1", imgCircle: "1.1\"", mag: "0.287", wd: "150", fHash: "6-14", oi: "349.54", mount: "C" },
    { model: "TC031150F", imgCircle: "1.1\"", mag: "0.31", wd: "150", fHash: "8-22", oi: "400.889", mount: "C" },
    { model: "TC0345150A1", imgCircle: "1.1\"", mag: "0.345", wd: "150", fHash: "6-14", oi: "349.72", mount: "C" },
    { model: "TC037150F", imgCircle: "1.1\"", mag: "0.37", wd: "150", fHash: "8-22", oi: "413.068", mount: "C" },
    { model: "TC043150A1", imgCircle: "1.1\"", mag: "0.43", wd: "150", fHash: "6-14", oi: "347.89", mount: "C" },
    { model: "TC060080D", imgCircle: "1.1\"", mag: "0.6", wd: "80", fHash: "8", oi: "250", mount: "C" },
    { model: "TC069150A1", imgCircle: "1.1\"", mag: "0.69", wd: "150", fHash: "6-14", oi: "349.14", mount: "C" },
    { model: "TC100150B2_18C", imgCircle: "1.1\"", mag: "1", wd: "150", fHash: "6-14", oi: "349.8", mount: "C" },
  ],
  "12-coaxial-telecentric": [
    { model: "TC050110A1_20C", imgCircle: "1.2\"", mag: "0.5", wd: "110", fHash: "8-30", oi: "274", mount: "C" },
    { model: "TC080110A1_20C", imgCircle: "1.2\"", mag: "0.8", wd: "110", fHash: "8-30", oi: "263.6", mount: "C" },
    { model: "TC100110A1_20C", imgCircle: "1.2\"", mag: "1", wd: "110", fHash: "10.5-30", oi: "259.9", mount: "C" },
    { model: "TC150110A1_20C", imgCircle: "1.2\"", mag: "1.5", wd: "110", fHash: "10-30", oi: "275.6", mount: "C" },
    { model: "TC200110A1_20C", imgCircle: "1.2\"", mag: "2", wd: "110", fHash: "10-30", oi: "287.4", mount: "C" },
  ],
  "large-coaxial-telecentric": [
    { model: "TC031250W2", imgCircle: "Φ30", mag: "0.31", wd: "250", fHash: "8-22", oi: "582.37", mount: "M42" },
    { model: "TC037150K", imgCircle: "Φ30", mag: "0.37", wd: "150", fHash: "8-22", oi: "447.5", mount: "M36" },
    { model: "TC037250W", imgCircle: "Φ30", mag: "0.37", wd: "250", fHash: "8-22", oi: "577.31", mount: "M36" },
    { model: "TC0393185W", imgCircle: "Φ28.5", mag: "0.393", wd: "185", fHash: "14", oi: "450.58", mount: "M42" },
    { model: "TC046150K", imgCircle: "Φ30", mag: "0.46", wd: "150", fHash: "9-22", oi: "440", mount: "M36" },
    { model: "TC046250W", imgCircle: "Φ30", mag: "0.46", wd: "250", fHash: "9-22", oi: "580", mount: "M36" },
    { model: "TC055150K", imgCircle: "Φ30", mag: "0.55", wd: "150", fHash: "9-22", oi: "436.1", mount: "M36" },
    { model: "TC055250A1", imgCircle: "Φ30", mag: "0.55", wd: "250", fHash: "9-22", oi: "455", mount: "M36" },
    { model: "TC068150K", imgCircle: "Φ30", mag: "0.68", wd: "150", fHash: "10-32", oi: "445", mount: "M36" },
    { model: "TC079150K", imgCircle: "Φ30", mag: "0.79", wd: "150", fHash: "11-32", oi: "447.7", mount: "M36" },
    { model: "TC079230W", imgCircle: "Φ30", mag: "0.79", wd: "230", fHash: "11-22", oi: "560", mount: "M36" },
    { model: "TC110150k", imgCircle: "Φ30", mag: "1.1", wd: "150", fHash: "12-44", oi: "444", mount: "M36" },
    { model: "TC150110W", imgCircle: "Φ30", mag: "1.5", wd: "110", fHash: "12-64", oi: "357.48", mount: "M42" },
    { model: "TC200110W", imgCircle: "Φ30", mag: "2", wd: "110", fHash: "13-64", oi: "395", mount: "M42" },
    { model: "TC100142A1", imgCircle: "Φ33", mag: "1", wd: "142", fHash: "8-22", oi: "368.8", mount: "M42/M58" },
    { model: "TC150128A1", imgCircle: "Φ33", mag: "1.5", wd: "128", fHash: "8-22", oi: "378.8", mount: "M42/M58" },
    { model: "TC200115A1", imgCircle: "Φ33", mag: "2", wd: "115", fHash: "8-22", oi: "396.3", mount: "M42/M58" },
    { model: "TC064130A1", imgCircle: "Φ38", mag: "0.64", wd: "130", fHash: "8-22", oi: "400", mount: "M58" },
    { model: "TC091130A1", imgCircle: "Φ38", mag: "0.91", wd: "130", fHash: "8-22", oi: "393.2", mount: "M58" },
  ],
  "half-inch-noncoaxial-telecentric": [
    { model: "TL080110A1_8C", imgCircle: "1/2\"", mag: "0.8", wd: "110", fHash: "18", oi: "210", mount: "C" },
    { model: "TL100110A1_8C", imgCircle: "1/2\"", mag: "1", wd: "110", fHash: "20", oi: "210.5", mount: "C" },
    { model: "TL150110A1_8C", imgCircle: "1/2\"", mag: "1.5", wd: "110", fHash: "19", oi: "210", mount: "C" },
    { model: "TL200110A1_8C", imgCircle: "1/2\"", mag: "2", wd: "110", fHash: "25", oi: "216.6", mount: "C" },
  ],
  "23-noncoaxial-telecentric": [
    { model: "TL030065A", imgCircle: "2/3\"", mag: "0.3", wd: "65", fHash: "10", oi: "86.037", mount: "C" },
    { model: "TL050065A", imgCircle: "2/3\"", mag: "0.5", wd: "65", fHash: "10", oi: "172.026", mount: "C" },
    { model: "TL080065A", imgCircle: "2/3\"", mag: "0.8", wd: "65", fHash: "10", oi: "172", mount: "C" },
    { model: "TL100065A", imgCircle: "2/3\"", mag: "1", wd: "65", fHash: "11", oi: "162.526", mount: "C" },
    { model: "DZO_TL150065A", imgCircle: "2/3\"", mag: "1.5", wd: "65", fHash: "12.5", oi: "158", mount: "C" },
    { model: "TL200065A", imgCircle: "2/3\"", mag: "2", wd: "65", fHash: "13.2", oi: "162.5", mount: "C" },
    { model: "TL300065A", imgCircle: "2/3\"", mag: "3", wd: "65", fHash: "20.2", oi: "167.2", mount: "C" },
    { model: "TL400065A", imgCircle: "2/3\"", mag: "4", wd: "65", fHash: "17.9", oi: "188", mount: "C" },
    { model: "DZO_TL500065A", imgCircle: "2/3\"", mag: "5", wd: "65", fHash: "22", oi: "288", mount: "C" },
    { model: "TL600065A", imgCircle: "2/3\"", mag: "6", wd: "65", fHash: "24.6", oi: "194.8", mount: "C" },
    { model: "DZO_TL030110A", imgCircle: "2/3\"", mag: "0.3", wd: "110", fHash: "5.6", oi: "245.5", mount: "C" },
    { model: "TL050110C", imgCircle: "2/3\"", mag: "0.5", wd: "110", fHash: "9.6", oi: "245.5", mount: "C" },
    { model: "TL080110B", imgCircle: "2/3\"", mag: "0.8", wd: "110", fHash: "11", oi: "245.5", mount: "C" },
    { model: "TL100110B", imgCircle: "2/3\"", mag: "1", wd: "110", fHash: "11", oi: "245.5", mount: "C" },
    { model: "TL150110A", imgCircle: "2/3\"", mag: "1.5", wd: "110", fHash: "10", oi: "256.4", mount: "C" },
    { model: "TL200110A", imgCircle: "2/3\"", mag: "2", wd: "110", fHash: "12.2", oi: "261", mount: "C" },
    { model: "TL300110A", imgCircle: "2/3\"", mag: "3", wd: "110", fHash: "18.3", oi: "293.2", mount: "C" },
    { model: "TL400110A", imgCircle: "2/3\"", mag: "4", wd: "110", fHash: "22", oi: "258.2", mount: "C" },
    { model: "DZO_TL500110A", imgCircle: "2/3\"", mag: "5", wd: "110", fHash: "31", oi: "288", mount: "C" },
    { model: "TL600110A", imgCircle: "2/3\"", mag: "6", wd: "110", fHash: "38.6", oi: "282.6", mount: "C" },
  ],
  "23-noncoaxial-telecentric-b": [
    { model: "TL0143220Z", imgCircle: "2/3\"", mag: "0.143", wd: "220", fHash: "8-22", oi: "419.31", mount: "C" },
    { model: "TL017220A", imgCircle: "2/3\"", mag: "0.178", wd: "220", fHash: "8-22", oi: "388.74", mount: "C" },
    { model: "TL022220A", imgCircle: "2/3\"", mag: "0.22", wd: "220", fHash: "8-22", oi: "398.39", mount: "C" },
    { model: "TL150220A", imgCircle: "2/3\"", mag: "1.5", wd: "220", fHash: "10", oi: "425", mount: "C" },
  ],
  "11-noncoaxial-telecentric": [
    { model: "TL020150A", imgCircle: "1.1\"", mag: "0.2", wd: "150", fHash: "8", oi: "411", mount: "C" },
    { model: "TL020220A", imgCircle: "1.1\"", mag: "0.2", wd: "220", fHash: "8-22", oi: "399.56", mount: "C" },
    { model: "TL023220Z", imgCircle: "1.1\"", mag: "0.23", wd: "220", fHash: "8-22", oi: "439.95", mount: "C" },
    { model: "TL024185D", imgCircle: "1.1\"", mag: "0.24", wd: "185", fHash: "10", oi: "447.196", mount: "C" },
    { model: "TL025220A", imgCircle: "1.1\"", mag: "0.25", wd: "220", fHash: "8-22", oi: "399.87", mount: "C" },
    { model: "TL0275220A", imgCircle: "1\"", mag: "0.275", wd: "220", fHash: "8-22", oi: "399.82", mount: "C" },
    { model: "TL0287220A", imgCircle: "1.1\"", mag: "0.287", wd: "220", fHash: "8-22", oi: "339.14", mount: "C" },
    { model: "TL032185D", imgCircle: "1.1\"", mag: "0.32", wd: "185", fHash: "10", oi: "447.096", mount: "C" },
    { model: "TL032220J", imgCircle: "1.1\"", mag: "0.32", wd: "220", fHash: "8-22", oi: "445", mount: "C" },
    { model: "TL0345220Z", imgCircle: "1.1\"", mag: "0.345", wd: "220", fHash: "8-22", oi: "427.76", mount: "C" },
    { model: "TL0345220C3", imgCircle: "1.1\"", mag: "0.345", wd: "220", fHash: "6.4-22", oi: "417.945", mount: "C" },
    { model: "TL039220Z", imgCircle: "1.2\"", mag: "0.39", wd: "220", fHash: "8-22", oi: "440", mount: "C" },
    { model: "TL060185D", imgCircle: "1.1\"", mag: "0.6", wd: "185", fHash: "10", oi: "447.196", mount: "C" },
    { model: "TL100180J", imgCircle: "1.1\"", mag: "1", wd: "180", fHash: "8-22", oi: "414.28", mount: "C" },
  ],
  "12-noncoaxial-telecentric": [
    { model: "TL080110A1_20C", imgCircle: "1.2\"", mag: "0.8", wd: "110", fHash: "8-30", oi: "263.6", mount: "C" },
    { model: "TL150110A1_20C", imgCircle: "1.2\"", mag: "1.5", wd: "110", fHash: "10-30", oi: "275.6", mount: "C" },
  ],
  "large-noncoaxial-telecentric": [
    { model: "TL037220W", imgCircle: "Φ30", mag: "0.37", wd: "220", fHash: "8-22", oi: "450", mount: "M42" },
    { model: "TL046220W", imgCircle: "Φ30", mag: "0.46", wd: "220", fHash: "8-22", oi: "439.6", mount: "M42" },
    { model: "TL055220W", imgCircle: "Φ30", mag: "0.55", wd: "220", fHash: "8-22", oi: "449.3", mount: "M42" },
    { model: "TL068220W", imgCircle: "Φ30", mag: "0.68", wd: "220", fHash: "8-22", oi: "425", mount: "M42" },
  ],
  "4k-line-scan-lens": [
    { model: "LS25008A", imgCircle: "Φ29", efl: "25", fNumber: "F4.5-22", mag: "0.1x@243.7mm", magRange: "0.04-0.15", mount: "M42" },
    { model: "LS25020A", imgCircle: "Φ29", efl: "25", fNumber: "F4.5-22", mag: "0.2x@119.5mm", magRange: "0.15-0.25", mount: "M42" },
    { model: "LS28002A", imgCircle: "Φ42", efl: "29.52", fNumber: "F4-16", mag: "0.019x@1527.39mm", magRange: "/", mount: "M58" },
    { model: "LS28007A", imgCircle: "Φ42", efl: "29", fNumber: "F4-16", mag: "0.074x@365.3mm", magRange: "0.059-0.083", mount: "M58/M72" },
    { model: "LS4045A", imgCircle: "Φ31.7", efl: "39.4", fNumber: "F4.5-16", mag: "0.1x@412.57mm", magRange: "0.04-0.2", mount: "M42" },
    { model: "LS4028A", imgCircle: "Φ44", efl: "41.5", fNumber: "F2.8-11", mag: "0.1x@420.3mm", magRange: "0.04-0.33", mount: "M42" },
  ],
  "8k-line-scan-lens": [
    { model: "LS4056A", imgCircle: "Φ60", efl: "41", fNumber: "F5.6-16", mag: "0.17x@264.5mm", magRange: "0.04-0.33", mount: "M58/M72" },
    { model: "LS4040A1", imgCircle: "Φ58", efl: "40", fNumber: "F4", mag: "0.16x@273.02mm", magRange: "0.15-0.175", mount: "M58/M72" },
    { model: "LS6040A", imgCircle: "Φ64", efl: "60", fNumber: "F4-22", mag: "0.167x@404.4mm", magRange: "0.04-0.33", mount: "M58/M72" },
    { model: "LS6056A", imgCircle: "Φ82", efl: "61", fNumber: "F5.6-16", mag: "0.17x@394.5mm", magRange: "0.04-0.33", mount: "M58/M72" },
    { model: "LS8056A", imgCircle: "Φ64", efl: "80", fNumber: "F5.6-16", mag: "0.3x@322mm", magRange: "0.2-0.4", mount: "M58/M72" },
    { model: "LS9056A", imgCircle: "Φ64", efl: "90", fNumber: "F5.6-16", mag: "0.2x@516.39mm", magRange: "0.15-0.3", mount: "M58/M72" },
    { model: "LS10056A", imgCircle: "Φ108", efl: "100", fNumber: "F5.6-16", mag: "0.17x@680.9mm", magRange: "0.04-0.58", mount: "M58/M72" },
    { model: "LS12056A", imgCircle: "Φ86", efl: "120", fNumber: "F5.6-16", mag: "0.5x@335.3mm", magRange: "0.37-0.65", mount: "M58/M72" },
  ],
  "16k-35u-line-scan-lens": [
    { model: "LS16006APO", imgCircle: "Φ58", efl: "60", fNumber: "F4.5-16", mag: "0.06x@1058.2mm", magRange: "0.04-0.075", mount: "M72" },
    { model: "LS16010APO", imgCircle: "Φ58", efl: "60", fNumber: "F4.5-16", mag: "0.107x@581.7mm", magRange: "0.078-0.0119", mount: "M72" },
    { model: "LS80014APO", imgCircle: "Φ64", efl: "80", fNumber: "F5.6-16", mag: "0.146x@590mm", magRange: "0.13-0.166", mount: "M72" },
    { model: "LS80021APO", imgCircle: "Φ64", efl: "80", fNumber: "F5.6-16", mag: "0.21x@430mm", magRange: "0.18-0.24", mount: "M72" },
    { model: "LS160255APO-B1", imgCircle: "Φ63", efl: "114", fNumber: "F4.2-22", mag: "0.255x@518mm", magRange: "0.23-0.28", mount: "M72" },
    { model: "LS16033APO", imgCircle: "Φ64", efl: "116", fNumber: "F4.2-16", mag: "0.33x@409mm", magRange: "0.31-0.36", mount: "M72" },
    { model: "LS16042APO-B1", imgCircle: "Φ66", efl: "116", fNumber: "F4-22", mag: "0.42x@341mm", magRange: "0.38-0.45", mount: "M72" },
    { model: "LS160476APO", imgCircle: "Φ64", efl: "115.682", fNumber: "F3.8-22", mag: "0.476x@315mm", magRange: "0.46-0.5", mount: "M72" },
  ],
  "16k-5u-line-scan-lens": [
    { model: "LS9036A1", imgCircle: "Φ86", efl: "95", fNumber: "F3.6-22", mag: "0.23x", magRange: "0.20-0.26", mount: "M90/M95" },
    { model: "PLS16033APO-C1", imgCircle: "Φ82", efl: "135", fNumber: "F4.7-22", mag: "0.33x@497.5mm", magRange: "0.3-0.37", mount: "M90/M95" },
    { model: "PLS16033APO-B1", imgCircle: "Φ82", efl: "136", fNumber: "F4.2-22", mag: "0.36x@460mm", magRange: "0.33-0.39", mount: "M90/M95" },
    { model: "PLS16040APO-A1", imgCircle: "Φ82", efl: "136", fNumber: "F4.2-22", mag: "0.4x@421mm", magRange: "0.34-0.45", mount: "M90/M95" },
    { model: "PLS16042APO-C1", imgCircle: "Φ82", efl: "139", fNumber: "F4.7-22", mag: "0.42x@424.5mm", magRange: "0.38-0.46", mount: "M90/M95" },
    { model: "PLS160435APO-B2", imgCircle: "Φ82", efl: "140.7", fNumber: "F4-22", mag: "0.435x@404mm", magRange: "/", mount: "M90/M95" },
    { model: "PLS16045APO-B1", imgCircle: "Φ82", efl: "140.78", fNumber: "F5.6-22", mag: "0.45x@394mm", magRange: "0.45-0.5", mount: "M90/M95" },
    { model: "PLS16050APO-C1", imgCircle: "Φ82", efl: "137", fNumber: "F4.7-22", mag: "0.5x@369.5mm", magRange: "0.46-0.54", mount: "M90/M95" },
    { model: "PLS16050APO-B1", imgCircle: "Φ82", efl: "140.78", fNumber: "F4-22", mag: "0.5x@363mm", magRange: "0.472-0.54", mount: "M90/M95" },
    { model: "PLS16060APO-C1", imgCircle: "Φ82", efl: "128", fNumber: "F4.7-22", mag: "0.6x@295.5mm", magRange: "0.56-0.64", mount: "M90/M95" },
    { model: "PLS16060APO-B1", imgCircle: "Φ82", efl: "129.9", fNumber: "F4-22", mag: "0.61x@295mm", magRange: "0.578-0.647", mount: "M90/M95" },
    { model: "PLS16070APO-B1", imgCircle: "Φ82", efl: "130.4", fNumber: "F4-22", mag: "0.71x@257mm", magRange: "0.647-0.735", mount: "M90/M95" },
    { model: "PLS16083APO-B1", imgCircle: "Φ82", efl: "112.8", fNumber: "F3.8-16", mag: "0.83x@436mm", magRange: "0.79-0.88", mount: "M90/M95" },
    { model: "PLS16100APO-B1", imgCircle: "Φ82", efl: "116.2", fNumber: "F3.8-22", mag: "1x@184mm", magRange: "0.95-1.05", mount: "M90/M95" },
    { model: "PLS16100APO-C1", imgCircle: "Φ82", efl: "115", fNumber: "F4.7-22", mag: "1x@180.5mm", magRange: "0.95-1.05", mount: "M90/M95" },
    { model: "PLS16167APO-D-2", imgCircle: "Φ82", efl: "126", fNumber: "F2.8-16", mag: "1.67x@80mm", magRange: "1.6-1.77", mount: "M90/M95" },
    { model: "PLS16200APO-A1", imgCircle: "Φ86", efl: "123", fNumber: "F2.9-16", mag: "2x@100mm", magRange: "/", mount: "M90/M95" },
    { model: "PLSC16250APO-A1", imgCircle: "Φ82", efl: "116", fNumber: "F2.83-10.38", mag: "2.5x@60mm", magRange: "/", mount: "M90/M95" },
    { model: "PLSC16333APO-A1", imgCircle: "Φ82", efl: "116", fNumber: "F2.26-9", mag: "3.33x@51mm", magRange: "/", mount: "M90/M95" },
    { model: "PLS16500APO-B1", imgCircle: "Φ84", efl: "112.3", fNumber: "F0.18-0.5", mag: "5x@40mm", magRange: "/", mount: "M90/M95" },
  ],
  "macro-lenses": [
    { model: "MC5028C", imgCircle: "Φ11", fNumber: "F2.8-16", efl: "50", mag: "0.2x@364.7mm", magRange: "0.1-0.3x", mount: "C" },
    { model: "MC2535B", imgCircle: "Φ19", fNumber: "F3.5-16", efl: "25", mag: "0.2x@122mm", magRange: "0.1-0.4x", mount: "C" },
    { model: "MC3530B", imgCircle: "Φ19", fNumber: "F3.0-16", efl: "35", mag: "0.4x@83mm", magRange: "0.25-0.7x", mount: "C" },
    { model: "MC5028B", imgCircle: "Φ19", fNumber: "F2.8-16", efl: "50", mag: "0.59x@109.8mm", magRange: "0.46-0.82x", mount: "C" },
    { model: "MC7528B", imgCircle: "Φ19", fNumber: "F2.8-16", efl: "75", mag: "0.37x@242mm", magRange: "0.24-0.48x", mount: "C" },
    { model: "MC2538F1_20C", imgCircle: "Φ20", fNumber: "F3.8-16", efl: "25", mag: "0.25x@117.6mm", magRange: "0.1-0.4x", mount: "C" },
    { model: "MC3530F1_20C", imgCircle: "Φ20", fNumber: "F3.0-16", efl: "35", mag: "0.35x@123mm", magRange: "0.2-0.55x", mount: "C" },
    { model: "MC5028D", imgCircle: "Φ20", fNumber: "F2.8-16", efl: "50", mag: "0.2x@271.1mm", magRange: "0.1-0.3x", mount: "C" },
  ],
  "large-format-lenses": [
    { model: "LM2828B2", imgCircle: "Φ44", efl: "28.4", fNumber: "F2.8-22", mag: "0.033x@833mm", magRange: "0-0.06", mount: "M42/F" },
    { model: "LM3528B_F Mount", imgCircle: "Φ44", efl: "35", fNumber: "F2.8-22", mag: "0.05x@684.5mm", magRange: "0-0.13x", mount: "F" },
    { model: "LM3528B_M58", imgCircle: "Φ44", efl: "35", fNumber: "F2.8-22", mag: "0.05x@684.5mm", magRange: "0-0.13x", mount: "M58" },
    { model: "LM5022A", imgCircle: "Φ44", efl: "50", fNumber: "F2.2-16", mag: "0.1x@534mm", magRange: "0-0.177x", mount: "F" },
    { model: "LM5028A", imgCircle: "Φ30", efl: "50", fNumber: "F2.8-16", mag: "0.1x@567.4mm", magRange: "0.07-0.13x", mount: "M42" },
    { model: "LM8540A_F", imgCircle: "Φ38", efl: "85", fNumber: "F4.0-16", mag: "0.453x@169.3mm", magRange: "0.364-0.687x", mount: "F/M42/M58/M72" },
    { model: "LM9045A1", imgCircle: "Φ67", efl: "91.64", fNumber: "F4.5-22", mag: "0.25x@467.4mm", magRange: "0.05-0.5", mount: "M72/M90/M95" },
    { model: "LM9056APO", imgCircle: "Φ67", efl: "93", fNumber: "F5.6-22", mag: "0.25x@423.8mm", magRange: "0.2-0.3x", mount: "M72/M90/M95" },
    { model: "DZO_LM8220A1", imgCircle: "Φ68", efl: "82", fNumber: "F2-22", mag: "2x@51.6mm", magRange: "1-3.5", mount: "M72" },
  ],
  "infrared-lenses": [
    { model: "IR1214A", imgCircle: "Φ16", efl: "12.3", fNumber: "F1.4-16", mag: "0.07173x@700mm", magRange: "0.0121-0.0294x", mount: "C" },
    { model: "IR2514A", imgCircle: "Φ16", efl: "25.3", fNumber: "F1.4-16", mag: "0.0504x@492mm", magRange: "0.0121-0.0839x", mount: "C" },
    { model: "IR3520A", imgCircle: "Φ30", efl: "35", fNumber: "F2-22", mag: "0.12x@278mm", magRange: "0-0.2x", mount: "M42*1" },
    { model: "IR3515A1", imgCircle: "Φ30", efl: "38.5", fNumber: "F1.5-16", mag: "0.125x@300mm", magRange: "0.08-0.17x", mount: "M42*1" },
  ],
  "vr-lenses": [
    { model: "VRCA_190", imgCircle: "Φ14", efl: "4.37", fNumber: "F2.8-11", fTheta: "0.30%", mount: "C、M4/3" },
    { model: "VRCA_220", imgCircle: "Φ10", efl: "3.54", fNumber: "F2.8-11", fTheta: "-26%", mount: "C、M4/3" },
    { model: "FXG-FFVR220", imgCircle: "Φ24.08", efl: "6.32", fNumber: "F3.5-16", fTheta: "0.60%", mount: "C、E" },
  ],
  "scheimpflug-lenses": [
    { model: "MC2535W", imgCircle: "1.1inch", efl: "25", magRange: "0.1-0.4x", mount: "M22*0.75" },
    { model: "MC3530W", imgCircle: "1.1inch", efl: "35", magRange: "0.25-0.7x", mount: "M24*0.75" },
    { model: "MC5028E", imgCircle: "1.1inch", efl: "50", magRange: "0.43-0.82x", mount: "M30*0.75" },
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
    name: "2/3 inch Budget FA Lenses",
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
    mainFeatures: ["Appliable for 5um pixel size sensor(3.45um for option);", "Faster F#, applicable for low light inspection;", "Image uniformity (resolution,distortion and chromatic aberration correction etc.) @full image circle under F#2.0 & recommended WD, no need to achieve better image uniformity by a smaller aperture;", "Cost effective solution for your vision system;", "Design for visible light application"],
    quickSpecs: ["Imaging circle: 2/3\"", "Applicable wavelength: 400-700nm", "Focal length: 8mm -75mm", "C Mount"],
    applications: ["Barcode scanning", "Pharmacy"],
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
    mainFeatures: ["Appliable for 3.45um pixel size sensor(2.74um for option);", "Faster F#, applicable for low light inspection;", "Image uniformity (resolution, distortion and chromatic aberration correction etc.) @full image circle & F#1.8, no need to achieve better image uniformity by a smaller aperture;", "Imaging quality stability within the working distance, a wider range of application;", "Design for visible light application"],
    quickSpecs: ["Imaging circle: 2/3\"", "Applicable wavelength: 400-700nm", "Focal length: 8-75 mm", "C Mount"],
    applications: ["Barcode scanning", "Pharmacy"],
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
    mainFeatures: ["Appliable for 3.45um sensor(2.74um for option);", "Image uniformity (resolution, distortion and chromatic aberration correction etc.)@full image circle & F#2.4, no need to achieve better image uniformity by a smaller aperture;", "Stable imaging quality over working distances for diverse applications;", "Design for visible light application"],
    quickSpecs: ["Imaging circle: 1/1\"", "Applicable wavelength: 400-700nm", "Focal length: 12mm -75mm", "C Mount"],
    applications: ["Scan Code", "Color selection", "2D ranging", "3D ranging"],
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
    mainFeatures: ["1/2\"- 2/3\" classic telecentric lens;", "Ultra-low distortion for precision;", "Uniform image quality across the field and aperture;", "Applicable for visible illumination."],
    quickSpecs: ["Imaging circle: 1/2\" - 2/3\"", "Wavelengths: 400 - 700nm", "Magnification: 0.3x - 10x", "WD 65-110mm", "C mount", "Prism optional"],
    applications: ["Positioning"],
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
    mainFeatures: ["Apochromatic design enhances image sharpness, depth of field, and authentic color reproduction;", "Ultra low distortion, ensure the precise;", "Uniform image quality across the field and aperture;", "Compatible with RGB, refocusing not required for different illumination."],
    quickSpecs: ["Imaging circle 1.1\" - 1.2\"", "Wavelength 400 - 700 nm", "Magnification 0.23x - 2x", "WD 110-220mm", "C Mount", "Prism optional"],
    applications: ["3C & semi-con high-precision inspection"],
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
    mainFeatures: ["Apochromatic design enhances image sharpness, depth of field, and authentic color reproduction;", "Ultra low distortion, ensure the precise;", "Uniform image quality across the field and aperture;", "Compatible with RGB, refocusing not required for different illumination."],
    quickSpecs: ["Imaging circle 1.1\" - 1.2\"", "Wavelength 400 - 700 nm", "Magnification 0.23x - 2x", "WD 110-220mm", "C Mount", "Prism optional"],
    applications: ["3C & semi-con high-precision inspection"],
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
    mainFeatures: ["Dia44mm high performance telecentric lens;", "Apochromatic design enhances image sharpness, depth of field, and authentic color reproduction;", "Ultra low distortion, ensure the precise;", "Uniform image quality across the full image circle and aperture, no need to achieve better image uniformity by a smaller aperture.", "Compatible with RGB, refocusing not required for different illumination."],
    quickSpecs: ["Imaging circle: 1.75\"-44 mm", "Wavelength: 400-700nm", "Magnification: 0.37x-5.0x", "M42/M58 mount", "Prism optional"],
    applications: ["3C & semi-con high-precision inspection"],
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
    mainFeatures: ["1/2\"- 2/3\" classic telecentric lens;", "Ultra-low distortion for precision;", "Uniform image quality across the field and aperture;", "Applicable for visible illumination."],
    quickSpecs: ["Imaging circle: 1/2\" - 2/3\"", "Wavelengths: 400 - 700nm", "Magnification: 0.3x - 10x", "WD 65-110mm", "C mount", "Prism optional"],
    applications: ["Positioning"],
  },
  "23-noncoaxial-telecentric": {
    name: "2/3 inch Non-Co-Axial Telecentric Lens (WD 65/110)",
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
    mainFeatures: ["1/2\"- 2/3\" classic telecentric lens;", "Ultra-low distortion for precision;", "Uniform image quality across the field and aperture;", "Applicable for visible illumination."],
    quickSpecs: ["Imaging circle: 1/2\" - 2/3\"", "Wavelengths: 400 - 700nm", "Magnification: 0.3x - 10x", "WD 65-110mm", "C mount", "Prism optional"],
    applications: ["Positioning"],
  },
  "23-noncoaxial-telecentric-b": {
    name: "2/3 inch Non-Co-Axial Telecentric Lens (WD 220)",
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
    mainFeatures: ["1/2\"- 2/3\" classic telecentric lens;", "Ultra-low distortion for precision;", "Uniform image quality across the field and aperture;", "Applicable for visible illumination."],
    quickSpecs: ["Imaging circle: 1/2\" - 2/3\"", "Wavelengths: 400 - 700nm", "Magnification: 0.3x - 10x", "WD 65-110mm", "C mount", "Prism optional"],
    applications: ["Positioning"],
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
    mainFeatures: ["Apochromatic design enhances image sharpness, depth of field, and authentic color reproduction;", "Ultra low distortion, ensure the precise;", "Uniform image quality across the field and aperture;", "Compatible with RGB, refocusing not required for different illumination."],
    quickSpecs: ["Imaging circle 1.1\" - 1.2\"", "Wavelength 400 - 700 nm", "Magnification 0.23x - 2x", "WD 110-220mm", "C Mount", "Prism optional"],
    applications: ["3C & semi-con high-precision inspection"],
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
    mainFeatures: ["Dia44mm high performance telecentric lens;", "Apochromatic design enhances image sharpness, depth of field, and authentic color reproduction;", "Ultra low distortion, ensure the precise;", "Uniform image quality across the full image circle and aperture, no need to achieve better image uniformity by a smaller aperture.", "Compatible with RGB, refocusing not required for different illumination."],
    quickSpecs: ["Imaging circle: 1.75\"-44mm", "Wavelength: 400-700nm", "Magnification: 0.37x-5.0x", "M42/M58 mount", "Prism optional"],
    applications: ["3C & semi-con high-precision inspection"],
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

const lensTableHeaders = ["Model", "Img Circle (in)", "EFL (mm)", "F#", "Distortion(%)", "WD Range(mm)", "Mount"];
const lensTableKeys = ["model", "imgCircle", "efl", "fNumber", "distortion", "wdRange", "mount"];

const telecentricTableHeaders = ["Product Model", "Img Circle (in)", "Mag.", "WD(mm)", "F#", "O/I", "Mount"];
const telecentricTableKeys = ["model", "imgCircle", "mag", "wd", "fHash", "oi", "mount"];
const telecentricSlugs = ["23-coaxial-telecentric", "11-coaxial-telecentric", "12-coaxial-telecentric", "large-coaxial-telecentric", "half-inch-noncoaxial-telecentric", "23-noncoaxial-telecentric", "23-noncoaxial-telecentric-b", "11-noncoaxial-telecentric", "12-noncoaxial-telecentric", "large-noncoaxial-telecentric"];

const lineScanLensTableHeaders = ["Product Model", "Img. Circle(mm)", "EFL(mm)", "F#", "Mag.", "Mag. Range", "Mount"];
const lineScanLensTableKeys = ["model", "imgCircle", "efl", "fNumber", "mag", "magRange", "mount"];
const lineScanLensSlugs = ["4k-line-scan-lens", "8k-line-scan-lens", "16k-35u-line-scan-lens", "16k-5u-line-scan-lens", "large-format-lenses", "infrared-lenses"];

const macroLensTableHeaders = ["Product Model", "Img. Circle(mm)", "F#", "EFL(mm)", "Mag.", "Mag. Range", "Mount"];
const macroLensTableKeys = ["model", "imgCircle", "fNumber", "efl", "mag", "magRange", "mount"];
const macroLensSlugs = ["macro-lenses"];

const vrLensTableHeaders = ["Product Model", "Img. Circle(mm)", "EFL(mm)", "F#", "F-θ distortion", "Mount"];
const vrLensTableKeys = ["model", "imgCircle", "efl", "fNumber", "fTheta", "mount"];
const vrLensSlugs = ["vr-lenses"];

const scheimpflugTableHeaders = ["Product Model", "Img. Circle(mm)", "EFL(mm)", "Mag. Range", "Mount"];
const scheimpflugTableKeys = ["model", "imgCircle", "efl", "magRange", "mount"];
const scheimpflugSlugs = ["scheimpflug-lenses"];

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

const modelNotes: Record<string, string> = {
  "1gige-line-scan-camera": "Note: DSG means 1GigE line scan. Continuous means continuous data transmission, Burst means interval data transmission.",
  "2-5gige-line-scan-camera": "Note: DSR means 2.5GigE line scan. 4K/8K means resolution, C means Color.",
  "10gige-line-scan-camera": "Note: DSX means 10GigE line scan. 8K means resolution, C means Color.",
  "mgv-series-1gige-area-scan": "Note: MGV means 1GigE area scan. 1209 means the resolution is 12MP, M means Mono, H2 means hardware version.",
  "mgs-series-1gige-area-scan": "Note: MGS means 1GigE area scan. 1207 means the resolution is 12MP, M means Mono, H2 means hardware version.",
  "m3s-series-usb3-area-scan": "Note: M3ST means USB3.0 area scan. 1207 means the resolution is 12MP, M means Mono, H means hardware version, O2C means two optocoupler isolated output.",
  "u3p-series-usb3-area-scan": "Note: U3P means USB3.0 area scan. 520 means the resolution is 5MP, M means Mono, H means hardware version.",
  "m2s-series-usb2-area-scan": "Note: M2S means USB2.0 area scan. 132 and 138 both means the resolution is 1.3MP, M means Mono, H2 means hardware version.",
  "10gige-fiber-optic-area-scan": "Note: DSX means 10GigE fiber optic area scan. 6500 means the resolution is 65MP, M means Mono.",
  "ds-series-dual-usb3-area-scan": "Note 1: DS2502M supports time-division strobing application with 2/3/4 lights. Note 2: 2502 means the resolution is 25MP, M means Mono.",
  "dsv-series-usb3-coin": "Note: 501 means the resolution is 5MP, M means Mono.",
  "lipstick-series-1gige-area-scan": "Note: 135 means the resolution is 1.3MP, M means Mono.",
};

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
            <div className={`grid md:grid-cols-3 gap-8 ${variants && variants.length > 0 ? 'mb-16' : ''}`}>
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
          {variants && variants.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Product Models</h2>
              <div className="bg-card border border-border rounded-lg overflow-x-auto">
                {(() => {
                  const isLineScan = lineScanCameraSlugs.includes(slug as string);
                  const isAreaScan = areaScanCameraSlugs.includes(slug as string);
                  const isTelecentric = telecentricSlugs.includes(slug as string);
                  const isLineScanLens = lineScanLensSlugs.includes(slug as string);
                   const isMacroLens = macroLensSlugs.includes(slug as string);
                   const isVrLens = vrLensSlugs.includes(slug as string);
                   const isScheimpflug = scheimpflugSlugs.includes(slug as string);
                   const headers = isLineScan ? lineScanCameraTableHeaders : isAreaScan ? areaScanCameraTableHeaders : isTelecentric ? telecentricTableHeaders : isLineScanLens ? lineScanLensTableHeaders : isMacroLens ? macroLensTableHeaders : isVrLens ? vrLensTableHeaders : isScheimpflug ? scheimpflugTableHeaders : lensTableHeaders;
                   const keys = isLineScan ? lineScanCameraTableKeys : isAreaScan ? areaScanCameraTableKeys : isTelecentric ? telecentricTableKeys : isLineScanLens ? lineScanLensTableKeys : isMacroLens ? macroLensTableKeys : isVrLens ? vrLensTableKeys : isScheimpflug ? scheimpflugTableKeys : lensTableKeys;
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
              {modelNotes[slug as string] && (
                <p className="text-sm text-muted-foreground mt-3 italic">
                  {modelNotes[slug as string]}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetail;
