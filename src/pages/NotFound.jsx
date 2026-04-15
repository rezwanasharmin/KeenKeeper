import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
       
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        
        <p className="text-gray-600 mb-10">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <button
          onClick={() => navigate('/')}
          className="bg-emerald-700 hover:bg-emerald-800 text-white px-10 py-4 rounded-2xl flex items-center gap-3 mx-auto transition-colors"
        >
          <Home size={22} />
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;