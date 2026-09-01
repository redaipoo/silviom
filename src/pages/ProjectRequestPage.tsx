import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PaperPlaneTilt, WhatsappLogo, CheckCircle, UploadSimple, ShieldCheck } from '@phosphor-icons/react';
import { getWhatsAppUrl, getProjectFormWhatsAppMessage } from '../utils/whatsapp';

export const ProjectRequestPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    projectType: 'مطبخ عصري',
    location: '',
    spaceSize: '',
    preferredStyle: 'مودرن Modern',
    budgetRange: '',
    details: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#BB9A6B', '#DFCAA7', '#043337', '#F6F1E8'],
    });
  };

  const whatsAppUrl = getWhatsAppUrl(getProjectFormWhatsAppMessage(formData));

  return (
    <div className="pt-28 pb-20 bg-brand-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-brand-ivory tracking-tight font-arabic">
            ابدأ <span className="text-gold-gradient">مشروعك</span> معنا
          </h1>
          <p className="text-xs sm:text-sm text-brand-ivory/70 mt-2.5 leading-relaxed font-light">
            املأ بيانات مشروعك وسيقوم مهندس التصميم بالتواصل معك لمناقشة التفاصيل وتقديم أفضل الحلول المعمارية لمساحتك
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-brand-surface/60 border border-brand-gold/30 rounded-3xl p-6 sm:p-8 shadow-luxury backdrop-blur-xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-brand-gold mb-1.5">
                    الاسم الكامل <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="مثال: محمد السعد"
                    className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-ivory placeholder-brand-ivory/30 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-gold mb-1.5">
                    رقم الجوال / واتساب <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    dir="ltr"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 5X XXX XXXX"
                    className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-ivory placeholder-brand-ivory/30 outline-none text-right transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Project Type & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-brand-gold mb-1.5">
                    نوع المشروع <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-ivory outline-none cursor-pointer"
                  >
                    <option value="مطبخ عصري">مطبخ عصري فاخر</option>
                    <option value="غرفة نوم / جناح رئيسي">غرفة نوم / جناح رئيسي</option>
                    <option value="غرفة معيشة أو مجلس">غرفة معيشة أو مجلس</option>
                    <option value="خزائن ودولاب ملابس (Closet)">خزائن ودولاب ملابس (Closet)</option>
                    <option value="ديكور محل أو معرض تجاري">ديكور محل أو معرض تجاري</option>
                    <option value="مكتب أو مقر عمل">مكتب أو مقر عمل</option>
                    <option value="فيلا كاملة / تصميم داخلي شامل">فيلا كاملة / تصميم داخلي شامل</option>
                    <option value="تصميم 3D ورندر معماري فقط">تصميم 3D ورندر معماري فقط</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-gold mb-1.5">
                    المدينة أو الموقع <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="مثال: الرياض، حي الملقا"
                    className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-ivory placeholder-brand-ivory/30 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Space Size & Preferred Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-brand-gold mb-1.5">
                    المساحة التقريبية (م²)
                  </label>
                  <input
                    type="text"
                    name="spaceSize"
                    value={formData.spaceSize}
                    onChange={handleChange}
                    placeholder="مثال: 25 م²"
                    className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-ivory placeholder-brand-ivory/30 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-brand-gold mb-1.5">
                    الأسلوب المعماري المفضل
                  </label>
                  <select
                    name="preferredStyle"
                    value={formData.preferredStyle}
                    onChange={handleChange}
                    className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-ivory outline-none cursor-pointer"
                  >
                    <option value="مودرن Modern">مودرن حديث (Modern)</option>
                    <option value="فاخر Luxury">فاخر ملكي (Luxury)</option>
                    <option value="مينيمال Minimal">مينيمال بسيط (Minimal)</option>
                    <option value="معاصر Contemporary">معاصر جريء (Contemporary)</option>
                    <option value="كلاسيك راقٍ Classic">كلاسيك راقٍ (Classic)</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs font-bold text-brand-gold mb-1.5">
                  الميزانية المتوقعة (اختياري)
                </label>
                <select
                  name="budgetRange"
                  value={formData.budgetRange}
                  onChange={handleChange}
                  className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl px-4 py-2.5 text-xs sm:text-sm text-brand-ivory outline-none cursor-pointer"
                >
                  <option value="">حدد النطاق التقديري للمشروع</option>
                  <option value="20,000 - 50,000 ريال">20,000 - 50,000 ريال</option>
                  <option value="50,000 - 100,000 ريال">50,000 - 100,000 ريال</option>
                  <option value="100,000 - 200,000 ريال">100,000 - 200,000 ريال</option>
                  <option value="أكثر من 200,000 ريال">أكثر من 200,000 ريال</option>
                </select>
              </div>

              {/* File Upload Mockup */}
              <div>
                <label className="block text-xs font-bold text-brand-gold mb-1.5">
                  إرفاق مخطط أو صور مرجعية (اختياري)
                </label>
                <div className="relative border-2 border-dashed border-brand-gold/30 hover:border-brand-gold rounded-2xl p-5 text-center bg-brand-dark/50 cursor-pointer transition-colors">
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    onChange={handleFileUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                  />
                  <UploadSimple size={24} weight="duotone" className="text-brand-gold mx-auto mb-1.5" />
                  <p className="text-xs text-brand-ivory/80">
                    {uploadedFileName ? (
                      <span className="text-brand-champagne font-bold">{uploadedFileName}</span>
                    ) : (
                      'اضغط هنا لرفع صور أو مخطط المساحة (JPG, PNG, PDF)'
                    )}
                  </p>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-bold text-brand-gold mb-1.5">
                  تفاصيل إضافية أو متطلبات خاصة
                </label>
                <textarea
                  rows={3}
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="اذكر أي تفاصيل إضافية مثل: موعد الانتقال، الأجهزة المراد دمجها، أو المواد المفضلة..."
                  className="w-full bg-brand-dark/90 border border-brand-gold/20 focus:border-brand-gold rounded-xl p-3 text-xs sm:text-sm text-brand-ivory placeholder-brand-ivory/30 outline-none transition-all"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-gold via-brand-champagne to-brand-gold text-brand-dark font-extrabold text-xs sm:text-sm shadow-luxury-gold hover:opacity-95 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <PaperPlaneTilt size={16} weight="fill" className="text-brand-dark" />
                <span>إرسال الطلب</span>
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-brand-ivory/50 pt-1">
                <ShieldCheck size={14} weight="duotone" className="text-brand-gold" />
                <span>جميع بياناتك ومخططاتك محمية وتُعامل بسرية تامة</span>
              </div>
            </form>
          ) : (
            /* Success State */
            <div className="py-10 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle size={32} weight="fill" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-brand-ivory">تم استلام طلبك بنجاح</h3>
                <p className="text-xs text-brand-ivory/70 max-w-sm mx-auto leading-relaxed">
                  شكراً لاهتمامك بشركة المجد. سيقوم أحد مهندسينا بمراجعة تفاصيل طلبك والتواصل معك خلال ساعات العمل.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-brand-dark/80 border border-brand-gold/30 max-w-sm mx-auto space-y-3">
                <p className="text-xs text-brand-champagne font-semibold">
                  لتسريع الرد ومناقشة التفاصيل فوراً مع مهندس الديكور:
                </p>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-lg hover:bg-[#20bd5a] transition-all whitespace-nowrap"
                >
                  <WhatsappLogo size={18} weight="fill" />
                  <span>تواصل معنا عبر WhatsApp الآن</span>
                </a>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-brand-gold hover:text-brand-champagne transition-colors underline"
              >
                إرسال طلب مشروع آخر
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
