import React from 'react';
import { motion } from 'framer-motion';
import { Activity, MessageSquare, Briefcase, Dumbbell } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Fingrow",
      description: "A secure and scalable peer-to-peer connection system designed specifically to facilitate user loans. Users can connect, negotiate, and manage loans effectively.",
      tech: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      icon: <Activity className="text-primary" size={28} />,
      github: "https://github.com/Pourushkashyap/FinGrow",
      gradient: "from-blue-500/10 to-purple-500/10"
    },
    {
      title: "Real-Time Chat Application",
      description: "A fast, responsive, and real-time messaging platform enabling users to communicate instantly through web sockets.",
      tech: ["MERN Stack", "Socket.io", "React Context API", "JWT"],
      icon: <MessageSquare className="text-accent" size={28} />,
      github: "https://github.com/Pourushkashyap/Real-Time-Chat-Application",
      gradient: "from-cyan-500/10 to-blue-500/10"
    },
    {
      title: "ATS Score Checker",
      description: "An intelligent Machine Learning model that evaluates resumes against job descriptions, calculating an ATS compatibility score to help job seekers.",
      tech: ["Python", "Machine Learning", "NLP", "Transformer"],
      icon: <Briefcase className="text-emerald-400" size={28} />,
      github: "https://github.com/Pourushkashyap/Resume-AI",
      gradient: "from-emerald-500/10 to-teal-500/10"
    },
    {
      title: "AI Gym Recommendation System",
      description: "A Machine Learning driven application that curates personalized gym routines and plans based on user metrics and fitness goals.",
      tech: ["Python", "Scikit-Learn", "Pandas", "Express", "MongoDB"],
      icon: <Dumbbell className="text-orange-400" size={28} />,
      github: "https://github.com/Pourushkashyap/FitGenius-AI",
      gradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <section className="py-24 relative" id="projects">
      <div className="container mx-auto px-6">
        <div className="flex flex-col mb-16 items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-primary to-accent rounded-full"
          ></motion.div>
          <p className="mt-6 text-gray-400 max-w-2xl leading-relaxed">
            A selection of my recent works ranging from full-stack web applications to machine learning models, demonstrating my diverse technical capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${project.gradient} bg-surface/30 backdrop-blur-sm relative overflow-hidden group hover:border-primary/50 transition-colors duration-500 flex flex-col h-full`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-bl-full -z-10 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-surface/80 rounded-2xl border border-white/5 shadow-xl group-hover:-translate-y-1 transition-transform">
                  {project.icon}
                </div>
                <div className="flex gap-3">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors bg-surface/80 p-2.5 rounded-full hover:bg-primary border border-white/5 shadow-lg group-hover:-translate-y-1">
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-sm flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-surface/80 text-primary text-xs font-semibold rounded-full border border-primary/20 hover:bg-primary/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
