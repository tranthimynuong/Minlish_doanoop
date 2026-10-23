import React from 'react';
import { motion } from 'motion/react';

const RatingButton = ({ label, time, color, onClick }: { label: string, time: string, color: string, onClick?: () => void }) => {
  const colorMap: Record<string, string> = {
    rose: 'bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white border-rose-100 shadow-rose-100',
    amber: 'bg-amber-50 text-amber-600 hover:bg-amber-600 hover:text-white border-amber-100 shadow-amber-100',
    indigo: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white border-indigo-100 shadow-indigo-100',
    emerald: 'bg-emerald-50 text-emerald-600 hover:bg-emerald-600 hover:text-white border-emerald-100 shadow-emerald-100',
  };

  return (
    <motion.button 
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`flex-1 flex flex-col items-center justify-center py-4 md:py-6 px-4 md:px-8 rounded-2xl md:rounded-3xl border-2 transition-all duration-300 shadow-lg ${colorMap[color]}`}
    >
      <span className="text-xs md:text-sm font-black uppercase tracking-widest mb-1">{label}</span>
      <span className="text-[10px] md:text-xs font-bold opacity-60">{time}</span>
    </motion.button>
  );
};

export default RatingButton;
