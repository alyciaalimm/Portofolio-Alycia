'use client';

import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-cream via-pastel-blue/30 to-pastel-lavender/40 animate-gradient-shift" />
      
      {/* Interactive Mesh Gradient */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, rgba(167, 199, 231, 0.4), transparent 50%)`,
        }}
      />
      
      {/* Enhanced Floating Elements with Motion */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-pastel-pink/20 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pastel-blue/20 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, -40, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-3/4 left-1/3 w-24 h-24 bg-pastel-lavender/20 rounded-full blur-xl"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative Elements */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <div className="relative">
              <motion.div
                animate={floatingAnimation}
                className="p-4 bg-gradient-to-br from-pastel-blue/20 to-pastel-lavender/20 rounded-2xl backdrop-blur-sm border border-white/40 shadow-xl"
              >
                <Sparkles className="w-8 h-8 text-pastel-lavender" />
              </motion.div>
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-pastel-pink rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Animated Title */}
          <motion.h1 
            className="text-5xl md:text-7xl font-bold pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {['Alycia', 'Alim', 'Ananta'].map((word, wordIndex) => (
              <motion.span
                key={wordIndex}
                className="inline-block bg-gradient-to-r from-gray-700 via-pastel-blue to-pastel-lavender bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + wordIndex * 0.2, duration: 0.6 }}
              >
                {word.split('').map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + wordIndex * 0.2 + charIndex * 0.05 }}
                    whileHover={{ 
                      y: -10, 
                      color: '#A7C7E7',
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                {wordIndex < 2 && ' '}
              </motion.span>
            ))}
          </motion.h1>
          
          {/* Animated Subtitle */}
          <motion.div 
            className="space-y-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.div
              className="inline-block px-6 py-2 bg-gradient-to-r from-pastel-blue/20 to-pastel-lavender/20 rounded-full backdrop-blur-sm border border-white/40"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <p className="text-xl md:text-2xl text-gray-600 font-medium">
                Information Systems Student
              </p>
            </motion.div>
          </motion.div>

          {/* Description with Reveal Animation */}
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              Enthusiastic about understanding how technology, processes, and user needs come together to create effective and reliable digital solutions. I enjoy working on structured documentation, process modeling, and user-focused improvements. With strengths in analytical thinking, adaptability, and clear communication, I strive to contribute meaningful, well-organized, and thoughtfully crafted outcomes in every project.
            </motion.p>
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <motion.a
              href="mailto:anantaalycia@gmail.com"
              className="group relative p-4 bg-white/80 rounded-full shadow-lg backdrop-blur-sm border border-white/40"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-6 h-6 text-gray-700 group-hover:text-pastel-blue transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-pastel-blue/20 to-pastel-lavender/20 opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="socialHover"
              />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/alycia-alim-ananta"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 bg-white/80 rounded-full shadow-lg backdrop-blur-sm border border-white/40"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 text-gray-700 group-hover:text-pastel-lavender transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-pastel-lavender/20 to-pastel-pink/20 opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="socialHover"
              />
            </motion.a>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative p-3 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowDown className="w-8 h-8 text-gray-600 group-hover:text-pastel-blue transition-colors" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-b from-pastel-blue/20 to-pastel-lavender/20 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;