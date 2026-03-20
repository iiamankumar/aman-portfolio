import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Globe, Clock, MapPin, Download, ChevronLeft, ChevronRight } from "lucide-react";
import travelImg from "@assets/stock_images/mountain_hiking_adve_6f90633c.jpg";
import codeImg from "@assets/20251113_141130_0000_1769020836354.png";
import liftImg from "@assets/stock_images/weightlifting_gym_fi_328813c9.jpg";
import resumePdf from "@assets/Aman_Resume_1769029689628.pdf";

const lifestyleSlides = [
  { image: travelImg, label: "I Travel" },
  { image: codeImg, label: "I Code" },
  { image: liftImg, label: "I Lift" },
];

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % lifestyleSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % lifestyleSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + lifestyleSlides.length) % lifestyleSlides.length);

  const getSlideIndex = (offset: number) => {
    return (currentSlide + offset + lifestyleSlides.length) % lifestyleSlides.length;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-8">About Me</h1>
            <div className="prose prose-invert prose-lg text-muted-foreground leading-relaxed mx-auto">
              <p className="mb-6">
                I'm Aman Kumar, a Software Engineer and Full Stack Developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
              </p>
              <p>
                When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it. I believe in waking up each day eager to make a difference!
              </p>
            </div>
          </div>

          {/* Lifestyle Carousel */}
          <div className="mb-20">
            <div 
              className="relative flex items-center justify-center h-[400px] overflow-hidden touch-pan-y"
              onTouchStart={(e) => {
                const touch = e.touches[0];
                (e.currentTarget as any).startX = touch.clientX;
              }}
              onTouchEnd={(e) => {
                const touch = e.changedTouches[0];
                const startX = (e.currentTarget as any).startX;
                const diff = touch.clientX - startX;
                if (Math.abs(diff) > 50) {
                  if (diff > 0) prevSlide();
                  else nextSlide();
                }
              }}
            >
              {/* Previous Slide */}
              <motion.div
                key={`prev-${getSlideIndex(-1)}`}
                className="absolute left-4 md:left-12 w-40 md:w-52 h-56 md:h-72 rounded-2xl overflow-hidden cursor-pointer z-0 transform -rotate-6"
                style={{ filter: 'brightness(0.6)' }}
                onClick={prevSlide}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={lifestyleSlides[getSlideIndex(-1)].image} 
                  alt={lifestyleSlides[getSlideIndex(-1)].label}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </motion.div>

              {/* Current Slide - Draggable */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 0.9, x: 0 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(_, info) => {
                    if (info.offset.x > 80) prevSlide();
                    else if (info.offset.x < -80) nextSlide();
                  }}
                  className="relative z-10 w-56 md:w-72 h-64 md:h-80 rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing ring-4 ring-blue-500/30"
                >
                  <img 
                    src={lifestyleSlides[currentSlide].image} 
                    alt={lifestyleSlides[currentSlide].label}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next Slide */}
              <motion.div
                key={`next-${getSlideIndex(1)}`}
                className="absolute right-4 md:right-12 w-40 md:w-52 h-56 md:h-72 rounded-2xl overflow-hidden cursor-pointer z-0 transform rotate-6"
                style={{ filter: 'brightness(0.6)' }}
                onClick={nextSlide}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={lifestyleSlides[getSlideIndex(1)].image} 
                  alt={lifestyleSlides[getSlideIndex(1)].label}
                  className="w-full h-full object-cover pointer-events-none"
                />
              </motion.div>
            </div>

            {/* Label */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={currentSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-3xl font-bold text-center mt-6"
              >
                {lifestyleSlides[currentSlide].label}
              </motion.h3>
            </AnimatePresence>
          </div>

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Remote, India</p>
              </div>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
              <Clock className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Timezones</h3>
                <p className="text-sm text-muted-foreground">Flexible (UK, USA, IST)</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border flex items-start gap-4">
              <Globe className="w-6 h-6 text-primary shrink-0" />
              <div>
                <h3 className="font-bold mb-1">Languages</h3>
                <p className="text-sm text-muted-foreground">English, Hindi</p>
              </div>
            </div>
          </div>

          {/* Detailed Skills */}
          <div className="mb-20">
            <h2 className="text-2xl font-display font-bold mb-8">Technical Proficiency</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['Java', 'C', 'Python', 'JavaScript', 'TypeScript', 'Data Structures & Algorithms', 'HTML', 'CSS', 'Solidity'].map(skill => (
                    <span key={skill} className="px-4 py-2 rounded-lg bg-muted text-sm font-medium hover:bg-muted/80 transition-colors cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-foreground">Tools & Frameworks</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'Node.js', 'Express.js', 'REST APIs', 'Git/GitHub', 'Power BI', 'Streamlit', 'MySQL', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'Figma', 'Docker', 'Prisma', 'Redis', 'Zod', 'Vercel', 'AWS', 'Cloudflare', 'Linux', 'Ubuntu'].map(tool => (
                    <span key={tool} className="px-4 py-2 rounded-lg bg-muted text-sm font-medium hover:bg-muted/80 transition-colors cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Resume CTA */}
          <div className="flex justify-center">
            <a 
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-background border border-border hover:bg-muted transition-colors font-semibold"
              data-testid="button-download-resume"
            >
              <Download className="w-5 h-5" /> Download Resume
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
