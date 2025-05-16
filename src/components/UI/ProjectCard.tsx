import React from 'react';
import { ExternalLink } from 'lucide-react';
import Card from './Card';
import { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="h-full flex flex-col">
      <div 
        className="h-48 bg-cover bg-center" 
        style={{ backgroundImage: `url(${project.image})` }}
      />
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-600 hover:text-cyan-700"
                aria-label="Visit project"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
          <p className="text-gray-600 mb-4">{project.description}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;