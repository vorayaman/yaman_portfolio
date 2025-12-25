
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href={PERSONAL_INFO.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 w-14 h-14 bg-green-500 hover:bg-green-400 text-white rounded-full shadow-xl shadow-green-900/30 flex items-center justify-center z-[90] transition-transform hover:scale-110 active:scale-95 group"
    >
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 bg-slate-900 text-[10px] text-green-400 px-3 py-1 rounded-full border border-green-500/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none uppercase font-bold tracking-widest">
        Chat on WhatsApp
      </div>
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884 0 2.225.569 3.808 1.694 5.75l-.993 3.624 3.788-.993zM16.57 14.83c-.27-.135-1.582-.78-1.829-.87-.248-.09-.427-.135-.607.135-.18.27-.697.87-.854 1.047-.158.177-.315.197-.585.062-.27-.135-1.138-.42-2.17-1.34-.802-.715-1.342-1.6-1.5-1.87-.158-.27-.017-.417.118-.552.121-.122.27-.315.405-.473.134-.158.18-.27.27-.45.09-.18.045-.337-.022-.472-.067-.135-.607-1.463-.832-2.003-.219-.526-.441-.454-.607-.462l-.517-.01c-.18 0-.473.067-.72.337-.247.27-.945.923-.945 2.25s.967 2.61 1.102 2.79c.135.18 1.902 2.904 4.608 4.069.644.277 1.147.442 1.538.566.647.206 1.235.176 1.7.107.52-.078 1.583-.647 1.808-1.27.225-.623.225-1.159.157-1.27-.067-.11-.247-.197-.517-.332z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
