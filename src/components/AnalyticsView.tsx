import React from 'react';
import { motion } from 'motion/react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { GraduationCap, Target, Trophy, Clock, TrendingUp, Zap } from 'lucide-react';
import Heatmap from './ui/Heatmap';
import StatCard from './ui/StatCard';

const AnalyticsView = () => {
  const learningCurveData = [
    { name: 'Jan', words: 120 },
    { name: 'Feb', words: 280 },
    { name: 'Mar', words: 450 },
    { name: 'Apr', words: 620 },
    { name: 'May', words: 890 },
    { name: 'Jun', words: 1250 },
  ];

  const retentionData = [
    { name: 'Mastered', value: 450, color: '#10B981' },
    { name: 'Learning', value: 600, color: '#6366F1' },
    { name: 'New', value: 200, color: '#94A3B8' },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Analytics & Insights</h1>
        <p className="text-slate-500">Deep dive into your linguistic performance and memory retention.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <StatCard 
          icon={<Clock />} 
          label="Study Time" 
          value="124h" 
          iconBg="bg-indigo-50" 
          iconColor="text-indigo-600" 
        />
        <StatCard 
          icon={<TrendingUp />} 
          label="Growth Rate" 
          value="+12%" 
          iconBg="bg-emerald-50" 
          iconColor="text-emerald-600" 
        />
        <StatCard 
          icon={<Zap />} 
          label="Current Streak" 
          value="15 Days" 
          iconBg="bg-amber-50" 
          iconColor="text-amber-600" 
        />
        <StatCard 
          icon={<GraduationCap />} 
          label="Total Words" 
          value="1,250" 
          iconBg="bg-blue-50" 
          iconColor="text-blue-600" 
        />
      </div>

      {/* Heatmap Section */}
      <Heatmap />

      {/* Charts Grid */}
      <div className="grid grid-cols-12 gap-8 mb-12">
        {/* Learning Curve */}
        <div className="col-span-12 lg:col-span-8 bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-slate-800">Learning Curve</h3>
            <select className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-500 focus:outline-none appearance-none">
              <option>Last 6 Months</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={learningCurveData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorWords" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366F1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366F1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 600 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94A3B8', fontSize: 10, fontWeight: 600 }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="words" 
                  stroke="#6366F1" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorWords)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Retention Rate */}
        <div className="col-span-12 lg:col-span-4 bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-slate-100">
          <h3 className="text-xl font-bold text-slate-800 mb-8">Retention Rate</h3>
          <div className="h-[240px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={retentionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {retentionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-black text-slate-800">92%</span>
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Average</span>
            </div>
          </div>
          <div className="space-y-3 mt-6">
            {retentionData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs font-bold text-slate-500">{item.name}</span>
                </div>
                <span className="text-xs font-black text-slate-800">{item.value} words</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnalyticsView;
