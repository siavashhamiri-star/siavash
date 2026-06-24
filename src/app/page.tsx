import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StoryGenerator } from '@/components/ai/story-generator';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Trophy, Sparkles, Globe, ArrowRight, Gavel, Crown, Cpu } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Master Build Announcement Badge */}
        <div className="bg-slate-950 border-b border-primary/30 py-3 overflow-hidden">
          <div className="container px-4 flex flex-col md:flex-row items-center justify-center gap-6 text-[10px] md:text-xs font-black text-white tracking-widest uppercase text-center md:text-left">
            <div className="flex items-center gap-2 text-primary animate-pulse">
                <Trophy className="w-4 h-4" />
                <span>Global Master Build 2025 Candidate</span>
            </div>
            <div className="hidden md:block w-px h-3 bg-white/20" />
            <div className="flex items-center gap-2 text-accent">
                <Cpu className="w-4 h-4" />
                <span>Engineering Saga: The Redmi Note 8 Build</span>
            </div>
            <div className="hidden md:block w-px h-3 bg-white/20" />
            <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>13 Languages | 5.5 Billion People</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[850px] flex items-center justify-center overflow-hidden">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint="persian carpet"
            />
          )}
          <div className="absolute inset-0 bg-black/85" />
          <div className="container relative z-10 text-center text-white px-4">
            <div className="inline-flex items-center gap-2 mb-8 bg-primary/20 text-primary border border-primary/30 rounded-full px-8 py-2.5 text-[10px] font-black tracking-[0.4em] uppercase shadow-2xl backdrop-blur-md">
              <Crown className="w-5 h-5" />
              Certified Global Master Build
            </div>
            <h1 className="text-6xl md:text-[11rem] font-headline font-bold mb-8 tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              Aras Heritage
            </h1>
            <p className="text-xl md:text-4xl mb-14 max-w-6xl mx-auto font-light leading-relaxed text-gray-300 italic">
                The World&apos;s Elite Destination for **Persian Carpets & Rugs**. 
                <br />
                احیای شکوه ۵۰۰۰ ساله هنر ایران با سلاح هوش مصنوعی ۲۰۲۵ (Farsh Bazaar). 
                <br className="hidden md:block" />
                ادای دینی به نام <strong className="text-white font-bold underline decoration-primary underline-offset-8">حاج حسین علیمیری (بازار فرش ایران)</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-20 rounded-full shadow-[0_0_50px_rgba(239,68,68,0.4)] transition-all hover:scale-105 h-24 text-3xl font-black">
                <Link href="/vendors">ورود به بازار جهانی</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 px-16 rounded-full backdrop-blur-sm h-24 text-2xl font-bold group">
                <Link href="/manifesto" className="flex items-center gap-3">
                   مشاهده حماسه‌ی مهندسی <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* AI Story Generator */}
        <section className="py-32 bg-secondary/20 relative">
          <div className="container px-4">
            <div className="flex items-center gap-3 mb-12 justify-center md:justify-start">
              <Sparkles className="w-10 h-10 text-primary" />
              <Badge variant="outline" className="border-primary text-primary font-bold px-6 py-2 text-lg">هوش مصنوعی در خدمت هنر</Badge>
            </div>
            <StoryGenerator />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
