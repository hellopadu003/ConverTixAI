import React from 'react';
import { Quote, Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-base text-primary-400 font-semibold tracking-wide uppercase">About Me</h2>
            <h3 className="mt-2 text-3xl font-bold text-white font-display">More than just a designer.</h3>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              Hi, I'm Alex. I'm a solo web designer who believes that great websites shouldn't take months to build.
            </p>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              By leveraging advanced AI tools for coding, copywriting, and layout generation, I'm able to deliver agency-quality work at a fraction of the cost and time. I focus on strategy and aesthetics, letting technology handle the repetitive tasks.
            </p>

            <div className="mt-8 flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 text-white">50+</span>
                <span className="text-sm text-gray-500">Projects Launched</span>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-gray-900 text-white">100%</span>
                <span className="text-sm text-gray-500">On-Time Delivery</span>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-gray-50 rounded-2xl p-8 relative">
            <Quote className="w-12 h-12 text-primary-200 absolute top-6 left-6 -z-10" />

            <div className="space-y-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic">"Alex built our entire e-commerce site in two weeks. The AI-generated copy was surprisingly spot-on, and the design is beautiful."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">JD</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">Founder, Bloom & Wild</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-1 text-yellow-400 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic">"Professional, fast, and easy to work with. The site looks better than my competitors who spent double."</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">SS</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Sarah Smith</p>
                    <p className="text-xs text-gray-500">Financial Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
