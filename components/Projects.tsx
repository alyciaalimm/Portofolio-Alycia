'use client';

import { useEffect, useState, useRef } from 'react';
import { ExternalLink, Palette, Smartphone, Eye, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
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

    const element = document.getElementById('projects');
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
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardRef.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (cardRef: HTMLDivElement) => {
    cardRef.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  const uiuxProjects = [
    {
      title: 'Pixel',
      description: 'Pixel is a professional video editing service application designed to assist users in creating high-quality videos.',
      link: 'https://www.figma.com/design/fKJBehokBYj6q5QRpW151L/Pixel?node-id=125-3562&t=vfKMeOBdnPCcBuIe-1',
      documentationLink: undefined,
      designLink: undefined,
      color: 'from-pastel-blue to-pastel-lavender',
      delay: '0',
      type: 'UI/UX Design'
    },
    {
      title: 'BoardZy',
      description: 'BoardZy is an app that makes booking board game venues easy.',
      link: 'https://www.figma.com/design/byCDpuNbtLyomNsQp8OFan/Boardzy?node-id=19-3613&t=WKz72O2laTbjWXiW-1',
      documentationLink: undefined,
      designLink: undefined,
      color: 'from-pastel-pink to-pastel-blue',
      delay: '200',
      type: 'UI/UX Design'
    },
    {
      title: 'LearnBIS',
      description: 'LearnBIS is an app designed to make learning Indonesian Sign Language (BISINDO) easier.',
      link: undefined,
      documentationLink: 'https://drive.google.com/file/d/12OZcyxrPlE546NK3sWTsjYng0Sz4vXaO/view?usp=sharing',
      designLink: 'https://www.figma.com/design/wH2K8dHHYb5q9bjUmwfJmc/LearnBIS?node-id=0-1&t=RVlzAWRYsdjJyhPl-1',
      color: 'from-pastel-lavender to-pastel-pink',
      delay: '400',
      type: 'UI/UX Design'
    },
    {
      title: 'NGEKos',
      description: 'NGEKos is an app that helps users easily find and book boarding rooms.',
      link: 'https://www.figma.com/design/5kjsKG2R0t2LWCB2zLv2n4/NGEKos?node-id=421-5002&t=RFJ2d6ROGxA94Mjk-1',
      documentationLink: undefined,
      designLink: undefined,
      color: 'from-pastel-cream to-pastel-lavender',
      delay: '0',
      type: 'UI/UX Design'
    },
    {
      title: 'RvWater',
      description: 'RvWater is an app that allows users to easily order and schedule gallon water deliveries.',
      link: 'https://www.figma.com/design/cI1BQgFG3LbrK5aJXU8kBx/RvWater?node-id=0-1&t=eRXA7X1Uhp9r28ky-1',
      documentationLink: undefined,
      designLink: undefined,
      color: 'from-pastel-blue to-pastel-pink',
      delay: '200',
      type: 'UI/UX Design'
    },
    {
      title: 'Power Strength Gym',
      description: 'Power Strength Gym is an app designed to support your fitness journey.',
      link: 'https://www.figma.com/design/j6OeArsZYRPfQ4ijxqGnWl/Power-Strength-Gym?node-id=0-1&t=0ozsTSgP4oDmQHIK-1',
      documentationLink: undefined,
      designLink: undefined,
      color: 'from-pastel-pink to-pastel-lavender',
      delay: '400',
      type: 'UI/UX Design'
    }
  ];

  const umlProjects = [
    {
      title: 'BidNow',
      description: 'BidNow is an app for buying and selling antiques through real-time auctions. Users can explore unique collectibles, place bids, list antiques, and track auction results easily and securely.',
      link: 'https://drive.google.com/file/d/1RvWBqzqQnvGbJDwcv8tFzQGVBbqva-mU/view?usp=sharing',
      color: 'from-pastel-cream to-pastel-blue',
      delay: '0',
      type: 'UML Diagram'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-pastel-cream/30 via-white to-pastel-blue/20 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-pastel-lavender/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-pastel-pink/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
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
              <Eye className="w-8 h-8 text-pastel-blue" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My Projects
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pastel-blue to-pastel-lavender mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            A collection of my projects showcasing my passion for creating intuitive 
            user experiences and comprehensive system documentation across various industries and applications.
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {/* UI/UX Projects Section */}
          <div>
            <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                UI/UX Projects
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                User interface and experience design projects focused on creating intuitive and engaging digital experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
              {uiuxProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  onMouseEnter={() => setHoveredProject(project.title)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <motion.div 
                    className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 h-full flex flex-col relative overflow-hidden"
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
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      animate={hoveredProject === project.title ? {
                        scale: [1, 1.2, 1],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Shimmer Effect */}
                    {hoveredProject === project.title && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      />
                    )}

                    <div className="p-8 relative z-10">
                      {/* Project Icon with Animation */}
                      <div className="flex items-center justify-between mb-6">
                        <motion.div 
                          className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} shadow-lg`}
                          animate={hoveredProject === project.title ? {
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.1, 1],
                          } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <Palette className="w-8 h-8 text-white" />
                        </motion.div>
                        <motion.div 
                          className="flex items-center space-x-2 text-sm text-gray-500 bg-pastel-cream/50 px-3 py-1 rounded-full backdrop-blur-sm"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Smartphone className="w-4 h-4" />
                          <span>{project.type}</span>
                        </motion.div>
                      </div>

                      {/* Floating Sparkles */}
                      {hoveredProject === project.title && (
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
                            <Sparkles className="w-4 h-4 text-pastel-pink" />
                          </motion.div>
                        </>
                      )}

                      {/* Project Content */}
                      <div className="flex-1 flex flex-col">
                        <motion.h4 
                          className="text-2xl font-bold text-gray-800 mb-4 transition-colors duration-300"
                          animate={hoveredProject === project.title ? {
                            color: "#A7C7E7"
                          } : {}}
                        >
                          {project.title}
                        </motion.h4>
                        
                        <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                          {project.description}
                        </p>

                        {/* View Design Link(s) with Enhanced Animation */}
                        {project.title === 'LearnBIS' ? (
                          <div className="flex flex-col sm:flex-row gap-3">
                            <motion.a
                              href={project.documentationLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${project.color} text-white font-semibold py-3 px-4 rounded-xl shadow-lg relative overflow-hidden`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={`View ${project.title} documentation`}
                            >
                              <ExternalLink className="w-5 h-5" />
                              <span>Documentation</span>
                            </motion.a>
                            <motion.a
                              href={project.designLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-pastel-blue to-pastel-pink text-white font-semibold py-3 px-4 rounded-xl shadow-lg relative overflow-hidden`}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={`View ${project.title} design`}
                            >
                              <ExternalLink className="w-5 h-5" />
                              <span>Design</span>
                            </motion.a>
                          </div>
                        ) : (
                          <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${project.color} text-white font-semibold py-3 px-6 rounded-xl shadow-lg relative overflow-hidden`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`View ${project.title} design`}
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>View Design</span>
                          </motion.a>
                        )}
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

          {/* UML Projects Section */}
          <div>
            <div className={`text-center mb-12 ${isVisible ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                UML Projects
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                System analysis and modeling projects featuring comprehensive documentation, clear process workflows, and structured diagram development.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-4">
              {umlProjects.map((project, index) => (
                <div
                  key={project.title}
                  className={`group ${isVisible ? `animate-fade-in animate-delay-${project.delay}` : 'opacity-0'}`}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:scale-105 hover:-translate-y-2 h-full flex flex-col relative">
                    {/* Project Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${project.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <Palette className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 bg-pastel-lavender/50 px-3 py-1 rounded-full">
                        <Smartphone className="w-4 h-4" />
                        <span>{project.type}</span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="flex-1 flex flex-col">
                      <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-pastel-blue transition-colors duration-300">
                        {project.title}
                      </h4>
                      
                      <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>

                      {/* View Design Link */}
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center space-x-2 bg-gradient-to-r ${project.color} text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group-hover:shadow-xl`}
                        aria-label={`View ${project.title} documentation`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>View Documentation</span>
                      </a>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pastel-lavender/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;