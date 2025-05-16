import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/UI/SectionTitle';
import ProgressBar from '../components/UI/ProgressBar';
import Card from '../components/UI/Card';
import { Database, LineChart, PieChart, BarChart3, Brain, Code, Sigma, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const technicalSkills = [
    { name: 'Data Analysis', percentage: 95 },
    { name: 'Statistical Modeling', percentage: 90 },
    { name: 'Data Visualization', percentage: 92 },
    { name: 'Python', percentage: 88 },
    { name: 'R Programming', percentage: 85 },
    { name: 'SQL', percentage: 90 },
    { name: 'Excel & Power BI', percentage: 95 },
    { name: 'Machine Learning', percentage: 82 },
  ];

  const softSkills = [
    { name: 'Problem Solving', percentage: 95 },
    { name: 'Communication', percentage: 92 },
    { name: 'Project Management', percentage: 88 },
    { name: 'Critical Thinking', percentage: 94 },
  ];

  const tools = [
    { name: 'Python', icon: <Code size={32} className="text-cyan-600" /> },
    { name: 'R', icon: <Sigma size={32} className="text-cyan-600" /> },
    { name: 'SQL', icon: <Database size={32} className="text-cyan-600" /> },
    { name: 'Excel', icon: <BarChart3 size={32} className="text-cyan-600" /> },
    { name: 'Power BI', icon: <PieChart size={32} className="text-cyan-600" /> },
    { name: 'Tableau', icon: <LineChart size={32} className="text-cyan-600" /> },
    { name: 'Machine Learning', icon: <Brain size={32} className="text-cyan-600" /> },
    { name: 'Web Analytics', icon: <Globe size={32} className="text-cyan-600" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  return (
    <div className="pt-16">
      {/* Skills Introduction */}
      <section className="bg-gradient-to-r from-gray-900 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Professional Skills
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Expert-level data analysis skills to transform your business data into actionable insights
            </motion.p>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Technical Skills"
            subtitle="Core data analysis competencies that drive our analytical solutions"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <ProgressBar 
                  label={skill.name} 
                  percentage={skill.percentage} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Soft Skills"
            subtitle="Important interpersonal abilities that complement our technical expertise"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProgressBar 
                  label={skill.name} 
                  percentage={skill.percentage} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Tools & Technologies"
            subtitle="Advanced tools and technologies we leverage to deliver powerful insights"
            centered
          />
          
          <motion.div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {tools.map((tool, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{tool.name}</h3>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-20 bg-cyan-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Services Offered"
            subtitle="Comprehensive data analytics services based on our skill set"
            centered
            className="text-white"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Exploratory Data Analysis',
                description: 'Discover patterns, anomalies, and trends in your data with comprehensive exploratory analysis.',
              },
              {
                title: 'Statistical Modeling',
                description: 'Build robust statistical models to validate hypotheses and predict future outcomes.',
              },
              {
                title: 'Data Visualization',
                description: 'Transform complex data into clear, compelling visual narratives that drive decision-making.',
              },
              {
                title: 'Machine Learning Solutions',
                description: 'Implement machine learning models to automate predictions and discover hidden insights.',
              },
              {
                title: 'Business Intelligence',
                description: 'Create interactive dashboards and reports that provide real-time business insights.',
              },
              {
                title: 'Data Strategy Consulting',
                description: 'Develop comprehensive data strategies aligned with your business objectives.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-cyan-100">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;