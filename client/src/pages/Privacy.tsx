import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { User, Wifi, BarChart3, Shield, Mail } from "lucide-react";

export default function Privacy() {
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
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 block">Legal</span>
            <h1 className="text-4xl md:text-5xl font-serif italic">Privacy Policy</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-16"
          >
            <section>
              <span className="text-white/40 text-sm">01</span>
              <h2 className="text-2xl font-semibold mt-2 mb-6">Data Collection</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                I believe in the web being open but private. I only collect data that is strictly necessary to 
                provide the functional aspects of this site, such as authentication and spam prevention.
              </p>
              
              <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Authentication</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      When you sign in via GitHub or Google, I receive your <strong className="text-white">name, email, and avatar</strong>. 
                      This establishes your public profile for the Guestbook.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl border border-white/10 p-6 bg-white/5 mt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Security Logs</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      To prevent abuse, the authentication system securely logs your <strong className="text-white">IP address & User Agent</strong> during active sessions. 
                      This data is rotated and not used for tracking.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <span className="text-white/40 text-sm">02</span>
              <h2 className="text-2xl font-semibold mt-2 mb-6">Analytics</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Understanding how you use this site helps me improve it. I use privacy-focused tools 
                that aggregate data rather than tracking individual fingerprints.
              </p>
              
              <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Privacy-Focused Analytics</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Measures server performance, latency, and load times. Strictly technical data. 
                      IP anonymization is enabled to protect your identity.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <span className="text-white/40 text-sm">03</span>
              <h2 className="text-2xl font-semibold mt-2 mb-6">Your Rights</h2>
              
              <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Ownership & Deletion</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      You own your data. You retain the right to be forgotten at any time. If you wish to have your account, 
                      guestbook entries, and all associated metadata permanently deleted, you may do so without hurdles.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/40 block mb-2">General Inquiries</span>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amannkrmishraa@gmail.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                    amannkrmishraa@gmail.com
                  </a>
                </div>
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=amannkrmishraa@gmail.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Mail className="w-5 h-5 text-white/60" />
                </a>
              </div>
              <p className="text-white/40 text-sm mt-6">Last updated: JAN 01, 2025</p>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
