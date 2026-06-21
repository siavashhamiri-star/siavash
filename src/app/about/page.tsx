import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeartHandshake, BookHeart, Landmark, Smartphone, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const features = [
    {
        title: 'اعتبار صنفی (Guild Credibility)',
        description: 'حمایت بزرگان اتحادیه و حضورشان ستون اعتبار پلتفرم است.',
        en_description: 'The support and presence of the union\'s elders is the pillar of the platform\'s credibility.'
    },
    {
        title: 'منبع درآمد پایدار (Sustainable Income)',
        description: 'درصدی از درآمد پلتفرم به اتحادیه اختصاص یافته است.',
        en_description: 'A percentage of the platform\'s revenue is allocated to the union.'
    },
    {
        title: 'ارتباط جهانی (Global Connection)',
        description: 'ایجاد بستری برای ارتباط تجار و هنرمندان فرش در سطح بین‌الملل.',
        en_description: 'Creating a platform for the connection of carpet traders and artists internationally.'
    },
    {
        title: 'حفظ میراث (Heritage Preservation)',
        description: 'ترویج و حفظ هنر ارزشمند فرش دستباف ایران برای نسل‌های آینده.',
        en_description: 'Promoting and preserving the valuable art of Iranian handwoven carpets for future generations.'
    }
]

export default function AboutPage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto shadow-lg border-none overflow-hidden">
              <div className="bg-primary h-2" />
              <CardHeader className="text-center p-8 md:p-12">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <Landmark className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-5xl font-headline font-bold">
                    فرش حسین علیمیری و پسران
                </CardTitle>
                <CardDescription className="text-xl mt-2 font-headline">
                    Legacy of Haj Hossein Alimiri & Sons
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-12 pb-12">
                
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 flex flex-col items-center text-center">
                        <MapPin className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-headline font-bold text-xl mb-2">مرکزیت اصالت (HQ)</h3>
                        <p className="text-lg font-medium">خیابان خیام شمالی، پلاک ۴۸</p>
                        <p className="text-sm text-muted-foreground mt-1">48 Khayyam North Ave, Tehran</p>
                    </div>
                    <div className="p-8 bg-primary/5 rounded-3xl border border-primary/10 flex flex-col items-center text-center">
                        <Phone className="w-8 h-8 text-primary mb-4" />
                        <h3 className="font-headline font-bold text-xl mb-2">تماس مستقیم</h3>
                        <p className="text-lg font-medium" dir="ltr">۰۲۱ - ۵۵۸۱۴۵۵۵</p>
                        <p className="text-sm text-muted-foreground mt-1">Direct Trade Line</p>
                    </div>
                </div>

                <div className="prose prose-lg max-w-none mx-auto text-foreground/80 text-center mb-12">
                    <p className="font-bold text-primary text-xl">بال‌های دوباره برای فرش دستباف ایران در نیو متاورس</p>
                    <p>
                    این پلتفرم، برآمده از خاندانی است که نامشان با اعتبار فرش ایران در بازارهای جهانی گره خورده است. آفرینش «فرش بازار» تلاشی است برای زنده نگه داشتن مسیری که اساتید بزرگی چون حاج حسین علیمیری با عشق و همت خود بنا نهادند.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                    <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
                        <Smartphone className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-headline font-bold text-lg mb-2">خلق در محدودیت (Creation in Limitation)</h3>
                        <p className="text-sm text-foreground/70">
                            این اپلیکیشن تنها با یک گوشی ردمی نوت ۸ و در طی ۹ روز خلق شده است؛ گواهی بر قدرت اراده.
                        </p>
                    </div>
                    <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10 flex flex-col items-center text-center">
                        <BookHeart className="w-10 h-10 text-accent mb-4" />
                        <h3 className="font-headline font-bold text-lg mb-2">اصالت و سفره فرش (Heritage Table)</h3>
                        <p className="text-sm text-foreground/70">
                            ما بر سر سفره‌ی پربرکت فرش زاده شدیم و این پلتفرم ادای دینی است به میراث علیمیری.
                        </p>
                    </div>
                </div>

                <div className="my-10 border-t" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-background border-primary/10">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold text-primary">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-foreground/80'>{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-12 h-14 text-lg">
                        <Link href="/manifesto">
                            Read the Book of Creation / کتاب آفرینش
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
