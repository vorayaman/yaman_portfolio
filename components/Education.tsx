
import React from 'react';

const Education: React.FC = () => {
  const items = [
    {
      degree: "Flutter Development Course",
      school: "Red & White Multimedia Education",
      year: "Completed",
      icon: "🎓"
    },
    {
      degree: "12th Grade (Higher Secondary)",
      school: "PM Bhagat School",
      year: "Alumni",
      icon: "🏫"
    },
    {
      degree: "10th Grade (Secondary)",
      school: "Sumun High School",
      year: "Alumni",
      icon: "📚"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Education</h2>
        <p className="text-slate-400">Foundation and specialized training.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="glass p-8 rounded-3xl hover:bg-slate-900/50 transition-all border-slate-800/50 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-bold text-white mb-2">{item.degree}</h3>
            <p className="text-sm text-slate-400 mb-4">{item.school}</p>
            <span className="mt-auto text-[10px] font-mono text-cyan-500 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full">
              {item.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
