import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { experience } from '../data/portfolioData';
import { skills, personalInfo, education, certifications } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in software development, building enterprise applications and contributing to impactful projects.
          </p>
        </div>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline connector */}
              {index !== experience.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 bottom-0 w-0.5 bg-gray-200"></div>
              )}
              
              <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      {/* <Briefcase className="text-blue-600" size={28} /> */}
                      <img src="/src/assets/audree_logo.png" alt={`${exp.company} logo`} className="w-12 h-12" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <p className="text-2xl font-bold text-gray-900">{exp.role}</p>
                      <span className="text-gray-400 text-2xl leading-none">•</span>
                      <span className="text-blue-600 font-semibold text-lg">{exp.company}</span>
                    </div>
                      <div className="text-sm text-gray-500 lg:text-right space-y-1">
                        <div className="flex items-center lg:justify-end">
                          <Calendar size={16} className="mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center lg:justify-end">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-800 text-sm mb-3">Key Achievements:</h4>
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-600 text-sm leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;