import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, Instagram, Send, CheckCircle2, Clock } from 'lucide-react';
import { BRAND_INFO } from '../data/menuData';

// Facebook Icon SVG
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
      setFormSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FFF7EE] via-[#FCE8ED]/40 to-[#FFF7EE] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Brand Info & Direct Channels */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FCE8ED] text-[#5B3A29] text-xs font-semibold uppercase tracking-widest">
                <span>Direct Support & Inquiries</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#2B1B17]">
                Connect With Sakura Coffee
              </h2>

              <p className="font-jp text-xs sm:text-sm text-[#5B3A29]/70 tracking-widest">
                ラホールより、心を込めてお応えいたします。
              </p>

              <p className="text-sm sm:text-base text-[#5B3A29]/80 font-light leading-relaxed">
                Whether you have questions regarding our specialty coffee origins, customized
                catering for intimate gatherings in Lahore, or want to say hello, we are always here.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Location Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#FCE8ED] shadow-2xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFF7EE] border border-[#F7C8D8] flex items-center justify-center text-[#5B3A29] flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#5B3A29]" />
                </div>
                <div>
                  <h3 className="font-serif text-base font-bold text-[#2B1B17]">
                    Location
                  </h3>
                  <p className="text-xs text-[#5B3A29]">
                    {BRAND_INFO.location}
                  </p>
                  <span className="text-[10px] text-[#5B3A29]/60">
                    Handcrafted specialty coffee brand based in Lahore
                  </span>
                </div>
              </div>

              {/* Email Card with Email Us button */}
              <div className="bg-white p-5 rounded-2xl border border-[#FCE8ED] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FCE8ED] flex items-center justify-center text-[#5B3A29] flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#5B3A29]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#2B1B17]">
                      Email Inquiries
                    </h3>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-xs text-[#5B3A29] hover:underline block"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  id="email-us-direct-btn"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#5B3A29] hover:bg-[#2B1B17] text-[#FFF7EE] text-xs font-semibold rounded-full shadow-xs transition-colors flex-shrink-0"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Us</span>
                </a>
              </div>

              {/* WhatsApp Order Button Card */}
              <div className="bg-[#25D366]/10 border border-[#25D366]/30 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-[#2B1B17]">
                      WhatsApp Business
                    </h3>
                    <p className="text-xs text-[#5B3A29]">
                      Instant order confirmations & custom requests
                    </p>
                  </div>
                </div>

                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-whatsapp-btn"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-semibold rounded-full shadow-xs transition-colors flex-shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#5B3A29] block mb-3">
                Official Social Channels
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#F7C8D8] text-xs font-medium text-[#5B3A29] hover:bg-[#FCE8ED] hover:text-[#2B1B17] transition-all"
                >
                  <Instagram className="w-4 h-4 text-[#833ab4]" />
                  <span>Instagram</span>
                </a>
                <a
                  href={BRAND_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#F7C8D8] text-xs font-medium text-[#5B3A29] hover:bg-[#FCE8ED] hover:text-[#2B1B17] transition-all"
                >
                  <FacebookIcon className="w-4 h-4 text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[#F7C8D8] text-xs font-medium text-[#5B3A29] hover:bg-[#FCE8ED] hover:text-[#2B1B17] transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Elegant Contact & Message Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#F7C8D8] shadow-md relative">
            {/* Small sakura decoration */}
            <div className="absolute top-6 right-6 text-[#F7C8D8] opacity-60 pointer-events-none">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C13.2 4.5 14.5 6.5 16 7C17.5 7.5 19.8 7 21 8.5C22.2 10 21.5 12.2 21.2 13.8C20.9 15.4 21.8 17.5 20.8 19C19.8 20.5 17.5 20.2 16 20.8C14.5 21.4 13.2 23.5 12 23.5C10.8 23.5 9.5 21.4 8 20.8C6.5 20.2 4.2 20.5 3.2 19C2.2 17.5 3.1 15.4 2.8 13.8C2.5 12.2 1.8 10 3 8.5C4.2 7 6.5 7.5 8 7C9.5 6.5 10.8 4.5 12 2Z" />
              </svg>
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#2B1B17] mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs text-[#5B3A29]/80 font-light mb-6">
              Have a special request, event inquiry, or feedback? Drop us a note below.
            </p>

            {formSubmitted ? (
              <div className="p-8 text-center space-y-3 bg-[#FCE8ED]/60 rounded-2xl border border-[#F7C8D8]">
                <CheckCircle2 className="w-10 h-10 text-[#25D366] mx-auto" />
                <h4 className="font-serif text-lg font-bold text-[#2B1B17]">
                  Thank You for Reaching Out! 🌸
                </h4>
                <p className="text-xs text-[#5B3A29]">
                  We have received your message and will reply via email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#5B3A29] mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={inquiryName}
                    onChange={e => setInquiryName(e.target.value)}
                    placeholder="e.g. Zainab Ali"
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#FFF7EE] border border-[#F7C8D8] focus:outline-none focus:ring-2 focus:ring-[#F7C8D8] text-[#2B1B17]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[#5B3A29] mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={e => setInquiryEmail(e.target.value)}
                    placeholder="e.g. zainab@example.com"
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#FFF7EE] border border-[#F7C8D8] focus:outline-none focus:ring-2 focus:ring-[#F7C8D8] text-[#2B1B17]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#5B3A29] mb-1"
                  >
                    How Can We Help You?
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={inquiryMessage}
                    onChange={e => setInquiryMessage(e.target.value)}
                    placeholder="Tell us about your catering request, question, or coffee preference..."
                    className="w-full px-4 py-2.5 text-xs rounded-xl bg-[#FFF7EE] border border-[#F7C8D8] focus:outline-none focus:ring-2 focus:ring-[#F7C8D8] text-[#2B1B17]"
                  />
                </div>

                <button
                  type="submit"
                  id="contact-form-submit-btn"
                  className="w-full py-3.5 px-6 bg-[#5B3A29] hover:bg-[#2B1B17] text-[#FFF7EE] text-xs uppercase tracking-widest font-semibold rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 text-[#F7C8D8]" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
