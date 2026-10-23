import React from 'react';
import { motion } from 'motion/react';
import { Volume2, ChevronRight, RotateCcw, CheckCheck } from 'lucide-react';

const DashboardFlashcard = () => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] shadow-sm border border-slate-100 flex flex-col relative overflow-hidden group">
      <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-6 md:mb-8">Flashcard Practice</h3>
      
      <div 
        className="relative w-full h-[200px] md:h-[240px] cursor-pointer perspective-1000 mb-6"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <motion.div
          className="w-full h-full relative preserve-3d"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Front Side (The Challenge) */}
          <div className="absolute inset-0 backface-hidden bg-indigo-50/30 rounded-3xl border border-indigo-100/50 flex flex-col items-center justify-center p-4 md:p-6">
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">Implement</h2>
              <p className="text-xs text-slate-400 font-medium mb-4">/'ɪm.plə.mənt/</p>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm mb-6">
                <Volume2 size={14} />
              </div>
              <button 
                className="px-4 py-2 bg-indigo-600 text-white text-[10px] font-bold rounded-xl shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all"
              >
                Flip to reveal
              </button>
            </div>
            <div className="absolute top-3 right-3 px-2 py-1 bg-indigo-100 text-indigo-600 text-[8px] font-bold rounded-md uppercase tracking-wider">
              Front Face (The Challenge) - Active
            </div>
          </div>

          {/* Back Side (The Result) */}
          <div 
            className="absolute inset-0 backface-hidden bg-white rounded-3xl border border-emerald-100 flex flex-col p-4 md:p-6"
            style={{ transform: 'rotateY(180deg)' }}
          >
            <div className="flex-1 flex flex-col justify-center text-center">
              <h2 className="text-lg font-bold text-slate-800 mb-1">Implement</h2>
              <p className="text-[10px] font-bold text-emerald-600 mb-3 uppercase tracking-wider">Triển khai, thực hiện</p>
              
              <div className="bg-slate-50 p-3 rounded-xl mb-4">
                <p className="text-[10px] text-slate-500 leading-relaxed italic">
                  "The company needs to <span className="text-indigo-600 font-bold">implement</span> new security protocols..."
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(false);
                  }}
                  className="flex-1 py-2 bg-slate-100 hover:bg-slate-200 text-slate-600 text-[10px] font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <RotateCcw size={12} /> Review later
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsFlipped(false);
                  }}
                  className="flex-1 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-[10px] font-bold rounded-xl transition-colors shadow-lg shadow-emerald-200 flex items-center justify-center gap-1.5"
                >
                  <CheckCheck size={12} /> Got it!
                </button>
              </div>
            </div>
            <div className="absolute top-3 right-3 px-2 py-1 bg-emerald-100 text-emerald-600 text-[8px] font-bold rounded-md uppercase tracking-wider">
              Back Face (The Result) - Revealed
            </div>
          </div>
        </motion.div>
      </div>

      <button className="w-full py-3 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold rounded-2xl transition-colors flex items-center justify-center gap-2 group-hover:bg-indigo-50 group-hover:text-indigo-600">
        Open Study Mode <ChevronRight size={14} />
      </button>
    </div>
  );
};

export default DashboardFlashcard;
