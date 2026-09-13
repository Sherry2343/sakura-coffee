import React from 'react';
import { Coffee, ClipboardList, MessageCircle, ArrowRight } from 'lucide-react';
import { BRAND_INFO } from '../data/menuData';

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Favorite',
      japaneseTitle: 'メニューを選ぶ',
      description: 'Browse our handcrafted coffee and food menu.',
      detail: 'From floral Sakura Lattes to authentic Japanese fruit and egg sandos.',
      icon: Coffee,
      color: 'bg-[#5B3A29] text-[#FFF7EE]',
    },
    {
      step: '02',
      title: 'Build Your Order',
      japaneseTitle: 'オーダーを作成',
      description: 'Add your favorite items and enter your delivery or pickup details.',
      detail: 'Specify Lahore delivery address or pickup, plus any custom notes.',
      icon: ClipboardList,
      color: 'bg-[#F7C8D8] text-[#5B3A29]',
    },
    {
      step: '03',
      title: 'Confirm on WhatsApp',
      japaneseTitle: 'LINE・WhatsAppで確定',
      description:
        'Your order will be sent to our WhatsApp Business, where our team will confirm the details.',
      detail:
        'Direct human communication, instant confirmation, and estimated preparation time.',
      icon: MessageCircle,
      color: 'bg-[#A7B89F] text-[#2B1B17]',
    },
  ];

  return (
    <section
      id="how-to-order"
      className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF7EE] via-[#FCE8ED]/40 to-[#FFF7EE] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE8ED] text-[#5B3A29] text-xs font-semibold uppercase tracking-widest">
            <span>Simple 3-Step Process</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2B1B17]">
            How to Order With Us
          </h2>

          <p className="text-base text-[#5B3A29]/80 max-w-xl mx-auto font-light">
            Enjoying artisanal Japanese specialty coffee in Lahore is effortless.
            No complex signups—just pure coffee happiness right to WhatsApp.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((stepItem, idx) => {
            const Icon = stepItem.icon;
            return (
              <div
                key={stepItem.step}
                className="bg-white/90 backdrop-blur-xs p-8 rounded-3xl border border-[#F7C8D8]/60 shadow-sm relative group hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Step indicator badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-3xl sm:text-4xl font-bold text-[#F7C8D8] group-hover:text-[#5B3A29] transition-colors">
                    {stepItem.step}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs ${stepItem.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <span className="font-jp text-xs text-[#5B3A29]/60 block mb-1">
                    {stepItem.japaneseTitle}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B1B17] mb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-sm font-medium text-[#5B3A29] mb-2 leading-relaxed">
                    {stepItem.description}
                  </p>
                  <p className="text-xs text-[#5B3A29]/70 font-light leading-relaxed">
                    {stepItem.detail}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#FCE8ED] flex items-center justify-between text-xs text-[#5B3A29]/70">
                  <span>Step {idx + 1} of 3</span>
                  <ArrowRight className="w-4 h-4 text-[#F7C8D8] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* WhatsApp Highlight Box */}
        <div className="mt-12 bg-white p-6 sm:p-8 rounded-3xl border border-[#F7C8D8] shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2B1B17]">
              Need help or custom bulk catering in Lahore?
            </h3>
            <p className="text-xs sm:text-sm text-[#5B3A29]/80 font-light">
              Chat directly with our baristas anytime on WhatsApp Business.
            </p>
          </div>
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow-xs hover:shadow transition-all duration-200 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open WhatsApp Chat</span>
          </a>
        </div>
      </div>
    </section>
  );
};
