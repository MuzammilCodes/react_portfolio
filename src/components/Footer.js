import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
      <footer className="py-1 px-1 border-t border-gray-200 bg-white mt-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2024 Mohammed Muzamiluddin. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-blue-600 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>

        );
};

export default Footer;