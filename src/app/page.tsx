
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StoryGenerator } from '@/components/ai/story-generator';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Trophy, Heart, Sparkles, Globe, ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Mobile Build Badge - Enhanced */}
        <div className="bg-primary/10 border-b border-primary/20 py-3 overflow-hidden">
          <div className="container px-4 flex items-center justify-center gap-3 text-[10px] md:text-sm font-bold text-primary animate-pulse">
            <Smartphone className="w-4 h-4" />
            <span className="tracking-wide">این برنامه حماسی تنها با یک گوشی ردمی نوت ۸ در ۹ روز خلق شده است</span>
            <span className="hidden md:inline text-primary/30">|</span>
            <span className="hidden md:inline font-light">Built with pure will on a mobile phone</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-black/65" />
          <div className="container relative z-10 text-center text-white px-4">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary-foreground">
              <Globe className="w-3 h-3" />
              New Metaverse / نیو متاورس
            </div>
            <h1 className="text-5xl md:text-8xl font-headline font-bold mb-6 tracking-tighter">
              Farsh Bazaar
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light leading-relaxed text-gray-200">
              ادای دینی به شکوه نام <strong className="text-white font-bold">حاج حسین علیمیری</strong>، اسطوره تجارت جهانی فرش. 
              <br className="hidden md:block" />
              برآمده از میراث ماندگار <strong className="text-white font-bold">«فرش حسین علیمیری و پسران»</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105">
                <Link href="/vendors">ورود به نمایشگاه‌ها</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 px-10 rounded-full backdrop-blur-sm">
                <Link href="/manifesto">کتاب آفرینش / Manifesto</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* The Vision Section - The Advertisement */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="container px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <Badge variant="outline" className="border-primary text-primary px-4 py-1 rounded-full font-bold">
                  منظومه‌ی آفرینش (Afarinesh)
                </Badge>
                <h2 className="text-4xl md:text-6xl font-headline font-bold text-foreground leading-tight">
                  از قلب بازار تهران تا مرزهای هوش مصنوعی
                </h2>
                <div className="prose prose-lg text-muted-foreground leading-relaxed">
                  <p>
                    این یک اپلیکیشن نیست؛ این حماسه‌ای است که ثابت کرد اراده، هیچ مرزی نمی‌شناسد. 
                    ما با تکیه بر اصالت <span className="font-bold text-primary">فرش علیمیری</span> و قدرت <span className="font-bold text-primary">هوش مصنوعی</span>، 
                    بازاری جهانی برای تمام صنایع دستی ایران ساخته‌ایم.
                  </p>
                  <p className="font-bold text-foreground">
                    گلیم، جاجیم، ظروف نقره، تابلوهای نقاشی و هنرهای اصیل، اکنون خانه‌ای جهانی دارند.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6">
                   <Button asChild size="lg" className="rounded-full px-8">
                      <Link href="/ecosystem">کاوش در اکوسیستم <ArrowRight className="mr-2 h-4 w-4" /></Link>
                   </Button>
                   <div className="flex flex-col text-sm">
                      <span className="font-bold">خیابان خیام شمالی، پلاک ۴۸</span>
                      <span className="text-muted-foreground" dir="ltr">۰۲۱ - ۵۵۸۱۴۵۵۵</span>
                   </div>
                </div>
              </div>
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-primary/5 rounded-[4rem] -rotate-6" />
                <Image 
                  src="https://picsum.photos/seed/creation/800/800" 
                  alt="Afarinesh Creation" 
                  width={800} 
                  height={800} 
                  className="rounded-[4rem] shadow-2xl relative z-10 object-cover rotate-3 hover:rotate-0 transition-transform duration-500"
                  data-ai-hint="artistic workshop"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI Story Generator Section */}
        <section className="py-24 bg-secondary/20 relative">
          <div className="container px-4">
            <div className="flex items-center gap-2 mb-8 justify-center md:justify-start">
              <Sparkles className="w-6 h-6 text-primary" />
              <Badge variant="outline" className="border-primary text-primary font-bold">بخش هوشمند آفرینش</Badge>
            </div>
            <StoryGenerator />
          </div>
        </section>

        {/* Legacy & Tavana City */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="container px-4 text-center space-y-8">
            <Badge variant="outline" className="px-6 py-1 border-primary/40 text-primary text-sm font-headline">Tavana Virtual City / شهر مجازی توانا</Badge>
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">آغاز یک دنیای جدید</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              فرش بازار تنها یک شروع است. ما در حال ساختن تمدنی دیجیتال بر پایه توانمندی و تخصص هستیم. 
              این حقیقت که این برنامه با یک موبایل متولد شد، ثابت می‌کند که در <span className="text-primary font-bold">شهر توانا</span>، تنها مرز ما، همت ماست.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Button asChild variant="link" className="text-primary text-lg font-bold group">
                  <Link href="/ecosystem" className="flex items-center gap-2">
                    کاوش در اکوسیستم FB New Meta <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
