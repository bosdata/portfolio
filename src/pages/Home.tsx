import React from 'react';
import { ArrowRight, BarChart, Database, LineChart, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Button from '../components/UI/Button';
import SectionTitle from '../components/UI/SectionTitle';
import Card from '../components/UI/Card';

const Home: React.FC = () => {
  const services = [
    {
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable visualizations that tell a story and drive decisions.',
      icon: <BarChart className="text-cyan-600" size={24} />,
    },
    {
      title: 'Statistical Analysis',
      description: 'Uncover patterns and insights in your data through advanced statistical methods and techniques.',
      icon: <TrendingUp className="text-cyan-600" size={24} />,
    },
    {
      title: 'Data Mining',
      description: 'Extract valuable information from large datasets to identify trends and create strategic advantage.',
      icon: <Database className="text-cyan-600" size={24} />,
    },
    {
      title: 'Predictive Modeling',
      description: 'Build models that forecast future trends and behaviors to optimize business strategies.',
      icon: <LineChart className="text-cyan-600" size={24} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-cyan-800 text-white min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                Transforming Data Into
                <br />
                <TypeAnimation
                  sequence={[
                    'Strategic Insights',
                    1500,
                    'Business Value',
                    1500,
                    'Informed Decisions',
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-cyan-400"
                  repeat={Infinity}
                />
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Expert data analysis services to help your business make better decisions and drive growth.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  href="/contact"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:bg-opacity-10"
                  href="/projects"
                  onClick={() => window.location.href = '/projects'}
                >
                  View Projects
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Animated Arrow */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowRight className="transform rotate-90 text-white opacity-70" size={32} />
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Our Services"
            subtitle="Comprehensive data analytics solutions to help your business grow and make data-driven decisions."
            centered
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="p-6 h-full">
                  <div className="bg-cyan-100 inline-flex p-3 rounded-lg mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-cyan-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold">Ready to transform your data?</h2>
              <p className="mt-2 text-cyan-100">Let's collaborate and unlock valuable insights from your data.</p>
            </div>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-cyan-700 hover:bg-gray-100"
              href="/contact"
              onClick={() => window.location.href = '/contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;