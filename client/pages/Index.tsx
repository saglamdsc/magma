import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Mail,
  Phone,
  ArrowRight,
  Brain,
  Database,
  FlaskConical,
} from "lucide-react";
import { useLanguage } from "@/components/site/LanguageProvider";

export default function Index() {
  const { t } = useLanguage();

  return (
    <div className="bg-background">
      {/* Hero */}
      <section id="hero" className="relative border-b">
        <div className="absolute inset-0 bg-[radial-gradient(40%_30%_at_70%_10%,hsl(var(--accent)/0.15),transparent)]" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                {t.hero.title}
              </h1>
              <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground">
                {t.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a href="#solutions" aria-label={t.hero.ctaPrimary}>
                    {t.hero.ctaPrimary}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="#contact" aria-label={t.hero.ctaSecondary}>
                    {t.hero.ctaSecondary}
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="mx-auto h-56 w-56 md:h-72 md:w-72 bg-transparent">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff25098e715d24655997d74609b3f9b97%2F7da3e75a0297418f866a87c3562eb9f6?format=webp&width=800"
                  alt="MagmAI logo"
                  className="h-full w-full object-contain bg-transparent"
                  style={{ background: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {t.about.title}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {t.about.body}
              </p>
            </div>
            <ul className="grid grid-cols-3 gap-4">
              {[FlaskConical, Brain, Database].map((Icon, idx) => (
                <li
                  key={t.about.features[idx]}
                  className="flex flex-col items-center rounded-lg border bg-card p-4 text-center"
                >
                  <Icon className="h-6 w-6 text-accent" />
                  <span className="mt-2 text-sm font-medium">
                    {t.about.features[idx]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        id="solutions"
        className="scroll-mt-24 bg-[hsl(var(--secondary)/0.4)]/40"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {t.solutions.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.solutions.subtitle}</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.solutions.items.map((item: any) => (
              <Card key={item.title} className="group">
                <CardHeader>
                  <CardTitle className="text-foreground">
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0 text-accent">
                    <a
                      href="#contact"
                      aria-label={`${item.title} için iletişime geç`}
                    >
                      {t.solutions.cta} <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              {t.services.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.services.subtitle}</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {t.services.items.map((item: any) => (
              <Card key={item.title}>
                <CardHeader>
                  <CardTitle className="text-foreground">
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="px-0 text-accent">
                    <a href="#contact">{t.services.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24 border-t bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                {t.contact.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{t.contact.body}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a
                    href={`mailto:${t.contact.email}`}
                    aria-label="E-posta gönder"
                  >
                    <Mail className="mr-2 h-4 w-4" /> {t.contact.email}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href={`tel:${t.contact.phone.replace(/\s+/g, "")}`}
                    aria-label="Telefon aç"
                  >
                    <Phone className="mr-2 h-4 w-4" /> {t.contact.phone}
                  </a>
                </Button>
              </div>
            </div>
            <div className="mx-auto h-40 w-40 md:h-56 md:w-56 rounded-2xl overflow-hidden border-2 border-primary/30 bg-transparent">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff25098e715d24655997d74609b3f9b97%2F7da3e75a0297418f866a87c3562eb9f6?format=webp&width=800"
                alt="Field geologist illustration"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
