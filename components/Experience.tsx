'use client';

import { useState, useRef } from 'react';
import { Briefcase, Calendar, MapPin, Users, Sparkles, Award } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
  const [hoveredExp, setHoveredExp] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handle3DMove = (e: React.MouseEvent<HTMLDivElement>, cardRef: HTMLDivElement) => {
    const rect = cardRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 15;
    const rotateY = (centerX - x) / 15;
    
    cardRef.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (cardRef: HTMLDivElement) => {
    cardRef.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const experiences = [
    {
      role: 'Volunteer',
      organization: 'Vesakh Community WALUBI (Perwakilan Umat Buddha Indonesia)',
      location: 'Yogyakarta, Indonesia',
      period: 'May 2025',
      responsibilities: [
        'Manage visitor traffic flow to ensure a safe and orderly event environment',
        'Support and oversee fundraising activities to achieve target contributions',
        'Welcome and assist visitors, providing guidance and a positive experience'
      ],
      color: 'from-pastel-blue to-pastel-lavender'
    },
    {
      role: 'Volunteer',
      organization: 'Vesakh Community WALUBI',
      location: 'Yogyakarta, Indonesia',
      period: 'May 2024',
      responsibilities: [
        'Manage visitor traffic flow to ensure a safe and orderly event environment',
        'Support and oversee fundraising activities to achieve target contributions',
        'Welcome and assist visitors, providing guidance and a positive experience'
      ],
      color: 'from-pastel-pink to-pastel-blue'
    },
    {
      role: 'PIC Public Relation',
      organization: 'BIZTECH Event',
      location: 'Semarang, Indonesia',
      period: 'Feb 2024',
      responsibilities: [
        'Coordinated with organizers and participants to ensure seamless event execution',
        'Facilitated participant accommodations and meal arrangements efficiently',
        'Supported participants in operating VR devices and resolving technical issues'
      ],
      color: 'from-pastel-lavender to-pastel-pink'
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-white to-pastel-cream/30 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <motion.div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-pastel-cream/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="flex justify-center mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="p-4 bg-gradient-to-br from-pastel-blue/20 to-pastel-lavender/20 rounded-2xl backdrop-blur-sm border border-white/40 shadow-xl">
              <Award className="w-8 h-8 text-pastel-blue" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experience
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pastel-blue to-pastel-lavender mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.organization}-${exp.period}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              onMouseEnter={() => setHoveredExp(`${exp.organization}-${exp.period}`)}
              onMouseLeave={() => setHoveredExp(null)}
            >
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100 relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ 
                  y: -10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                onMouseMove={(e) => {
                  const card = e.currentTarget as HTMLDivElement;
                  handle3DMove(e, card);
                }}
                onMouseLeave={(e) => {
                  const card = e.currentTarget as HTMLDivElement;
                  handleMouseLeave(card);
                }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0`}
                  animate={hoveredExp === `${exp.organization}-${exp.period}` ? {
                    opacity: 0.1,
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Shimmer Effect */}
                {hoveredExp === `${exp.organization}-${exp.period}` && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  />
                )}

                {/* Floating Sparkles */}
                {hoveredExp === `${exp.organization}-${exp.period}` && (
                  <>
                    <motion.div
                      className="absolute top-4 right-4"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <Sparkles className="w-5 h-5 text-pastel-blue" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-4 left-4"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <Sparkles className="w-4 h-4 text-pastel-lavender" />
                    </motion.div>
                  </>
                )}

                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between relative z-10">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <motion.div 
                        className="p-2 rounded-lg bg-gradient-to-br from-pastel-blue/20 to-pastel-lavender/20"
                        animate={hoveredExp === `${exp.organization}-${exp.period}` ? {
                          rotate: [0, -10, 10, 0],
                          scale: [1, 1.1, 1],
                        } : {}}
                        transition={{ duration: 0.6 }}
                      >
                        <Briefcase className="w-5 h-5 text-pastel-blue" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">{exp.role}</h3>
                        <p className="text-pastel-blue font-medium">{exp.organization}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <motion.span 
                        className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(167, 199, 231, 0.2)" }}
                      >
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </motion.span>
                      <motion.span 
                        className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(167, 199, 231, 0.2)" }}
                      >
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </motion.span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-4 h-4 text-pastel-lavender" />
                        <span className="text-sm font-semibold text-gray-700">Key Contributions:</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <motion.li 
                            key={idx} 
                            className="flex items-start gap-2 text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={hoveredExp === `${exp.organization}-${exp.period}` ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <span className="text-pastel-blue mt-1">•</span>
                            <span className="flex-1">{resp}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 3D Depth Overlay */}
                <div 
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.05) 100%)',
                    transform: 'translateZ(20px)'
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;