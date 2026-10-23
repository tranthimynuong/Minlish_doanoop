import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Target, 
  Trophy, 
  BookOpen, 
  RotateCcw, 
  ChevronRight 
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import IntermediateProgressCard from './ui/IntermediateProgressCard';
import StatCard from './ui/StatCard';
import DashboardFlashcard from './ui/DashboardFlashcard';
import WordCard from './ui/WordCard';
import { activityData, recentlyLearned } from '../data';

const Dashboard = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      {/* Dashboard Title */}
      <div className="mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-1">Overview Dashboard</h1>
        <p className="text-sm md:text-base text-slate-500">Track your linguistic progress and keep the streak alive.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-4 md:gap-6 mb-8 md:mb-10">
        <IntermediateProgressCard />
        <StatCard 
          icon={<GraduationCap />} 
          label="Words Learned" 
          value="1,250" 
          iconBg="bg-blue-50" 
          iconColor="text-blue-500" 
        />
        <StatCard 
          icon={<Target />} 
          label="Accuracy" 
          value="92%" 
          iconBg="bg-green-50" 
          iconColor="text-green-500" 
        />
        <StatCard 
          icon={<Trophy />} 
          label="Estimated Level" 
          value="B2" 
          iconBg="bg-purple-50" 
          iconColor="text-purple-500" 
        />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-12 gap-6 md:gap-8 mb-12">
        {/* Daily Activity Chart */}
        <div className="col-span-12 lg:col-span-6 bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h3 className="text-lg md:text-xl font-bold text-slate-800">Daily Activity</h3>
            <button className="text-slate-400 hover:text-slate-600">
              <span className="text-2xl leading-none">...</span>
            </button>
          </div>
          <div className="h-[200px] md:h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 600 }} 
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: '#F8FAFC' }}
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                />
                <Bar dataKey="new" fill="#6366F1" radius={[4, 4, 0, 0]} barSize={12} />
                <Bar dataKey="review" fill="#10B981" radius={[4, 4, 0, 0]} barSize={12} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-[10px] md:text-xs font-bold text-slate-500">New Words</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-[10px] md:text-xs font-bold text-slate-500">Review Words</span>
            </div>
          </div>
        </div>

        {/* Daily Learning Plan */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-white p-6 md:p-8 rounded-[32px] md:rounded-[40px] shadow-sm border border-slate-100 flex flex-col">
          <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-6 md:mb-8">Daily Learning Plan</h3>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between p-4 bg-indigo-50/50 rounded-2xl md:rounded-3xl border border-indigo-100/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <BookOpen size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-indigo-400 uppercase">New Words</p>
                  <p className="text-xs font-bold text-slate-700">Learn today</p>
                </div>
              </div>
              <span className="text-xl md:text-2xl font-bold text-indigo-600">5</span>
            </div>

            <div className="flex items-center justify-between p-4 bg-emerald-50/50 rounded-2xl md:rounded-3xl border border-emerald-100/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <RotateCcw size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-emerald-400 uppercase">Review Words</p>
                  <p className="text-xs font-bold text-slate-700">Due today</p>
                </div>
              </div>
              <span className="text-xl md:text-2xl font-bold text-emerald-600">25</span>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-800">Daily Progress</span>
              <span className="text-[10px] font-bold text-slate-400">18/30 words</span>
            </div>
            <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '60%' }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-full bg-indigo-600 rounded-full"
              />
            </div>
            <p className="text-[10px] text-slate-400 mt-3 leading-relaxed">
              You're doing great! Only 12 more to hit your goal.
            </p>
          </div>
        </div>

        {/* Flashcard Practice */}
        <DashboardFlashcard />
      </div>

      {/* Recently Learned Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-slate-800">Recently Learned</h3>
          <button className="flex items-center gap-1 text-indigo-600 text-xs font-bold hover:underline">
            View Dictionary <ChevronRight size={14} />
          </button>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 no-scrollbar">
          {recentlyLearned.map((item, idx) => (
            <WordCard 
              key={idx} 
              word={item.word} 
              type={item.type} 
              definition={item.definition} 
              typeColor={item.typeColor} 
              typeBg={item.typeBg} 
            />
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Dashboard;
