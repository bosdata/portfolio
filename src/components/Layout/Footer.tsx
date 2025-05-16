import React from 'react';
import { BarChart2 } from 'lucide-react';
import SocialLinks from '../UI/SocialLinks';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BarChart2 size={24} className="text-cyan-500" />
              <span className="font-bold text-xl">BOSDATA ANALYTICS</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Transforming raw data into meaningful insights for better business decisions.
            </p>
            <SocialLinks className="mt-4" />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="/skills" className="text-gray-400 hover:text-white transition-colors">Skills</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: briansifunaobware2@gmail.com</li>
              <li>WhatsApp: 0794066236</li>
              <li>Location: Nairobi, Kenya</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} BOSDATA ANALYTICS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;