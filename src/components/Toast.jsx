import React from 'react';

const Toast = ({ message }) => {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-emerald-800 text-white px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-50 animate-slide-up">
      <div className="w-5 h-5 bg-white/30 rounded-full flex items-center justify-center text-xs">✓</div>
      <span className="font-medium">{message}</span>
    </div>
  );
};

export default Toast;