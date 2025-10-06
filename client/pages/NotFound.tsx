import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-2 text-foreground">404</h1>
        <p className="text-base text-muted-foreground mb-6">
          Aradığınız sayfa bulunamadı.
        </p>
        <a href="/" className="text-accent hover:opacity-90 underline">
          Ana sayfaya dön
        </a>
      </div>
    </div>
  );
};

export default NotFound;
