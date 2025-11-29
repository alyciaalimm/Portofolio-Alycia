'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Phone, MapPin, Send, Heart, Sparkles } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'anantaalycia@gmail.com',
      href: 'mailto:anantaalycia@gmail.com',
      color: 'from-pastel-blue to-pastel-lavender'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/alycia-alim-ananta',
      href: 'https://linkedin.com/in/alycia-alim-ananta',
      color: 'from-pastel-pink to-pastel-blue'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '085700489342',
      href: 'tel:085700489342',
      color: 'from-pastel-lavender to-pastel-pink'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Semarang, Indonesia',
      href: '#',
      color: 'from-pastel-cream to-pastel-lavender'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-pastel-cream via-pastel-blue/20 to-pastel-lavender/30 relative overflow-hidden" ref={ref}>
      {/* Animated Background */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-pastel-pink/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.5, 1],
          x: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-pastel-blue/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
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
            <div className="p-4 bg-gradient-to-br from-pastel-pink/20 to-pastel-blue/20 rounded-2xl backdrop-blur-sm border border-white/40 shadow-xl">
              <Send className="w-8 h-8 text-pastel-blue" />
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Connect
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pastel-blue to-pastel-lavender mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I'm always excited to discuss new opportunities, collaborate on projects, or simply chat about technology and design.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            onMouseEnter={() => setHoveredCard('contact-form')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <motion.div 
              className="glass rounded-2xl p-8 shadow-lg relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ y: -10 }}
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
                className="absolute inset-0 bg-gradient-to-br from-pastel-blue/10 to-pastel-lavender/10 opacity-0"
                animate={hoveredCard === 'contact-form' ? {
                  opacity: 1,
                  scale: [1, 1.1, 1],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Shimmer Effect */}
              {hoveredCard === 'contact-form' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />
              )}

              {/* Floating Sparkles */}
              {hoveredCard === 'contact-form' && (
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
                    <Sparkles className="w-4 h-4 text-pastel-pink" />
                  </motion.div>
                </>
              )}

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <motion.div
                    animate={hoveredCard === 'contact-form' ? { rotate: [0, -10, 10, 0] } : {}}
                    transition={{ duration: 0.6 }}
                  >
                    <Send className="w-6 h-6 mr-3 text-pastel-blue" />
                  </motion.div>
                  Get in Touch
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Whether you're looking for a passionate team member, want to discuss a project idea, 
                  or are interested in collaboration opportunities, I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target={contact.label === 'LinkedIn' ? '_blank' : undefined}
                      rel={contact.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                      className={`flex items-center space-x-4 p-4 bg-white/70 rounded-xl ${
                        contact.label === 'Location' ? 'cursor-default' : ''
                      }`}
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: "0 10px 30px rgba(167, 199, 231, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className={`p-3 rounded-full bg-gradient-to-r ${contact.color} shadow-lg text-white`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {contact.icon}
                      </motion.div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">{contact.label}</p>
                        <p className="text-gray-800 font-semibold">{contact.value}</p>
                      </div>
                    </motion.a>
                  ))}
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

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            onMouseEnter={() => setHoveredCard('why-work')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <motion.div 
              className="glass rounded-2xl p-8 shadow-lg relative overflow-hidden"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ y: -10 }}
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
                className="absolute inset-0 bg-gradient-to-br from-pastel-pink/10 to-pastel-cream/10 opacity-0"
                animate={hoveredCard === 'why-work' ? {
                  opacity: 1,
                  scale: [1, 1.1, 1],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Shimmer Effect */}
              {hoveredCard === 'why-work' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                />
              )}

              {/* Floating Sparkles */}
              {hoveredCard === 'why-work' && (
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

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <motion.div
                    animate={hoveredCard === 'why-work' ? { 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    } : {}}
                    transition={{ duration: 0.8 }}
                  >
                    <Heart className="w-6 h-6 mr-3 text-pastel-pink" />
                  </motion.div>
                  Why Work With Me?
                </h3>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Send className="w-5 h-5 text-pastel-blue" />,
                      bg: "bg-pastel-blue/20",
                      title: "User-Centered Design",
                      description: "I focus on creating intuitive experiences that truly serve user needs and business goals."
                    },
                    {
                      icon: <Heart className="w-5 h-5 text-pastel-pink" />,
                      bg: "bg-pastel-pink/20",
                      title: "Collaborative Approach",
                      description: "I believe great solutions come from teamwork, open communication, and diverse perspectives."
                    },
                    {
                      icon: <Mail className="w-5 h-5 text-pastel-lavender" />,
                      bg: "bg-pastel-lavender/20",
                      title: "Continuous Learning",
                      description: "I stay updated with the latest design trends and technologies to deliver modern solutions."
                    }
                  ].map((item, idx) => (
                    <motion.div 
                      key={item.title}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={hoveredCard === 'why-work' ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div 
                        className={`p-2 ${item.bg} rounded-full flex-shrink-0`}
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.6 }}
                      >
                        {item.icon}
                      </motion.div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div 
                  className="mt-8 p-4 bg-gradient-to-r from-pastel-cream/50 to-pastel-blue/20 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <p className="text-center text-gray-700 font-medium">
                    "Ready to bring your ideas to life with thoughtful design and systematic analysis."
                  </p>
                </motion.div>
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
        </div>

        {/* Footer */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div 
            className="glass rounded-2xl p-6 shadow-lg inline-block"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(167, 199, 231, 0.3)"
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.p 
              className="text-gray-600 font-semibold"
              animate={{
                backgroundImage: [
                  "linear-gradient(90deg, #A7C7E7 0%, #C9ADE0 50%, #FFB6C1 100%)",
                  "linear-gradient(90deg, #FFB6C1 0%, #A7C7E7 50%, #C9ADE0 100%)",
                  "linear-gradient(90deg, #C9ADE0 0%, #FFB6C1 50%, #A7C7E7 100%)",
                ],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text" as any,
                color: "transparent",
                display: "inline-block"
              }}
            >
              Alycia Alim Ananta
            </motion.p>
            <p className="text-sm text-gray-500 mt-2">
              © 2025 All rights reserved
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;