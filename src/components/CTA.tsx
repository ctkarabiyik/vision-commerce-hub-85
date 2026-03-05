import LocaleLink from "@/components/LocaleLink";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>

          <div className="flex justify-center mb-12">
            <LocaleLink to="/contact-us">
              <Button variant="heroOutline" className="group">
                {t("cta.button")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </LocaleLink>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-foreground/20">
            <a
              href="tel:+902122786102"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+90 212 278 61 02</span>
            </a>
            <a
              href="mailto:sales2@alarge.com.tr"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>sales2@alarge.com.tr</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
