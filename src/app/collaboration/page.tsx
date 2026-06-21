
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
  import { Header } from '@/components/header';
  import { Footer } from '@/components/footer';
  import { Handshake, DollarSign, Megaphone, ArrowRight, Gavel, Globe, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
  
const partnershipAreas = [
    {
        id: 'auction-partners',
        icon: <Gavel className="w-10 h-10 text-primary" />,
        title: 'Global Auction Partnerships / همکاری با حراجی‌های بین‌المللی',
        description: 'We officially announce our readiness to collaborate with world-renowned auction houses like Sotheby’s, Christie’s, and Bonhams. Farsh Bazaar serves as a verified gateway for rare masterpieces.',
        fa_description: 'ما رسماً آمادگی خود را برای همکاری استراتژیک با خانه‌های حراج مطرح جهان همچون ساتبیز (Sotheby’s)، کریستیز (Christie’s) و بونهمز برای معرفی و عرضه نفیس‌ترین فرش‌های ایران و ملل اعلام می‌کنیم.',
        link: 'mailto:info@fbnewmeta.com?subject=Strategic%20Auction%20Partnership'
    },
    {
        id: 'invest',
        icon: <DollarSign className="w-10 h-10 text-primary" />,
        title: 'Invest in the Vision / سرمایه‌گذاری در چشم‌انداز',
        description: 'Join us in building the first digital civilization of art and commerce. Your investment fuels the Afarinesh ecosystem and Tavana Virtual City.',
        fa_description: 'در ساخت اولین تمدن دیجیتال هنر و تجارت با ما همراه شوید. سرمایه‌گذاری شما سوخت محرک اکوسیستم آفرینش و شهر مجازی توانا خواهد بود.',
        link: 'mailto:info@fbnewmeta.com?subject=Investment%20Inquiry'
    },
    {
        id: 'amplify',
        icon: <Megaphone className="w-10 h-10 text-primary" />,
        title: 'Amplify the Story / روایت‌گر داستان ما باشید',
        description: 'If you are a content creator or influencer, help us tell the epic story of Farsh Bazaar and the legacy of Alimiri & Sons.',
        fa_description: 'اگر تولیدکننده محتوا یا فعال رسانه‌ای هستید، به ما در روایت حماسه فرش بازار و میراث علیمیری و پسران کمک کنید.',
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
                    Our vision bridges the legendary bazaars of Tehran with the elite auction halls of Paris, London, and New York.
                    <br />
                    <span className="text-base text-muted-foreground/80">(چشم‌انداز ما پیوند زدن بازارهای افسانه‌ای تهران به تالارهای مجلل حراج در پاریس، لندن و نیویورک است.)</span>
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
                        Farsh Bazaar is uniquely positioned to provide verified, AI-analyzed, and high-provenance Persian carpets to the world's leading auction houses. We welcome inquiries for exclusive partnerships to showcase rare masterpieces.
                    </p>
                    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 mb-6">
                        <ShieldCheck className="text-accent w-6 h-6" />
                        <span className="text-xs font-bold italic" dir="rtl">
                            «فرش بازار آماده ایجاد کانال‌های همکاری سطح بالا با خانه‌های حراج ممتاز جهان نظیر ساتبیز و کریستیز است. اصالت آثار ما توسط میراث علیمیری تضمین شده است.»
                        </span>
                    </div>
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
                                     <Button asChild className="rounded-full px-8 h-12">
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
