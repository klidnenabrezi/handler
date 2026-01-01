import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--nav-background))]">
      <div className="container py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full gradient-brand">
              <span className="text-sm font-bold text-primary-foreground">H</span>
            </div>
            <span className="font-semibold text-white">HandlerLab</span>
          </div>

          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm text-white/70 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/how-it-works" className="text-sm text-white/70 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link to="/start-your-build" className="text-sm text-white/70 hover:text-white transition-colors">
              Start Your Build
            </Link>
          </nav>

          <p className="text-sm text-white/70">
            © 2026 HandlerLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
