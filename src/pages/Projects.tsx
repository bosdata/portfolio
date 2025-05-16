import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/UI/SectionTitle';
import ProjectCard from '../components/UI/ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <div className="pt-16">
      {/* Projects Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Our Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Explore our portfolio of data analytics solutions that have driven real business results
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Projects Filter */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center flex-wrap gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-cyan-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Featured Projects"
            subtitle="Browse our selection of data analysis and visualization projects"
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to work with us?</h2>
            <p className="text-gray-600 mb-8">
              Let's collaborate on your next data project and transform your business data into actionable insights.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-cyan-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;