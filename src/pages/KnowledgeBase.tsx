import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ChevronRight } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";
import { useTranslation } from "react-i18next";

const KnowledgeBase = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <LocaleLink to="/" className="hover:text-primary transition-colors">{t("common.home")}</LocaleLink>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{t("knowledgeBasePage.breadcrumb")}</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("knowledgeBasePage.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("knowledgeBasePage.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl p-12 lg:p-20 text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("knowledgeBasePage.comingSoon")}</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t("knowledgeBasePage.comingSoonDesc")}
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KnowledgeBase;
