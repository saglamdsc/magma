import { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
