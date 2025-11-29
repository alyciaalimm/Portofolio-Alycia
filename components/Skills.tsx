'use client';

import { useEffect, useState, useRef } from 'react';
import { Palette, Code, Users, Lightbulb, DollarSign, Target, Sparkles, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
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

  const hardSkills = [
    {
      name: 'UI/UX Design',
      icon: <Palette className="w-8 h-8" />,
      color: 'from-pastel-blue to-pastel-lavender',
      description: 'Creating intuitive and user-centered digital experiences'
    },
    {
      name: 'UML Diagram Design',
      icon: <Code className="w-8 h-8" />,
      color: 'from-pastel-pink to-pastel-blue',
      description: 'Systematic modeling and process documentation'
    }
  ];

  const softSkills = [
    {
      name: 'Teamwork & Collaboration',
      icon: <Users className="w-8 h-8" />,
      color: 'from-pastel-lavender to-pastel-pink',
      description: 'Working effectively with diverse teams and stakeholders'
    },
    {
      name: 'Problem-Solving',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'from-pastel-cream to-pastel-blue',
      description: 'Analytical thinking and creative solution development'
    },
    {
      name: 'Financial Management',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-pastel-blue to-pastel-pink',
      description: 'Budget planning and transparent financial reporting'
    },
    {
      name: 'Project Management',
      icon: <Target className="w-8 h-8" />,
      color: 'from-pastel-pink to-pastel-lavender',
      description: 'Organizing workflows and achieving strategic objectives'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-r from-pastel-lavender/20 to-pastel-blue/10 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-1/3 w-96 h-96 bg-pastel-pink/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-72 h-72 bg-pastel-lavender/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
        }}
        transition={{ duration: 11, repeat: Infinity }}
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
            <div className="p-4 bg-gradient-to-br from-pastel-lavender/20 to-pastel-pink/20 rounded-2xl backdrop-blur-sm border border-white/40 shadow-xl">
              <Zap className="w-8 h-8 text-pastel-pink" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills & Achievements
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pastel-blue to-pastel-lavender mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="space-y-16">
          {/* Hard Skills */}
          <div>
            <div className={`mb-12 ${isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
                Technical Skills
              </h3>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Core competencies in design and system analysis
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {hardSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
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
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0`}
                      animate={hoveredSkill === skill.name ? {
                        opacity: 0.1,
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Shimmer Effect */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      />
                    )}

                    {/* Floating Sparkles */}
                    {hoveredSkill === skill.name && (
                      <>
                        <motion.div
                          className="absolute top-4 right-4"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          <Sparkles className="w-5 h-5 text-pastel-lavender" />
                        </motion.div>
                        <motion.div
                          className="absolute bottom-4 left-4"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Sparkles className="w-4 h-4 text-pastel-blue" />
                        </motion.div>
                      </>
                    )}

                    <div className="flex items-center space-x-6 relative z-10">
                      <motion.div 
                        className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg text-white`}
                        animate={hoveredSkill === skill.name ? {
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <div>
                        <motion.h4 
                          className="text-2xl font-bold text-gray-800 mb-2 transition-colors"
                          animate={hoveredSkill === skill.name ? { color: "#A7C7E7" } : {}}
                        >
                          {skill.name}
                        </motion.h4>
                        <p className="text-gray-600 leading-relaxed">
                          {skill.description}
                        </p>
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

          {/* Soft Skills */}
          <div>
            <div className={`mb-12 ${isVisible ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">
                Soft Skills
              </h3>
              <p className="text-gray-600 text-center max-w-2xl mx-auto">
                Personal attributes that enhance professional effectiveness
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <motion.div
                    className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center border border-gray-100 relative overflow-hidden h-full"
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
                      className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0`}
                      animate={hoveredSkill === skill.name ? {
                        opacity: 0.1,
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Shimmer Effect */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      />
                    )}

                    <motion.div 
                      className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} shadow-lg text-white mx-auto w-fit mb-4 relative z-10`}
                      animate={hoveredSkill === skill.name ? {
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{ duration: 0.6 }}
                    >
                      {skill.icon}
                    </motion.div>

                    {/* Floating Sparkle */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        className="absolute top-2 right-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <Sparkles className="w-4 h-4 text-pastel-pink" />
                      </motion.div>
                    )}

                    <motion.h4 
                      className="text-lg font-bold text-gray-800 mb-3 relative z-10 transition-colors"
                      animate={hoveredSkill === skill.name ? { color: "#FFB6C1" } : {}}
                    >
                      {skill.name}
                    </motion.h4>
                    <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                      {skill.description}
                    </p>

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
        </div>
      </div>
    </section>
  );
};

export default Skills;