import { Github, Linkedin } from "lucide-react";
import { SiX } from "react-icons/si";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* General Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">General</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors" data-testid="link-footer-about">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors" data-testid="link-footer-projects">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Specifics Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">Specifics</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <Link href="/wall" className="hover:text-white transition-colors" data-testid="link-footer-guestbook">
                  Guest Book
                </Link>
              </li>
              <li>
                <Link href="/attribution" className="hover:text-white transition-colors" data-testid="link-footer-attribution">
                  Attribution
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">More</h4>
            <ul className="space-y-3 text-white/60">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/links" className="hover:text-white transition-colors" data-testid="link-footer-links">
                  Links
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors" data-testid="link-footer-privacy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors" data-testid="link-footer-terms">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/iiaman-kumar" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/iiamankumar" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://x.com/iiamankumar" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
              <SiX className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} <span className="text-white">Aman Kumar</span>. All rights reserved
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
