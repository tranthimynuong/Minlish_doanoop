import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, Shield, Database, ChevronRight, Globe, Volume2, Moon, Bell } from 'lucide-react';

const SettingsView = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Settings</h1>
        <p className="text-slate-500">Manage your account and study preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Study Preferences */}
        <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <GraduationCap size={24} className="text-indigo-600" />
            Study Preferences
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Target Language</h4>
                  <p className="text-xs text-slate-500">English (US)</p>
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                  <Volume2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Audio Speed</h4>
                  <p className="text-xs text-slate-500">Normal (1.0x)</p>
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Interface Settings */}
        <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <User size={24} className="text-indigo-600" />
            Interface Settings
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                  <Moon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Dark Mode</h4>
                  <p className="text-xs text-slate-500">System Default</p>
                </div>
              </div>
              <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>

            <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                  <Bell size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Notifications</h4>
                  <p className="text-xs text-slate-500">All alerts enabled</p>
                </div>
              </div>
              <button className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Security & Data */}
        <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-slate-100 md:col-span-2">
          <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <Shield size={24} className="text-indigo-600" />
            Security & Data Management
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-800">Account Security</h4>
              <button className="w-full flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-slate-100 transition-all">
                <span className="text-sm font-medium text-slate-700">Change Password</span>
                <ChevronRight size={18} className="text-slate-400" />
              </button>
              <button className="w-full flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-slate-100 transition-all">
                <span className="text-sm font-medium text-slate-700">Two-Factor Authentication</span>
                <span className="text-[10px] font-bold text-rose-500 uppercase">Disabled</span>
              </button>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-800">Data Management</h4>
              <button className="w-full flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-slate-100 transition-all">
                <span className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <Database size={16} className="text-indigo-600" />
                  Export My Data
                </span>
                <ChevronRight size={18} className="text-slate-400" />
              </button>
              <button className="w-full flex items-center justify-between p-6 bg-rose-50/50 rounded-3xl border border-rose-100 hover:bg-rose-100/50 transition-all">
                <span className="text-sm font-medium text-rose-600">Delete Account</span>
                <ChevronRight size={18} className="text-rose-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SettingsView;
