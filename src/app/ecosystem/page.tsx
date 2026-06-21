
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Landmark, HeartPulse, BrainCircuit, Factory, Sword, Mail, Phone, MapPin, Globe, ArrowRight, Gavel, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ecosystemApps = [
    {
        name: "Farsh Bazaar (فرش بازار)",
        description: "The global hub for hand-woven and machine-made carpets. Our digital weapon to restore carpet glory.",
        fa_description: "بازار جهانی فرش‌های دستباف و ماشینی. سلاح دیجیتال ما برای احیای شکوه فرش.",
        ar_description: "المركز العالمي للسجاد اليدوي والآلي. سلاحنا الرقمي لاستعادة مجد السجاد.",
        status: "Live",
        icon: <Landmark className="w-8 h-8 text-primary" />,
        link: "/"
    },
    {
        name: "Global Annual Auction",
        description: "The premier online auction for exquisite and antique carpets with global reach.",
        fa_description: "حراج بزرگ سالانه فرش‌های نفیس و آنتیک با دسترسی جهانی (بزودی).",
        ar_description: "المزاد السنوي العالمي للسجاد الرائع والأثري (قريباً).",
        status: "Announced",
        icon: <Gavel className="w-8 h-8 text-accent" />,
        link: "/appraisal"
    },
    {
        name: "OpenMind Nexus",
        description: "The emotional AI soul of our virtual city. Bridging technology and humanity.",
        fa_description: "روح هوشمند و احساس‌محور شهر مجازی توانا.",
        ar_description: "الروح الذكية والمشاعرية لمدينتنا الافتراضية.",
        status: "Live",
        icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
        link: "https://openmind-nexuse-dbbbbb.netlify.app/",
        isExternal: true
    },
    {
        name: "LingoView (Gooya)",
        description: "Capability-based education for the global workforce.",
        fa_description: "آموزش توانمندمحور برای دنیای فردا.",
        ar_description: "التعليم القائم على القدرة لعالم الغد.",
        status: "Coming Soon",
        icon: <BrainCircuit className="w-8 h-8 text-blue-500" />,
        link: "/lingoview"
    }
];

export default function EcosystemPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/10">
                <section className="relative py-40 bg-slate-950 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/vision-3/1920/1080')] bg-cover bg-center" />
                    <div className="container relative z-10 px-4 text-center">
                        <Badge variant="outline" className="mb-8 border-primary text-primary px-8 py-2 text-sm font-bold rounded-full">Tavana Virtual City / شهر مجازی توانا</Badge>
                        <h1 className="text-6xl md:text-9xl font-headline font-bold mb-10 leading-tight">منظومه‌ی آفرینش</h1>
                        <div className="grid gap-8 max-w-5xl mx-auto mb-16">
                            <p className="text-2xl md:text-4xl font-light leading-relaxed">
                                تمدنی دیجیتال با ۱۳ زبان زنده برای بازگرداندن شکوه فرش ایران. ما با سلاح تکنولوژی، اصالت را جهانی می‌کنیم.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-10 text-xl font-headline italic opacity-80">
                                <span dir="ltr">"Global reach, ancestral roots."</span>
                                <span dir="rtl">"تأثير عالمي، جذور عريقة."</span>
                            </div>
                        </div>
                        <Button asChild size="lg" className="rounded-full px-16 h-20 text-2xl shadow-2xl shadow-primary/40">
                            <Link href="/manifesto">مطالعه منشور آفرینش <ArrowRight className="mr-3 w-6 h-6" /></Link>
                        </Button>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-32">
                    <Card className="mb-32 bg-white shadow-2xl border-none p-12 md:p-24 text-center rounded-[5rem] relative overflow-hidden border-4 border-accent/20">
                        <div className="absolute top-0 right-0 p-16 opacity-5">
                             <Gavel className="w-80 h-80 text-accent" />
                        </div>
                        <Badge className="bg-accent text-accent-foreground mb-4 px-6 py-1 rounded-full font-black">MAJOR ANNOUNCEMENT</Badge>
                        <h2 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-12">مژده: حراج سالانه جهانی فرش</h2>
                        <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6 text-justify">
                            <p className="font-bold text-2xl text-center text-slate-800">
                                «فرش بازار با افتخار اعلام می‌کند: بزودی اولین حراج آنلاین سالانه برای فرش‌های نفیس و آنتیک برگزار خواهد شد.»
                            </p>
                            <p>
                                تمامی عزیزانی که در پلتفرم ما فرش‌های خود را کارشناسی کرده و تاییدیه دریافت نموده‌اند، می‌توانند در این آکشن جهانی شرکت کنند. این فرصتی استثنایی برای معرفی آثار هنری شما به کلکسیونرهای ۱۳ کشور جهان و فروش با قیمت‌های بی‌نظیر است. شرایط دقیق و زمان‌بندی این رویداد بزودی از طریق همین پلتفرم اعلام خواهد شد.
                            </p>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
                        {ecosystemApps.map((app) => (
                            <Card key={app.name} className="group hover:shadow-2xl transition-all duration-500 border-none bg-white rounded-[4rem] overflow-hidden">
                                <CardHeader className="p-12">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="p-6 bg-secondary rounded-[2rem] group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-lg">
                                            {app.icon}
                                        </div>
                                        <Badge className="rounded-full px-6 py-1.5 text-sm font-bold">
                                            {app.status}
                                        </Badge>
                                    </div>
                                    <CardTitle className="font-headline text-3xl mb-4">{app.name}</CardTitle>
                                    <CardDescription className="text-xl leading-relaxed">{app.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="p-12 pt-0">
                                    <div className="space-y-4 border-t pt-8">
                                        <p className="text-base text-muted-foreground font-medium italic">({app.fa_description})</p>
                                        <p className="text-base text-muted-foreground font-medium italic" dir="rtl">({app.ar_description})</p>
                                    </div>
                                    
                                    {app.link && (
                                        <Button asChild className="w-full mt-10 rounded-full h-16 text-xl shadow-lg">
                                            <Link href={app.link} target={app.isExternal ? "_blank" : "_self"}>
                                                {app.isExternal ? "ورود به پلتفرم هوشمند" : "مشاهده جزئیات اکوسیستم"}
                                            </Link>
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-40 p-20 bg-primary text-white rounded-[5rem] shadow-2xl text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-16 opacity-10">
                             <Globe className="w-80 h-80" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-headline font-bold mb-10">دعوت جهانی از تولیدکنندگان</h2>
                        <p className="text-2xl md:text-3xl font-light mb-16 max-w-4xl mx-auto leading-relaxed">
                            ما در خیابان خیام شمالی، پلاک ۴۸، مرکز فرماندهی این سلاح دیجیتال را بنا کردیم. از تمام تولیدکنندگان فرش ماشینی و تجار بین‌المللی دعوت می‌کنیم تا به این منظومه بپیوندند.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-xl md:text-2xl font-bold">
                            <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-3xl backdrop-blur-md">
                                <Phone className="w-8 h-8" /> ۵۵۸۱۴۵۵۵
                            </div>
                            <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-3xl backdrop-blur-md">
                                <Mail className="w-8 h-8" /> info@fbnewmeta.com
                            </div>
                            <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-3xl backdrop-blur-md">
                                <MapPin className="w-8 h-8" /> بازار تهران، خیابان خیام
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

