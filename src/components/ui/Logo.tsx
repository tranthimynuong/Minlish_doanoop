import React from 'react';

const Logo = ({ className = "", showText = true, collapsed = false }: { className?: string, showText?: boolean, collapsed?: boolean }) => (
  <div className={`flex items-center gap-3 ${className} ${collapsed ? 'justify-center' : ''}`}>
    <div className="relative w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-xl shadow-lg shadow-indigo-200 overflow-hidden group shrink-0">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white transform group-hover:scale-110 transition-transform duration-300">
        {/* Book Base */}
        <path d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Wing / Progress Arrow overlay */}
        <path d="M12 8L16 12L12 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"/>
        <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"/>
        {/* Wing Detail */}
        <path d="M10 6C10 6 12 4 16 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="opacity-60"/>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/0 to-white/20 pointer-events-none" />
    </div>
    {showText && !collapsed && (
      <div className="flex flex-col">
        <h1 className="text-xl font-black text-slate-800 tracking-tighter leading-none">
          Min<span className="text-indigo-600">Lish</span>
        </h1>
        <p className="text-[8px] font-bold text-slate-400 tracking-[0.25em] uppercase mt-1">Language Mastery</p>
      </div>
    )}
  </div>
);

export default Logo;
