
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeartHandshake, Feather } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto shadow-lg">
              <CardHeader className="text-center p-8 md:p-12">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <Feather className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-headline">
                    بال‌های دوباره برای فرش دستباف ایران
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                    Wings Again for the Iranian Handwoven Carpet
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-10 pb-10">
                <div className="prose prose-lg max-w-none mx-auto text-foreground/80 text-center">
                    <p>
                    این پلتفرم با همراهی بزرگان اتحادیه و اساتید گران‌قدر طراحی شده تا هنر فاخر فرش ایران را زنده نگه دارد، اعتبار صنفی را تقویت کند و مسیر جهانی شدن آن را هموار سازد.
                    </p>
                    <p className='text-base text-muted-foreground'>
                    (This platform has been designed with the support of the union's elders and esteemed masters to keep the magnificent art of Iranian carpet alive, strengthen guild credibility, and smooth its path to globalization.)
                    </p>
                </div>

                <div className="my-10 border-t" />

                <div className="prose prose-lg max-w-none mx-auto text-foreground/80 text-center">
                    <div className="mx-auto bg-accent/10 p-3 rounded-full w-fit mb-4">
                        <HeartHandshake className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="font-headline text-2xl">ادای احترام (A Tribute)</h2>
                    <p>
                    این پروژه، ادای دِینی است به نسلی که عشق خود را وقف این هنر کرد و ادای احترام به پدری که روحش در این مسیر جاری است، انگیزه ما برای ساخت این بستر است.
                    </p>
                     <p className='text-base text-muted-foreground'>
                    (This project is a tribute to the generation that dedicated their love to this art, and a tribute to a father whose spirit flows in this path is our motivation for building this platform.)
                    </p>
                </div>
                
                <div className="my-10 border-t" />
                
                <div className="text-center">
                    <h2 className="text-2xl font-headline font-bold">Our Pillars</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                        These are the principles that guide our mission.
                    </p>
                </div>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-background">
                            <CardHeader>
                                <CardTitle className="text-lg font-semibold">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-foreground/80'>{feature.description}</p>
                                <p className='text-sm text-muted-foreground mt-2'>({feature.en_description})</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>


              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
