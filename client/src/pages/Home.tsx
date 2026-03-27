import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiNodedotjs, 
  SiExpress, SiPostgresql, SiMongodb, SiPrisma, SiDocker, SiGit, SiFigma,
  SiRedis, SiVercel, SiGithub, SiGithubactions, SiAmazon, SiCloudflare,
  SiPython, SiLinux, SiCss3, SiNotion, SiMarkdown, SiZod, SiTurborepo,
  SiC, SiOpenjdk, SiUbuntu
} from "react-icons/si";
import type { Project, Skill } from "@shared/schema";
import { useProjects, useSkills } from "@/hooks/use-portfolio";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight, Mail, MapPin, Star, Code2, Briefcase, Rocket, Copy, CheckCheck } from "lucide-react";
import { Link } from "wouter";
import logoSvg from "@assets/logo.svg";
// Use the professional photo from customer assets
const profileImg = "https://customer-assets.emergentagent.com/job_portfolio-backend-8/artifacts/p72a597e_Professional%20Photo.jpg";
const indiaMapImg = "https://customer-assets.emergentagent.com/job_portfolio-backend-8/artifacts/3kriexdl_glowing_blue_india_map.png";
import travelImg from "@assets/stock_images/mountain_hiking_adve_6f90633c.jpg";
import codeImg from "@assets/20251113_141130_0000_1769020836354.png";
import liftImg from "@assets/stock_images/weightlifting_gym_fi_328813c9.jpg";
import musicImg from "@assets/ab67616d0000b27350ce95062d66f316cc362571~2_1769021981633.jpeg";

