import React from 'react';
import { motion } from 'motion/react';
import { WordCardProps } from '../../types';

const WordCard = ({ word, type, definition, typeColor, typeBg }: WordCardProps) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 min-w-[220px] flex-1"
  >
    <span className={`text-[9px] font-bold px-2 py-1 rounded-md ${typeBg} ${typeColor} mb-3 inline-block`}>
      {type}
    </span>
    <h4 className="text-lg font-bold text-slate-800 mb-1">{word}</h4>
    <p className="text-xs text-slate-500 line-clamp-1">{definition}</p>
  </motion.div>
);

export default WordCard;
