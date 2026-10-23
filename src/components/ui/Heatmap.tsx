import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Heatmap = () => {
  const [hoveredDay, setHoveredDay] = React.useState<{ day: number, count: number, x: number, y: number } | null>(null);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return (
    <div className="bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] shadow-sm border border-slate-100 mb-12">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-xl font-bold text-slate-800">Learning Consistency</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Less</span>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className={`w-3 h-3 rounded-[3px] ${
                  i === 0 ? 'bg-slate-50' : 
                  i === 1 ? 'bg-indigo-100' : 
                  i === 2 ? 'bg-indigo-300' : 
                  i === 3 ? 'bg-indigo-500' : 'bg-indigo-700'
                }`} />
              ))}
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase">More</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-1 mb-2 ml-8">
          {months.map(m => (
            <span key={m} className="text-[10px] font-bold text-slate-300 uppercase flex-1 min-w-[40px] text-center">{m}</span>
          ))}
        </div>
        <div className="flex gap-1">
          <div className="flex flex-col gap-1 pr-2 pt-1">
            {['Mon', 'Wed', 'Fri'].map(d => (
              <span key={d} className="text-[8px] font-bold text-slate-300 uppercase h-3 flex items-center">{d}</span>
            ))}
          </div>
          <div className="grid grid-flow-col grid-rows-7 gap-1 flex-1">
            {[...Array(365)].map((_, i) => {
              const count = Math.floor(Math.random() * 5);
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.001 }}
                  onMouseEnter={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setHoveredDay({ day: i, count: count * 10, x: rect.left, y: rect.top });
                  }}
                  onMouseLeave={() => setHoveredDay(null)}
                  className={`w-3 h-3 md:w-3.5 md:h-3.5 rounded-[3px] md:rounded-[4px] transition-all cursor-pointer hover:ring-2 hover:ring-indigo-400 hover:ring-offset-1 ${
                    count === 0 ? 'bg-slate-50' : 
                    count === 1 ? 'bg-indigo-100' : 
                    count === 2 ? 'bg-indigo-300' : 
                    count === 3 ? 'bg-indigo-500' : 'bg-indigo-700'
                  }`}
                />
              );
            })}
          </div>
        </div>

        <AnimatePresence>
          {hoveredDay && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              style={{ left: hoveredDay.x - 40, top: hoveredDay.y - 50 }}
              className="fixed z-50 px-3 py-2 bg-slate-900 text-white text-[10px] font-bold rounded-xl shadow-xl pointer-events-none"
            >
              {hoveredDay.count} words learned
              <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Heatmap;
