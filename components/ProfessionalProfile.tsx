
import React from 'react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCES } from '../constants';

interface ProfessionalProfileProps {
  onBack: () => void;
}

const ProfessionalProfile: React.FC<ProfessionalProfileProps> = ({ onBack }) => {
  return (
    <div className="pt-20 pb-40 space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <button 
        onClick={onBack}
        className="text-cyan-400 flex items-center gap-2 group hover:underline font-mono text-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform group-hover:-translate-x-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back to Home
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column - Intro & Contact */}
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center text-5xl font-bold text-slate-900 shadow-xl shadow-cyan-900/20">
              YV
            </div>
            <div>
              <h1 className="text-4xl font-black text-white">{PERSONAL_INFO.name}</h1>
              <p className="text-cyan-500 font-mono text-sm uppercase tracking-widest mt-2">{PERSONAL_INFO.title}</p>
            </div>
          </div>

          <div className="space-y-8 glass p-8 rounded-3xl border-slate-800">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Contact Details</h3>
            <ul className="space-y-6">
              <li className="space-y-1">
                <span className="text-[10px] uppercase font-mono text-slate-600">Email Address</span>
                <p className="text-slate-200 font-medium break-all">{PERSONAL_INFO.email}</p>
              </li>
              <li className="space-y-1">
                <span className="text-[10px] uppercase font-mono text-slate-600">Phone Number</span>
                <p className="text-slate-200 font-medium">{PERSONAL_INFO.phone}</p>
              </li>
              <li className="space-y-1">
                <span className="text-[10px] uppercase font-mono text-slate-600">Social Links</span>
                <div className="flex flex-col gap-3 mt-2">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2">
                    LinkedIn Profile
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2">
                    GitHub Repository
                  </a>
                  <a href={PERSONAL_INFO.whatsapp} target="_blank" className="text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2">
                    WhatsApp Chat
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Columns - About & Skills */}
        <div className="lg:col-span-2 space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-4">
              About Me
              <span className="h-px flex-1 bg-slate-800" />
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed italic">
              "{PERSONAL_INFO.summary}"
            </p>
            <p className="text-slate-300 leading-relaxed">
              {PERSONAL_INFO.introduction} I have worked in 4 different IT companies, contributing to end-to-end app development, from UI/UX implementation to backend integration and production deployment. My career objective is to work as a Senior Flutter Developer where I can build scalable, secure, and high-quality applications while continuously learning and contributing to impactful products.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-4">
              Technical Skills & Tools
              <span className="h-px flex-1 bg-slate-800" />
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-cyan-500 font-bold flex items-center gap-2">
                    {cat.icon} {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sidx) => (
                      <span key={sidx} className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-lg text-xs border border-slate-700/50">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-white flex items-center gap-4">
              Professional Milestones
              <span className="h-px flex-1 bg-slate-800" />
            </h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="glass p-6 rounded-2xl border-slate-800 group hover:border-cyan-500/30 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">{exp.company}</h4>
                    <span className="text-[10px] font-mono bg-slate-900 px-2 py-1 rounded text-slate-500">{exp.duration}</span>
                  </div>
                  <p className="text-cyan-600 font-mono text-xs mb-4 uppercase tracking-widest">{exp.role}</p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
