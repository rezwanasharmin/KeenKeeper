import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
      <p className="text-gray-500 mt-6 text-lg">Loading your friends...</p>
    </div>
  );
};

export default LoadingSpinner;