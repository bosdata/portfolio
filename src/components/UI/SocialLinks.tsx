import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '', iconSize = 20 }) => {
  const socialMediaLinks = [
    {
      name: 'WhatsApp',
      url: 'https://wa.me/254794066236',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
          <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/Bosdata.Bosdata',
      icon: <Facebook size={iconSize} />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/bosdata33',
      icon: <Instagram size={iconSize} />,
    },
    {
      name: 'X (Twitter)',
      url: 'https://twitter.com/obware56484',
      icon: <Twitter size={iconSize} />,
    },
  ];

  return (
    <div className={`flex space-x-4 ${className}`}>
      {socialMediaLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-cyan-500 transition-colors duration-300"
          aria-label={link.name}
          title={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;