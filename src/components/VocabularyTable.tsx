import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, ChevronLeft, ChevronRight, MoreVertical, ExternalLink } from 'lucide-react';
import { vocabularyData } from '../data';

const VocabularyTable = () => {
  return (
    <div className="bg-white rounded-[40px] shadow-sm border border-slate-100 overflow-hidden">
      {/* Table Controls */}
      <div className="p-6 md:p-8 border-b border-slate-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search your vocabulary..." 
            className="w-full pl-12 pr-6 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors">
            <Filter size={16} />
            Filter
          </button>
          <select className="px-4 py-3 bg-slate-50 border border-slate-100 rounded-2xl text-xs font-bold text-slate-600 focus:outline-none hover:bg-slate-100 transition-colors appearance-none">
            <option>All Decks</option>
            <option>Business</option>
            <option>Academic</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Word</th>
              <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Definition</th>
              <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">Status</th>
              <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Deck</th>
              <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Last Studied</th>
              <th className="px-8 py-5 text-[10px] font-bold text-slate-400 uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {vocabularyData.map((item) => (
              <motion.tr 
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hover:bg-slate-50/50 transition-colors group"
              >
                <td className="px-8 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-slate-800">{item.word}</span>
                    <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">{item.type}</span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <p className="text-xs text-slate-500 max-w-xs line-clamp-1">{item.definition}</p>
                </td>
                <td className="px-8 py-5 text-center">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    item.status === 'Mastered' ? 'bg-emerald-50 text-emerald-600' :
                    item.status === 'Learning' ? 'bg-indigo-50 text-indigo-600' :
                    'bg-slate-100 text-slate-400'
                  }`}>
                    {item.status}
                  </span>
                </td>
                <td className="px-8 py-5">
                  <span className="text-xs font-bold text-slate-600">{item.deck}</span>
                </td>
                <td className="px-8 py-5">
                  <span className="text-xs text-slate-400">{item.lastStudied}</span>
                </td>
                <td className="px-8 py-5 text-right">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                      <ExternalLink size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="p-6 md:p-8 border-t border-slate-50 flex items-center justify-between">
        <p className="text-xs text-slate-400 font-medium">Showing 1 to 8 of 1,250 words</p>
        <div className="flex items-center gap-2">
          <button className="p-2 text-slate-300 cursor-not-allowed">
            <ChevronLeft size={20} />
          </button>
          {[1, 2, 3, '...', 12].map((page, idx) => (
            <button 
              key={idx}
              className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                page === 1 ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VocabularyTable;
