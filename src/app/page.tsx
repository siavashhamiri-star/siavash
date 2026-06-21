
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StoryGenerator } from '@/components/ai/story-generator';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Trophy, Heart, Sparkles, Globe, ArrowRight, Scale, ShieldCheck, Factory, Landmark } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Mobile Build Badge */}
        <div className="bg-primary/10 border-b border-primary/20 py-3 overflow-hidden">
          <div className="container px-4 flex items-center justify-center gap-3 text-[10px] md:text-sm font-bold text-primary animate-pulse">
            <Smartphone className="w-4 h-4" />
            <span className="tracking-wide">این برنامه حماسی تنها با یک گوشی ردمی نوت ۸ در ۹ روز خلق شده است</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative h-[750px] flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-black/70" />
          <div className="container relative z-10 text-center text-white px-4">
            <div className="inline-flex items-center gap-2 mb-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-primary-foreground">
              <Globe className="w-3 h-3" />
              Global Heritage & Digital Weapon / میراث جهانی و سلاح دیجیتال
            </div>
            <h1 className="text-5xl md:text-9xl font-headline font-bold mb-6 tracking-tighter">
              Farsh Bazaar
            </h1>
            <p className="text-xl md:text-3xl mb-10 max-w-4xl mx-auto font-light leading-relaxed text-gray-200">
                بازگرداندن شکوه و رونق گذشته فرش در عصر دیجیتال با سلاح تکنولوژی. 
                <br />
                ادای دینی به نام <strong className="text-white font-bold">حاج حسین علیمیری</strong>.
                <br className="hidden md:block" />
                مرکزیت اصالت: بازار تهران، خیابان خیام شمالی، پلاک ۴۸.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 rounded-full shadow-2xl transition-all hover:scale-105 h-16 text-xl">
                <Link href="/vendors">ورود به بازار جهانی</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10 px-12 rounded-full backdrop-blur-sm h-16 text-xl">
                <Link href="/appraisal">کارشناسی و ارزیابی آنلاین</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24 bg-white">
            <div className="container px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="p-8 border-none shadow-xl bg-secondary/30 rounded-[3rem] group hover:bg-primary transition-all duration-500">
                        <Landmark className="w-12 h-12 text-primary mb-6 group-hover:text-white" />
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-white">فرش دستباف نفیس</h3>
                        <p className="text-muted-foreground group-hover:text-white/80">میراث ۵۰۰۰ ساله هنر ایران، از تبریز و کاشان تا عشایر قشقایی.</p>
                    </Card>
                    <Card className="p-8 border-none shadow-xl bg-secondary/30 rounded-[3rem] group hover:bg-primary transition-all duration-500">
                        <Factory className="w-12 h-12 text-primary mb-6 group-hover:text-white" />
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-white">فرش ماشینی مدرن</h3>
                        <p className="text-muted-foreground group-hover:text-white/80">تکنولوژی روز دنیا در خدمت صنعت فرش؛ ۱۲۰۰ شانه، تراکم ۳۶۰۰ و بالاتر.</p>
                    </Card>
                    <Card className="p-8 border-none shadow-xl bg-secondary/30 rounded-[3rem] group hover:bg-primary transition-all duration-500">
                        <Globe className="w-12 h-12 text-primary mb-6 group-hover:text-white" />
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-white">فرش و هنرهای ملل</h3>
                        <p className="text-muted-foreground group-hover:text-white/80">پذیرای هنرمندان و تجار از تمامی ممالک جهان در یک پلتفرم واحد.</p>
                    </Card>
                </div>
            </div>
        </section>

        {/* Monetization Engine: Appraisal Section */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 p-20 opacity-10">
              <Scale className="w-64 h-64" />
          </div>
          <div className="container px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 text-right">
                <Badge variant="outline" className="border-white text-white px-4 py-1 rounded-full font-bold">سلاح درآمدزای آفرینش</Badge>
                <h2 className="text-4xl md:text-6xl font-headline font-bold">ارزش‌گذاری علمی فرش</h2>
                <p className="text-xl opacity-80 leading-relaxed">
                  آیا فرشی دارید که ارزش آن را نمی‌دانید؟ از دستباف‌های آنتیک تا ماشینی‌های برند؛ تیم کارشناسی «فرش علیمیری» مرجع نهایی قیمت‌گذاری شماست.
                </p>
                <div className="flex flex-wrap gap-4 justify-start">
                   <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                      <span>صدور شناسنامه دیجیتال</span>
                   </div>
                   <div className="flex items-center gap-2 bg-white/10 p-3 rounded-xl border border-white/10">
                      <Trophy className="w-5 h-5 text-accent" />
                      <span>تاییدیه میراث علیمیری</span>
                   </div>
                </div>
                <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-16 text-xl mt-4">
                  <Link href="/appraisal">پرداخت و ثبت درخواست ارزیابی <ArrowRight className="mr-2 w-5 h-5" /></Link>
                </Button>
              </div>
              <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
                 <Image src="https://picsum.photos/seed/appraisal-2/800/600" alt="Carpet Appraisal" fill className="object-cover" />
              </div>
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

        {/* Legacy & Tavana City */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="container px-4 text-center space-y-8">
            <Badge variant="outline" className="px-6 py-1 border-primary/40 text-primary text-sm font-headline">Tavana Virtual City / شهر مجازی توانا</Badge>
            <h2 className="text-4xl md:text-7xl font-headline font-bold mb-6">احیای رونق در عصر پیکسل</h2>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light italic">
              «ما سلاح‌هایمان را از تار و پود ساختیم. این اپلیکیشن نه برای فروش، بلکه برای بازگرداندنِ شکوهِ از دست رفته‌ای است که با یک گوشی ساده ردمی نوت ۸ دوباره جوانه زد.»
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              <Button asChild className="rounded-full px-10 h-14 text-lg">
                  <Link href="/ecosystem" className="flex items-center gap-2">
                    کاوش در کل اکوسیستم آفرینش <ArrowRight className="mr-2 h-4 w-4" />
                  </Link>
              </Button>
              <div className="flex flex-col text-right border-r-4 border-primary pr-6">
                <span className="font-bold text-lg">بازار تهران، خیابان خیام شمالی، پلاک ۴۸</span>
                <span className="text-primary font-black text-xl" dir="ltr">۰۲۱ - ۵۵۸۱۴۵۵۵</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Card({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}
