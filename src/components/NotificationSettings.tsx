import React from 'react';
import { motion } from 'motion/react';
import { Bell, Mail, Smartphone, Info, CheckCircle2, Clock } from 'lucide-react';

const NotificationSettings = () => {
  const [subTab, setSubTab] = React.useState<'Inbox' | 'Settings'>('Inbox');

  const notifications = [
    { id: 1, title: 'New Achievement!', message: 'You completed your 7-day learning streak. Keep it up!', time: '2 hours ago', type: 'achievement', read: false },
    { id: 2, title: 'Review Reminder', message: 'You have 25 words due for review in your Business deck.', time: '5 hours ago', type: 'reminder', read: true },
    { id: 3, title: 'System Update', message: 'We added 500 new words to the Academic vocabulary set.', time: '1 day ago', type: 'system', read: true },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Notifications</h1>
        <p className="text-slate-500">Stay updated with your progress and reminders.</p>
      </div>

      <div className="flex items-center gap-8 mb-8 border-b border-slate-100">
        <button 
          onClick={() => setSubTab('Inbox')}
          className={`pb-4 text-sm font-bold transition-all ${subTab === 'Inbox' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          Inbox
        </button>
        <button 
          onClick={() => setSubTab('Settings')}
          className={`pb-4 text-sm font-bold transition-all ${subTab === 'Settings' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          Settings
        </button>
      </div>

      {subTab === 'Inbox' ? (
        <div className="space-y-4">
          {notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-6 rounded-[32px] border transition-all ${notif.read ? 'bg-white border-slate-100' : 'bg-indigo-50/30 border-indigo-100 shadow-sm'}`}
            >
              <div className="flex gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                  notif.type === 'achievement' ? 'bg-amber-100 text-amber-600' :
                  notif.type === 'reminder' ? 'bg-indigo-100 text-indigo-600' :
                  'bg-slate-100 text-slate-600'
                }`}>
                  {notif.type === 'achievement' ? <CheckCircle2 size={24} /> :
                   notif.type === 'reminder' ? <Clock size={24} /> :
                   <Info size={24} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-slate-800">{notif.title}</h3>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">{notif.time}</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed">{notif.message}</p>
                </div>
                {!notif.read && <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 shadow-sm">
          <div className="max-w-2xl">
            <h3 className="text-xl font-bold text-slate-800 mb-8">Notification Preferences</h3>
            
            <div className="space-y-8">
              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                    <Smartphone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Push Notifications</h4>
                    <p className="text-xs text-slate-500">Receive alerts on your mobile device.</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-indigo-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Email Notifications</h4>
                    <p className="text-xs text-slate-500">Weekly summaries and progress reports.</p>
                  </div>
                </div>
                <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-bold text-slate-800 mb-4">Notification Types</h4>
                <div className="space-y-4">
                  {['Learning Reminders', 'New Achievement Alerts', 'Deck Updates', 'Community News'].map((type) => (
                    <div key={type} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-md border-2 border-indigo-600 bg-indigo-600 flex items-center justify-center text-white">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button className="mt-12 px-8 py-4 bg-indigo-900 text-white rounded-2xl text-sm font-bold hover:bg-indigo-950 transition-all shadow-lg shadow-indigo-900/20">
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default NotificationSettings;
