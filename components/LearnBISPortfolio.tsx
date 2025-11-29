'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, Users, Target, Lightbulb, Palette, Smartphone, BookOpen, Heart, Star, CircleCheck as CheckCircle } from 'lucide-react';

const LearnBISPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('learnbis-portfolio');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="learnbis-portfolio" className="py-20 bg-gradient-to-br from-pastel-cream/30 via-white to-pastel-blue/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            LearnBIS Portfolio
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pastel-blue to-pastel-lavender mx-auto rounded-full mb-8" />
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            A comprehensive mobile application designed to make learning Indonesian Sign Language (BISINDO) 
            accessible, engaging, and effective for users of all skill levels.
          </p>
        </div>

        {/* Section 1: Project Overview & Research */}
        <div className="mb-32">
          <div className={`mb-16 ${isVisible ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
              Project Overview & Research
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pastel-pink to-pastel-blue mx-auto rounded-full mb-8" />
            <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
              Understanding the challenge and developing a solution for Indonesian Sign Language education
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Project Vision */}
            <div className={`${isVisible ? 'animate-slide-in-left animate-delay-400' : 'opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-pastel-blue to-pastel-lavender shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">Project Vision</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Problem Statement</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Indonesian Sign Language (BISINDO) learning resources are limited and often inaccessible 
                      to the general public. Traditional learning methods lack interactivity and fail to engage 
                      modern learners effectively.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Solution Approach</h4>
                    <p className="text-gray-600 leading-relaxed">
                      LearnBIS addresses this gap by providing an intuitive, mobile-first platform that makes 
                      BISINDO learning accessible, structured, and engaging through interactive lessons, 
                      visual demonstrations, and progress tracking.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Impact Goals</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-600">
                        <CheckCircle className="w-5 h-5 text-pastel-blue mt-0.5 mr-3 flex-shrink-0" />
                        Increase BISINDO accessibility for hearing individuals
                      </li>
                      <li className="flex items-start text-gray-600">
                        <CheckCircle className="w-5 h-5 text-pastel-blue mt-0.5 mr-3 flex-shrink-0" />
                        Bridge communication gaps in Indonesian society
                      </li>
                      <li className="flex items-start text-gray-600">
                        <CheckCircle className="w-5 h-5 text-pastel-blue mt-0.5 mr-3 flex-shrink-0" />
                        Promote inclusive communication practices
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Research & Analysis */}
            <div className={`${isVisible ? 'animate-slide-in-right animate-delay-600' : 'opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-pastel-pink to-pastel-lavender shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">Research & Analysis</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Target Audience</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-pastel-cream/30 rounded-lg p-4">
                        <p className="font-medium text-gray-700">Primary Users</p>
                        <p className="text-sm text-gray-600">Hearing individuals interested in learning BISINDO</p>
                      </div>
                      <div className="bg-pastel-blue/20 rounded-lg p-4">
                        <p className="font-medium text-gray-700">Secondary Users</p>
                        <p className="text-sm text-gray-600">Educators and family members of deaf individuals</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Insights</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-600">
                        <Star className="w-4 h-4 text-pastel-pink mt-1 mr-3 flex-shrink-0" />
                        Visual learning is most effective for sign language acquisition
                      </li>
                      <li className="flex items-start text-gray-600">
                        <Star className="w-4 h-4 text-pastel-pink mt-1 mr-3 flex-shrink-0" />
                        Progressive difficulty levels maintain user engagement
                      </li>
                      <li className="flex items-start text-gray-600">
                        <Star className="w-4 h-4 text-pastel-pink mt-1 mr-3 flex-shrink-0" />
                        Mobile accessibility is crucial for modern learners
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Learning Methodology</h4>
                    <p className="text-gray-600 leading-relaxed">
                      The app employs a structured learning approach combining visual demonstrations, 
                      interactive practice sessions, and spaced repetition to ensure effective knowledge 
                      retention and skill development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Overview */}
          <div className={`mt-16 ${isVisible ? 'animate-fade-in animate-delay-800' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-pastel-cream/50 to-pastel-blue/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Core Features</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-white/70 rounded-xl mb-4 mx-auto w-fit">
                    <BookOpen className="w-8 h-8 text-pastel-blue" />
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">Interactive Lessons</h4>
                  <p className="text-sm text-gray-600">Structured learning modules with visual demonstrations</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-white/70 rounded-xl mb-4 mx-auto w-fit">
                    <Target className="w-8 h-8 text-pastel-pink" />
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">Progress Tracking</h4>
                  <p className="text-sm text-gray-600">Monitor learning progress and achievements</p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-white/70 rounded-xl mb-4 mx-auto w-fit">
                    <Heart className="w-8 h-8 text-pastel-lavender" />
                  </div>
                  <h4 className="font-semibold text-gray-700 mb-2">User-Friendly Design</h4>
                  <p className="text-sm text-gray-600">Intuitive interface designed for all skill levels</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Design Process & Implementation */}
        <div>
          <div className={`mb-16 ${isVisible ? 'animate-fade-in animate-delay-1000' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
              Design Process & Implementation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pastel-lavender to-pastel-pink mx-auto rounded-full mb-8" />
            <p className="text-gray-600 text-center max-w-3xl mx-auto text-lg">
              From concept to creation: the design journey and technical implementation of LearnBIS
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Design Process */}
            <div className={`${isVisible ? 'animate-slide-in-left animate-delay-1200' : 'opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-pastel-lavender to-pastel-pink shadow-lg">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">Design Process</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Design Principles</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-pastel-lavender rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-700">Accessibility First</p>
                          <p className="text-sm text-gray-600">Ensuring the app is usable by people with varying abilities</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-pastel-pink rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-700">Visual Clarity</p>
                          <p className="text-sm text-gray-600">Clear, high-contrast design for optimal sign language visibility</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-pastel-blue rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-700">Intuitive Navigation</p>
                          <p className="text-sm text-gray-600">Simple, logical flow that doesn't distract from learning</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">User Experience Strategy</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The UX strategy focuses on creating a seamless learning journey that adapts to individual 
                      learning paces while maintaining engagement through interactive elements and clear progress indicators.
                    </p>
                    <div className="bg-pastel-cream/30 rounded-lg p-4">
                      <p className="text-sm text-gray-600 italic">
                        "Every interaction should feel natural and support the learning objective without creating barriers."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Implementation */}
            <div className={`${isVisible ? 'animate-slide-in-right animate-delay-1400' : 'opacity-0'}`}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-pastel-blue to-pastel-cream shadow-lg">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 ml-4">Implementation</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Technical Approach</h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      The application architecture prioritizes performance and scalability while maintaining 
                      a smooth user experience across different devices and network conditions.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-pastel-blue/20 rounded-lg p-3 text-center">
                        <p className="text-sm font-medium text-gray-700">Mobile-First</p>
                        <p className="text-xs text-gray-600">Responsive Design</p>
                      </div>
                      <div className="bg-pastel-pink/20 rounded-lg p-3 text-center">
                        <p className="text-sm font-medium text-gray-700">Offline Support</p>
                        <p className="text-xs text-gray-600">Learn Anywhere</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Innovations</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start text-gray-600">
                        <Lightbulb className="w-4 h-4 text-pastel-lavender mt-1 mr-3 flex-shrink-0" />
                        Interactive gesture recognition for practice sessions
                      </li>
                      <li className="flex items-start text-gray-600">
                        <Lightbulb className="w-4 h-4 text-pastel-lavender mt-1 mr-3 flex-shrink-0" />
                        Adaptive learning algorithms for personalized experiences
                      </li>
                      <li className="flex items-start text-gray-600">
                        <Lightbulb className="w-4 h-4 text-pastel-lavender mt-1 mr-3 flex-shrink-0" />
                        Comprehensive progress analytics and insights
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Future Enhancements</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Planned features include AI-powered feedback systems, community learning features, 
                      and integration with educational institutions to expand the app's reach and effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Links */}
          <div className={`mt-16 ${isVisible ? 'animate-fade-in animate-delay-1600' : 'opacity-0'}`}>
            <div className="bg-gradient-to-r from-pastel-lavender/30 to-pastel-pink/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Project Resources</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <a
                  href="https://www.figma.com/design/wH2K8dHHYb5q9bjUmwfJmc/LearnBIS?node-id=0-1&t=RVlzAWRYsdjJyhPl-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-pastel-blue to-pastel-lavender shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Palette className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 group-hover:text-pastel-blue transition-colors duration-300">
                        View Design
                      </h4>
                      <p className="text-gray-600 text-sm">Explore the complete UI/UX design in Figma</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-pastel-blue transition-colors duration-300" />
                  </div>
                </a>

                <a
                  href="https://drive.google.com/file/d/12OZcyxrPlE546NK3sWTsjYng0Sz4vXaO/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-pastel-pink to-pastel-lavender shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 group-hover:text-pastel-pink transition-colors duration-300">
                        View Documentation
                      </h4>
                      <p className="text-gray-600 text-sm">Read the complete project documentation</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-pastel-pink transition-colors duration-300" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 ${isVisible ? 'animate-fade-in animate-delay-1800' : 'opacity-0'}`}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Interested in Learning More About This Project?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              LearnBIS represents my commitment to creating inclusive, accessible technology solutions. 
              I'd love to discuss the design process, technical challenges, and the impact this project 
              aims to achieve in the Indonesian deaf community.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pastel-blue to-pastel-lavender text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <span>Let's Discuss This Project</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnBISPortfolio;