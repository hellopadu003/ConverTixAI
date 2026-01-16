import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { title: "Discover", desc: "We define your goals, audience, and key conversion metrics." },
    { title: "Design", desc: "I create a premium, custom UI layout tailored to your brand." },
    { title: "Build", desc: "AI-assisted coding ensuring clean, fast, and bug-free development." },
    { title: "Launch", desc: "Deployment, testing, and handover. You're ready to grow." },
  ];

  return (
    <section className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">My Process</h2>
          <h2 className="mt-2 text-3xl font-bold font-display text-white">How We Build Your Vision</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary-600/20 via-primary-500/50 to-primary-600/20 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-24 h-24 mx-auto bg-slate-900 border-4 border-slate-800 rounded-full flex items-center justify-center text-primary-400 text-2xl font-bold mb-6 z-10 relative shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                {index + 1}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;