'use client';

import { useEffect, useState, useRef } from 'react';
import { Users, Calendar, Briefcase, TrendingUp, Sparkles, Building2 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Organizations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredOrg, setHoveredOrg] = useState<string | null>(null);
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

    const element = document.getElementById('organizations');
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

  const organizations = [
    {
      organization: 'Youth of Mahabodhi',
      position: 'Chairman',
      period: 'Jul 2025 - Present',
      location: 'Semarang, Indonesia',
      responsibilities: [
        'Make key decisions and set strategic direction for the organization',
        'Plan and structure program workflows to ensure smooth execution',
        'Lead meetings and supervise program implementation to achieve objectives'
      ],
      color: 'from-pastel-blue to-pastel-lavender',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      organization: 'Keluarga Mahasiswa Buddhis Dhammavaddhana Binus University',
      position: 'Semarang Regional Treasurer',
      period: 'Jan 2025 - Present',
      location: 'Semarang, Indonesia',
      responsibilities: [
        'Manage and record all organizational financial transactions accurately and transparently',
        'Coordinate with other departments regarding funding requests and reimbursements',
        'Prepare budgets and financial reports to support organizational decision-making'
      ],
      color: 'from-pastel-pink to-pastel-blue',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      organization: 'PMB X WP',
      position: 'Treasurer',
      period: 'Jul 2024 - Sep 2024',
      location: 'Semarang, Indonesia',
      responsibilities: [
        'Manage and record all organizational financial transactions accurately and transparently',
        'Coordinate with other departments regarding funding requests and reimbursements',
        'Prepare budgets and financial reports to support organizational decision-making'
      ],
      color: 'from-pastel-lavender to-pastel-pink',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      organization: 'Youth of Mahabodhi',
      position: 'Treasurer',
      period: 'May 2024 - May 2025',
      location: 'Semarang, Indonesia',
      responsibilities: [
        'Oversee cash flow and ensure proper allocation of funds for events and operations',
        'Maintain up-to-date documentation of receipts, invoices, and reimbursements',
        'Present clear financial updates during meetings to keep members informed'
      ],
      color: 'from-pastel-cream to-pastel-lavender',
      icon: <Briefcase className="w-6 h-6" />
    }
  ];

  return (
    <section id="organizations" className="py-24 bg-gradient-to-r from-pastel-blue/10 to-pastel-lavender/20 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-1/3 left-10 w-80 h-80 bg-pastel-blue/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          y: [0, -40, 0],
        }}
        transition={{ duration: 13, repeat: Infinity }}
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
            <div className="p-4 bg-gradient-to-br from-pastel-blue/20 to-pastel-pink/20 rounded-2xl backdrop-blur-sm border border-white/40 shadow-xl">
              <Building2 className="w-8 h-8 text-pastel-blue" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Organizations
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pastel-blue to-pastel-lavender mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="relative">
          {/* Animated Timeline line */}
          <motion.div 
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pastel-blue via-pastel-lavender to-pastel-pink rounded-full"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ originY: 0 }}
          />

          <div className="space-y-12">
            {organizations.map((org, index) => (
              <motion.div
                key={`${org.organization}-${org.period}`}
                className={`flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                onMouseEnter={() => setHoveredOrg(`${org.organization}-${org.period}`)}
                onMouseLeave={() => setHoveredOrg(null)}
              >
                {/* Animated Timeline dot */}
                <motion.div 
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.2 }}
                >
                  <motion.div 
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${org.color} shadow-lg`}
                    animate={hoveredOrg === `${org.organization}-${org.period}` ? {
                      scale: [1, 1.5, 1],
                    } : {}}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                {/* Enhanced Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
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
                      className={`absolute inset-0 bg-gradient-to-br ${org.color} opacity-0`}
                      animate={hoveredOrg === `${org.organization}-${org.period}` ? {
                        opacity: 0.1,
                        scale: [1, 1.1, 1],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />

                    {/* Shimmer Effect */}
                    {hoveredOrg === `${org.organization}-${org.period}` && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '200%' }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      />
                    )}

                    {/* Floating Sparkles */}
                    {hoveredOrg === `${org.organization}-${org.period}` && (
                      <>
                        <motion.div
                          className="absolute top-4 right-4"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                        >
                          <Sparkles className="w-5 h-5 text-pastel-pink" />
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

                    <div className="flex items-center space-x-4 mb-6 relative z-10">
                      <motion.div 
                        className={`p-3 rounded-full bg-gradient-to-r ${org.color} shadow-lg text-white`}
                        animate={hoveredOrg === `${org.organization}-${org.period}` ? {
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1],
                        } : {}}
                        transition={{ duration: 0.5 }}
                      >
                        {org.icon}
                      </motion.div>
                      <div>
                        <motion.h3 
                          className="text-xl font-bold text-gray-800 transition-colors"
                          animate={hoveredOrg === `${org.organization}-${org.period}` ? { color: "#A7C7E7" } : {}}
                        >
                          {org.position}
                        </motion.h3>
                        <p className="text-pastel-blue font-medium">
                          {org.organization}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 relative z-10">
                      <motion.div 
                        className="flex items-center text-gray-500 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="text-sm">{org.period}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center text-gray-500 bg-white/50 px-3 py-1 rounded-full backdrop-blur-sm"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">{org.location}</span>
                      </motion.div>
                    </div>

                    <div className="space-y-3 relative z-10">
                      <h4 className="font-semibold text-gray-700">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {org.responsibilities.map((responsibility, idx) => (
                          <motion.li 
                            key={idx} 
                            className="text-gray-600 text-sm leading-relaxed flex items-start"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 1 + index * 0.2 + idx * 0.1 }}
                          >
                            <span className="w-2 h-2 bg-pastel-blue rounded-full mt-2 mr-3 flex-shrink-0" />
                            {responsibility}
                          </motion.li>
                        ))}
                      </ul>
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
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organizations;