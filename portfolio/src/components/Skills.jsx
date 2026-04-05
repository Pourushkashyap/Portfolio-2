import React from 'react';
import { motion } from 'framer-motion';
import { Database, BrainCircuit, Globe, Server, Terminal, Laptop } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Problem Solving",
      icon: <Terminal className="text-primary" size={32} />,
      items: ["Data Structures", "Algorithms", "Optimization"],
      highlight: "750+ LeetCode Questions Solved"
    },
    {
      title: "Frontend Development",
      icon: <Globe className="text-accent" size={32} />,
      items: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "HTML/CSS"],
      highlight: "Built a Social Media Platform"
    },
    {
      title: "Backend Development",
      icon: <Server className="text-secondary" size={32} />,
      items: ["Node.js", "Express.js", "RESTful APIs", "Socket.io"],
      highlight: "Built FinGrow Platform"
    },
    {
      title: "Database Management",
      icon: <Database className="text-emerald-400" size={32} />,
      items: ["MongoDB", "Mongoose", "NoSQL Architecture"],
    },
    {
      title: "Machine Learning and Deep Learning",
      icon: <BrainCircuit className="text-purple-400" size={32} />,
      items: ["Python", "Predictive Modeling", "NLP", "Scikit-Learn"],
      highlight: "Crime Scene Detection Project"
    },
    {
      title: "Generative AI",
      icon: <Laptop className="text-pink-400" size={32} />,
      items: ["LLMs", "Prompt Engineering", "AI Integration"],
      highlight: "ATS Recommendation Project"
    }
  ];

  return (
    <section className="py-24 bg-surface/20 relative" id="skills">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Technical Arsenal
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"
          ></motion.div>
          <p className="text-gray-400 max-w-2xl">
            A comprehensive overview of my technical toolkit, from core algorithmic problem solving to full-stack web and AI application building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-surface/40 p-8 rounded-3xl border border-white/5 hover:border-primary/40 transition-all duration-300 group backdrop-blur-sm flex flex-col"
            >
              <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-white/10 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {category.items.map((item, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/5 text-gray-300 text-sm font-medium rounded-full border border-white/5 group-hover:border-white/10 transition-colors">
                    {item}
                  </span>
                ))}
              </div>
              {category.highlight && (
                <div className="mt-auto px-4 py-3 bg-primary/10 rounded-xl border border-primary/20 text-primary text-sm font-bold flex items-center gap-2">
                  <span className="text-lg">🚀</span> {category.highlight}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
