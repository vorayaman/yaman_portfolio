
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="mt-40 border-t border-slate-900 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 text-center space-y-12">
        <div className="space-y-6">
          <h3 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Ready to scale your next project?
          </h3>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I'm currently available for full-time roles and high-impact freelance opportunities. 
            Let's turn your idea into a production-ready mobile application.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <a 
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-2xl md:text-4xl font-black text-white hover:text-cyan-400 transition-colors underline decoration-cyan-500/30 underline-offset-8"
          >
            {PERSONAL_INFO.email}
          </a>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 group font-mono text-xs uppercase tracking-widest">
              LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 group font-mono text-xs uppercase tracking-widest">
              GitHub
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
            <a href={PERSONAL_INFO.whatsapp} target="_blank" className="text-slate-500 hover:text-white transition-colors flex items-center gap-2 group font-mono text-xs uppercase tracking-widest">
              WhatsApp
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 20" fill="currentColor">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-20 flex flex-col md:flex-row justify-center items-center gap-4 text-[10px] font-mono text-slate-600 uppercase tracking-[0.3em] font-bold">
          <div className="flex gap-4">
            <span className="text-cyan-900">Flutter • Dart • Firebase • Node</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
