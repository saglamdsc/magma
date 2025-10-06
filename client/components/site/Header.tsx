import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Mail } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/components/site/LanguageProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const NAV = [
    { href: "#about", label: t.nav.about },
    { href: "#solutions", label: t.nav.solutions },
    { href: "#services", label: t.nav.services },
    { href: "#contact", label: t.nav.contact },
  ];

  const NavLinks = (
    <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      {NAV.map((n) => (
        <li key={n.href}>
          <a
            href={n.href}
            onClick={() => setOpen(false)}
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            {n.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-accent/20 ring-1 ring-accent/40" />
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            MagmAI
          </span>
        </Link>

        <nav className="hidden md:block">{NavLinks}</nav>

        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <div className="flex items-center gap-2 rounded-md border bg-card p-1">
            <button
              onClick={() => setLang("tr")}
              className={`px-2 py-1 text-xs font-medium rounded ${lang === "tr" ? "bg-accent text-accent-foreground" : "text-foreground/70"}`}
              aria-label="Türkçe"
            >
              TR
            </button>
            <span className="text-xs text-muted-foreground">·</span>
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 text-xs font-medium rounded ${lang === "en" ? "bg-accent text-accent-foreground" : "text-foreground/70"}`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          <Button
            asChild
            variant="default"
            size="sm"
            className="hidden md:inline-flex bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <a href="#contact" aria-label={t.hero.ctaSecondary}>
              <Mail className="h-4 w-4" />
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Menü"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="mt-8 space-y-6">
                {NavLinks}
                <Button
                  asChild
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="#contact" aria-label={t.hero.ctaSecondary}>
                    <Mail className="h-4 w-4" />
                    <span>{t.hero.ctaSecondary}</span>
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
