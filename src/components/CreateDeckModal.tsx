import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, BookOpen, Target, GraduationCap, Trophy, Briefcase, Globe, Heart, Coffee, ChevronRight } from 'lucide-react';

interface CreateDeckModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateDeckModal = ({ isOpen, onClose }: CreateDeckModalProps) => {
  const [deckName, setDeckName] = React.useState('');
  const [selectedIcon, setSelectedIcon] = React.useState('BookOpen');
  const [tags, setTags] = React.useState<string[]>([]);
  const [newTag, setNewTag] = React.useState('');
  const [dailyGoal, setDailyGoal] = React.useState(20);

  const icons = [
    { name: 'BookOpen', icon: BookOpen },
    { name: 'Target', icon: Target },
    { name: 'GraduationCap', icon: GraduationCap },
    { name: 'Trophy', icon: Trophy },
    { name: 'Briefcase', icon: Briefcase },
    { name: 'Globe', icon: Globe },
    { name: 'Heart', icon: Heart },
    { name: 'Coffee', icon: Coffee },
  ];

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <Plus size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Create New Deck</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Organize your learning</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-50 rounded-xl text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-10 no-scrollbar">
              <div className="space-y-8">
                {/* Icon Picker */}
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Deck Icon</label>
                  <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
                    {icons.map((item) => {
                      const Icon = item.icon;
                      const isSelected = selectedIcon === item.name;
                      return (
                        <button 
                          key={item.name}
                          onClick={() => setSelectedIcon(item.name)}
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                            isSelected 
                              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-110' 
                              : 'bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600'
                          }`}
                        >
                          <Icon size={20} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Deck Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Deck Name</label>
                  <input 
                    type="text" 
                    value={deckName}
                    onChange={(e) => setDeckName(e.target.value)}
                    placeholder="e.g. Business English, Travel Essentials..." 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>

                {/* Tags */}
                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Tags / Categories</label>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input 
                        type="text" 
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && addTag()}
                        placeholder="Add tag..." 
                        className="flex-1 px-6 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      />
                      <button 
                        onClick={addTag}
                        className="p-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tags.map(tag => (
                        <span key={tag} className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-[10px] font-bold flex items-center gap-1.5">
                          {tag} <X size={10} className="cursor-pointer hover:text-rose-500" onClick={() => setTags(tags.filter(t => t !== tag))} />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Description (Optional)</label>
                  <textarea 
                    rows={3}
                    placeholder="What's the goal of this deck?" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                  />
                </div>

                {/* Daily Goal Slider */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Daily Learning Goal</label>
                    <span className="text-sm font-bold text-indigo-600">{dailyGoal} words/day</span>
                  </div>
                  <div className="px-2">
                    <input 
                      type="range" 
                      min="5" 
                      max="50" 
                      step="5"
                      value={dailyGoal}
                      onChange={(e) => setDailyGoal(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
                    />
                    <div className="flex justify-between text-[8px] font-bold text-slate-300 uppercase mt-3">
                      <span>5 Words</span>
                      <span>50 Words</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 py-6 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between sticky bottom-0 z-10">
              <button 
                onClick={onClose}
                className="px-6 py-3 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={onClose}
                className="flex items-center gap-2 px-8 py-3 bg-indigo-900 text-white rounded-2xl text-sm font-bold hover:bg-indigo-950 transition-all shadow-lg shadow-indigo-900/20"
              >
                Create Deck <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CreateDeckModal;
