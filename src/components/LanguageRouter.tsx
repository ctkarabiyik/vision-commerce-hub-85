import { useEffect } from "react";
import { Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES } from "@/hooks/useLocalePath";

const LanguageRouter = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!lang || !SUPPORTED_LANGUAGES.includes(lang)) {
      // Redirect to /en + current path
      const restPath = location.pathname.replace(/^\/[^/]*/, "") || "";
      navigate(`/en${restPath}${location.search}`, { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, navigate, location.pathname, location.search]);

  if (!lang || !SUPPORTED_LANGUAGES.includes(lang)) {
    return null;
  }

  return <Outlet />;
};

export default LanguageRouter;
