import React from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white font-display text-center mb-10">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="group bg-white rounded-lg p-6 shadow-sm [&_summary::-webkit-details-marker]:hidden cursor-pointer">
              <summary className="flex items-center justify-between gap-1.5 font-medium text-gray-900">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-500 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;