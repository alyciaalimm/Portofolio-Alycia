'use client';

import { useEffect, useState } from 'react';
import { User, Heart, Users, Lightbulb, Sparkles, Zap } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTrait, setHoveredTrait] = useState<number | null>(null);
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const traits = [
    {
      icon: <User className="w-8 h-8" />,
      title: 'Adaptability',
      description: 'Quickly adjusting to new environments and challenges with resilience and flexibility.',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'Thriving in team environments and building strong professional relationships.',
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Problem-Solving',
      description: 'Approaching complex challenges with analytical thinking and creative solutions.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Communication',
      description: 'Effectively conveying ideas and fostering understanding across diverse teams.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-r from-pastel-cream/50 to-pastel-pink/30 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-pastel-lavender/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-pastel-blue/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-pastel-blue to-pastel-lavender mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="group relative bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg overflow-hidden"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Decorative Corner Element */}
              <motion.div
                className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-pastel-blue/20 to-pastel-lavender/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-pastel-lavender/50" />
              </motion.div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4 relative z-10">
                Committed Information Systems Student
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 relative z-10">
                As an Information Systems student at Bina Nusantara University, I am driven by a strong interest in understanding how technology, data, and structured processes can support effective and reliable solutions. My academic journey is complemented by hands-on experience in organizational work, volunteer activities, and collaborative projects that strengthen my analytical thinking, communication skills, and adaptability.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                I am committed to continuous learning and enjoy working in environments that require critical analysis, clear documentation, and thoughtful problem-solving. With a balanced mix of technical understanding and strong interpersonal skills, I strive to contribute to well-organized, user-focused, and purpose-driven digital solutions.
              </p>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-pastel-blue/0 rounded-2xl"
                whileHover={{ borderColor: "rgba(167, 199, 231, 0.3)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {traits.map((trait, index) => (
                <motion.div
                  key={trait.title}
                  className="group relative bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  onHoverStart={() => setHoveredTrait(index)}
                  onHoverEnd={() => setHoveredTrait(null)}
                >
                  {/* Animated Background on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-pastel-blue/20 to-pastel-lavender/20 rounded-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredTrait === index ? 1 : 0,
                      scale: hoveredTrait === index ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon with Animation */}
                  <motion.div 
                    className="text-pastel-blue mb-4 relative z-10"
                    animate={{
                      rotate: hoveredTrait === index ? 360 : 0,
                      scale: hoveredTrait === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {trait.icon}
                  </motion.div>

                  {/* Floating Sparkles */}
                  {hoveredTrait === index && (
                    <>
                      <motion.div
                        className="absolute top-2 right-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                      >
                        <Zap className="w-4 h-4 text-pastel-pink" />
                      </motion.div>
                      <motion.div
                        className="absolute bottom-2 left-2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Sparkles className="w-4 h-4 text-pastel-lavender" />
                      </motion.div>
                    </>
                  )}

                  <h4 className="text-xl font-semibold text-gray-800 mb-3 relative z-10 group-hover:text-pastel-blue transition-colors">
                    {trait.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                    {trait.description}
                  </p>

                  {/* Bottom Border Effect */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pastel-blue to-pastel-lavender rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: hoveredTrait === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;