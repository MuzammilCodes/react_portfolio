import React from 'react';
import { MapPin, Phone, Award, GraduationCap } from 'lucide-react';
import { skills, personalInfo, education, certifications } from '../data/portfolioData';
import NuGetDownloads from './NuGetDownloads';

const About = () => {
  return (
    <section id="about" className="pt-10 pb-4 bg-gray-50 rounded-2xl ms-5 me-5" >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm a software developer with 3+ years of experience and a problem-solver's mindset, driven by curiosity to turn ideas 
                into practical solutions. I work with .NET, Angular, Vue.js, and modern web technologies, focusing on automating 
                repetitive tasks, simplifying complex workflows, and building reusable tools.
              </p>
              <p>
                My experience ranges from developing GM dealership websites and reducing build times by 90%, to batch record 
                management systems handling 100k+ records and developer tools that reduce setup time by 99.7%. I contribute 
                to Agile environments with clean, maintainable code.
              </p>
              <p>
                I thrive on solving complex problems through creative solutions and continuously learning about software 
                architecture patterns, best practices, and emerging technologies in the .NET and web development ecosystem.
              </p>
            </div>
            
            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-3 text-blue-600 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Education */}
            <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex items-start mb-3">
                <GraduationCap className="text-blue-600 mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-900">{education.degree}</h3>
                  <p className="text-gray-600 text-sm">{education.institution}</p>
                  <p className="text-gray-500 text-sm mt-1">{education.period} • CGPA: {education.cgpa}</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-6 p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 mr-2" size={20} />
                <h3 className="font-bold text-gray-900">Certifications</h3>
              </div>
              <div className="space-y-3">
              {certifications.map((cert, index) => (
              <div key={index} className="text-sm">
                <div className="flex items-center gap-1 font-semibold text-gray-800">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 flex items-center gap-1 transition-colors"
                  >
                    {cert.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20px] h-[20px] text-blue-500" // slight increase from default 14px (3.5rem)
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7 17L17 7M7 7h10v10"
                    />
                  </svg>
        </a>
      </div>
      <div className="text-gray-600">{cert.issuer} • {cert.date}</div>
    </div>
  ))}
</div>
            </div>
            
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full text-sm border border-gray-200 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">3+</div>
                <div className="text-sm text-gray-700">Years Experience</div>
              </div>

              <div className="relative bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                <span className="absolute top-1 left-1 bg-green-200 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded uppercase tracking-wide">
                  Real-time data
                </span>

                <div className="text-3xl font-bold text-green-600 mb-1">
                  <NuGetDownloads />+
                </div>
                <div className="text-sm text-gray-700">NuGet Downloads</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;