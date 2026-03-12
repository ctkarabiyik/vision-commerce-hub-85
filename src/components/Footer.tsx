import { Facebook, Twitter, Linkedin, Youtube, Instagram, ExternalLink, ChevronDown } from "lucide-react";
import { useState } from "react";
import LocaleLink from "@/components/LocaleLink";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import AlargeLogo from "@/components/AlargeLogo";

const Footer = () => {
  const { t } = useTranslation();
  const [productsOpen, setProductsOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20 max-w-5xl mx-auto divide-y md:divide-y-0 divide-accent-foreground/10">
          {/* Products */}
          <div className="pt-0">
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="md:pointer-events-none w-full flex items-center justify-between font-semibold text-lg mb-0 md:mb-6"
            >
              {t("footer.products")}
              <ChevronDown className={`w-5 h-5 md:hidden transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-3 overflow-hidden transition-all duration-300 md:max-h-none md:mt-0 ${
              productsOpen ? 'max-h-96 mt-4' : 'max-h-0 md:max-h-none'
            }`}>
              <li><LocaleLink to="/products?category=area-scan" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.areaScanCameras")}</LocaleLink></li>
              <li><LocaleLink to="/products?category=line-scan" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.lineScanCameras")}</LocaleLink></li>
              <li><LocaleLink to="/lenses?category=fa-lenses" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.faLenses")}</LocaleLink></li>
              <li><LocaleLink to="/lenses?category=telecentric" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.telecentricLenses")}</LocaleLink></li>
              <li><LocaleLink to="/lenses?category=line-scan" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.lineScanLenses")}</LocaleLink></li>
              <li><LocaleLink to="/products?category=other" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.frameGrabbers")}</LocaleLink></li>
            </ul>
          </div>

          {/* Support */}
          <div className="pt-6 md:pt-0">
            <button
              onClick={() => setSupportOpen(!supportOpen)}
              className="md:pointer-events-none w-full flex items-center justify-between font-semibold text-lg mb-0 md:mb-6"
            >
              {t("footer.support")}
              <ChevronDown className={`w-5 h-5 md:hidden transition-transform ${supportOpen ? 'rotate-180' : ''}`} />
            </button>
            <ul className={`space-y-3 overflow-hidden transition-all duration-300 md:max-h-none md:mt-0 ${
              supportOpen ? 'max-h-96 mt-4' : 'max-h-0 md:max-h-none'
            }`}>
              <li><LocaleLink to="/software-downloads" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.downloads")}</LocaleLink></li>
              <li><LocaleLink to="/knowledge-base" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.knowledgeBase")}</LocaleLink></li>
              <li><LocaleLink to="/contact-us" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.contactUs")}</LocaleLink></li>
            </ul>
          </div>

          {/* Brand */}
          <div className="pt-6 md:pt-0">
            <div className="flex items-center mb-6">
              <AlargeLogo className="h-12 w-auto" variant="light" />
            </div>
            <p className="text-sm text-accent-foreground/70 mb-6">
              {t("footer.brandDescription")}
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/AlargeTestEquip" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/AlargeTestEquip" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/alargetestequip/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/alarge/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCuASrVBGqLQiaKvqynV9yZg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <Button asChild className="mt-6 gap-2">
              <a href="https://www.alarge.com.tr" target="_blank" rel="noopener noreferrer">
                {t("footer.visitWebsite")}
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
             <p className="text-sm text-accent-foreground/60">
               © {new Date().getFullYear()} {t("footer.copyright")}
             </p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
