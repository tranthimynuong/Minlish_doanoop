import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Plus, 
  ChevronRight, 
  CheckCheck
} from 'lucide-react';

// Components
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import VocabularyTable from './components/VocabularyTable';
import MyDecksView from './components/MyDecksView';
import PracticeView from './components/PracticeView';
import AnalyticsView from './components/AnalyticsView';
import NotificationSettings from './components/NotificationSettings';
import SettingsView from './components/SettingsView';
import ProfileSettings from './components/ProfileSettings';
import AddWordModal from './components/AddWordModal';
import CreateDeckModal from './components/CreateDeckModal';
import FilterSortMenu from './components/FilterSortMenu';

// Types & Data
import { TabType } from './types';
import { roadmapData, getWeekDates } from './data';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('Dashboard');
  const [vocabularySubTab, setVocabularySubTab] = useState<'Word List' | 'My Decks'>('Word List');
  const [isAddWordModalOpen, setIsAddWordModalOpen] = useState(false);
  const [isCreateDeckModalOpen, setIsCreateDeckModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [activeFiltersCount, setActiveFiltersCount] = useState(0);
  const [isProPlanCollapsed, setIsProPlanCollapsed] = useState(false);
  const [selectedDayIndex, setSelectedDayIndex] = useState(new Date().getDay() === 0 ? 6 : new Date().getDay() - 1);

  const weekDates = getWeekDates();

  return (
    <Layout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      isProPlanCollapsed={isProPlanCollapsed} 
      setIsProPlanCollapsed={setIsProPlanCollapsed}
    >
      <AddWordModal isOpen={isAddWordModalOpen} onClose={() => setIsAddWordModalOpen(false)} />
      <CreateDeckModal isOpen={isCreateDeckModalOpen} onClose={() => setIsCreateDeckModalOpen(false)} />

      {activeTab === 'Dashboard' && <Dashboard />}

      {activeTab === 'My Vocabulary' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="px-4 md:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">
                {vocabularySubTab === 'Word List' ? 'My Vocabulary' : 'My Decks'}
              </h1>
              <p className="text-sm md:text-base text-slate-500">
                {vocabularySubTab === 'Word List' 
                  ? 'Manage and review your personal linguistic archive.' 
                  : `You have 12 active decks in your library.`}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {vocabularySubTab === 'My Decks' && (
                <div className="relative">
                  <button 
                    onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                    className={`flex items-center gap-2 px-4 md:px-6 py-3 border rounded-2xl text-xs md:text-sm font-bold transition-all shadow-sm min-h-[44px] ${
                      activeFiltersCount > 0 
                        ? 'bg-indigo-50 border-indigo-200 text-indigo-600' 
                        : 'bg-slate-50 border-slate-100 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="21" y2="21"/><line x1="4" x2="20" y1="14" y2="14"/><line x1="4" x2="20" y1="7" y2="7"/><path d="M9 21V7"/><path d="M15 21V7"/></svg>
                    Filter {activeFiltersCount > 0 && <span className="ml-1 px-1.5 py-0.5 bg-indigo-600 text-white rounded-full text-[8px]"> {activeFiltersCount}</span>}
                  </button>
                  
                  <FilterSortMenu 
                    isOpen={isFilterMenuOpen} 
                    onClose={() => setIsFilterMenuOpen(false)} 
                    onApply={(count) => {
                      setActiveFiltersCount(count);
                      setIsFilterMenuOpen(false);
                    }}
                  />
                </div>
              )}
              <button className="flex items-center gap-2 px-4 md:px-6 py-3 bg-white border border-slate-200 rounded-2xl text-xs md:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm min-h-[44px]">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
                Import
              </button>
              <button 
                onClick={() => setIsAddWordModalOpen(true)}
                className="flex items-center gap-2 px-4 md:px-6 py-3 bg-indigo-900 text-white rounded-2xl text-xs md:text-sm font-bold hover:bg-indigo-950 transition-colors shadow-sm min-h-[44px]"
              >
                <Plus size={18} />
                Add New
              </button>
            </div>
          </div>

          <div className="flex items-center gap-8 mb-8 border-b border-slate-100">
            <button 
              onClick={() => setVocabularySubTab('Word List')}
              className={`pb-4 text-sm font-bold transition-all ${vocabularySubTab === 'Word List' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Word List
            </button>
            <button 
              onClick={() => setVocabularySubTab('My Decks')}
              className={`pb-4 text-sm font-bold transition-all ${vocabularySubTab === 'My Decks' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              My Decks
            </button>
          </div>

          <div className="mb-12">
            {vocabularySubTab === 'Word List' ? <VocabularyTable /> : <MyDecksView onCreateDeck={() => setIsCreateDeckModalOpen(true)} />}
          </div>

          {vocabularySubTab === 'Word List' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Growth Streak</h4>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">You added 12 new words today. Keep the momentum!</p>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-indigo-600 rounded-full" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-50 rounded-full opacity-50" />
              </div>

              <div className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Mastery Rate</h4>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">42% of your "Business" deck is now fully mastered.</p>
                  <p className="text-3xl font-bold text-slate-800">42<span className="text-lg text-slate-400 ml-1">%</span></p>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-50 rounded-full opacity-50" />
              </div>

              <div className="bg-[#1E293B] p-8 rounded-[40px] shadow-sm text-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Daily Quiz</h4>
                  <p className="text-xs text-slate-400 mb-8 leading-relaxed">Practice 20 words from your "Academic" deck to earn a streak badge.</p>
                  <button className="w-full py-3 bg-white text-slate-900 rounded-2xl text-sm font-bold hover:bg-slate-100 transition-colors">
                    Start Practice
                  </button>
                </div>
                <div className="absolute top-8 right-8 text-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}

      {activeTab === 'Learning Plan' && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-1">Learning Plan & Goals</h1>
              <p className="text-slate-500">Tailor your linguistic journey to your career ambitions.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/></svg>
              Adjust Goal
            </button>
          </div>

          {/* Current Milestone Card */}
          <div className="bg-cyan-50/50 border border-cyan-100 rounded-[40px] p-10 mb-12 flex items-center gap-10">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-sm flex items-center justify-center text-slate-800 border border-slate-100">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-wider mb-2">Current Milestone</p>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 leading-tight max-w-2xl">
                Master 3000 vocabulary words for Tech, Data, and Business by December.
              </h2>
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm font-medium text-slate-600">
                  <span className="font-bold text-slate-800">1,250</span> / 3,000 Words Completed
                </p>
                <span className="px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded-full">42%</span>
              </div>
              <div className="w-full h-3 bg-slate-200/50 rounded-full overflow-hidden">
                <div className="w-[42%] h-full bg-indigo-900 rounded-full" />
              </div>
            </div>
          </div>

          {/* Daily Settings Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Daily New Words</h3>
              </div>
              
              <div className="text-center mb-10">
                <p className="text-5xl font-bold text-slate-800 mb-2">20 <span className="text-lg text-slate-400 font-medium">words/day</span></p>
                <p className="text-xs text-slate-400 font-medium">Optimal for steady long-term memory growth.</p>
              </div>

              <div className="px-4 mb-8">
                <div className="relative h-1 bg-slate-100 rounded-full mb-4">
                  <div className="absolute left-0 top-0 h-full w-[40%] bg-indigo-900 rounded-full" />
                  <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-5 h-5 bg-indigo-900 rounded-full border-4 border-white shadow-md cursor-pointer" />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-300 uppercase">
                  <span>5 Words</span>
                  <span>50 Words</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-full text-indigo-600 text-[10px] font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  Estimated time: 15 mins
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800">Daily Review Limit</h3>
              </div>
              
              <div className="text-center mb-10">
                <p className="text-5xl font-bold text-slate-800 mb-2">100 <span className="text-lg text-slate-400 font-medium">words/day</span></p>
                <p className="text-xs text-slate-400 font-medium">Keep this high to ensure optimal retention.</p>
              </div>

              <div className="px-4 mb-8">
                <div className="relative h-1 bg-slate-100 rounded-full mb-4">
                  <div className="absolute left-0 top-0 h-full w-[33%] bg-indigo-900 rounded-full" />
                  <div className="absolute left-[33%] top-1/2 -translate-y-1/2 w-5 h-5 bg-indigo-900 rounded-full border-4 border-white shadow-md cursor-pointer" />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-slate-300 uppercase">
                  <span>50 Words</span>
                  <span>200 Words</span>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 rounded-full text-cyan-600 text-[10px] font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  System Recommended: 100+
                </div>
              </div>
            </div>
          </div>

          {/* Weekly Roadmap */}
          <section>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-slate-800">This Week's Roadmap</h3>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">New Words</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Reviews</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-6 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
              {roadmapData.map((item, idx) => {
                const isActive = selectedDayIndex === idx;
                const isPast = idx < (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1);
                
                return (
                  <motion.div 
                    key={idx}
                    layout
                    onClick={() => setSelectedDayIndex(idx)}
                    whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.23, 1, 0.32, 1] } }}
                    className={`min-w-[130px] flex-1 p-6 rounded-[32px] flex flex-col items-center text-center cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                      isActive 
                        ? 'bg-white shadow-[0_20px_50px_rgba(99,102,241,0.15)] border border-indigo-100 scale-105 z-10' 
                        : 'bg-slate-50/50 hover:bg-white hover:shadow-xl border border-transparent'
                    }`}
                  >
                    <p className={`text-[10px] font-bold mb-1 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`}>{item.day}</p>
                    <p className={`text-2xl font-black mb-6 ${isActive ? 'text-slate-800' : 'text-slate-600'}`}>{weekDates[idx]}</p>
                    
                    {item.isBreak ? (
                      <div className="mt-auto py-4">
                        <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Rest Day</span>
                      </div>
                    ) : (
                      <div className="space-y-2 w-full mt-auto">
                        {!item.isReviewOnly && (
                          <div className={`flex items-center justify-center gap-1.5 py-2 rounded-2xl text-[10px] font-bold transition-all duration-300 ${
                            isActive 
                              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' 
                              : isPast ? 'bg-indigo-50/50 text-indigo-300' : 'bg-indigo-50 text-indigo-600'
                          }`}>
                            {item.new} New
                            {item.completedNew && <CheckCheck size={12} className={isActive ? 'text-indigo-200' : 'text-indigo-400'} />}
                          </div>
                        )}
                        <div className={`flex items-center justify-center gap-1.5 py-2 rounded-2xl text-[10px] font-bold transition-all duration-300 ${
                          isActive 
                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-200' 
                            : isPast ? 'bg-cyan-50/50 text-cyan-300' : 'bg-cyan-50 text-cyan-600'
                        }`}>
                          {item.review} Review
                          {item.completedReview && <CheckCheck size={12} className={isActive ? 'text-cyan-100' : 'text-cyan-400'} />}
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </section>
        </motion.div>
      )}

      {activeTab === 'Practice' && (
        <PracticeView onBack={() => setActiveTab('Dashboard')} />
      )}

      {activeTab === 'Analytics' && (
        <AnalyticsView />
      )}

      {activeTab === 'Notifications' && (
        <NotificationSettings />
      )}

      {activeTab === 'Settings' && (
        <SettingsView />
      )}

      {activeTab === 'Profile' && (
        <ProfileSettings />
      )}
    </Layout>
  );
}
