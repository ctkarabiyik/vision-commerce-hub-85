import { Facebook, Twitter, Linkedin, Youtube, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import AlargeLogo from "@/components/AlargeLogo";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-5xl mx-auto">
          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.products")}</h4>
            <ul className="space-y-3">
              <li><Link to="/products?category=area-scan" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.areaScanCameras")}</Link></li>
              <li><Link to="/products?category=line-scan" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.lineScanCameras")}</Link></li>
              <li><Link to="/lenses?category=fa-lenses" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.faLenses")}</Link></li>
              <li><Link to="/lenses?category=telecentric" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.telecentricLenses")}</Link></li>
              <li><Link to="/lenses?category=line-scan" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.lineScanLenses")}</Link></li>
              <li><Link to="/products?category=other" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.frameGrabbers")}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t("footer.support")}</h4>
            <ul className="space-y-3">
              <li><Link to="/software-downloads" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.downloads")}</Link></li>
              <li><Link to="/knowledge-base" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.knowledgeBase")}</Link></li>
              <li><Link to="/contact-us" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">{t("footer.contactUs")}</Link></li>
            </ul>
          </div>

          {/* Brand */}
          <div>
            <a href="/" className="flex items-center mb-6">
              <AlargeLogo className="h-12 w-auto" variant="light" />
            </a>
            <p className="text-sm text-accent-foreground/70 mb-6">
              {t("footer.brandDescription")}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
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
