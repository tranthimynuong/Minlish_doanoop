import React from 'react';
import { motion } from 'motion/react';
import { StatCardProps } from '../../types';

const StatCard = ({ icon, label, value, iconBg, iconColor }: StatCardProps) => (
  <motion.div 
    whileHover={{ y: -4 }}
    className="bg-white p-4 md:p-5 rounded-2xl md:rounded-3xl shadow-sm border border-slate-100 flex items-center gap-3 md:gap-4 flex-1 min-w-[140px] md:min-w-[200px]"
  >
    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl ${iconBg} flex items-center justify-center ${iconColor}`}>
      {React.cloneElement(icon as React.ReactElement, { size: 20 })}
    </div>
    <div>
      <p className="text-[8px] md:text-[10px] font-bold text-slate-400 tracking-wider uppercase">{label}</p>
      <p className="text-lg md:text-2xl font-bold text-slate-800">{value}</p>
    </div>
  </motion.div>
);

export default StatCard;
