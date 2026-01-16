import React, { useState, useEffect } from 'react';
import { Menu, User, LogIn } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import ClientPortal from './ClientPortal';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Auth Modal States
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAuthClick = () => {
    if (user) {
      setIsPortalOpen(true);
    } else {
      setIsAuthModalOpen(true);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-50 glass-nav transition-all duration-300 ${isScrolled ? 'h-16 shadow-sm' : 'h-20'}`} 
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-[0_0_25px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-all duration-300">
                C
              </div>
              <span className="font-bold text-2xl tracking-tight text-white font-display group-hover:text-primary-300 transition-colors">
                Convertix<span className="text-accent-400">AI</span>
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-slate-300 hover:text-white font-medium transition-colors text-sm tracking-wide">Services</a>
              <a href="#portfolio" className="text-slate-300 hover:text-white font-medium transition-colors text-sm tracking-wide">Portfolio</a>
              <a href="#about" className="text-slate-300 hover:text-white font-medium transition-colors text-sm tracking-wide">About</a>
              
              <div className="flex items-center gap-4 ml-4">
                {/* Auth Button */}
                <button 
                  onClick={handleAuthClick}
                  className="flex items-center gap-2 text-slate-300 hover:text-white font-medium transition-colors text-sm"
                >
                  {user ? (
                    <>
                      <div className="w-8 h-8 rounded-full bg-primary-900/50 border border-primary-500/30 flex items-center justify-center text-primary-400">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="max-w-[100px] truncate">{user.email?.split('@')[0]}</span>
                    </>
                  ) : (
                    <>
                      <LogIn className="w-4 h-4" /> Login
                    </>
                  )}
                </button>

                <a href="#contact" className="px-5 py-2.5 bg-white text-slate-900 font-medium rounded-full hover:bg-slate-100 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transform hover:-translate-y-0.5 text-sm">
                  Let's Talk
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
               {/* Mobile Auth Icon */}
               <button 
                  onClick={handleAuthClick}
                  className="text-slate-300 hover:text-white"
                >
                   {user ? <User className="w-5 h-5" /> : <LogIn className="w-5 h-5" />}
               </button>

              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Services</a>
            <a href="#portfolio" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">Portfolio</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50">About</a>
            
            <button 
              onClick={handleAuthClick}
              className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50"
            >
              {user ? 'My Client Portal' : 'Client Login'}
            </button>

            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 mt-4 text-center rounded-md text-base font-medium bg-primary-600 text-white hover:bg-primary-700">Book a Call</a>
          </div>
        </div>
      </nav>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <ClientPortal isOpen={isPortalOpen} onClose={() => setIsPortalOpen(false)} />
    </>
  );
};

export default Navbar;