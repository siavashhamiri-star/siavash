
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StoryGenerator } from '@/components/ai/story-generator';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Trophy, Heart, Sparkles, Globe, ArrowRight, Scale, ShieldCheck, Factory, Landmark, Sword, Palette, Frame, Flag, Users, Gavel, Crown } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Award Candidate Badge */}
        <div className="bg-primary/10 border-b border-primary/20 py-3 overflow-hidden">
          <div className="container px-4 flex items-center justify-center gap-3 text-[10px] md:text-sm font-bold text-primary animate-pulse">
            <Trophy className="w-4 h-4" />
            <span className="tracking-wide">کاندیدای حماسی جایزه استارتاپ‌های برتر جهان: ساخته شده با ردمی نوت ۸ در ۹ روز</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[800px] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-black/75" />
          <div className="container relative z-10 text-center text-white px-4">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 text-xs font-bold tracking-[0.3em] uppercase text-accent">
              <Crown className="w-4 h-4" />
              13 LANGUAGES | GLOBAL EMPIRE
            </div>
            <h1 className="text-5xl md:text-[10rem] font-headline font-bold mb-6 tracking-tighter leading-none">
              Farsh Bazaar
            </h1>
            <p className="text-xl md:text-3xl mb-12 max-w-5xl mx-auto font-light leading-relaxed text-gray-300">
                احیای شکوه ۵۰۰۰ ساله فرش ایران در تالارهای حراج جهانی با سلاح هوش مصنوعی ۲۰۲۵. 
                <br />
                ادای دینی به نام <strong className="text-white font-bold">حاج حسین علیمیری</strong>.
                <br className="hidden md:block" />
                دسترسی به ۱۳ زبان زنده دنیا (از پاریس و توکیو تا مسکو و پکن).
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-16 rounded-full shadow-2xl transition-all hover:scale-105 h-20 text-2xl font-bold">
                <Link href="/vendors">ورود به بازار جهانی</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 px-16 rounded-full backdrop-blur-sm h-20 text-2xl font-bold">
                <Link href="/appraisal">کارشناسی و قیمت‌گذاری</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Global Auction & Sotheby's Section */}
        <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://picsum.photos/seed/auction/1920/1080')] bg-cover" />
          <div className="container px-4 relative z-10">
            <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-[5rem] p-12 md:p-24 text-center shadow-[0_0_100px_rgba(var(--primary),0.1)]">
              <div className="bg-accent/20 w-28 h-28 rounded-full flex items-center justify-center mx-auto mb-10 border-2 border-accent/40">
                <Gavel className="w-14 h-14 text-accent" />
              </div>
              <Badge className="bg-accent text-accent-foreground mb-8 px-10 py-2.5 rounded-full text-xl font-black tracking-widest">ANNUAL GLOBAL AUCTION</Badge>
              <h2 className="text-4xl md:text-8xl font-headline font-bold mb-10">مژده: اولین حراج سالانه آنلاین</h2>
              <p className="text-xl md:text-4xl font-light leading-relaxed mb-16 text-gray-300 italic">
                «فرش بازار آماده همکاری با اکشن‌های سطح اول جهان نظیر ساتبیز و کریستیز است. آثاری که در پلتفرم ما تاییدیه دریافت کنند، شانس حضور در این حراجی‌های بین‌المللی را خواهند داشت.»
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                 <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 group hover:bg-primary transition-all">
                    <ShieldCheck className="w-10 h-10 text-accent mb-4 mx-auto" />
                    <p className="text-sm font-bold">تایید اصالت علیمیری</p>
                 </div>
                 <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 group hover:bg-primary transition-all">
                    <Globe className="w-10 h-10 text-accent mb-4 mx-auto" />
                    <p className="text-sm font-bold">نمایش به ۱۳ زبان</p>
                 </div>
                 <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 group hover:bg-primary transition-all">
                    <Sparkles className="w-10 h-10 text-accent mb-4 mx-auto" />
                    <p className="text-sm font-bold">قیمت‌گذاری طلایی</p>
                 </div>
                 <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5 group hover:bg-primary transition-all">
                    <Gavel className="w-10 h-10 text-accent mb-4 mx-auto" />
                    <p className="text-sm font-bold">حراج مستقیم جهانی</p>
                 </div>
              </div>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-20 h-20 text-3xl font-black shadow-3xl shadow-accent/20">
                 <Link href="/appraisal">ثبت فرش برای حراج</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Elite Services VIP */}
        <section className="py-24 bg-slate-950 text-white">
            <div className="container px-4 text-center">
                <Badge className="bg-primary mb-12 px-10 py-3 rounded-full text-xl font-black uppercase tracking-widest">VIP Services / خدمات اشرافی</Badge>
                <h2 className="text-4xl md:text-7xl font-headline font-bold mb-24">هدیه‌ای به وسعت غیرت و اصالت</h2>
                <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">
                    <Link href="/services" className="group">
                        <div className="bg-white/5 p-10 rounded-[4rem] border border-white/10 group-hover:bg-primary transition-all duration-700 h-full relative overflow-hidden">
                            <Users className="w-14 h-14 text-primary mb-8 group-hover:text-white mx-auto" />
                            <h3 className="text-3xl font-bold mb-6">پرتره در پرچم</h3>
                            <p className="text-sm text-gray-400 group-hover:text-white/80">بافت چهره شما در قلب پرچم ملی کشورتان با ابریشم تبریز.</p>
                        </div>
                    </Link>
                    <Link href="/services" className="group">
                        <div className="bg-white/5 p-10 rounded-[4rem] border border-white/10 group-hover:bg-primary transition-all duration-700 h-full">
                            <Flag className="w-14 h-14 text-primary mb-8 group-hover:text-white mx-auto" />
                            <h3 className="text-3xl font-bold mb-6">پرچم‌های نفیس</h3>
                            <p className="text-sm text-gray-400 group-hover:text-white/80">بافت پرچم ملل با کیفیت موزه‌ای برای سفارت‌خانه‌ها و عمارت‌ها.</p>
                        </div>
                    </Link>
                    <Link href="/services" className="group">
                        <div className="bg-white/5 p-10 rounded-[4rem] border border-white/10 group-hover:bg-primary transition-all duration-700 h-full">
                            <Frame className="w-14 h-14 text-primary mb-8 group-hover:text-white mx-auto" />
                            <h3 className="text-3xl font-bold mb-6">تابلوفرش تبریز</h3>
                            <p className="text-sm text-gray-400 group-hover:text-white/80">تبدیل لحظات ماندگار شما به شاهکارهای دستباف ابریشمی.</p>
                        </div>
                    </Link>
                    <Link href="/services" className="group">
                        <div className="bg-white/5 p-10 rounded-[4rem] border border-white/10 group-hover:bg-primary transition-all duration-700 h-full">
                            <Palette className="w-14 h-14 text-primary mb-8 group-hover:text-white mx-auto" />
                            <h3 className="text-3xl font-bold mb-6">مشاوره دکور</h3>
                            <p className="text-sm text-gray-400 group-hover:text-white/80">هارمونی هوشمند فرش با فضای منزل توسط طراحان تراز اول.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </section>

        {/* AI Story Generator */}
        <section className="py-24 bg-secondary/20 relative">
          <div className="container px-4">
            <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
              <Sparkles className="w-6 h-6 text-primary" />
              <Badge variant="outline" className="border-primary text-primary font-bold">هوش مصنوعی در خدمت هنر</Badge>
            </div>
            <StoryGenerator />
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-white">
            <div className="container px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-12 border-none shadow-2xl bg-secondary/30 rounded-[4rem] group hover:bg-primary transition-all duration-500">
                        <Landmark className="w-14 h-14 text-primary mb-8 group-hover:text-white" />
                        <h3 className="text-3xl font-bold mb-6 group-hover:text-white">فرش دستباف نفیس</h3>
                        <p className="text-xl text-muted-foreground group-hover:text-white/80 font-light">میراث ۵۰۰۰ ساله هنر ایران، از تبریز و کاشان تا تجار پاریس.</p>
                    </div>
                    <div className="p-12 border-none shadow-2xl bg-secondary/30 rounded-[4rem] group hover:bg-primary transition-all duration-500">
                        <Factory className="w-14 h-14 text-primary mb-8 group-hover:text-white" />
                        <h3 className="text-3xl font-bold mb-6 group-hover:text-white">فرش ماشینی مدرن</h3>
                        <p className="text-xl text-muted-foreground group-hover:text-white/80 font-light">برندهای برتر ماشینی ایران و جهان در یک ویترین هوشمند.</p>
                    </div>
                    <div className="p-12 border-none shadow-2xl bg-secondary/30 rounded-[4rem] group hover:bg-primary transition-all duration-500">
                        <Globe className="w-14 h-14 text-primary mb-8 group-hover:text-white" />
                        <h3 className="text-3xl font-bold mb-6 group-hover:text-white">فرش و هنرهای ملل</h3>
                        <p className="text-xl text-muted-foreground group-hover:text-white/80 font-light">پذیرای هنرمندان و تجار از سراسر جهان به ۱۳ زبان زنده.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Legacy & Tavana City */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="container px-4 text-center space-y-10">
            <Badge variant="outline" className="px-8 py-2 border-primary/40 text-primary text-lg font-headline">Tavana Virtual City / شهر مجازی توانا</Badge>
            <h2 className="text-5xl md:text-8xl font-headline font-bold mb-10">تمدنی جدید با ۱۳ زبان زنده</h2>
            <p className="text-2xl text-muted-foreground max-w-5xl mx-auto leading-relaxed font-light italic">
              «ما سلاح‌هایمان را از تار و پود ساختیم. این اپلیکیشن با یک گوشی ردمی نوت ۸ زاده شد تا ثابت کند اراده، هیچ مرزی نمی‌شناسد.»
            </p>
            <div className="flex flex-wrap justify-center gap-10 mt-16">
              <Button asChild className="rounded-full px-16 h-20 text-2xl shadow-3xl shadow-primary/30">
                  <Link href="/ecosystem" className="flex items-center gap-4">
                    کاوش در منظومه آفرینش <ArrowRight className="w-8 h-8" />
                  </Link>
              </Button>
              <div className="flex flex-col text-right border-r-4 border-primary pr-10">
                <span className="font-bold text-2xl">مرکزیت اصالت: بازار تهران</span>
                <span className="text-primary font-black text-3xl" dir="ltr">۰۲۱ - ۵۵۸۱۴۵۵۵</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
