
import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceTimeline: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <p className="text-slate-400">A journey through some of the amazing companies I've worked with.</p>
      </div>

      <div className="relative space-y-8">
        {/* Vertical Line */}
        <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-800 md:left-1/2 md:-ml-px hidden md:block" />

        {EXPERIENCES.map((exp, idx) => (
          <div 
            key={idx}
            className={`relative flex flex-col md:flex-row items-center justify-between ${
              idx % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-4 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-950 md:left-1/2 md:-ml-2 z-10" />

            {/* Content Card */}
            <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="glass p-8 rounded-3xl hover:bg-slate-900/50 transition-all border-slate-800/50 group">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {exp.company}
                  </h3>
                  <span className="text-xs font-mono px-2 py-1 bg-slate-800 text-slate-400 rounded-lg">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-sm font-medium text-cyan-500 mb-4">{exp.role}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {exp.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {exp.projects.map((proj, pIdx) => (
                    <span key={pIdx} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-slate-800/50 text-slate-500 rounded border border-slate-700/50">
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Empty space for the other side on desktop */}
            <div className="hidden md:block w-[45%]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
