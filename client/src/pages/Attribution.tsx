import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Attribution() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 block">Attribution</span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Journey to create<br />
              this <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500 italic">website</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-16"
          >
            <section>
              <span className="text-white/40 text-sm">01</span>
              <h2 className="text-2xl font-semibold mt-2 mb-6">The Journey</h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  It started in 2025 as a <strong className="text-white">simple React experiment</strong>. 
                  The code was messy, the design was derivative, but it was mine.
                </p>
                <p>
                  Fast forward to today. The web had evolved, and so had I. I wanted a digital 
                  home that felt 'alive'. I tore it down to the studs and rebuilt it with a{" "}
                  <strong className="text-white">focus on craftsmanship</strong>.
                </p>
                <p>
                  This new iteration is a statement on how I believe the web should be:{" "}
                  <strong className="text-white">performant, accessible, and aesthetically refined</strong>.
                </p>
              </div>
            </section>

            <section>
              <span className="text-white/40 text-sm">02</span>
              <h2 className="text-2xl font-semibold mt-2 mb-6">Design Philosophy</h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  The design draws inspiration from minimalist principles while incorporating 
                  modern glassmorphism and subtle animations. Every interaction is intentional, 
                  every pixel considered.
                </p>
                <p>
                  Dark mode isn't just a feature—it's the foundation. The deep black background 
                  (#0a0a0a) creates contrast that makes content pop while being easy on the eyes.
                </p>
              </div>
            </section>

            <section>
              <span className="text-white/40 text-sm">03</span>
              <h2 className="text-2xl font-semibold mt-2 mb-6">Colophon</h2>
              <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      {["React 18", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-full border border-white/20 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      {["PostgreSQL", "Drizzle ORM", "Express.js"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-full border border-white/20 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-4">Infrastructure</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Replit", "Nix"].map((tech) => (
                        <span key={tech} className="px-3 py-1.5 rounded-full border border-white/20 text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-white/10">
              <span className="text-xs uppercase tracking-widest text-white/40 mb-4 block">Crafted by</span>
              <h3 className="text-3xl font-light mb-4">Aman<br />Kumar</h3>
              <p className="text-white/60 mb-2">Open to new opportunities</p>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amannkrmishraa@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                amannkrmishraa@gmail.com
              </a>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
