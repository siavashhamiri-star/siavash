export type Carpet = {
    id: string;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    vendorId: string;
};
  
export type Vendor = {
    id: string;
    name: string;
    location: string;
    specialties: string[];
    avatarUrl: string;
    bio: string;
    userId: string;
};

export type UserProfile = {
    displayName: string;
    photoURL?: string;
    email: string;
    isVendor?: boolean;
    vendorId?: string;
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
