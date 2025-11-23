import { PlaceHolderImages } from './placeholder-images';

export type Carpet = {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageHint: string;
  vendorId: string;
};

export type Vendor = {
  id: string;
  name: string;
  location: string;
  specialties: string[];
  avatarUrl: string;
  avatarHint: string;
  bio: string;
};

const getImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  return {
    url: image?.imageUrl ?? `https://picsum.photos/seed/${id}/800/600`,
    hint: image?.imageHint ?? 'carpet',
  };
};

export const vendors: Vendor[] = [
  {
    id: '1',
    name: 'استادان فرش اصفهان (Isfahan Carpet Masters)',
    location: 'اصفهان، ایران (Isfahan, Iran)',
    specialties: ['Classic Isfahan', 'Nain', 'Fine Silk'],
    avatarUrl: getImage('vendor-avatar-1').url,
    avatarHint: getImage('vendor-avatar-1').hint,
    bio: 'With three generations of experience, we specialize in curating and preserving the finest masterpieces from Isfahan and Nain. Our collection represents the pinnacle of Persian carpet artistry, known for its intricate designs and superior quality materials.',
  },
  {
    id: '2',
    name: 'بافندگان ابریشم تبریز (Tabriz Silk Weavers)',
    location: 'تبریز، ایران (Tabriz, Iran)',
    specialties: ['Tabriz', 'Qum Silk', 'Pictorial Carpets'],
    avatarUrl: getImage('vendor-avatar-2').url,
    avatarHint: getImage('vendor-avatar-2').hint,
    bio: 'Our family has been at the heart of Tabriz\'s weaving tradition for over a century. We are renowned for our luxurious silk carpets and unique pictorial designs that tell stories of Persian history and mythology. Each piece is a testament to the skill of our master weavers.',
  },
  {
    id: '3',
    name: 'طرح های مدرن گبه (Modern Gabbeh Designs)',
    location: 'شیراز، ایران (Shiraz, Iran)',
    specialties: ['Gabbeh', 'Kilim', 'Contemporary Nomadic'],
    avatarUrl: getImage('vendor-avatar-3').url,
    avatarHint: getImage('vendor-avatar-3').hint,
    bio: 'We bridge the gap between ancient nomadic traditions and modern aesthetics. Our collection features minimalist Gabbeh and vibrant Kilim carpets, handcrafted by tribal artisans. We are committed to fair trade practices and sustainable production, bringing soulful, contemporary designs to the global market.',
  },
];

export const carpets: Carpet[] = [
  {
    id: 'c1',
    vendorId: '2',
    name: 'Classic Tabriz Mahi',
    price: '$8,500',
    description: 'A stunning example of the Tabriz Mahi (fish) pattern, featuring deep reds and blues with a dense, intricate design. Hand-knotted with fine wool.',
    imageUrl: getImage('carpet-1').url,
    imageHint: getImage('carpet-1').hint,
  },
  {
    id: 'c2',
    vendorId: '2',
    name: 'Garden of Paradise Qum Silk',
    price: '$22,000',
    description: 'An exceptionally fine, pure silk Qum carpet depicting a lush garden scene. The vibrant colors and detailed imagery make it a true piece of art.',
    imageUrl: getImage('carpet-2').url,
    imageHint: getImage('carpet-2').hint,
  },
  {
    id: 'c3',
    vendorId: '1',
    name: 'Isfahan Shah Abbas Medallion',
    price: '$15,000',
    description: 'A masterpiece of Isfahani design, featuring the iconic Shah Abbas palmettes and a central medallion on an ivory field. Woven with kork wool and silk highlights.',
    imageUrl: getImage('carpet-3').url,
    imageHint: getImage('carpet-3').hint,
  },
  {
    id: 'c4',
    vendorId: '1',
    name: 'Fine Nain 6-La Habibian',
    price: '$18,500',
    description: 'A collectible Nain 6-La carpet, signed by the famous Habibian workshop. Its baby blue and cream tones are woven with incredible fineness.',
    imageUrl: getImage('carpet-4').url,
    imageHint: getImage('carpet-4').hint,
  },
  {
    id: 'c5',
    vendorId: '3',
    name: 'Sunset Gabbeh',
    price: '$3,200',
    description: 'A minimalist Gabbeh rug with a warm color gradient evoking a sunset over the Zagros mountains. Made with hand-spun, naturally dyed wool.',
    imageUrl: getImage('carpet-5').url,
    imageHint: getImage('carpet-5').hint,
  },
  {
    id: 'c6',
    vendorId: '2',
    name: 'Baluchi Prayer Rug',
    price: '$2,500',
    description: 'A vintage Baluchi prayer rug with deep, rich colors and traditional geometric motifs. A durable and soulful piece of nomadic art.',
    imageUrl: getImage('carpet-6').url,
    imageHint: getImage('carpet-6').hint,
  },
  {
    id: 'c7',
    vendorId: '3',
    name: 'Minimalist Grey Kilim',
    price: '$1,800',
    description: 'A contemporary Kilim flatweave in shades of grey, perfect for modern interiors. Its subtle texture adds warmth and sophistication.',
    imageUrl: getImage('carpet-7').url,
    imageHint: getImage('carpet-7').hint,
  },
    {
    id: 'c8',
    vendorId: '3',
    name: 'Bold Geometric Gabbeh',
    price: '$4,500',
    description: 'A modern Gabbeh featuring bold, abstract shapes and a vibrant color palette. This piece acts as a statement artwork for the floor.',
    imageUrl: getImage('carpet-8').url,
    imageHint: getImage('carpet-8').hint,
  },
];
