import React from 'react';
import ins from '../assets/instagram.png';
import fb from '../assets/facebook.png';
import tw from '../assets/twitter.png';


const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white py-16">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        
        <h2 className="text-5xl font-bold tracking-tight mb-4">KeenKeeper</h2>

        
        <p className="text-white  mx-auto mb-12 text-lg">
          Your personal shelf of meaningful connections. 
          Browse, tend, and nurture the relationships that matter most.
        </p>

        
        <div className="mb-16">
          <p className="text-white text-sm  tracking-widest mb-5">Social Links</p>
          
          <div className="flex justify-center gap-6">
            <a href="#" className="">
              <img src={ins} alt="" />
            </a>
            <a href="#" className="">
              <img src={fb} alt="" />
            </a>
            <a href="#" className="">
              <img src={tw} alt="" />
            </a>
          </div>
        </div>

        
        <div className="pt-8 border-t border-emerald-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white">
          <div>© 2026 KeenKeeper. All rights reserved.</div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;