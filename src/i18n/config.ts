import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import tr from "./locales/tr";
import ru from "./locales/ru";
import it from "./locales/it";
import ar from "./locales/ar";
import de from "./locales/de";

const RTL_LANGUAGES = ["ar"];

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    tr: { translation: tr },
    ru: { translation: ru },
    it: { translation: it },
    ar: { translation: ar },
    de: { translation: de },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Handle RTL/LTR direction changes
i18n.on("languageChanged", (lng) => {
  const dir = RTL_LANGUAGES.includes(lng) ? "rtl" : "ltr";
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
});

// Set initial direction
const initialDir = RTL_LANGUAGES.includes(i18n.language) ? "rtl" : "ltr";
document.documentElement.dir = initialDir;
document.documentElement.lang = i18n.language;

export default i18n;
