import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-brand">
              <span className="text-sm font-bold text-primary-foreground">H</span>
            </div>
            <span className="font-semibold gradient-brand-text">HandlerLab</span>
          </div>

          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              How It Works
            </Link>
            <Link to="/start-your-build" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Start Your Build
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2026 HandlerLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
