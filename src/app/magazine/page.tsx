
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Newspaper, PenTool, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const articles = [
  {
    title: "رازهای رنگرزی سنتی در فرش تبریز",
    description: "بررسی عمیق متدهای گیاهی و ماندگاری رنگ در شاهکارهای آذربایجان.",
    category: "آموزش تخصصی",
    image: "https://picsum.photos/seed/dye/600/400"
  },
  {
    title: "تأثیر نمادهای اساطیری بر طرح‌های بختیاری",
    description: "چگونه داستان‌های کهن در تار و پود گلیم‌های ایلاتی جان می‌گیرند.",
    category: "تاریخ و هنر",
    image: "https://picsum.photos/seed/symbols/600/400"
  },
  {
    title: "استانداردهای صادرات فرش به اتحادیه اروپا در ۲۰۲۵",
    description: "راهنمای جامع برای تجار و صادرکنندگان صنایع دستی.",
    category: "تجارت بین‌الملل",
    image: "https://picsum.photos/seed/trade/600/400"
  }
];

export default function MagazinePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <section className="py-20 bg-primary text-white">
          <div className="container px-4 text-center">
            <Newspaper className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4">مجله تخصصی فرش بازار</h1>
            <p className="text-xl font-light max-w-2xl mx-auto">مرجع دانش، هنر و تجارت جهانی فرش و صنایع دستی ایران</p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {articles.map((article, idx) => (
                  <Card key={idx} className="overflow-hidden group hover:shadow-xl transition-all">
                    <div className="relative h-48">
                      <Image src={article.image} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <CardHeader>
                      <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{article.category}</div>
                      <CardTitle className="text-xl font-headline leading-tight">{article.title}</CardTitle>
                      <CardDescription>{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="link" className="p-0 text-primary">مطالعه مقاله <ArrowLeft className="mr-2 h-4 w-4" /></Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <aside className="space-y-8">
              <Card className="bg-primary text-white border-none shadow-2xl">
                <CardHeader>
                  <PenTool className="w-10 h-10 mb-4" />
                  <CardTitle className="text-2xl font-headline">فراخوان همکاری</CardTitle>
                  <CardDescription className="text-primary-foreground/80">
                    آیا در زمینه فرش و صنایع دستی متخصص هستید؟ مطالب، پژوهش‌ها و یادداشت‌های خود را برای ما بفرستید.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">ما پس از بررسی کارشناسی، آثار ارزشمند شما را به نام خودتان در مجله جهانی فرش بازار منتشر خواهیم کرد.</p>
                  <Button variant="secondary" className="w-full">ارسال مقاله / رزومه</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">دسترسی سریع</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <Link href="/legends" className="block text-muted-foreground hover:text-primary">بزرگداشت مشاهیر</Link>
                  <Link href="/about" className="block text-muted-foreground hover:text-primary">میراث علیمیری</Link>
                  <Link href="/feedback" className="block text-muted-foreground hover:text-primary">ارسال بازخورد</Link>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
