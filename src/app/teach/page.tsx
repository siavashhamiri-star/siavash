
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { BrainCircuit, Globe, Rocket, Smartphone, Sparkles, Trophy } from 'lucide-react';
  import { Badge } from '@/components/ui/badge';
  import Link from 'next/link';
  import { Button } from '@/components/ui/button';
  
  export default function TeachPage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto text-center mb-16 space-y-6">
                <Badge className="bg-primary px-6 py-1.5 rounded-full text-xs font-black tracking-widest uppercase">The Afarinesh Methodology / متدولوژی آفرینش</Badge>
                <h1 className="text-4xl md:text-7xl font-headline font-bold text-primary">انقلابی در خلق توانمندی</h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                    ما ثابت کردیم که «اراده» قوی‌تر از «سخت‌افزار» است. اکنون آماده‌ایم فرمت پیروزی ۱۳ زبانه خود را به تمام صنایع و هنرهای جهان صادر کنیم.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <Card className="rounded-[2.5rem] border-none shadow-xl bg-white p-8 group hover:bg-primary transition-all duration-500">
                    <Smartphone className="w-12 h-12 text-primary mb-6 group-hover:text-white transition-colors" />
                    <CardTitle className="text-2xl mb-4 group-hover:text-white">مهندسی در محدودیت</CardTitle>
                    <p className="text-sm text-muted-foreground group-hover:text-white/80 leading-relaxed">
                        یاد بگیرید چگونه با کمترین امکانات (مانند یک گوشی ردمی نوت ۸)، امپراتوری‌های دیجیتال ۱۳ زبانه خلق کنید.
                    </p>
                </Card>
                <Card className="rounded-[2.5rem] border-none shadow-xl bg-white p-8 group hover:bg-primary transition-all duration-500">
                    <BrainCircuit className="w-12 h-12 text-primary mb-6 group-hover:text-white transition-colors" />
                    <CardTitle className="text-2xl mb-4 group-hover:text-white">هوش مصنوعی کاربردی</CardTitle>
                    <p className="text-sm text-muted-foreground group-hover:text-white/80 leading-relaxed">
                        فرمت اختصاصی ما برای پیوند زدن میراث سنتی به قدرت تحلیل هوش مصنوعی ۲۰۲۵.
                    </p>
                </Card>
                <Card className="rounded-[2.5rem] border-none shadow-xl bg-white p-8 group hover:bg-primary transition-all duration-500">
                    <Globe className="w-12 h-12 text-primary mb-6 group-hover:text-white transition-colors" />
                    <CardTitle className="text-2xl mb-4 group-hover:text-white">تسخیر بازارهای جهانی</CardTitle>
                    <p className="text-sm text-muted-foreground group-hover:text-white/80 leading-relaxed">
                        استراتژی نفوذ در ۱۳ زبان زنده دنیا برای تبدیل هر کسب‌وکار محلی به یک برند بین‌المللی.
                    </p>
                </Card>
            </div>

            <Card className="max-w-4xl mx-auto shadow-2xl border-none overflow-hidden rounded-[4rem] bg-slate-900 text-white relative">
                <div className="absolute top-0 right-0 p-12 opacity-5">
                    <Sparkles className="w-80 h-80" />
                </div>
                <CardHeader className="p-12 text-center">
                    <Trophy className="w-16 h-16 text-accent mx-auto mb-6" />
                    <CardTitle className="text-3xl md:text-5xl font-headline font-bold">فرخوان همکاری جهانی</CardTitle>
                    <CardDescription className="text-xl text-gray-400 mt-4">
                        آماده‌سازی پلتفرم‌های مشابه برای صنایع لوکس، هنرهای دستی و تجارت بین‌الملل.
                    </CardDescription>
                </CardHeader>
                <CardContent className="p-12 pt-0 text-center space-y-8">
                    <p className="text-lg leading-relaxed text-gray-300 italic">
                        «اگر شما صاحب هنری اصیل یا صنعتی باارزش هستید و می‌خواهید مانند فرش بازار، امپراتوری دیجیتال خود را داشته باشید، ما آماده‌ایم تا این تکنولوژی بی‌بدیل را برای شما پیاده‌سازی کنیم.»
                    </p>
                    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-center gap-6">
                        <Button asChild size="lg" className="rounded-full px-10 h-16 text-xl bg-primary hover:bg-primary/90">
                            <Link href="mailto:info@fbnewmeta.com?subject=Custom%20Platform%20Inquiry">درخواست مشاوره ساخت پلتفرم</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 text-xl border-white/20 text-white hover:bg-white/10">
                            <Link href="/manifesto">مطالعه منشور توانمندی</Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-20 text-center text-muted-foreground">
                <p className="text-sm">پروژه آفرینش | تمدنی برای انسان‌های توانا | خیابان خیام پلاک ۴۸</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
