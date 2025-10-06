import { useLanguage } from "@/components/site/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">{t.footer.copyright}</p>
        <ul className="flex items-center gap-4 text-sm text-muted-foreground">
          <li>
            <a className="hover:text-foreground" href="#about">
              {t.nav.about}
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href="#solutions">
              {t.nav.solutions}
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href="#services">
              {t.nav.services}
            </a>
          </li>
          <li>
            <a className="hover:text-foreground" href="#contact">
              {t.nav.contact}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
