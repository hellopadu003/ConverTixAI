import React from 'react';
import { ArrowDown, ArrowRight, Hexagon, Triangle, Circle, Square } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden relative">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-500/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent-500/10 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700 shadow-sm mb-8 fade-in-up backdrop-blur-sm hover:border-primary-500/50 transition-colors">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-medium text-slate-300">Limited Availability This Month</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-display tracking-tight text-white mb-6 fade-in-up delay-100">
          AI-Powered Websites That Turn <br className="hidden lg:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-primary-400 to-accent-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
             Visitors Into Customers
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 fade-in-up delay-200 leading-relaxed">
          Custom-built, conversion-focused websites using modern AI—designed to help businesses grow faster.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up delay-300">
          <a href="#portfolio" className="w-full sm:w-auto px-8 py-4 bg-slate-800/50 text-white border border-slate-700 rounded-xl font-semibold hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group backdrop-blur-sm">
            See My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl font-semibold shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:bg-gradient-to-r hover:from-primary-500 hover:to-accent-500 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 border border-white/10">
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Social Proof Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800 fade-in-up delay-300">
          <p className="text-sm text-slate-500 font-medium mb-4 uppercase tracking-wider">Trusted by modern businesses</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos */}
            <div className="flex items-center gap-2 font-bold text-xl text-white">
              <Hexagon className="fill-slate-600 text-transparent stroke-2 stroke-slate-600" /> Nexus
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-white">
              <Triangle className="fill-slate-600 text-transparent stroke-2 stroke-slate-600" /> Vertex
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-white">
              <Circle className="fill-slate-600 text-transparent stroke-2 stroke-slate-600" /> Sphere
            </div>
            <div className="flex items-center gap-2 font-bold text-xl text-white">
              <Square className="fill-slate-600 text-transparent stroke-2 stroke-slate-600" /> Cube
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;