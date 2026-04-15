import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Clock, BarChart3, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          
          {/* Logo */}
          <div className="text-2xl font-bold "><img src={logo} alt="" /></div>

          
          <div className="hidden md:flex items-center gap-8">
            
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2.5 rounded-2xl font-medium transition-all ${
                  isActive 
                    ? 'bg-[#244D3F] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Home size={20} />
              Home
            </NavLink>

            
            <NavLink
              to="/timeline"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2.5 rounded-2xl font-medium transition-all ${
                  isActive 
                    ? 'bg-[#244D3F] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <Clock size={20} />
              Timeline
            </NavLink>

           
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2.5 rounded-2xl font-medium transition-all ${
                  isActive 
                    ? 'bg-[#244D3F] text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <BarChart3 size={20} />
              Stats
            </NavLink>
          </div>

          
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white py-6 px-4">
            <div className="flex items-center justify-between mb-8">
              <div className="text-2xl font-bold text-emerald-700">KeenKeeper</div>
              <button onClick={() => setIsMenuOpen(false)}>
                <X size={28} />
              </button>
            </div>

            <div className="space-y-2">
              
              <NavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-4 rounded-2xl font-medium text-lg ${
                    isActive 
                      ? 'bg-emerald-700 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <Home size={24} />
                Home
              </NavLink>

              {/* Timeline */}
              <NavLink
                to="/timeline"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-4 rounded-2xl font-medium text-lg ${
                    isActive 
                      ? 'bg-emerald-700 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <Clock size={24} />
                Timeline
              </NavLink>

              {/* Stats */}
              <NavLink
                to="/stats"
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-4 rounded-2xl font-medium text-lg ${
                    isActive 
                      ? 'bg-emerald-700 text-white' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <BarChart3 size={24} />
                Stats
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;