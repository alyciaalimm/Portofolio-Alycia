'use client';

import { useEffect, useState, useRef } from 'react';
import { GraduationCap, Calendar, MapPin, Award, Sparkles, BookOpen } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('education');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

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

  const education = [
    {
      institution: 'Universitas Bina Nusantara',
      degree: 'Bachelor in Information Systems',
      location: 'Semarang, Indonesia',
      period: 'Sep 2023 - Sep 2027 (Expected)',
      gpa: '3.47/4.00',
      description: 'Focused on exploring how information systems integrate technology, users, and business processes.',
      color: 'from-pastel-blue to-pastel-lavender',
    },
    {
      institution: 'Karangturi National Senior High School',
      degree: 'High School Diploma',
      location: 'Semarang, Indonesia',
      period: 'Jul 2020 - May 2023',
      gpa: null,
      description: 'Foundation in mathematics, sciences, and analytical thinking.',
      color: 'from-pastel-pink to-pastel-cream',
    },
  ];

  return (
    <section id="education" className="py-24 bg-gradient-to-b from-white to-pastel-lavender/20 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-72 h-72 bg-pastel-blue/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-96 h-96 bg-pastel-lavender/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -30, 0],
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
              <BookOpen className="w-8 h-8 text-pastel-lavender" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Education
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pastel-blue to-pastel-lavender mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div 
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-8 relative overflow-hidden"
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
                {/* Animated Background Gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10`}
                  animate={hoveredCard === index ? {
                    opacity: 0.1,
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                {/* Shimmer Effect */}
                {hoveredCard === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                  />
                )}

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between relative z-10">
                  <div className="flex-1">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className={`p-3 rounded-full bg-gradient-to-r ${edu.color} shadow-lg`}
                        animate={hoveredCard === index ? {
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        <GraduationCap className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      {/* Floating Sparkles */}
                      {hoveredCard === index && (
                        <>
                          <motion.div
                            className="absolute top-4 right-4"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                          >
                            <Sparkles className="w-5 h-5 text-pastel-lavender" />
                          </motion.div>
                          <motion.div
                            className="absolute top-12 right-12"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            <Sparkles className="w-4 h-4 text-pastel-blue" />
                          </motion.div>
                        </>
                      )}
                      
                      <div className="flex-1">
                        <motion.h3 
                          className="text-2xl font-bold text-gray-800 mb-2 transition-colors"
                          animate={hoveredCard === index ? { color: "#A7C7E7" } : {}}
                        >
                          {edu.institution}
                        </motion.h3>
                        <p className="text-xl text-gray-600 font-medium mb-3">
                          {edu.degree}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <motion.div 
                            className="flex items-center text-gray-500 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm">{edu.period}</span>
                          </motion.div>
                          <motion.div 
                            className="flex items-center text-gray-500 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                          >
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{edu.location}</span>
                          </motion.div>
                          {edu.gpa && (
                            <motion.div 
                              className="flex items-center text-gray-500 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Award className="w-4 h-4 mr-2" />
                              <span className="text-sm">GPA: {edu.gpa}</span>
                            </motion.div>
                          )}
                        </div>
                        
                        <p className="text-gray-600 leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3D Depth Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)',
                    transform: 'translateZ(20px)',
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

export default Education;