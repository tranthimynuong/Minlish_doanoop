import React from 'react';
import { Settings, Bell } from 'lucide-react';
import Logo from './ui/Logo';
import { TabType } from '../types';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between mb-6 md:mb-10 bg-white/60 backdrop-blur-md p-3 md:p-5 rounded-[24px] md:rounded-[32px] border border-slate-100 shadow-sm">
      <div className="flex items-center gap-4">
        <Logo showText={false} className="md:hidden flex" />
        <div className="flex flex-col">
          <p className="text-[8px] md:text-[10px] font-bold text-indigo-600 uppercase tracking-[0.2em] mb-0.5 md:mb-1">Learning Portal</p>
          <h2 className="text-lg md:text-2xl font-black text-slate-800 tracking-tight truncate max-w-[120px] sm:max-w-none">
            <span className="hidden sm:inline">Welcome back, </span>Alex!
          </h2>
        </div>
      </div>
      
      <div className="flex items-center gap-2 md:gap-6">
        <div className="flex items-center gap-1 md:gap-2 bg-slate-50/50 p-1 md:p-1.5 rounded-xl md:rounded-2xl border border-slate-100">
          <button 
            onClick={() => setActiveTab('Settings')}
            className={`p-2 md:p-2.5 rounded-lg md:rounded-xl transition-all ${activeTab === 'Settings' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'}`}
          >
            <Settings size={18} />
          </button>
          <button 
            onClick={() => setActiveTab('Notifications')}
            className={`p-2 md:p-2.5 rounded-lg md:rounded-xl transition-all relative ${activeTab === 'Notifications' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-400 hover:text-slate-600 hover:bg-white/50'}`}
          >
            <Bell size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white shadow-sm" />
          </button>
        </div>
        <div 
          onClick={() => setActiveTab('Profile')}
          className="flex items-center gap-2 md:gap-4 md:pl-6 md:border-l border-slate-200 cursor-pointer group"
        >
          <div className="text-right hidden lg:block">
            <p className="text-sm font-black text-slate-800 leading-none mb-1 group-hover:text-indigo-600 transition-colors">Alex Chen</p>
            <p className="text-[10px] font-bold text-indigo-500 uppercase tracking-wider">Advanced Learner</p>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full md:rounded-2xl bg-indigo-100 flex items-center justify-center overflow-hidden border-2 border-white shadow-lg rotate-3 group-hover:rotate-0 transition-all">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
              alt="Avatar" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