const lifestyleSlides = [
  { image: travelImg, label: "I Travel" },
  { image: codeImg, label: "I Code" },
  { image: liftImg, label: "I Lift" },
];

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);
  
  const handleCopy = async () => {
    await navigator.clipboard.writeText("amannkrmishraa@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
      data-testid="button-copy-email"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="copied"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2"
          >
            <CheckCheck className="w-5 h-5 text-white/60" />
            <span className="text-lg">Copied to clipboard</span>
          </motion.div>
        ) : (
          <motion.div
            key="email"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2"
          >
            <Copy className="w-5 h-5" />
            <span className="text-lg">amannkrmishraa@gmail.com</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

const iconMap: Record<string, any> = {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiNodedotjs, 
  SiExpress, SiPostgresql, SiMongodb, SiPrisma, SiDocker, SiGit, SiFigma,
  SiRedis, SiVercel, SiGithub, SiGithubactions, SiAmazon, SiCloudflare,
  SiPython, SiLinux, SiCss3, SiNotion, SiMarkdown, SiZod, SiTurborepo
};

const allSkillIcons = [
  { icon: SiReact, color: "#61DAFB", name: "React" },
  { icon: SiNextdotjs, color: "#fff", name: "Next.js" },
  { icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { icon: SiTailwindcss, color: "#06B6D4", name: "Tailwind" },
  { icon: SiCss3, color: "#1572B6", name: "CSS" },
  { icon: SiFramer, color: "#fff", name: "Framer" },
  { icon: SiFigma, color: "#F24E1E", name: "Figma" },
  { icon: SiNotion, color: "#fff", name: "Notion" },
  { icon: SiMarkdown, color: "#fff", name: "Markdown" },
  { icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { icon: SiExpress, color: "#fff", name: "Express" },
  { icon: SiRedis, color: "#DC382D", name: "Redis" },
  { icon: SiPostgresql, color: "#4169E1", name: "PostgreSQL" },
  { icon: SiMongodb, color: "#47A248", name: "MongoDB" },
  { icon: SiPrisma, color: "#fff", name: "Prisma" },
  { icon: SiZod, color: "#3E67B1", name: "Zod" },
  { icon: SiTurborepo, color: "#EF4444", name: "Turborepo" },
  { icon: SiGit, color: "#F05032", name: "Git" },
  { icon: SiGithub, color: "#fff", name: "GitHub" },
  { icon: SiGithubactions, color: "#2088FF", name: "Actions" },
  { icon: SiVercel, color: "#fff", name: "Vercel" },
  { icon: SiDocker, color: "#2496ED", name: "Docker" },
  { icon: SiAmazon, color: "#FF9900", name: "AWS" },
  { icon: SiCloudflare, color: "#F38020", name: "Cloudflare" },
  { icon: SiPython, color: "#3776AB", name: "Python" },
  { icon: SiLinux, color: "#FCC624", name: "Linux" },
  { icon: SiOpenjdk, color: "#ED8B00", name: "Java" },
  { icon: SiC, color: "#A8B9CC", name: "C" },
  { icon: SiUbuntu, color: "#E95420", name: "Ubuntu" },
];

const marqueeWords = [
  "Scalable", "Performant", "Clean Code", "Best Practices", "Test Driven", 
  "CI/CD", "Agile", "Problem Solver", "Innovation"
];

const starPositions = [
  { top: 5, left: 12 }, { top: 8, left: 34 }, { top: 3, left: 56 }, { top: 12, left: 78 }, { top: 6, left: 91 },
  { top: 15, left: 8 }, { top: 18, left: 25 }, { top: 20, left: 67 }, { top: 16, left: 85 },
  { top: 25, left: 15 }, { top: 28, left: 38 }, { top: 30, left: 73 }, { top: 26, left: 95 },
  { top: 35, left: 5 }, { top: 38, left: 22 }, { top: 40, left: 62 }, { top: 36, left: 88 },
  { top: 45, left: 18 }, { top: 48, left: 35 }, { top: 50, left: 75 },
];

export default function Home() {
  const { data: projects } = useProjects();
  const { data: skills } = useSkills();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % lifestyleSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % lifestyleSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + lifestyleSlides.length) % lifestyleSlides.length);
  const getSlideIndex = (offset: number) => (currentSlide + offset + lifestyleSlides.length) % lifestyleSlides.length;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden pt-20">
        {/* Optimized gradient background */}
        <div className="absolute inset-0 z-0 overflow-hidden will-change-auto">
          {/* Static gradient orbs - no animation for performance */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/30 via-purple-600/20 to-transparent blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-600/25 via-blue-500/15 to-transparent blur-3xl" />
          <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-transparent blur-3xl" />

          {/* Single rotating ring using CSS animation */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/[0.03] animate-spin-slow" />

          {/* Subtle grid pattern overlay */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}
          />

          {/* Star field - simplified with CSS animations */}
          {starPositions.map((pos, i) => (
            <div 
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
              style={{
                top: `${pos.top}%`,
                left: `${pos.left}%`,
                animationDelay: `${(i % 5) * 0.5}s`,
              }}
            />
          ))}
          
          {/* Bottom gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="z-10 max-w-5xl"
        >
          {/* Role Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-10"
            data-testid="badge-role"
          >
            <motion.span 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
            />
            <span className="text-sm text-white/60 tracking-wide">Available for new opportunities</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.05] tracking-tight" 
            data-testid="text-hero-headline"
          >
            Crafting robust software<br />
            with <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">elegant code</span>
          </motion.h1>
          
          {/* Subheadline with Avatar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-12 flex-wrap"
          >
            <span className="text-xl md:text-2xl text-white/70" data-testid="text-hero-intro">Hello, I'm Aman Kumar</span>
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500/50 shadow-xl shadow-blue-500/30"
            >
              <img src={profileImg} alt="Aman Kumar" className="w-full h-full object-cover object-top" />
            </motion.div>
            <span className="text-xl md:text-2xl text-white/70" data-testid="text-hero-role">a Software Engineer & Full Stack Web Developer</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col gap-6 justify-center items-center"
          >
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 cursor-pointer group"
                data-testid="button-contact"
              >
                <span className="text-white/90 text-lg font-medium">Let's Connect</span>
                <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-white transition-colors">
                  <ArrowRight className="w-4 h-4 text-black" />
                </div>
              </motion.div>
            </Link>
            
            <CopyEmailButton />
          </motion.div>
        </motion.div>

        {/* Earth/Globe visual at bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-48">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-blue-900/10 to-transparent rounded-[100%] blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
      </section>

      {/* FROM CONCEPT TO PRODUCTION Banner */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-3xl p-12 border border-white/10 relative overflow-hidden"
        >
          {/* Animated background effect */}
          <div className="absolute inset-0 opacity-30">
            <motion.div 
              animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
              className="absolute inset-0"
              style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          
          <div className="relative z-10 text-center flex flex-col md:flex-row items-center justify-center gap-6">
            {/* Profile photo */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20"
            >
              <img 
                src={profileImg} 
                alt="Aman Kumar"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            
            {/* Text */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-bold mb-2">
                FROM CONCEPT TO
              </h2>
              <h2 className="text-4xl md:text-6xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  PRODUCTION
                </span>
              </h2>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Experience Card - Large */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 lg:row-span-2 bg-[#111] rounded-3xl p-8 border border-white/5 transition-all duration-500 overflow-hidden relative group"
            data-testid="card-experience"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-white/5" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-white/5" 
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 rounded-full border border-white/5" 
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/50 to-purple-500/50 blur-xl" />
            </div>
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <Briefcase className="w-5 h-5 text-white/60" />
              </div>
              <span className="text-xs uppercase tracking-widest text-white/40 mb-2">Experience</span>
              <h3 className="text-2xl font-semibold leading-tight" data-testid="text-experience">Building production-grade applications with modern tech stacks</h3>
            </div>
          </motion.div>

          {/* Tech Stack Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 lg:col-span-2 bg-[#111] rounded-3xl p-8 border border-white/5 transition-all duration-500"
            data-testid="card-tech-stack"
          >
            <h3 className="text-2xl font-bold mb-2 text-center" data-testid="text-passionate">Passionate about</h3>
            <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">cutting-edge technologies</h3>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {skills?.slice(0, 10).map((skill, index) => {
                const Icon = iconMap[skill.iconName || ""];
                return (
                  <motion.div 
                    key={skill.id} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 transition-all cursor-pointer"
                    data-testid={`skill-tag-${skill.id}`}
                  >
                    {Icon && <Icon className="text-lg" />}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Last Played Music Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 lg:col-span-2 bg-[#111] rounded-3xl p-8 border border-white/5 transition-all duration-500 relative overflow-hidden"
            data-testid="card-last-played"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold">Last Played</h3>
            </div>
            
            <div className="flex flex-col items-center justify-center py-4">
              {/* Vinyl Record Animation */}
              <div className="relative w-48 h-48 mb-6">
                {/* Rotating vinyl */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border-8 border-gray-900"
                >
                  {/* Vinyl grooves */}
                  <div className="absolute inset-0 rounded-full" style={{
                    background: 'repeating-radial-gradient(circle at center, transparent 0px, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)'
                  }} />
                  
                  {/* Center label with album art */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-gray-900 shadow-xl">
                    <img 
                      src={musicImg} 
                      alt="Valam by Arijit Singh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-400" />
                </motion.div>
              </div>
              
              <div className="text-center">
                <p className="text-white/50 text-sm mb-1">Last Played</p>
                <p className="text-white font-semibold text-lg">
                  <span className="text-pink-400">Valam</span> by <span className="text-blue-400">Arijit Singh</span>
                </p>
                <p className="text-white/40 text-sm mt-1">from Made In China</p>
              </div>
            </div>
          </motion.div>

          {/* Problem Solving Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#111] rounded-3xl p-8 border border-white/5 transition-all duration-500 relative overflow-hidden"
            data-testid="card-problem-solving"
          >
            <h3 className="text-xl font-bold mb-2" data-testid="text-problem-solving">I love solving</h3>
            <h3 className="text-xl font-bold mb-4">complex engineering</h3>
            <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">challenges</h3>
            
            <div className="flex gap-2">
              <span className="px-3 py-1.5 bg-white/5 rounded-lg text-sm flex items-center gap-2">
                <Code2 className="w-4 h-4" /> System Design
              </span>
              <span className="px-3 py-1.5 bg-blue-500/20 border border-blue-500/30 rounded-lg text-sm flex items-center gap-2 text-blue-400">
                Optimization
              </span>
            </div>

            {/* Background effect */}
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/50 to-transparent rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* Contact Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#111] rounded-3xl p-8 border border-white/5 transition-all duration-500 flex flex-col justify-center"
            data-testid="card-contact"
          >
            <h3 className="text-2xl font-bold mb-2" data-testid="text-contact">Have a project</h3>
            <h3 className="text-2xl font-bold mb-6 text-white/50">in mind?</h3>
            
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=amannkrmishraa@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all w-fit"
              data-testid="button-email-cta"
            >
              <Mail className="w-4 h-4 text-white/60" />
              <span className="text-sm">amannkrmishraa@gmail.com</span>
            </a>
          </motion.div>

          {/* Code Editor Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#111] rounded-3xl p-5 border border-white/5 transition-all duration-500"
            data-testid="card-code-editor"
          >
            <div className="bg-[#0d0d0d] rounded-xl border border-white/5 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                <span className="text-[10px] text-white/30 ml-2 font-mono">portfolio.tsx</span>
              </div>
              <div className="p-4 font-mono text-xs leading-relaxed">
                <div className="text-white/30">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">developer</span> = {"{"}
                </div>
                <div className="pl-4 text-white/50">
                  <span className="text-green-400">name</span>: <span className="text-amber-300">"Aman Kumar"</span>,
                </div>
                <div className="pl-4 text-white/50">
                  <span className="text-green-400">role</span>: <span className="text-amber-300">"Software Engineer"</span>,
                </div>
                <div className="pl-4 text-white/50">
                  <span className="text-green-400">passion</span>: <span className="text-amber-300">"Building"</span>
                </div>
                <div className="text-white/30">{"}"}</div>
              </div>
              <div className="flex gap-2 p-4 pt-0">
                <Link href="/projects">
                  <Button size="sm" className="rounded-lg text-xs bg-white text-black hover:bg-white/90" data-testid="button-view-projects">
                    View Projects <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </Link>
                <a href="https://github.com/iiamankumar" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="ghost" className="rounded-lg text-xs text-white/60" data-testid="button-github">
                    <SiGithub className="w-3.5 h-3.5 mr-1" /> GitHub
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Location Card - India Map */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 bg-[#0a0a0a] rounded-3xl border border-white/5 transition-all duration-500 relative overflow-hidden min-h-[320px]"
            data-testid="card-location"
          >
            {/* India Map visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* India map image - full size, blended to remove black bg */}
                <img 
                  src={indiaMapImg} 
                  alt="India Map" 
                  className="w-[90%] h-[85%] object-contain mix-blend-lighten"
                />
                
                {/* Pulsing location dot - centered on map */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 2, 1], opacity: [0.8, 0.2, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-6 h-6 bg-blue-400/40 rounded-full"
                  />
                  <div className="w-3 h-3 bg-white rounded-full shadow-lg shadow-blue-400/80 z-10" />
                </div>
              </div>
            </div>
            
            {/* Text overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent">
              <div className="text-center">
                <h3 className="text-2xl font-bold tracking-wide" data-testid="text-location">INDIA</h3>
              </div>
            </div>
          </motion.div>

          {/* Current Focus Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 bg-[#111] rounded-3xl p-8 border border-white/5 transition-all duration-500"
            data-testid="card-current-focus"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                <Rocket className="w-6 h-6 text-white/60" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-white/40 mb-2 block">Current Focus</span>
                <h3 className="text-2xl font-bold" data-testid="text-current-focus">Building high-performance web applications at scale</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="projects" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-pink-500 mb-4 block">Case Studies</span>
          <h2 className="text-5xl md:text-7xl font-bold" data-testid="text-featured-projects">
            Curated <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">work</span>
          </h2>
        </motion.div>

        <div className="space-y-32">
          {projects?.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
              data-testid={`card-project-${project.id}`}
            >
              {/* Project Header Row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="text-white/40 text-sm">0{index + 1}</span>
                  <div className="w-16 h-px bg-white/20" />
                  <span className="text-white/40 text-sm uppercase tracking-wider">Web App</span>
                </div>
                <span className="text-white/40 text-sm px-4 py-1 border border-white/10 rounded-full">Q1 2025</span>
              </div>

              {/* Project Title */}
              <h3 className="text-4xl md:text-5xl font-bold mb-8" data-testid={`text-project-title-${project.id}`}>{project.title}</h3>

              {/* Project Card - Clickable */}
              <Link href={`/project/${project.id}`}>
                <motion.div 
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="relative cursor-pointer"
                >
                  <div className="relative bg-gradient-to-br from-pink-500/90 to-rose-400/90 rounded-3xl p-6 md:p-8 overflow-hidden">
                    <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                    
                    {/* Project Screenshots - Stacked */}
                    <div className="relative h-[300px] md:h-[400px]">
                      <div className="absolute left-0 top-8 w-[45%] rounded-xl overflow-hidden border border-white/20 shadow-2xl transform -rotate-3 z-10">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-auto"
                          data-testid={`img-project-${project.id}`}
                        />
                      </div>
                      <div className="absolute left-[20%] top-0 w-[50%] rounded-xl overflow-hidden border border-white/20 shadow-2xl z-20">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-auto"
                        />
                      </div>
                      <div className="absolute right-0 top-12 w-[40%] rounded-xl overflow-hidden border border-white/20 shadow-2xl transform rotate-3 z-10">
                        <img 
                          src={project.imageUrl} 
                          alt={project.title}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-3 mt-8">
                {project.tags.map((tag: string, tagIndex: number) => {
                  const IconComponent = iconMap[`Si${tag.replace(/[^a-zA-Z]/g, '')}`];
                  return (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: tagIndex * 0.05 }}
                    >
                      <Badge 
                        variant="outline" 
                        className="rounded-full border-white/20 bg-[#1a1a1a] text-white text-sm px-4 py-2 flex items-center gap-2"
                        data-testid={`badge-project-tag-${project.id}-${tagIndex}`}
                      >
                        {IconComponent && <IconComponent className="w-4 h-4" />}
                        {tag}
                      </Badge>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <Link href="/projects">
            <Button variant="outline" className="rounded-full border-white/20 px-8" data-testid="button-see-more-projects">
              See more projects <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Skills Section - The Secret Sauce */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          {/* Abstract 3D background element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[400px] h-[400px] opacity-60">
            <div className="relative w-full h-full">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-br from-zinc-800 via-zinc-700 to-zinc-900 rounded-[60px] blur-sm"
                style={{ transform: 'perspective(500px) rotateX(45deg) rotateY(-15deg)' }}
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 bg-gradient-to-br from-zinc-700 via-zinc-600 to-zinc-800 rounded-[50px] blur-sm"
                style={{ transform: 'perspective(500px) rotateX(30deg) rotateY(20deg)' }}
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-16 bg-gradient-to-br from-zinc-600 via-zinc-500 to-zinc-700 rounded-[40px] blur-sm"
                style={{ transform: 'perspective(500px) rotateX(-20deg) rotateY(-30deg)' }}
              />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative z-10 pt-48"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">My Skills</span>
            <h2 className="text-5xl md:text-7xl font-bold" data-testid="text-tech-stack">
              The Secret <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Sauce</span>
            </h2>
          </motion.div>

          {/* Skills Grid with Glassmorphism */}
          <div className="grid grid-cols-5 md:grid-cols-7 gap-3 md:gap-4 justify-items-center max-w-4xl mx-auto relative z-10">
            {allSkillIcons.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.02 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg shadow-black/20"
                  title={skill.name}
                  data-testid={`skill-icon-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                >
                  <Icon className="text-2xl md:text-3xl" style={{ color: skill.color }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 -rotate-1 scale-105">
        <div className="flex animate-marquee whitespace-nowrap gap-8">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
            <div key={i} className="flex items-center gap-8">
              <Star className="w-4 h-4 text-white/80" />
              <span className="text-lg font-bold uppercase tracking-wider text-white">{word}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-6 block">Know About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight" data-testid="text-about-headline">
            Software Engineer &amp;<br />Full Stack Developer<br />and a little bit of <span className="italic font-serif font-normal text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">everything</span>
          </h2>
          
          <div className="space-y-6 text-white/70 leading-relaxed max-w-2xl mx-auto">
            <p data-testid="text-about-bio">
              I'm Aman Kumar, a Software Engineer and Full Stack Developer passionate about creating dynamic web experiences. From frontend to backend, I thrive on solving complex problems with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to learn more.
            </p>
            <p>
              When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's about balance, and I love embracing every part of it.
            </p>
            <p className="text-white font-medium">
              I believe in waking up each day eager to make a difference!
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-8">
            <motion.a 
              href="https://linkedin.com/in/iiaman-kumar" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white/60 hover:text-white transition-colors" 
              data-testid="link-linkedin"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </motion.a>
            <motion.a 
              href="https://github.com/iiamankumar" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white/60 hover:text-white transition-colors" 
              data-testid="link-github"
            >
              <SiGithub className="w-5 h-5" />
            </motion.a>
            <motion.a 
              href="https://www.instagram.com/amankrmishraa" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="text-white/60 hover:text-white transition-colors" 
              data-testid="link-instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Lifestyle Carousel Section */}
      <section className="py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div 
            className="relative flex items-center justify-center h-[420px] overflow-hidden touch-pan-y"
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
              className="absolute left-4 md:left-16 w-44 md:w-56 h-60 md:h-80 rounded-2xl overflow-hidden cursor-pointer z-0 transform -rotate-6"
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

            {/* Current Slide */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 80) prevSlide();
                  else if (info.offset.x < -80) nextSlide();
                }}
                className="relative z-10 w-60 md:w-72 h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing ring-4 ring-blue-500/30"
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
              className="absolute right-4 md:right-16 w-44 md:w-56 h-60 md:h-80 rounded-2xl overflow-hidden cursor-pointer z-0 transform rotate-6"
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
              className="text-3xl md:text-4xl font-bold text-center mt-8"
            >
              {lifestyleSlides[currentSlide].label}
            </motion.h3>
          </AnimatePresence>

        </motion.div>
      </section>

      {/* Guestbook & Apple Music Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Guestbook Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-[#111] rounded-3xl p-8 overflow-hidden min-h-[320px] border border-white/5"
          >
            {/* Floating Device Graphics */}
            <div className="absolute top-4 left-8 right-8 h-40">
              {/* Left tilted device */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-0 w-28 h-36 bg-[#1a1a1a] rounded-xl border border-white/10 transform -rotate-12 shadow-xl"
              >
                <div className="absolute inset-2 rounded-lg bg-gradient-to-br from-pink-500/80 to-purple-600/80 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/30" />
                </div>
              </motion.div>
              {/* Right tilted device */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-0 top-4 w-28 h-36 bg-[#1a1a1a] rounded-xl border border-white/10 transform rotate-12 shadow-xl"
              >
                <div className="absolute inset-2 rounded-lg bg-gradient-to-br from-purple-500/80 to-pink-400/80 p-3 space-y-2">
                  <div className="w-full h-2 rounded bg-pink-300/60" />
                  <div className="w-3/4 h-2 rounded bg-pink-300/40" />
                  <div className="w-1/2 h-2 rounded bg-pink-300/30" />
                </div>
              </motion.div>
            </div>
            
            {/* Guestbook Text */}
            <Link href="/wall" className="absolute bottom-8 left-8 right-8 block cursor-pointer">
              <span className="text-xs uppercase tracking-[0.2em] text-white/40 block mb-2">Guestbook</span>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold">Let me know you were here</h3>
                  <p className="text-sm text-white/50 mt-1">Visit the Community Wall</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </Link>
          </motion.div>

          {/* Apple Music Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-[#111] rounded-3xl p-8 overflow-hidden min-h-[320px] border border-white/5"
          >
            {/* Apple Music Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.997 6.124c0-.738-.065-1.47-.24-2.19-.317-1.31-1.062-2.31-2.18-3.043C21.003.517 20.373.285 19.7.164c-.517-.093-1.038-.135-1.564-.15-.04-.003-.083-.01-.124-.013H5.988c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.597-.35 2.296-.81.84-.553 1.472-1.287 1.88-2.208.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.35.1-.706.157-1.07.173-.95.042-1.785-.49-2.066-1.373-.28-.88.106-1.793.996-2.2.346-.158.718-.25 1.09-.327.4-.083.806-.142 1.2-.24.31-.078.476-.286.502-.602.005-.048.005-.097.005-.146V9.364c0-.087-.012-.18-.042-.26-.06-.16-.18-.254-.355-.276-.168-.02-.338.008-.503.044-.96.21-1.92.423-2.878.637-.357.08-.713.162-1.07.242-.127.028-.182.1-.192.226-.004.048-.003.097-.003.146v6.87c0 .376-.04.746-.17 1.103-.238.657-.656 1.132-1.305 1.407-.373.158-.766.235-1.168.27-.693.06-1.348-.04-1.927-.434-.47-.32-.736-.76-.832-1.313-.09-.52-.023-1.02.262-1.473.31-.494.756-.812 1.3-.996.378-.127.77-.2 1.163-.27.396-.068.794-.123 1.183-.214.353-.084.516-.3.535-.66.002-.038.003-.077.003-.116V6.383c0-.158.02-.314.063-.466.072-.254.227-.4.49-.46.2-.047.404-.074.608-.108 1.238-.21 2.478-.42 3.717-.628.764-.13 1.528-.26 2.292-.39.168-.028.336-.057.506-.073.27-.025.47.103.543.365.036.128.053.263.053.398v4.076z"/>
                </svg>
              </div>
              <span className="font-semibold">Last Played</span>
            </div>

            {/* Song Info */}
            <p className="text-white/70 mb-6">
              Last Played <span className="text-white font-semibold">Valam</span> by <span className="text-white font-semibold">Arijit Singh</span> from <span className="text-white font-semibold">Made In China</span>
            </p>

            {/* Vinyl Record with Album Art */}
            <div className="flex justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="relative w-44 h-44"
              >
                {/* Vinyl Record */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-800 to-black border-4 border-gray-700 shadow-2xl">
                  {/* Grooves */}
                  <div className="absolute inset-3 rounded-full border border-gray-600/40" />
                  <div className="absolute inset-6 rounded-full border border-gray-600/30" />
                  <div className="absolute inset-9 rounded-full border border-gray-600/20" />
                  <div className="absolute inset-12 rounded-full border border-gray-600/20" />
                  {/* Center Label with Album Art */}
                  <div className="absolute inset-[30%] rounded-full overflow-hidden ring-2 ring-gray-600">
                    <img 
                      src={musicImg}
                      alt="Valam - Arijit Singh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-20 h-20 mx-auto mb-10 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 p-1 shadow-2xl shadow-blue-500/30 overflow-hidden"
          >
            <img src={profileImg} alt="Aman Kumar" className="w-full h-full rounded-xl object-cover object-top" />
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-2 tracking-tight" data-testid="text-cta-concept">
            FROM CONCEPT TO
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight" data-testid="text-cta-production">
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-400">PRODUCTION</span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-blue-500/20 -skew-x-3 rounded" />
            </span>
          </h2>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-12 tracking-tight" data-testid="text-cta-happen">
            I MAKE IT <span className="font-black">HAPPEN!</span>
          </h2>

          <Link href="/contact">
            <Button size="lg" className="rounded-full bg-white text-black gap-2 font-semibold shadow-xl" data-testid="button-get-in-touch">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          <div className="mt-20">
            <h3 className="text-xl font-bold mb-3" data-testid="text-available">Open to new opportunities</h3>
            <p className="text-white/60 max-w-md mx-auto">
              I'm passionate about building impactful software and working with great teams.
            </p>
          </div>
        </motion.div>

        {/* Animated background effect */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ 
              x: [0, 50, -30, 0],
              y: [0, -30, 20, 0],
              scale: [1, 1.1, 0.95, 1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-transparent blur-3xl"
          />
          <motion.div
            animate={{ 
              x: [0, -40, 60, 0],
              y: [0, 40, -20, 0],
              scale: [1, 0.9, 1.15, 1],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-500/15 via-cyan-500/10 to-transparent blur-3xl"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
