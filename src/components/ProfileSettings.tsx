import React from 'react';
import { motion } from 'motion/react';
import { User, Mail, Shield, GraduationCap, Target, Trophy, ChevronRight, Camera } from 'lucide-react';

const ProfileSettings = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      {/* Profile Header */}
      <div className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 shadow-sm mb-12 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[40px] bg-indigo-100 flex items-center justify-center overflow-hidden border-4 border-white shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                alt="Avatar" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <button className="absolute bottom-2 right-2 w-10 h-10 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200 border-2 border-white hover:bg-indigo-700 transition-all">
              <Camera size={18} />
            </button>
          </div>
          
          <div className="text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
              <h1 className="text-3xl md:text-4xl font-black text-slate-800 tracking-tight">Alex Chen</h1>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-[10px] font-bold rounded-full uppercase tracking-wider self-center md:self-auto">Pro Member</span>
            </div>
            <p className="text-slate-500 font-medium mb-6">Advanced Learner • Joined March 2024</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
                <Trophy size={16} className="text-amber-500" />
                <span className="text-xs font-bold text-slate-700">Top 5% Learner</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-2xl border border-slate-100">
                <Target size={16} className="text-indigo-500" />
                <span className="text-xs font-bold text-slate-700">92% Accuracy</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-indigo-50 rounded-full opacity-50" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-emerald-50 rounded-full opacity-50" />
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Personal Details */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 shadow-sm">
          <h3 className="text-xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <User size={24} className="text-indigo-600" />
            Personal Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Full Name</label>
              <input 
                type="text" 
                defaultValue="Alex Chen" 
                className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  defaultValue="alex.chen@example.com" 
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500">
                  <CheckCircle2 size={18} />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Native Language</label>
              <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none">
                <option>Vietnamese</option>
                <option>English</option>
                <option>Chinese</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider ml-1">Target Language</label>
              <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all appearance-none">
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>French</option>
              </select>
            </div>
          </div>
          
          <div className="mt-12 flex justify-end">
            <button className="px-8 py-4 bg-indigo-900 text-white rounded-2xl text-sm font-bold hover:bg-indigo-950 transition-all shadow-lg shadow-indigo-900/20">
              Save Changes
            </button>
          </div>
        </div>

        {/* Learning Profile */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-3">
              <GraduationCap size={20} className="text-indigo-600" />
              Learning Profile
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold text-slate-500">Current Level</span>
                <span className="text-sm font-black text-indigo-600">Advanced (B2)</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold text-slate-500">Learning Goal</span>
                <span className="text-sm font-black text-slate-800">Business English</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="text-xs font-bold text-slate-500">Daily Goal</span>
                <span className="text-sm font-black text-slate-800">20 words/day</span>
              </div>
            </div>
            
            <button className="w-full mt-8 py-4 border border-slate-200 rounded-2xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
              Edit Learning Profile <ChevronRight size={14} />
            </button>
          </div>

          <div className="bg-rose-50/50 rounded-[40px] border border-rose-100 p-8 shadow-sm">
            <h3 className="text-lg font-bold text-rose-800 mb-6 flex items-center gap-3">
              <Shield size={20} className="text-rose-600" />
              Security
            </h3>
            <p className="text-xs text-rose-600/70 mb-6 leading-relaxed">Keep your account secure by updating your password regularly.</p>
            <button className="w-full py-4 bg-white border border-rose-200 rounded-2xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition-all">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CheckCircle2 = ({ size }: { size: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
);

export default ProfileSettings;
