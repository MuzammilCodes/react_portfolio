import React from 'react';
import { MapPin, Phone, Award, GraduationCap } from 'lucide-react';
import { Mail, ArrowRight } from "lucide-react";
import { skills, personalInfo, education, certifications } from '../data/portfolioData';


const Contact = () => {
  return (
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm currently available for freelance work and full-time opportunities. 
            Let's discuss how we can bring your project to life.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:muzammil.webdev@gmail.com" className="text-gray-600 hover:text-blue-600">
                muzammil.webdev@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <a href="tel:+917569270679" className="text-gray-600 hover:text-blue-600">
                +91 75692 70679
              </a>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">Hyderabad, India</p>
            </div>
          </div>

          <a
            href="mailto:muzammil.webdev@gmail.com"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 text-lg font-medium"
          >
            Start a conversation
            <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </section>
    );
};

export default Contact;