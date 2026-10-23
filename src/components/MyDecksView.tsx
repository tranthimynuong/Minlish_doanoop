import React from 'react';
import { motion } from 'motion/react';
import { Search, Plus, BookOpen, Target, GraduationCap, Trophy, Briefcase, Globe, Heart, Coffee, ChevronRight, MoreVertical, Play, Clock, BarChart2 } from 'lucide-react';

interface MyDecksViewProps {
  onCreateDeck: () => void;
}

const MyDecksView = ({ onCreateDeck }: MyDecksViewProps) => {
  const decks = [
    { id: 1, name: 'Business English', icon: Briefcase, color: 'bg-indigo-600', count: 450, progress: 65, lastStudied: '2 hours ago', tags: ['IELTS', 'Business'] },
    { id: 2, name: 'Academic Vocabulary', icon: GraduationCap, color: 'bg-emerald-600', count: 820, progress: 42, lastStudied: '5 hours ago', tags: ['Academic', 'IELTS'] },
    { id: 3, name: 'Daily Conversation', icon: Coffee, color: 'bg-amber-600', count: 320, progress: 88, lastStudied: '1 day ago', tags: ['Travel', 'Daily Life'] },
    { id: 4, name: 'Advanced Grammar', icon: Target, color: 'bg-rose-600', count: 150, progress: 25, lastStudied: '3 days ago', tags: ['Grammar'] },
  ];

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search your decks..." 
            className="w-full pl-12 pr-6 py-3 bg-white border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Featured Decks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {decks.slice(0, 2).map((deck) => (
          <motion.div 
            key={deck.id}
            whileHover={{ y: -8 }}
            className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 relative overflow-hidden group cursor-pointer"
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-8">
                <div className={`w-14 h-14 rounded-2xl ${deck.color} flex items-center justify-center text-white shadow-lg shadow-indigo-200`}>
                  <deck.icon size={28} />
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
                  <MoreVertical size={20} />
                </button>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{deck.name}</h3>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{deck.count} Words</span>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">{deck.progress}% Mastered</span>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase">
                  <span>Progress</span>
                  <span>{deck.progress}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${deck.progress}%` }}
                    className={`h-full ${deck.color} rounded-full`}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400">
                  <Clock size={12} />
                  Last studied {deck.lastStudied}
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-2xl text-xs font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20">
                  <Play size={14} fill="currentColor" />
                  Study Now
                </button>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className={`absolute -top-12 -right-12 w-40 h-40 ${deck.color} opacity-[0.03] rounded-full blur-3xl group-hover:opacity-[0.08] transition-opacity`} />
          </motion.div>
        ))}
      </div>

      {/* Other Decks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {decks.slice(2).map((deck) => (
          <motion.div 
            key={deck.id}
            whileHover={{ y: -4 }}
            className="bg-white p-6 rounded-[32px] shadow-sm border border-slate-100 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-6">
              <div className={`w-12 h-12 rounded-2xl ${deck.color} flex items-center justify-center text-white shadow-md`}>
                <deck.icon size={24} />
              </div>
              <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
                <MoreVertical size={18} />
              </button>
            </div>
            
            <h4 className="text-lg font-bold text-slate-800 mb-1">{deck.name}</h4>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-6">{deck.count} Words</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex -space-x-2">
                {deck.tags.map((tag, i) => (
                  <div key={i} className="px-2 py-1 bg-slate-50 border border-white rounded-lg text-[8px] font-bold text-slate-500 shadow-sm">
                    {tag}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600">
                <BarChart2 size={12} />
                {deck.progress}%
              </div>
            </div>

            <button className="w-full py-3 bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white text-slate-600 text-[10px] font-bold rounded-xl transition-all flex items-center justify-center gap-2">
              <Play size={12} fill="currentColor" />
              Start Session
            </button>
          </motion.div>
        ))}

        {/* Create New Deck Card */}
        <motion.div 
          whileHover={{ y: -4 }}
          onClick={onCreateDeck}
          className="bg-slate-50/50 border-2 border-dashed border-slate-200 rounded-[32px] p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-white hover:border-indigo-200 transition-all group"
        >
          <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-100 transition-all mb-4">
            <Plus size={24} />
          </div>
          <h4 className="text-lg font-bold text-slate-400 group-hover:text-slate-800 transition-colors">Create New Deck</h4>
          <p className="text-xs text-slate-400 mt-1">Organize your own word lists</p>
        </motion.div>
      </div>
    </div>
  );
};

export default MyDecksView;
