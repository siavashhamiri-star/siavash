
export type Carpet = {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    vendorId: string;
    consignment?: boolean;
};

export type Handicraft = {
    id: string;
    title: string;
    description: string;
    price: string;
    category: 'kilim' | 'jajim' | 'silver' | 'antique' | 'painting' | 'other';
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
    specialties: string[];
    avatarUrl: string;
    bio: string;
    userId: string;
    isVerified?: boolean;
};

export type UserProfile = {
    displayName: string;
    photoURL?: string;
    email: string;
    isVendor?: boolean;
    vendorId?: string;
    adCount?: number;
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

export type Suggestion = {
    id: string;
    suggestionText: string;
    userType: 'buyer' | 'vendor';
    userId: string;
    userName: string;
    createdAt: any;
};
