import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Info, HelpCircle } from 'lucide-react';
import Flashcard from './FlashCard';
import RatingButton from './ui/RatingButton';

interface PracticeViewProps {
  onBack: () => void;
}

const PracticeView = ({ onBack }: PracticeViewProps) => {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-5xl mx-auto">
      {/* Practice Header */}
      <div className="flex items-center justify-between mb-8 md:mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-400 hover:text-slate-800 transition-colors group"
        >
          <div className="w-10 h-10 rounded-2xl bg-white border border-slate-100 flex items-center justify-center group-hover:bg-slate-50 transition-all">
            <ChevronLeft size={20} />
          </div>
          <span className="text-sm font-bold">Back to Dashboard</span>
        </button>
        
        <div className="flex flex-col items-center">
          <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em] mb-1">Business English Deck</p>
          <div className="flex items-center gap-3">
            <div className="w-24 md:w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div className="w-[40%] h-full bg-indigo-600 rounded-full" />
            </div>
            <span className="text-xs font-bold text-slate-400">12/30</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-600 shadow-sm">
            <Info size={20} />
          </button>
          <button className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-600 shadow-sm">
            <HelpCircle size={20} />
          </button>
        </div>
      </div>

      {/* Main Flashcard Area */}
      <Flashcard />

      {/* Rating Buttons */}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-3 md:gap-6 max-w-4xl mx-auto">
        <RatingButton label="Again" time="< 1 min" color="rose" />
        <RatingButton label="Hard" time="2 days" color="amber" />
        <RatingButton label="Good" time="4 days" color="indigo" />
        <RatingButton label="Easy" time="7 days" color="emerald" />
      </div>

      {/* Keyboard Shortcuts */}
      <div className="mt-12 md:mt-16 flex justify-center gap-8">
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
          <span className="px-2 py-1 bg-white border border-slate-100 rounded-md shadow-sm">Space</span>
          Flip Card
        </div>
        <div className="flex items-center gap-2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">
          <span className="px-2 py-1 bg-white border border-slate-100 rounded-md shadow-sm">1-4</span>
          Rate Card
        </div>
      </div>
    </motion.div>
  );
};

export default PracticeView;
