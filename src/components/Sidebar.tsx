import React from 'react';
import { 
  LayoutDashboard, 
  BookOpen, 
  Calendar, 
  Gamepad2, 
  BarChart3, 
  Bell, 
  Settings,
  X,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './ui/Logo';
import { TabType } from '../types';

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
  <div 
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 ${active ? 'bg-indigo-50 text-indigo-600' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'}`}
  >
    <Icon size={20} className={active ? 'text-indigo-600' : 'text-slate-400'} />
    <span className="font-medium text-sm lg:block md:hidden block">{label}</span>
    {active && <div className="ml-auto w-1.5 h-6 bg-indigo-600 rounded-full hidden lg:block" />}
  </div>
);

const BottomNavItem = ({ icon: Icon, label, active = false, onClick }: { icon: any, label: string, active?: boolean, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-1 flex-1 py-2 transition-all ${active ? 'text-indigo-600' : 'text-slate-400'}`}
  >
    <Icon size={20} />
    <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
  </button>
);

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isProPlanCollapsed: boolean;
  setIsProPlanCollapsed: (collapsed: boolean) => void;
}

const Sidebar = ({ activeTab, setActiveTab, isProPlanCollapsed, setIsProPlanCollapsed }: SidebarProps) => {
  return (
    <>
      {/* Sidebar - Desktop & Tablet */}
      <aside className="hidden md:flex w-20 lg:w-64 bg-white border-r border-slate-100 flex-col p-4 lg:p-6 fixed h-full z-20 transition-all duration-300">
        <div className="mb-10">
          <Logo collapsed={false} className="hidden lg:flex" />
          <Logo collapsed={true} showText={false} className="lg:hidden flex" />
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
          <SidebarItem icon={BookOpen} label="My Vocabulary" active={activeTab === 'My Vocabulary'} onClick={() => setActiveTab('My Vocabulary')} />
          <SidebarItem icon={Calendar} label="Learning Plan" active={activeTab === 'Learning Plan'} onClick={() => setActiveTab('Learning Plan')} />
          <SidebarItem icon={Gamepad2} label="Practice" active={activeTab === 'Practice'} onClick={() => setActiveTab('Practice')} />
          <SidebarItem icon={BarChart3} label="Analytics" active={activeTab === 'Analytics'} onClick={() => setActiveTab('Analytics')} />
          <SidebarItem icon={Bell} label="Notifications" active={activeTab === 'Notifications'} onClick={() => setActiveTab('Notifications')} />
        </nav>

        <div className="mt-auto hidden lg:block px-2">
          <AnimatePresence mode="wait">
            {!isProPlanCollapsed ? (
              <motion.div 
                key="expanded"
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="bg-[#1E293B] rounded-3xl p-5 text-white relative overflow-hidden shadow-xl"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Pro Plan</p>
                    <button 
                      onClick={() => setIsProPlanCollapsed(true)}
                      className="p-1.5 bg-slate-800/50 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white transition-colors"
                    >
                      <X size={12} />
                    </button>
                  </div>
                  <h3 className="text-sm font-bold mb-4 leading-tight">Unlock AI Conversation Practice</h3>
                  <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-xs font-bold transition-colors shadow-lg shadow-indigo-900/20">
                    Upgrade Now
                  </button>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-500/10 rounded-full" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/5 rounded-full" />
              </motion.div>
            ) : (
              <motion.div 
                key="collapsed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                onClick={() => setIsProPlanCollapsed(false)}
                className="bg-[#1E293B] rounded-2xl p-3 text-white flex items-center justify-between cursor-pointer hover:bg-[#263347] transition-colors border border-white/5"
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                    <ShieldCheck size={14} />
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Unlock AI (Pro)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <ChevronDown size={12} className="text-indigo-400" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </aside>

      {/* Bottom Nav - Mobile Only */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-100 flex items-center justify-around px-2 py-1 z-50 shadow-lg">
        <BottomNavItem icon={LayoutDashboard} label="Dashboard" active={activeTab === 'Dashboard'} onClick={() => setActiveTab('Dashboard')} />
        <BottomNavItem icon={BookOpen} label="Vocabulary" active={activeTab === 'My Vocabulary'} onClick={() => setActiveTab('My Vocabulary')} />
        <BottomNavItem icon={Calendar} label="Plan" active={activeTab === 'Learning Plan'} onClick={() => setActiveTab('Learning Plan')} />
        <BottomNavItem icon={Gamepad2} label="Practice" active={activeTab === 'Practice'} onClick={() => setActiveTab('Practice')} />
        <BottomNavItem icon={Settings} label="Settings" active={activeTab === 'Settings'} onClick={() => setActiveTab('Settings')} />
      </div>
    </>
  );
};

export default Sidebar;
