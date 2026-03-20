import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FileText, Lightbulb, XCircle, MessageSquare, AlertCircle, Scale, Mail } from "lucide-react";

export default function Terms() {
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
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 block">Legal Agreement</span>
            <h1 className="text-4xl md:text-5xl font-serif italic">Terms of Use</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-16"
          >
            <section>
              <span className="text-white/40 text-sm">01</span>
              <h2 className="text-2xl font-semibold mt-2 mb-6">General Provisions</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                These Terms of Use ("Terms") constitute a legally binding agreement between you and 
                Aman Kumar ("Owner", "we", "us"). By accessing or using this website, you acknowledge 
                that you have read, understood, and agree to be bound by these Terms. If you do not agree, 
                you are prohibited from accessing this site.
              </p>
              
              <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Effective Date</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      These terms are effective as of JAN 01, 2025 and may be amended at any time without prior notice.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <span className="text-white/40 text-sm">02</span>
              <h2 className="text-2xl font-semibold mt-2 mb-6">Proprietary Rights</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                All content available on this website, including but not limited to text, graphics, 
                user interfaces, visual interfaces, source code, and architecture (collectively, "Content"), 
                is the intellectual property of Aman Kumar unless otherwise stated.
              </p>
              
              <div className="rounded-2xl border border-white/10 p-6 bg-white/5 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Limited Use</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      You are granted a limited, revocable license to study specific UI components for educational 
                      purposes or personal inspiration. You may not replicate the Site in its entirety. Any substantial 
                      usage requires a visible <strong className="text-white">dofollow backlink</strong> to this website.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-white/40 mb-2">Restrictions on Use</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Unauthorized copying, reproduction, cloning, or redistribution of the website's source code or 
                      visual design for commercial purposes is strictly prohibited. This codebase is <strong className="text-white">proprietary</strong> and 
                      not open source.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <span className="text-white/40 text-sm">03</span>
              <h2 className="text-2xl font-semibold mt-2 mb-6">Disclaimers</h2>
              
              <div className="rounded-2xl border border-white/10 p-6 bg-white/5 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">User Generated Content</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Certain areas of the Site (e.g., Guestbook) may allow users to post content. You agree not to 
                      post material that is unlawful, defamatory, or abusive. We reserve the right to remove any content 
                      at our sole discretion and without liability.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl border border-white/10 p-6 bg-white/5 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">No Warranty</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      This Site is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or 
                      warranties of any kind, express or implied, regarding the operation of the Site or the information, 
                      content, or materials included therein.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Scale className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">Limitation of Liability</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      In no event shall Aman Kumar be liable for any damages (including, without limitation, damages for 
                      loss of data or profit, or due to business interruption) arising out of the use or inability to use 
                      the materials on this website.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest text-white/40 block mb-2">Legal Inquiries</span>
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
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
