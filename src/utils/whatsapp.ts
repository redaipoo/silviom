import { DesignItem } from '../types';

export const OFFICIAL_WHATSAPP_NUMBER = '+966500000000'; // Brand WhatsApp number (or international format)

/**
 * Generate a WhatsApp direct chat URL with encoded text
 */
export function getWhatsAppUrl(text: string, phone: string = OFFICIAL_WHATSAPP_NUMBER): string {
  const cleanPhone = phone.replace(/[^\d+]/g, '');
  return `https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(text)}`;
}

/**
 * Single design execution inquiry
 */
export function getDesignInquiryMessage(design: DesignItem): string {
  const currentUrl = typeof window !== 'undefined' ? `${window.location.origin}/designs/${design.slug}` : '';
  
  return `السلام عليكم ورحمة الله،
أعجبني تصميم "${design.title}" من تصاميم شركة المجد (AL MĀGD).
التصنيف: ${design.categoryArabic} | الطراز: ${design.styleArabic}
المساحة التقريبية: ${design.approximateArea}

${currentUrl ? `رابط التصميم: ${currentUrl}\n` : ''}أرغب في الاستفسار عن إمكانية تنفيذ تصميم مشابه أو حجز موعد استشارة وتحديد التكلفة التقديرية.`;
}

/**
 * Similar design inquiry
 */
export function getSimilarDesignInquiryMessage(design: DesignItem): string {
  return `السلام عليكم ورحمة الله،
شاهدت تصميم "${design.title}" على موقع شركة المجد، وأرغب في طلب تصميم خاص مشابه بنفس الروح واللمسات العصرية لمساحتي.`;
}

/**
 * Batch favorites WhatsApp inquiry
 */
export function getBatchFavoritesMessage(designs: DesignItem[]): string {
  if (designs.length === 0) {
    return 'السلام عليكم ورحمة الله، أرغب في الاستفسار عن خدمات التصميم الداخلي لدى شركة المجد.';
  }

  const designsList = designs
    .map((d, index) => `${index + 1}. ${d.title} (${d.categoryArabic} - ${d.styleArabic})`)
    .join('\n');

  return `السلام عليكم ورحمة الله،
قمت باختيار وتفضيل مجموعة من تصاميمكم الرائعة على موقع شركة المجد (AL MĀGD):

${designsList}

أرغب في مناقشة هذه الاختيارات معكم لتنفيذ مشروع يجمع بين هذه الأفكار الجميلة.`;
}

/**
 * Project Consultation Request Form Message
 */
export function getProjectFormWhatsAppMessage(data: {
  name: string;
  phone: string;
  projectType: string;
  location: string;
  spaceSize: string;
  preferredStyle: string;
  budgetRange: string;
  details: string;
}): string {
  return `السلام عليكم ورحمة الله،
طلب استشارة وتصميم مشروع جديد من موقع شركة المجد:

- الاسم: ${data.name}
- رقم التواصل: ${data.phone}
- نوع المشروع: ${data.projectType}
- المدينة / الموقع: ${data.location}
- المساحة التقريبية: ${data.spaceSize}
- الطراز المفضل: ${data.preferredStyle}
- الميزانية المتوقعة: ${data.budgetRange || 'غير محدد'}
- تفاصيل إضافية: ${data.details || 'لا يوجد'}

يرجى التواصل معي لتنسيق الخطوة القادمة. شكراً لكم.`;
}
