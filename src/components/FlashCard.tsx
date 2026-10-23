import React from 'react';
import { motion } from 'motion/react';
import { Volume2 } from 'lucide-react';

const Flashcard = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div 
      className="relative w-full h-[450px] md:h-[600px] cursor-pointer perspective-1000 mb-12 max-w-[90vw] mx-auto"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 backface-hidden bg-white rounded-[40px] md:rounded-[60px] shadow-2xl shadow-indigo-900/5 border border-slate-100 flex flex-col items-center justify-center p-8 md:p-16">
          <div className="relative inline-block text-center">
            <h1 className="text-4xl md:text-7xl font-bold text-slate-800 tracking-tight break-words max-w-full px-4">Implement</h1>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                // Audio logic would go here
              }}
              className="md:absolute md:-right-20 md:top-1/2 md:-translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all shadow-sm mx-auto mt-6 md:mt-0"
            >
              <Volume2 size={24} />
            </button>
          </div>
          <p className="mt-8 md:mt-12 text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] opacity-50">Click to reveal meaning</p>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 backface-hidden bg-white rounded-[40px] md:rounded-[60px] shadow-2xl shadow-indigo-900/5 border border-slate-100 overflow-hidden flex flex-col"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div className="p-6 md:p-12 text-center border-b border-slate-50">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-1 md:mb-2">Implement</h2>
            <p className="text-lg md:text-xl text-slate-400 font-medium">/'ɪm.plə.mənt/</p>
          </div>
          
          <div className="p-6 md:p-12 bg-slate-50/30 flex-1 flex flex-col justify-center overflow-y-auto no-scrollbar">
            <div className="bg-indigo-50/50 border border-indigo-100/50 rounded-2xl md:rounded-3xl p-6 md:p-8 mb-6 md:mb-10">
              <p className="text-lg md:text-xl font-bold text-slate-800 text-center leading-relaxed">
                Triển khai, thực hiện (một hệ thống, kế hoạch)
              </p>
            </div>

            <div className="mb-6 md:mb-10">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3 md:mb-4">Context</p>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed italic">
                "The company needs to <span className="text-indigo-600 font-bold">implement</span> new security protocols to prevent data breaches after the recent audit."
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3 md:mb-4">Collocations</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['implement a policy', 'implement a strategy', 'effectively implement'].map(tag => (
                  <span key={tag} className="px-4 md:px-5 py-2 md:py-2.5 bg-white border border-slate-200 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold text-slate-600 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Flashcard;
