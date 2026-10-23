import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { TabType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isProPlanCollapsed: boolean;
  setIsProPlanCollapsed: (collapsed: boolean) => void;
}

const Layout = ({ children, activeTab, setActiveTab, isProPlanCollapsed, setIsProPlanCollapsed }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isProPlanCollapsed={isProPlanCollapsed} 
        setIsProPlanCollapsed={setIsProPlanCollapsed} 
      />

      <main className="flex-1 md:ml-20 lg:ml-64 p-4 md:p-8 transition-all duration-300">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        {children}
      </main>

      {/* Custom Styles for hiding scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
};

export default Layout;
