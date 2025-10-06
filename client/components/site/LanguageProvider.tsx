import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, type Lang } from "@/lib/i18n";

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem("__lang");
      return (stored as Lang) || "tr";
    } catch (e) {
      return "tr";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("__lang", lang);
    } catch (e) {
      // ignore
    }
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
