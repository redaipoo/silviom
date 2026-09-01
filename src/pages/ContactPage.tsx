import React, { useState } from 'react';
import { MapPin, Phone, Clock, WhatsappLogo, PaperPlaneTilt, CheckCircle } from '@phosphor-icons/react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const facebookUrl = 'https://www.facebook.com/p/%D8%B4%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D9%85%D8%AC%D8%AF-%D9%84%D9%84%D9%85%D8%B7%D8%A7%D8%A8%D8%AE-%D8%A7%D9%84%D8%AD%D8%AF%D9%8A%D8%AB%D8%A9-%D9%88-P-V-C-100041790767867/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-ivory tracking-tight font-arabic">
            تواصل مع <span className="text-gold-gradient">المجد</span>
          </h1>
          <p className="text-xs sm:text-sm text-brand-ivory/70 mt-3 leading-relaxed font-light">
            يسعدنا استقبالك في معرضنا بمدينة البيضاء أو الإجابة على استفساراتك هاتفياً وعبر واتساب وفيسبوك في أي وقت
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Showroom info */}
            <div className="p-5 rounded-2xl bg-brand-surface/50 border border-brand-gold/20 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold">
                <MapPin size={20} weight="duotone" />
              </div>
              <h3 className="text-sm font-bold text-brand-ivory">المعرض والإدارة</h3>
              <p className="text-xs text-brand-ivory/80 leading-relaxed font-medium">
                ليبيا - البيضاء، شارع القهاوي (بالقرب من قرطاسية بغداد)
              </p>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-5 rounded-2xl bg-brand-surface/50 border border-brand-gold/20 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold">
                <Phone size={20} weight="duotone" />
              </div>
              <h3 className="text-sm font-bold text-brand-ivory">أرقام التواصل والاتصال</h3>
              <div className="space-y-1 text-xs text-brand-ivory/90 font-mono" dir="ltr">
                <p className="flex items-center justify-end gap-2 font-bold text-brand-champagne">
                  <span>094 5919679</span>
                </p>
                <p className="flex items-center justify-end gap-2">
                  <span>092 3741578</span>
                </p>
                <p className="flex items-center justify-end gap-2">
                  <span>091 3769091</span>
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2">
                <a
                  href={getWhatsAppUrl('السلام عليكم شركة المجد للمطابخ الحديثة و PVC')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/30 transition-all whitespace-nowrap flex-1"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  <span>محادثة واتساب سريعة</span>
                </a>

                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#1877F2]/20 border border-[#1877F2]/40 text-[#1877F2] text-xs font-bold hover:bg-[#1877F2]/30 transition-all whitespace-nowrap flex-1"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>صفحة فيسبوك الرسمية</span>
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="p-5 rounded-2xl bg-brand-surface/50 border border-brand-gold/20 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-champagne">
                <Clock size={20} weight="duotone" />
              </div>
              <h3 className="text-sm font-bold text-brand-ivory">ساعات العمل الرسمية</h3>
              <ul className="space-y-1 text-xs text-brand-ivory/70 font-light">
                <li>السبت - الخميس: 9:00 ص - 9:00 م</li>
                <li>الجمعة: عطلة أسبوعية / استقبال رسائل الواتساب</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-brand-surface/60 border border-brand-gold/30 rounded-3xl p-6 sm:p-8 shadow-luxury backdrop-blur-xl">
            <h3 className="text-lg font-bold text-brand-ivory mb-1 font-arabic">
              أرسل لنا استفسارك مباشرة
            </h3>
            <p className="text-xs text-brand-ivory/60 mb-5">
              سيتواصل معك فريق شركة المجد في أقرب وقت
            </p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-brand-gold mb-1.5">الاسم</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="اسمك الكريم"
                    className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-ivory outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-gold mb-1.5">رقم الهاتف (ليبي)</label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="09X XXXXXXX"
                    className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-ivory outline-none text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-gold mb-1.5">الرسالة أو نوع العمل المطلوب</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="مطابخ حديثة، أبواب ونوافذ PVC، غرف نوم، ديكور داخلي..."
                    className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl p-3 text-xs sm:text-sm text-brand-ivory outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold text-brand-dark font-extrabold text-xs sm:text-sm shadow-luxury-gold hover:opacity-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <PaperPlaneTilt size={16} weight="fill" className="text-brand-dark" />
                  <span>إرسال الرسالة</span>
                </button>
              </form>
            ) : (
              <div className="py-8 text-center space-y-3">
                <CheckCircle size={36} weight="fill" className="text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-brand-ivory">تم إرسال رسالتك بنجاح</h4>
                <p className="text-xs text-brand-ivory/70">شكراً لتواصلك مع شركة المجد بالبيضاء، سنقوم بالرد عليك في أقرب وقت.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
