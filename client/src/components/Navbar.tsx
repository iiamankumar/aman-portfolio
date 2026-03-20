import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoSvg from "@assets/logo.svg";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Work" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group" data-testid="link-home-logo">
          <img src={logoSvg} alt="AK" className="w-10 h-10 group-hover:scale-105 transition-transform" />
        </Link>

        {/* Desktop Nav - Center Pills */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-2 py-1.5">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-all",
                  location === link.href 
                    ? "bg-white/10 text-white" 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                )}
                data-testid={`link-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            <button className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-full transition-all flex items-center gap-1">
              More <ChevronDown className="w-3 h-3" />
            </button>
            <Link 
              href="/contact"
              className="ml-1 px-4 py-2 text-sm font-medium bg-white/10 text-white rounded-full hover:bg-white/20 transition-all border border-white/10"
              data-testid="link-contact"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Command Shortcut */}
        <div className="hidden md:flex items-center">
          <button className="w-8 h-8 flex items-center justify-center text-white/40 hover:text-white/60 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.045 17.955a6.955 6.955 0 0 1 0-11.91V4.018a8.954 8.954 0 0 0 0 15.964v-2.027zm5.955-14a6.955 6.955 0 0 1 5.91 10.545h2.027a8.954 8.954 0 0 0-15.964 0h2.027A6.955 6.955 0 0 1 12 3.955zm5.91 13.09a6.955 6.955 0 0 1-11.865 0H3.918a8.954 8.954 0 0 0 16.164 0h-2.127zM12 20.045a6.955 6.955 0 0 1-5.91-10.545H4.063a8.954 8.954 0 0 0 15.874 0H17.91A6.955 6.955 0 0 1 12 20.045z"/>
            </svg>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col p-6 gap-2">
              {links.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium py-3 px-4 rounded-xl transition-all",
                    location === link.href 
                      ? "bg-white/10 text-white" 
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-5 py-3 text-center font-semibold rounded-full bg-white text-black hover:bg-white/90 transition-all"
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
