
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-4 text-center md:text-left">
        <h2 className="text-3xl font-bold">Technical Skills</h2>
        <p className="text-slate-400 max-w-2xl">
          I've developed a robust toolkit for mobile app development, specializing in the Flutter ecosystem 
          with strong backend integration capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div 
            key={idx}
            className="group glass p-8 rounded-3xl hover:bg-slate-900/50 transition-all border-slate-800/50 hover:border-cyan-500/30"
          >
            <div className="w-12 h-12 rounded-2xl bg-slate-800/50 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
              {category.icon}
            </div>
            <h3 className="text-lg font-bold mb-4 text-slate-100">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="text-sm text-slate-400 flex items-center gap-2">
                  <div className="w-1 h-1 bg-cyan-500 rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
