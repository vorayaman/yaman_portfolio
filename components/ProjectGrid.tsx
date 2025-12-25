
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface ProjectGridProps {
  onSelectProject: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onSelectProject }) => {
  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            A curated showcase of high-impact Flutter applications. I focus on building responsive, 
            high-performance solutions with clean, maintainable code.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div 
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="group relative glass rounded-[2.5rem] overflow-hidden flex flex-col hover:border-cyan-500/40 transition-all duration-500 cursor-pointer hover:-translate-y-2"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="p-8 sm:p-10 relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="text-5xl float group-hover:scale-110 transition-transform duration-500">{project.icon}</div>
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 duration-500">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-cyan-600/60">
                  {project.company}
                </p>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.slice(0, 3).map((tag, i) => (
                  <span key={i} className="text-[10px] font-mono font-bold px-3 py-1 bg-slate-900/80 text-cyan-500/80 rounded-lg border border-slate-800 group-hover:border-cyan-500/20 transition-colors">
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] font-mono font-bold px-3 py-1 bg-slate-900/80 text-slate-600 rounded-lg border border-slate-800">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>

            <div className="mt-auto p-6 sm:px-10 border-t border-slate-800/50 group-hover:bg-cyan-500/5 transition-colors">
              <button 
                className="w-full text-xs font-bold uppercase tracking-[0.2em] text-slate-500 group-hover:text-cyan-400 flex items-center justify-center gap-3 transition-colors"
              >
                View Details
                <div className="h-px w-8 bg-slate-800 group-hover:bg-cyan-500/40 transition-colors" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
