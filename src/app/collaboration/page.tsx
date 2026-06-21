
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { Handshake, DollarSign, Megaphone, BrainCircuit, ArrowRight, Gavel, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
  
const partnershipAreas = [
    {
        id: 'auction-partners',
        icon: <Gavel className="w-10 h-10 text-primary" />,
        title: 'Global Auction Partnerships / همکاری با حراجی‌های بین‌المللی',
        description: 'We welcome strategic collaborations with world-renowned auction houses like Sotheby’s, Christie’s, and other elite art institutions to showcase the world’s most exquisite carpets.',
        fa_description: 'ما صمیمانه از همکاری‌های استراتژیک با خانه‌های حراج مطرح جهان همچون ساتبیز (Sotheby’s)، کریستیز (Christie’s) و سایر نهادهای هنری تراز اول برای معرفی و عرضه نفیس‌ترین فرش‌های جهان استقبال می‌کنیم.',
        link: 'mailto:info@fbnewmeta.com?subject=Strategic%20Auction%20Partnership'
    },
    {
        id: 'invest',
        icon: <DollarSign className="w-10 h-10 text-primary" />,
        title: 'Invest in the Vision / سرمایه‌گذاری در چشم‌انداز',
        description: 'We are seeking partners who believe in our mission to build a new digital economy based on meaning and capability. Your investment can fuel the growth of the FB New Meta ecosystem.',
        fa_description: 'ما به دنبال شرکایی هستیم که به رسالت ما برای ساختن یک اقتصاد دیجیتال جدید مبتنی بر معنا و توانایی باور دارند. سرمایه‌گذاری شما می‌تواند به رشد اکوسیستم «FB New Meta» کمک کند.',
        link: 'mailto:info@fbnewmeta.com?subject=Investment%20Inquiry'
    },
    {
        id: 'amplify',
        icon: <Megaphone className="w-10 h-10 text-primary" />,
        title: 'Amplify the Story / روایت‌گر داستان ما باشید',
        description: 'If you are a content creator, journalist, or social media influencer, help us tell the story of Farsh Bazaar and our larger vision for a connected world.',
        fa_description: 'اگر شما یک تولیدکننده محتوا، روزنامه‌نگار یا فعال شبکه‌های اجتماعی هستید، به ما کمک کنید تا داستان فرش بازار و چشم‌انداز بزرگتر ما را روایت کنید.',
        link: 'mailto:info@fbnewmeta.com?subject=Content%20Collaboration'
    }
]

  export default function PartnershipPage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto shadow-2xl border-none overflow-hidden rounded-[3rem]">
              <div className="bg-primary h-3" />
              <CardHeader className="text-center p-8 md:p-12">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <Handshake className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-5xl font-headline font-bold">
                  Join the Mission / همسفر شوید
                </CardTitle>
                <CardDescription className="text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
                    Our vision is vast, and our mission is to build new worlds. We invite the world's leading institutions to join this creation.
                    <br />
                    <span className="text-base text-muted-foreground/80">(چشم‌انداز ما گسترده است و رسالت ما ساختن دنیاهای جدید. ما از نهادهای پیشرو جهان دعوت می‌کنیم تا در این آفرینش همسفر ما باشند.)</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-16 pb-16 space-y-12">
                
                <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] relative overflow-hidden border border-white/10 shadow-xl">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                        <Globe className="w-64 h-64" />
                    </div>
                    <Badge className="bg-accent text-accent-foreground mb-4">PREMIUM PARTNERSHIP</Badge>
                    <h3 className="text-2xl md:text-3xl font-headline font-bold mb-4">Official Invitation to Sotheby’s & Christie’s</h3>
                    <p className="text-sm md:text-lg text-gray-300 leading-relaxed mb-6">
                        Farsh Bazaar is ready to establish high-level channels with premier auction houses. Our AI-driven verification system and physical presence in the Tehran market offer a unique bridge for rare masterpiece acquisition.
                    </p>
                    <p className="text-sm font-bold text-accent italic" dir="rtl">
                        «فرش بازار آماده ایجاد کانال‌های همکاری سطح بالا با خانه‌های حراج ممتاز جهان است. سیستم راستی‌آزمایی مبتنی بر هوش مصنوعی ما و حضور فیزیکی در بازار تهران، پلی بی‌نظیر برای دستیابی به شاهکارهای کمیاب است.»
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    {partnershipAreas.map((area) => (
                        <Card key={area.id} id={area.id} className="bg-card/50 hover:shadow-xl transition-all duration-300 border border-primary/5 rounded-[2rem]">
                             <CardHeader>
                                <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                    <div className="bg-primary/5 p-4 rounded-full w-fit flex-shrink-0">
                                        {area.icon}
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-2xl font-headline font-bold">{area.title}</CardTitle>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="text-center md:text-left space-y-4">
                                <p className='text-foreground/80 leading-relaxed'>{area.description}</p>
                                <p className='text-sm text-muted-foreground italic'>({area.fa_description})</p>
                                <div className='pt-6'>
                                     <Button asChild className="rounded-full px-8">
                                        <Link href={area.link}>
                                            Contact Partnerships <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
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
