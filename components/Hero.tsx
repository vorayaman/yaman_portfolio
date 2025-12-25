
import React from 'react';
import { PERSONAL_INFO } from '../constants';

interface HeroProps {
  onProfileClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onProfileClick }) => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-start pt-10">
      <div className="space-y-6 max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-widest animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Senior Flutter Engineer
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.9]">
          Yaman Vora <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            Flutter Specialist.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-400 font-medium leading-relaxed max-w-2xl">
          Crafting high-performance enterprise solutions, fintech platforms, and scalable mobile architectures with 3+ years of expertise.
        </p>

        <div className="flex flex-wrap gap-4 pt-8">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all shadow-xl shadow-cyan-900/30 flex items-center gap-2 group"
          >
            Hire Me Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <button
            onClick={onProfileClick}
            className="px-8 py-4 glass hover:bg-slate-900 text-slate-300 font-bold rounded-2xl transition-all flex items-center gap-2"
          >
            Professional Profile
          </button>
        </div>
      </div>

      <div className="mt-32 w-full grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Experience', value: PERSONAL_INFO.experience },
          { label: 'Live Apps', value: '10+' },
          { label: 'Happy Clients', value: '25+' },
          { label: 'Codebase Quality', value: '100%' }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="text-3xl md:text-4xl font-extrabold text-white">{stat.value}</span>
            <span className="text-[10px] font-mono uppercase text-cyan-500 font-bold tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
