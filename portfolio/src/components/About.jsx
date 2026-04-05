import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  const education = [
    {
      title: "B.Tech Computer Science & Engineering",
      institution: "CT University",
      period: "Present",
      icon: <GraduationCap size={24} className="text-primary" />,
      description: "Pursuing bachelor's degree with a focus on core computer science subjects, software engineering, and modern technologies."
    },
    {
      title: "Higher Secondary (12th Standard)",
      institution: "State Board",
      period: "Completed",
      score: "92.4%",
      icon: <Award size={24} className="text-accent" />,
      description: "Excelled in science and mathematics, building a strong analytical foundation."
    },
    {
      title: "Secondary (10th Standard)",
      institution: "State Board",
      period: "Completed",
      score: "98.0%",
      icon: <BookOpen size={24} className="text-secondary" />,
      description: "Outstanding academic performance reflecting dedication and consistent effort."
    }
  ];

  return (
    <section className="py-24 relative" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            About & Education
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface/50 border border-white/5 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Who am I?</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              I am currently pursuing my B.Tech in Computer Science and Engineering at CT University. I have a profound interest in problem-solving, which has driven me to solve over <strong className="text-primary font-bold">750 questions on LeetCode</strong>, honing my Data Structures and Algorithms skills.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Beyond competitive programming, I am a passionate developer. I specialize in the MERN stack for robust web development, and I am deeply involved in exploring Machine Learning and Generative AI to build smart, data-driven applications.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 bg-surface/30 p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-100">{item.title}</h4>
                  <div className="flex items-center gap-3 mt-1 mb-2 text-sm">
                    <span className="text-primary font-medium">{item.institution}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-gray-400 pl-1">{item.period}</span>
                  </div>
                  {item.score && (
                    <div className="inline-block px-3 py-1 rounded-md bg-white/5 text-accent text-xs font-bold mb-3 border border-accent/20">
                      Score: {item.score}
                    </div>
                  )}
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
