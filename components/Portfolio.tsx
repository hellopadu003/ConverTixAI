import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { projects } from '../constants';
import { Project } from '../types';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">My Work</h2>
            <p className="mt-2 text-3xl font-bold text-white font-display">Recent Projects</p>
            <p className="mt-4 text-slate-400">A selection of websites built for clients across various industries.</p>
          </div>
          {/* Filter buttons (Visual only) */}
          <div className="mt-4 md:mt-0 flex gap-2">
            <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-full">All</button>
            <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-100 text-sm rounded-full border border-gray-200">E-com</button>
            <button className="px-4 py-2 bg-white text-gray-600 hover:bg-gray-100 text-sm rounded-full border border-gray-200">Landing</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer ${
                project.category === 'E-Commerce' ? 'glass-card shadow-lg hover:shadow-primary-500/20' : 'bg-white'
              }`}
              onClick={() => openModal(project)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={project.image} alt={project.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className={`px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform ${
                    project.category === 'E-Commerce' ? 'bg-white text-slate-900' : 'bg-white text-gray-900'
                  }`}>
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`text-lg font-bold font-display ${project.category === 'E-Commerce' ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <span className={`text-xs font-semibold px-2 py-1 rounded ${
                    project.category === 'E-Commerce' 
                      ? 'text-primary-300 bg-primary-900/50 border border-primary-700/50' 
                      : 'text-primary-600 bg-primary-50'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <p className={`text-sm line-clamp-2 ${project.category === 'E-Commerce' ? 'text-slate-400' : 'text-gray-500'}`}>
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#contact" className="text-primary-600 font-semibold hover:text-primary-700 flex items-center justify-center gap-2">
            Have a specific project in mind? Let's discuss <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 modal-overlay" onClick={closeModal}>
          <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10">
              <X className="w-5 h-5 text-gray-600" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img src={selectedProject.image} alt="Project Preview" className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs font-bold text-primary-600 uppercase tracking-wide mb-2">{selectedProject.category}</span>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedProject.title}</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">{selectedProject.desc}</p>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase">Tools Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a href="#contact" onClick={closeModal} className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-800">
                    Start a project like this <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;