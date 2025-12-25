
import React from 'react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../constants';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative bg-slate-900 w-full max-w-5xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-800 animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 flex flex-col">
        
        {/* Header Section */}
        <div className="relative h-48 sm:h-64 bg-gradient-to-br from-cyan-900/40 via-slate-900 to-slate-900 border-b border-slate-800 flex items-end p-6 sm:p-10">
          <div className="absolute top-6 right-6 z-20">
            <button 
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-slate-950/50 hover:bg-slate-800 text-white flex items-center justify-center transition-all border border-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center gap-6 z-10">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-slate-950 rounded-3xl flex items-center justify-center text-4xl sm:text-5xl shadow-2xl border border-white/5 float">
              {project.icon}
            </div>
            <div className="space-y-1">
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">{project.title}</h2>
              <p className="text-cyan-500 font-mono text-sm uppercase tracking-widest font-bold">Developed at {project.company}</p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="p-6 sm:p-10 space-y-12">
            
            {/* Project Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <section className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500/60">Overview</h3>
                  <p className="text-lg text-slate-300 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500/60">Development Workflow</h3>
                  <div className="bg-slate-950/50 p-6 rounded-3xl border border-slate-800/50 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-600/30" />
                    <p className="text-slate-400 text-sm leading-relaxed italic">
                      {project.workflow || "I followed a modular development approach using clean architecture principles. This involved rapid UI prototyping in Flutter, followed by state management implementation using BLoC/Provider and seamless integration with Firebase backend services."}
                    </p>
                  </div>
                </section>
              </div>

              <div className="space-y-8">
                <section className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500/60">Core Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-950 text-cyan-400 text-xs font-mono font-bold rounded-xl border border-slate-800">
                        {tag}
                      </span>
                    ))}
                  </div>
                </section>

                <section className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500/60">Key Performance Indicators</h3>
                  <div className="space-y-3">
                    {['60 FPS Smooth UI', 'Real-time Sync', 'Scalable Backend'].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-slate-500 font-bold uppercase tracking-wider">
                        <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Feature Deep Dive */}
            <section className="space-y-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500/60">Highlighted Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-950/30 border border-slate-800/50 flex items-start gap-4 hover:border-cyan-500/20 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-bold text-xs shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 sm:px-10 py-6 bg-slate-950/50 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <a 
              href={PERSONAL_INFO.github}
              target="_blank"
              className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors font-mono text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              Repository
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
            <div className="h-4 w-px bg-slate-800" />
            <span className="text-slate-600 font-mono text-[10px] uppercase tracking-widest">Enterprise Release</span>
          </div>
          
          <div className="flex gap-4">
            <a 
              href={`mailto:${PERSONAL_INFO.email}?subject=Project Consultation: ${project.title}`}
              className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-cyan-900/30 text-sm flex items-center gap-2"
            >
              Get In Touch
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
