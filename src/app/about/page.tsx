
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Landmark, MapPin, Phone, ShieldCheck, Sparkles, Smartphone, Mail, Globe, Gavel } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function AboutPage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-5xl mx-auto shadow-2xl border-none overflow-hidden rounded-[3rem]">
              <div className="bg-primary h-3" />
              <CardHeader className="text-center p-8 md:p-16">
                <div className="mx-auto bg-primary/10 p-5 rounded-full w-fit mb-6">
                  <Landmark className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-4xl md:text-6xl font-headline font-bold text-primary">
                    میراث فرش علیمیری و پسران
                </CardTitle>
                <CardDescription className="text-2xl mt-4 font-headline text-muted-foreground">
                    Honoring the Legacy of Haj Hossein Alimiri
                </CardDescription>
              </CardHeader>
              <CardContent className="px-8 md:px-16 pb-16">
                
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-primary/5 flex flex-col items-center text-center group hover:border-primary/20 transition-all">
                        <MapPin className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="font-headline font-bold text-xl mb-2">مرکزیت اصالت (HQ)</h3>
                        <p className="text-lg font-bold">خیابان خیام شمالی، پلاک ۴۸</p>
                        <p className="text-xs text-muted-foreground mt-2">48 Khayyam North Ave, Tehran</p>
                    </div>
                    <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-primary/5 flex flex-col items-center text-center group hover:border-primary/20 transition-all">
                        <Phone className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="font-headline font-bold text-xl mb-2">تماس مستقیم</h3>
                        <p className="text-lg font-bold" dir="ltr">۰۲۱ - ۵۵۸۱۴۵۵۵</p>
                        <p className="text-xs text-muted-foreground mt-2">International Trade Line</p>
                    </div>
                    <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-primary/5 flex flex-col items-center text-center group hover:border-primary/20 transition-all">
                        <Mail className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="font-headline font-bold text-xl mb-2">ارتباط دیجیتال</h3>
                        <p className="text-lg font-bold" dir="ltr">info@fbnewmeta.com</p>
                        <p className="text-xs text-muted-foreground mt-2">Official Inquiry Email</p>
                    </div>
                </div>

                <div className="prose prose-xl max-w-none mx-auto text-foreground/80 text-center mb-16 space-y-6">
                    <p className="font-black text-primary text-2xl leading-relaxed">
                        «این یک اپلیکیشن نیست؛ این حماسه‌ای است که با قدرت اراده و نگاه به آینده خلق شد.»
                    </p>
                    <p className="text-lg leading-relaxed text-justify">
                        فرش بازار، اولین ستون از اکوسیستم بزرگ <span className="font-bold text-primary">آفرینش (Afarinesh)</span> و شهر مجازی تواناست. بنیان‌گذار این پروژه، با الهام از همت والای اسطوره‌ی بازار، <span className="font-bold">حاج حسین علیمیری</span>، ثابت کرد که حتی با محدودترین امکانات، می‌توان دنیاهایی به وسعت ۱۳ زبان و مرزهای هوش مصنوعی خلق کرد. ما در خیابان خیام، قلبِ تپنده‌ی هنر ایران، ایستاده‌ایم تا اصالت را به تمام تالارهای حراج جهان صادر کنیم.
                    </p>
                    
                    <div className="bg-slate-900 text-white p-10 rounded-[3rem] border border-primary/10 mt-12 overflow-hidden relative">
                         <div className="absolute top-0 right-0 p-8 opacity-5">
                            <Gavel className="w-40 h-40" />
                         </div>
                        <h4 className="text-primary font-bold text-2xl mb-6 flex items-center gap-2 justify-center">
                            <Globe className="w-6 h-6" />
                            Official Call to Sotheby’s & Christie’s
                        </h4>
                        <div className="grid gap-6">
                          <p className="text-sm italic leading-relaxed" dir="ltr">
                            Farsh Bazaar officially invites global auction leaders to collaborate. We provide a verified, 13-language gateway for the world's most exquisite Persian masterpieces.
                          </p>
                          <p className="text-sm font-bold" dir="rtl">
                            فرش بازار رسماً از رهبران حراج جهان دعوت به همکاری می‌کند. ما درگاهی تایید شده و ۱۳ زبانه برای معرفی نفیس‌ترین شاهکارهای ایران به کلکسیونرهای بین‌المللی هستیم.
                          </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 my-16">
                    <div className="p-6 bg-primary/5 rounded-3xl text-center">
                        <Smartphone className="w-8 h-8 text-primary mx-auto mb-3" />
                        <h4 className="font-bold mb-1">نوآوری در محدودیت</h4>
                        <p className="text-xs text-muted-foreground">خلق حماسه دیجیتال با کمترین ابزار</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-3xl text-center">
                        <ShieldCheck className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                        <h4 className="font-bold mb-1">اعتبار جهانی</h4>
                        <p className="text-xs text-muted-foreground">۱۳ زبان زنده برای ارتباط با ۵.۵ میلیارد نفر</p>
                    </div>
                    <div className="p-6 bg-accent/10 rounded-3xl text-center">
                        <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                        <h4 className="font-bold mb-1">هوش مصنوعی</h4>
                        <p className="text-xs text-muted-foreground">تکنولوژی در خدمت هنر و اصالت</p>
                    </div>
                </div>

                <div className="mt-16 text-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-16 h-16 text-xl shadow-xl shadow-primary/20">
                        <Link href="/manifesto">
                            مطالعه کتاب آفرینش / Read Manifesto
                        </Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
