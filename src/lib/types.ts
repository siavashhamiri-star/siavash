
export type Carpet = {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    vendorId: string;
    type: 'hand-woven' | 'machine-made' | 'international';
    consignment?: boolean;
};

export type Handicraft = {
    id: string;
    title: string;
    description: string;
    price: string;
    category: 'hand-woven' | 'machine-made' | 'kilim' | 'jajim' | 'silver' | 'antique' | 'painting' | 'calligraphy' | 'other';
    imageUrl: string;
    userId: string;
    userName: string;
    nationalCode?: string;
    createdAt: any;
    isPremiumDesign?: boolean;
};
  
export type Vendor = {
    id: string;
    name: string;
    location: string;
    address?: string;
    phone?: string;
    specialties: string[];
    avatarUrl: string;
    bio: string;
    userId: string;
    isVerified?: boolean;
    vendorType?: 'local' | 'international';
};

export type UserProfile = {
    displayName: string;
    photoURL?: string;
    email: string;
    isVendor?: boolean;
    vendorId?: string;
    adCount?: number;
    referralCode?: string;
    referredBy?: string;
    xp?: number;
    league?: 'Introducer' | 'ValueCreator' | 'Pioneer';
};

export type Review = {
    id: string;
    reviewerName: string;
    reviewerImage?: string;
    rating: number;
    comment: string;
    vendorId: string;
    userId: string;
    createdAt: any;
};

export type Language = 'fa' | 'en' | 'de' | 'ar' | 'tr' | 'az' | 'ku' | 'ru' | 'hi' | 'es' | 'zh';

export const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
  { code: 'az', label: 'Azərbaycan', flag: '🇦🇿' },
  { code: 'ku', label: 'Kurdî', flag: '☀️' },
];
