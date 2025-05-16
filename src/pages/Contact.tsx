import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import SectionTitle from '../components/UI/SectionTitle';
import ContactForm from '../components/UI/ContactForm';
import SocialLinks from '../components/UI/SocialLinks';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} className="text-cyan-600" />,
      title: 'Email',
      details: 'briansifunaobware2@gmail.com',
      link: 'mailto:briansifunaobware2@gmail.com',
    },
    {
      icon: <Phone size={24} className="text-cyan-600" />,
      title: 'WhatsApp',
      details: '0794066236',
      link: 'https://wa.me/254794066236',
    },
    {
      icon: <MapPin size={24} className="text-cyan-600" />,
      title: 'LinkedIn',
      details: 'Nairobi, Kenya',
      link: "https://www.linkedin.com/in/brian-obware-68733b259/",
    },
    {
      icon: <MapPin size={24} className="text-cyan-600" />,
      title: 'Location',
      details: 'Nairobi, Kenya',
      link: null,
    },
  ];

  return (
    <div className="pt-16">
      {/* Contact Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300"
            >
              Have a project in mind? Let's discuss how we can help with your data analysis needs
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link} 
                    className="text-gray-600 hover:text-cyan-600 transition-colors"
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {item.details}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.details}</p>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you as soon as possible."
              />
              <ContactForm />
            </div>
            
            <div>
              <SectionTitle
                title="Connect With Us"
                subtitle="Follow us on social media for updates, insights, and data analytics tips."
              />
              
              <div className="bg-white rounded-lg shadow-md p-8 mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Social Media</h3>
                <p className="text-gray-600 mb-6">
                  Stay connected with us on social media for the latest updates, data analytics insights, and more.
                </p>
                <SocialLinks iconSize={28} className="justify-center space-x-8" />
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-8 mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Availability</h3>
                <p className="text-gray-600 mb-2">
                  We're available Monday through Friday, 9 AM to 6 PM.
                </p>
                <p className="text-gray-600">
                  For urgent inquiries, please contact us via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section (Placeholder) */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Location</h2>
            <p className="text-gray-600">
              Based in Nairobi, Kenya, serving clients globally through remote collaboration.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden h-80 flex items-center justify-center">
            <p className="text-gray-500 text-lg">Map placeholder - Nairobi, Kenya</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
