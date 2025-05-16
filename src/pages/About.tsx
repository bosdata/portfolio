import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/UI/SectionTitle';

const About: React.FC = () => {
  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '30+', label: 'Happy Clients' },
    { value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="pt-16">
      {/* About Hero */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionTitle
              title="About BOSDATA ANALYTICS"
              centered
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-md p-8 text-center"
            >
              <p className="text-xl text-gray-600 leading-relaxed">
                BOSDATA ANALYTICS is a premier data analysis consultancy dedicated to transforming complex data into actionable insights. We help businesses of all sizes make informed decisions and drive growth through data-driven strategies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to empower organizations with data-driven insights that lead to better decision-making and improved business outcomes. We strive to make complex data accessible and actionable for businesses of all sizes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We envision a world where every business decision is informed by data and analytics. We aim to be the leading provider of data analytics solutions, known for our expertise, innovation, and commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="font-bold text-4xl md:text-5xl mb-2">{stat.value}</div>
                <div className="text-cyan-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Approach"
            subtitle="We follow a methodical approach to data analysis that ensures high-quality insights and actionable recommendations."
            centered
          />
          
          <div className="max-w-4xl mx-auto mt-12">
            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Data Collection & Preparation',
                  description: 'We collect, clean, and organize your data to ensure accuracy and reliability in our analysis.'
                },
                {
                  step: '02',
                  title: 'Exploratory Analysis',
                  description: 'We explore your data to identify patterns, outliers, and potential insights worth investigating further.'
                },
                {
                  step: '03',
                  title: 'Advanced Analytics',
                  description: 'We apply statistical methods and machine learning techniques to uncover hidden insights and predictive patterns.'
                },
                {
                  step: '04',
                  title: 'Visualization & Reporting',
                  description: 'We create clear, intuitive visualizations and reports that communicate our findings effectively.'
                },
                {
                  step: '05',
                  title: 'Strategic Recommendations',
                  description: 'We provide actionable recommendations based on our analysis to help you achieve your business goals.'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex"
                >
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;