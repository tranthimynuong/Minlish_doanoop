import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Volume2, Info, ChevronRight } from 'lucide-react';

interface AddWordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddWordModal = ({ isOpen, onClose }: AddWordModalProps) => {
  const [tags, setTags] = React.useState(['Business', 'IELTS']);
  const [newTag, setNewTag] = React.useState('');

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
                  <h3 className="text-xl font-bold text-slate-800">Add New Word</h3>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Expand your vocabulary</p>
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
                {/* Word & Pronunciation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Word</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Implement" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Pronunciation (IPA)</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="e.g. /'ɪm.plə.mənt/" 
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      />
                      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-indigo-600">
                        <Volume2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Meaning */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Vietnamese Meaning</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Triển khai, thực hiện" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
                </div>

                {/* Example Sentence */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Example Sentence</label>
                  <textarea 
                    rows={3}
                    placeholder="e.g. The company needs to implement new security protocols..." 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all resize-none"
                  />
                </div>

                {/* Collocations & Tags */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Collocations</label>
                    <div className="space-y-2">
                      <input 
                        type="text" 
                        placeholder="Add collocation..." 
                        className="w-full px-6 py-3 bg-slate-50 border border-slate-100 rounded-xl text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                      />
                      <div className="flex flex-wrap gap-2">
                        {['implement a policy', 'effectively implement'].map(tag => (
                          <span key={tag} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500 flex items-center gap-1.5">
                            {tag} <X size={10} className="cursor-pointer hover:text-rose-500" />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

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
                </div>

                {/* Additional Notes */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1 flex items-center gap-1.5">
                    Additional Notes <Info size={12} className="text-slate-300" />
                  </label>
                  <input 
                    type="text" 
                    placeholder="Synonyms, antonyms, or memory hooks..." 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                  />
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
                Save Word <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddWordModal;
