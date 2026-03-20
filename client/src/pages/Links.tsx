import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, MessageSquare } from "lucide-react";
import { SiX, SiInstagram } from "react-icons/si";
import { Link } from "wouter";
import profileImg from "@assets/20251113_141130_0000_1769028514939.png";

export default function Links() {
  const codeAndCraft = [
    { name: "GitHub", icon: Github, href: "https://github.com/iiamankumar" },
    { name: "Guestbook", icon: MessageSquare, href: "/wall", isInternal: true },
  ];

  const connect = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/iiaman-kumar" },
    { name: "Twitter / X", icon: SiX, href: "https://x.com/iiamankumar" },
    { name: "Instagram", icon: SiInstagram, href: "https://www.instagram.com/amankrmishraa" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">

      <main className="flex-1 flex flex-col items-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <div className="flex flex-col items-center mb-12">
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 p-1">
                <img src={profileImg} alt="Aman Kumar" className="w-full h-full rounded-full object-cover object-top" />
              </div>
              <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0a0a0a]" />
            </div>
            <h1 className="text-2xl font-semibold mb-2">Aman Kumar</h1>
            <p className="text-white/60 text-center text-sm leading-relaxed max-w-xs">
              Full-Stack Developer crafting high-performance digital experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {["Developer", "Engineer", "Problem Solver"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full border border-white/20 text-xs text-white/70">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mb-10">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amannkrmishraa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 6l-10 7L2 6" />
              </svg>
              <span className="text-sm">Email</span>
            </a>
            <Link
              href="/"
              className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span className="text-sm">Full Website</span>
            </Link>
          </div>

          <section className="mb-10">
            <h2 className="text-xs uppercase tracking-[0.2em] text-white/40 text-center mb-6">Code & Craft</h2>
            <div className="space-y-3">
              {codeAndCraft.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {item.isInternal ? (
                    <Link
                      href={item.href}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="flex-1 font-medium">{item.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="flex-1 font-medium">{item.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.2em] text-white/40 text-center mb-6">Connect</h2>
            <div className="space-y-3">
              {connect.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: (index + codeAndCraft.length) * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="flex-1 font-medium">{item.name}</span>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
