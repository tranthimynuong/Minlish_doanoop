import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';

interface FilterSortMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (count: number) => void;
}

const FilterSortMenu = ({ isOpen, onClose, onApply }: FilterSortMenuProps) => {
  const [sortBy, setSortBy] = React.useState('Last Studied');
  const [levels, setLevels] = React.useState<string[]>([]);
  const [status, setStatus] = React.useState<string[]>([]);
  const [categories, setCategories] = React.useState<string[]>([]);

  const toggleItem = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, item: string) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const handleReset = () => {
    setSortBy('Last Studied');
    setLevels([]);
    setStatus([]);
    setCategories([]);
  };

  const handleApply = () => {
    const count = levels.length + status.length + categories.length + (sortBy !== 'Last Studied' ? 1 : 0);
    onApply(count);
  };

  // Close on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('filter-menu');
      if (menu && !menu.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          id="filter-menu"
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full right-0 mt-3 w-[320px] bg-white/80 backdrop-blur-xl border border-white/40 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-[60] overflow-hidden"
        >
          <div className="p-6 space-y-6">
            {/* Sort By */}
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Sort By</h4>
              <div className="grid grid-cols-1 gap-1">
                {['Last Studied', 'Progress (High to Low)', 'Alphabetical (A-Z)', 'Most Words'].map((option) => (
                  <button 
                    key={option}
                    onClick={() => setSortBy(option)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      sortBy === option ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {option}
                    {sortBy === option && <Check size={14} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Level */}
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Level</h4>
              <div className="flex flex-wrap gap-2">
                {['Beginner', 'Intermediate', 'Advanced', 'Master'].map((level) => (
                  <button 
                    key={level}
                    onClick={() => toggleItem(levels, setLevels, level)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-bold transition-all border ${
                      levels.includes(level) 
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-600' 
                        : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Status */}
            <div>
              <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Status</h4>
              <div className="flex flex-wrap gap-2">
                {['Active', 'Completed', 'New'].map((s) => (
                  <button 
                    key={s}
                    onClick={() => toggleItem(status, setStatus, s)}
                    className={`px-4 py-2 rounded-xl text-[10px] font-bold transition-all border ${
                      status.includes(s) 
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-600' 
                        : 'bg-white border-slate-100 text-slate-500 hover:border-slate-200'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center gap-3">
            <button 
              onClick={handleReset}
              className="flex-1 py-3 text-[10px] font-bold text-slate-400 hover:text-slate-600 transition-colors"
            >
              Reset All
            </button>
            <button 
              onClick={handleApply}
              className="flex-[2] py-3 bg-indigo-900 text-white rounded-xl text-[10px] font-bold hover:bg-indigo-950 transition-all shadow-lg shadow-indigo-900/20"
            >
              Apply Filters
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FilterSortMenu;
