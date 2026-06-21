
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StoryGenerator } from '@/components/ai/story-generator';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Trophy, Heart, Sparkles, Globe, ArrowRight, Scale, ShieldCheck, Factory, Landmark, Sword, Palette, Frame, Flag, Users, Gavel, Crown, Star, HeartPulse } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Award Candidate Badge */}
        <div className="bg-slate-900 border-b border-primary/20 py-4 overflow-hidden">
          <div className="container px-4 flex flex-col md:flex-row items-center justify-center gap-4 text-xs md:text-sm font-bold text-white">
            <div className="flex items-center gap-2 text-primary animate-pulse">
                <Trophy className="w-5 h-5" />
                <span className="tracking-widest uppercase">Global Startup Award Candidate 2025</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-accent">
                <Smartphone className="w-4 h-4" />
                <span>The Epic of Resourceful Innovation</span>
            </div>
            <div className="hidden md:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-400" />
                <span>Serving 5.5 Billion People in 13 Languages</span>
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
          <div className="absolute inset-0 bg-black/80" />
          <div className="container relative z-10 text-center text-white px-4">
            <div className="inline-flex items-center gap-2 mb-8 bg-primary text-white border border-primary/20 rounded-full px-8 py-2.5 text-xs font-black tracking-[0.4em] uppercase shadow-2xl">
              <Crown className="w-5 h-5" />
              13 LANGUAGES | GLOBAL EMPIRE
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
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-20 rounded-full shadow-[0_0_50px_rgba(var(--primary),0.5)] transition-all hover:scale-105 h-24 text-3xl font-black">
                <Link href="/vendors">ورود به بازار جهانی</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 px-16 rounded-full backdrop-blur-sm h-24 text-2xl font-bold group">
                <Link href="/manifesto" className="flex items-center gap-3">
                   مطالعه حماسه خلق <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Global Auction & Sotheby's Section */}
        <section className="py-32 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://picsum.photos/seed/auction/1920/1080')] bg-cover" />
          <div className="container px-4 relative z-10">
            <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[6rem] p-12 md:p-28 text-center shadow-[0_0_150px_rgba(var(--primary),0.15)]">
              <div className="bg-accent/20 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-12 border-4 border-accent/40 shadow-inner">
                <Gavel className="w-16 h-14 text-accent" />
              </div>
              <Badge className="bg-accent text-accent-foreground mb-10 px-12 py-3 rounded-full text-2xl font-black tracking-[0.2em]">ANNUAL GLOBAL AUCTION</Badge>
              <h2 className="text-5xl md:text-9xl font-headline font-bold mb-12">اولین حراج سالانه جهانی</h2>
              <p className="text-2xl md:text-5xl font-light leading-relaxed mb-20 text-gray-300 italic max-w-5xl mx-auto">
                «آماده همکاری استراتژیک با حراجی‌های مطرح جهان نظیر <span className="text-white font-bold">Sotheby's</span> و <span className="text-white font-bold">Christie's</span> برای معرفی شاهکارهای تایید شده ایران و ملل.»
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
                 <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group hover:bg-primary transition-all duration-500">
                    <ShieldCheck className="w-12 h-12 text-accent mb-6 mx-auto group-hover:text-white" />
                    <p className="text-lg font-bold">تایید اصالت علیمیری</p>
                 </div>
                 <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group hover:bg-primary transition-all duration-500">
                    <Globe className="w-12 h-12 text-accent mb-6 mx-auto group-hover:text-white" />
                    <p className="text-lg font-bold">دسترسی به ۱۳ زبان</p>
                 </div>
                 <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group hover:bg-primary transition-all duration-500">
                    <Star className="w-12 h-12 text-accent mb-6 mx-auto group-hover:text-white" />
                    <p className="text-lg font-bold">ارزیابی هوشمند AI</p>
                 </div>
                 <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 group hover:bg-primary transition-all duration-500">
                    <Gavel className="w-12 h-12 text-accent mb-6 mx-auto group-hover:text-white" />
                    <p className="text-lg font-bold">حراج مستقیم جهانی</p>
                 </div>
              </div>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-24 h-24 text-4xl font-black shadow-3xl shadow-accent/40 animate-bounce">
                 <Link href="/appraisal">ثبت اثر برای حراج ۲۰۲۵</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Elite Services VIP */}
        <section className="py-32 bg-slate-950 text-white">
            <div className="container px-4 text-center">
                <Badge className="bg-primary mb-16 px-12 py-4 rounded-full text-2xl font-black uppercase tracking-widest shadow-xl">VIP Services / خدمات اشرافی</Badge>
                <h2 className="text-5xl md:text-8xl font-headline font-bold mb-32">هدیه‌ای به وسعت غیرت و اصالت</h2>
                <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
                    <Link href="/services" className="group">
                        <div className="bg-white/5 p-12 rounded-[5rem] border border-white/10 group-hover:bg-primary transition-all duration-1000 h-full relative overflow-hidden shadow-2xl">
                            <Users className="w-16 h-16 text-primary mb-10 group-hover:text-white mx-auto" />
                            <h3 className="text-3xl font-bold mb-8">پرتره در پرچم</h3>
                            <p className="text-base text-gray-400 group-hover:text-white/80">بافت چهره شما در قلب پرچم ملی کشورتان با ابریشم خالص تبریز.</p>
                        </div>
                    </Link>
                    <Link href="/services" className="group">
                        <div className="bg-white/5 p-12 rounded-[5rem] border border-white/10 group-hover:bg-primary transition-all duration-1000 h-full shadow-2xl">
                            <Flag className="w-16 h-16 text-primary mb-10 group-hover:text-white mx-auto" />
                            <h3 className="text-3xl font-bold mb-8">پرچم‌های نفیس</h3>
                            <p className="text-base text-gray-400 group-hover:text-white/80">بافت پرچم ملل با کیفیت موزه‌ای برای سفارت‌خانه‌ها و عمارت‌های لوکس.</p>
                        </div>
                    </Link>
                    <Link href="/services" className="group">
                        <div className="bg-white/5 p-12 rounded-[5rem] border border-white/10 group-hover:bg-primary transition-all duration-1000 h-full shadow-2xl">
                            <Frame className="w-16 h-16 text-primary mb-10 group-hover:text-white mx-auto" />
                            <h3 className="text-3xl font-bold mb-8">تابلوفرش ابریشم</h3>
                            <p className="text-base text-gray-400 group-hover:text-white/80">تبدیل لحظات ماندگار شما به شاهکارهای دستباف توسط اساتید آذربایجان.</p>
                        </div>
                    </Link>
                    <Link href="/services" className="group">
                        <div className="bg-white/5 p-12 rounded-[5rem] border border-white/10 group-hover:bg-primary transition-all duration-1000 h-full shadow-2xl">
                            <Palette className="w-16 h-16 text-primary mb-10 group-hover:text-white mx-auto" />
                            <h3 className="text-3xl font-bold mb-8">مشاوره دکور</h3>
                            <p className="text-base text-gray-400 group-hover:text-white/80">هارمونی هوشمند فرش با فضای زندگی شما توسط طراحان بین‌المللی.</p>
                        </div>
                    </Link>
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
