import React, { useState } from 'react';
import { MapPin, Phone, Clock, WhatsappLogo, PaperPlaneTilt, CheckCircle } from '@phosphor-icons/react';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

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
            يسعدنا استقبالك في صالات عرضنا أو الإجابة على استفساراتك هاتفياً وعبر واتساب في أي وقت
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
              <h3 className="text-sm font-bold text-brand-ivory">صالات العرض الرئيسية</h3>
              <p className="text-xs text-brand-ivory/70 leading-relaxed font-light">
                المملكة العربية السعودية - الرياض - طريق الملك فهد / طريق التخصصي
              </p>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="p-5 rounded-2xl bg-brand-surface/50 border border-brand-gold/20 space-y-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-gold/15 flex items-center justify-center text-brand-gold">
                <Phone size={20} weight="duotone" />
              </div>
              <h3 className="text-sm font-bold text-brand-ivory">الهاتف والواتساب</h3>
              <div className="space-y-0.5 text-xs text-brand-ivory/80 font-mono" dir="ltr">
                <p>+966 50 000 0000</p>
                <p>+966 11 000 0000</p>
              </div>

              <div className="pt-1.5">
                <a
                  href={getWhatsAppUrl('السلام عليكم، أود التواصل مع شركة المجد')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-bold hover:bg-[#25D366]/30 transition-all whitespace-nowrap"
                >
                  <WhatsappLogo size={15} weight="fill" />
                  <span>محادثة واتساب سريعة</span>
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
                <li>السبت - الخميس: 9:00 ص - 10:00 م</li>
                <li>الجمعة: 4:00 م - 10:00 م</li>
              </ul>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-brand-surface/60 border border-brand-gold/30 rounded-3xl p-6 sm:p-8 shadow-luxury backdrop-blur-xl">
            <h3 className="text-lg font-bold text-brand-ivory mb-1 font-arabic">
              أرسل لنا استفسارك مباشرة
            </h3>
            <p className="text-xs text-brand-ivory/60 mb-5">
              سيتواصل معك فريق خدمة العملاء خلال أقل من ساعتين
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
                  <label className="block text-xs font-bold text-brand-gold mb-1.5">رقم الجوال</label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+966 5X XXX XXXX"
                    className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-ivory outline-none text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-gold mb-1.5">الرسالة أو الاستفسار</label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    placeholder="كيف يمكننا مساعدتك؟"
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
                <p className="text-xs text-brand-ivory/70">شكراً لتواصلك مع شركة المجد، سنقوم بالرد عليك في أقرب وقت.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
