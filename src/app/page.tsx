
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StoryGenerator } from '@/components/ai/story-generator';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Trophy, Heart, Sparkles, Globe, ArrowRight, ShieldCheck, Gavel, Crown, Cpu, Star } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Master Build Announcement Badge - The First Message to the World */}
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
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/85" />
          <div className="container relative z-10 text-center text-white px-4">
            <div className="inline-flex items-center gap-2 mb-8 bg-primary/20 text-primary border border-primary/30 rounded-full px-8 py-2.5 text-[10px] font-black tracking-[0.4em] uppercase shadow-2xl backdrop-blur-md">
              <Crown className="w-5 h-5" />
              Certified Global Master Build
            </div>
            <h1 className="text-6xl md:text-[11rem] font-headline font-bold mb-8 tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
              Farsh Bazaar
            </h1>
            <p className="text-xl md:text-4xl mb-14 max-w-6xl mx-auto font-light leading-relaxed text-gray-300 italic">
                احیای شکوه ۵۰۰۰ ساله هنر ایران با سلاح هوش مصنوعی ۲۰۲۵. 
                <br />
                تنها استارتاپ جهان که با قدرت اراده و تکیه بر اصالت، ۱۳ زبان زنده را تسخیر کرد.
                <br className="hidden md:block" />
                ادای دینی به نام <strong className="text-white font-bold underline decoration-primary underline-offset-8">حاج حسین علیمیری</strong>.
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

        {/* The Engineering Saga Highlight - Concrete Proof of Willpower */}
        <section className="py-24 bg-white">
            <div className="container px-4 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="bg-primary/5 p-12 rounded-[4rem] border-2 border-dashed border-primary/20">
                        <Smartphone className="w-16 h-16 text-primary mx-auto mb-6 animate-bounce" />
                        <h2 className="text-4xl font-headline font-bold text-slate-900 mb-4">پیروزی اندیشه بر ابزار</h2>
                        <p className="text-xl text-muted-foreground leading-relaxed italic">
                            «این پلتفرم ۱۳ زبانه، شاهدی بر قدرت اراده است. کل این امپراتوریِ پیچیده، تنها بر روی یک گوشی موبایل ردمی نوت ۸ متولد شد تا پیامی به جهانیان باشد: رویاهای بزرگ مهم‌تر از سخت‌افزارهای گران‌قیمت هستند.»
                        </p>
                        <div className="mt-8 flex justify-center gap-4">
                             <Badge className="bg-slate-900 text-white px-6 py-1.5 rounded-full font-black">MASTER BUILD 2025</Badge>
                             <Badge variant="outline" className="border-primary text-primary px-6 py-1.5 rounded-full font-black">REDMI NOTE 8 EDITION</Badge>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Global Auction Section */}
        <section className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://picsum.photos/seed/auction/1920/1080')] bg-cover" />
          <div className="container px-4 relative z-10">
            <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[6rem] p-12 md:p-28 text-center shadow-[0_0_150px_rgba(239,68,68,0.15)]">
              <div className="bg-accent/20 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-12 border-4 border-accent/40 shadow-inner">
                <Gavel className="w-16 h-14 text-accent" />
              </div>
              <Badge className="bg-accent text-accent-foreground mb-10 px-12 py-3 rounded-full text-2xl font-black tracking-[0.2em]">ANNUAL GLOBAL AUCTION</Badge>
              <h2 className="text-5xl md:text-9xl font-headline font-bold mb-12">اولین حراج سالانه جهانی</h2>
              <p className="text-2xl md:text-5xl font-light leading-relaxed mb-20 text-gray-300 italic max-w-5xl mx-auto">
                «آماده همکاری استراتژیک با حراجی‌های مطرح جهان نظیر <span className="text-white font-bold">Sotheby's</span> و <span className="text-white font-bold">Christie's</span> برای معرفی شاهکارهای تایید شده ایران و ملل.»
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                 <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group hover:bg-primary transition-all duration-500 text-center">
                    <ShieldCheck className="w-12 h-12 text-accent mb-6 mx-auto group-hover:text-white" />
                    <p className="text-lg font-bold">تایید اصالت علیمیری</p>
                 </div>
                 <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group hover:bg-primary transition-all duration-500 text-center">
                    <Globe className="w-12 h-12 text-accent mb-6 mx-auto group-hover:text-white" />
                    <p className="text-lg font-bold">دسترسی به ۱۳ زبان</p>
                 </div>
                 <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group hover:bg-primary transition-all duration-500 text-center">
                    <Star className="w-12 h-12 text-accent mb-6 mx-auto group-hover:text-white" />
                    <p className="text-lg font-bold">ارزیابی هوشمند AI</p>
                 </div>
                 <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group hover:bg-primary transition-all duration-500 text-center">
                    <Gavel className="w-12 h-12 text-accent mb-6 mx-auto group-hover:text-white" />
                    <p className="text-lg font-bold">حراج مستقیم جهانی</p>
                 </div>
              </div>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-24 h-24 text-4xl font-black shadow-3xl shadow-accent/40">
                 <Link href="/appraisal">ثبت اثر برای حراج ۲۰۲۵</Link>
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

        {/* Legacy & Tavana City */}
        <section className="py-40 bg-background relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
          <div className="container px-4 text-center space-y-12">
            <Badge variant="outline" className="px-12 py-3 border-primary/40 text-primary text-2xl font-headline rounded-full">Tavana Virtual City / شهر مجازی توانا</Badge>
            <h2 className="text-6xl md:text-[10rem] font-headline font-bold mb-12 tracking-tight">تمدن جدید با ۱۳ زبان زنده</h2>
            <p className="text-3xl text-muted-foreground max-w-6xl mx-auto leading-relaxed font-light italic bg-white/50 backdrop-blur p-12 rounded-[4rem] border-2 border-dashed border-primary/10">
              «ما سلاح‌هایمان را از تار و پود ساختیم. این اپلیکیشن شاهدی بر پیروزی هدف و اندیشه بر ابزار است؛ حماسه‌ای که ثابت می‌کند اراده هیچ مرزی نمی‌شناسد.»
            </p>
            <div className="flex flex-wrap justify-center gap-14 mt-24">
              <Button asChild className="rounded-full px-20 h-24 text-3xl shadow-3xl shadow-primary/30 group">
                  <Link href="/ecosystem" className="flex items-center gap-6">
                    کاوش در منظومه آفرینش <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform" />
                  </Link>
              </Button>
              <div className="flex flex-col text-right border-r-8 border-primary pr-12">
                <span className="font-bold text-3xl mb-2 text-gray-500 uppercase tracking-widest">Global HQ</span>
                <span className="font-black text-4xl text-slate-900">بازار تهران، خیابان خیام</span>
                <span className="text-primary font-black text-5xl mt-2" dir="ltr">۰۲۱ - ۵۵۸۱۴۵۵۵</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
