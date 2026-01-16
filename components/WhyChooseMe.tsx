import React from 'react';
import { Zap, Cpu, Layout, TrendingUp } from 'lucide-react';

const WhyChooseMe: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      desc: "Launch your site in days, not months, using my accelerated AI workflows."
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI-Optimized",
      desc: "Built with the latest tech for superior performance and automated efficiency."
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "No Templates",
      desc: "100% custom designs tailored to your specific brand and business goals."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Business-Focused",
      desc: "Design that prioritizes ROI, lead generation, and customer conversion."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Why Choose Me</h2>
          <h2 className="mt-2 text-3xl font-bold font-display text-white">The Competitive Edge</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-primary-500/50 transition-colors">
              <div className="w-12 h-12 bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMe;