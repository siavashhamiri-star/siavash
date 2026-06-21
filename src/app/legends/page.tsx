
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Mic2, History, Users, Quote, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const legends = [
  {
    name: "حاج حسین علیمیری",
    role: "اسطوره‌ی بازار و بنیان‌گذار میراث علیمیری",
    bio: "مردی که با همت خود، استانداردهای جدیدی در تجارت جهانی فرش ایران بنا نهاد و نام ایران را در بازارهای بین‌المللی سربلند کرد.",
    image: "https://picsum.photos/seed/alimiri/400/500"
  },
  {
    name: "استاد رسام عرب‌زاده",
    role: "نوآور طرح و رنگ در فرش نوین",
    bio: "هنرمندی که با جسارت خود، روح تازه‌ای به کالبد طرح‌های کلاسیک دمید و موزه‌ای ماندگار از آثارش به جای گذاشت.",
    image: "https://picsum.photos/seed/master/400/500"
  }
];

export default function LegendsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/10">
        <section className="relative py-32 bg-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/heritage/1920/1080')] bg-cover" />
          <div className="container relative z-10 px-4 text-center">
            <Trophy className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
            <h1 className="text-4xl md:text-7xl font-headline font-bold mb-6">مشاهیر و اسطوره‌های فرش</h1>
            <p className="text-2xl font-light max-w-3xl mx-auto leading-relaxed">بزرگداشت کسانی که با سرپنجه‌های هنر و همت تجارت، فرش ایران را جهانی کردند.</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {legends.map((legend, idx) => (
              <Card key={idx} className="flex flex-col md:flex-row overflow-hidden border-none shadow-2xl rounded-[2rem] bg-white">
                <div className="relative w-full md:w-1/2 h-80 md:h-auto">
                  <Image src={legend.image} alt={legend.name} fill className="object-cover" />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <History className="w-8 h-8 text-primary/30 mb-4" />
                  <CardTitle className="text-3xl font-headline mb-2">{legend.name}</CardTitle>
                  <CardDescription className="text-primary font-bold mb-4">{legend.role}</CardDescription>
                  <p className="text-muted-foreground leading-relaxed italic">"{legend.bio}"</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-primary p-12 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Mic2 className="w-48 h-48" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <Users className="w-12 h-12 mx-auto mb-6" />
              <h2 className="text-3xl md:text-5xl font-headline font-bold mb-8">فراخوان ثبت تاریخ شفاهی</h2>
              <p className="text-xl mb-10 leading-relaxed">
                آیا خاطره‌ای از بزرگان بازار دارید؟ آیا مایلید شرح حال اساتید گمنام منطقه خود را بنویسید؟ 
                ما پذیرای مصاحبه‌ها، عکس‌های قدیمی و دست‌نوشته‌های شما برای انتشار در تالار افتخارات فرش بازار هستیم.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" variant="secondary" className="rounded-full px-12">ارسال محتوا / مصاحبه</Button>
                <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10 px-12">تماس با تحریریه</Button>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
             <Quote className="w-12 h-12 text-primary/20 mx-auto mb-6" />
             <p className="text-2xl font-headline italic text-foreground/70">
                "فرش، شناسنامه ملت ایران است و مشاهیر آن، پاسداران این هویت ملی هستند."
             </p>
             <p className="mt-4 font-bold text-primary">به یاد حاج حسین علیمیری</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
