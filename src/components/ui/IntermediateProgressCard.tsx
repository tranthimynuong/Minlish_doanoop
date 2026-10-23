import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';

const IntermediateProgressCard = () => {
  const [isAnimating, setIsAnimating] = React.useState(true);
  
  return (
    <motion.div 
      whileHover={{ y: -4 }}
      className="bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] shadow-sm border border-slate-100 flex flex-col items-center justify-center flex-1 min-w-[200px] md:min-w-[240px] relative overflow-hidden group"
    >
      <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
        {/* Background Track */}
        <svg className="absolute inset-0 w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r="42%"
            stroke="#F1F5F9"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Progress Segment */}
          <motion.circle
            cx="50%"
            cy="50%"
            r="42%"
            stroke="#6366F1"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray="264" // 2 * pi * 42
            initial={{ strokeDashoffset: 264 }}
            animate={{ strokeDashoffset: 264 * (1 - 0.85) }}
            transition={{ duration: 2, ease: "easeInOut" }}
            strokeLinecap="round"
            className="drop-shadow-[0_0_8px_rgba(99,102,241,0.4)]"
          />
        </svg>
        
        {/* Particle Burst */}
        <AnimatePresence>
          {isAnimating && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0.5],
                    x: Math.cos((i * 30 - 90) * Math.PI / 180) * 90,
                    y: Math.sin((i * 30 - 90) * Math.PI / 180) * 90,
                  }}
                  transition={{ duration: 1.5, delay: 1.8 + (i * 0.05), ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2"
                >
                  <Star size={8} className="text-indigo-400 fill-indigo-400" />
                </motion.div>
              ))}
              {/* Glowing particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`p-${i}`}
                  initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0],
                    x: Math.cos((i * 45 - 90) * Math.PI / 180) * 70,
                    y: Math.sin((i * 45 - 90) * Math.PI / 180) * 70,
                  }}
                  transition={{ duration: 1.2, delay: 1.9 + (i * 0.1), ease: "easeOut" }}
                  className="absolute left-1/2 top-1/2 w-1.5 h-1.5 bg-indigo-300 rounded-full blur-[1px]"
                />
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center z-10">
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-3xl md:text-4xl font-black text-slate-800"
          >
            85%
          </motion.span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest"
          >
            Intermediate
          </motion.span>
        </div>
      </div>
      
      {/* Subtle depth of field effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-indigo-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default IntermediateProgressCard;
