import React from 'react';
import { Monitor, BarChart3, Zap, Bot } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Monitor className="w-7 h-7" />,
      title: "AI Website Design & Development",
      desc: "Stunning, responsive websites built with code, not builders. I use AI to generate clean, scalable code that loads instantly and ranks higher."
    },
    {
      icon: <BarChart3 className="w-7 h-7" />,
      title: "Conversion Optimization",
      desc: "Traffic is useless without conversions. I implement strategic funnels, compelling CTAs, and A/B tested layouts to turn visitors into buyers."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Speed & SEO Optimization",
      desc: "I aim for 100/100 Core Web Vitals. Your site will be technically perfect for Google, ensuring maximum organic visibility and minimal bounce rates."
    },
    {
      icon: <Bot className="w-7 h-7" />,
      title: "AI Chatbot Integration",
      desc: "Capture leads 24/7 with custom AI assistants that answer customer questions, book appointments, and guide users to purchase—even while you sleep."
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">Services</h2>
          <h2 className="mt-2 text-3xl leading-8 font-bold font-display tracking-tight text-white sm:text-4xl text-gradient">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-4 text-xl text-slate-400">Everything you need to establish a dominant online presence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative glass-card rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] transition-all duration-300 group">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-800 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;