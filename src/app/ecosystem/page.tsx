
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Landmark, HeartPulse, BrainCircuit, Mic, BookOpen, Briefcase, Sparkles, Globe, ShieldCheck, Smartphone, Quote, ArrowRight, Phone, MapPin, Trophy, Factory } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ecosystemApps = [
    {
        name: "Farsh Bazaar (فرش بازار)",
        description: "The global hub for hand-woven and machine-made carpets. Connecting Iranian heritage to the world.",
        fa_description: "بازار جهانی فرش‌های دستباف و ماشینی. اتصال میراث ایران به بازارهای بین‌المللی.",
        ar_description: "المركز العالمي للسجاد اليدوي والآلي. ربط التراث الإيراني بالعالم.",
        status: "Live",
        icon: <Landmark className="w-8 h-8 text-primary" />,
        link: "/"
    },
    {
        name: "International Pavilion",
        description: "A dedicated space for machine-made carpets and artisans from all nations.",
        fa_description: "بخش اختصاصی برای فرش‌های ماشینی و هنرمندان تمام ملل.",
        ar_description: "مساحة مخصصة للسجاد الآلي والحرفيين من جميع الأمم.",
        status: "Live",
        icon: <Globe className="w-8 h-8 text-blue-600" />,
        link: "/vendors"
    },
    {
        name: "Carpet Magazine",
        description: "Specialized knowledge base for artistry and trade.",
        fa_description: "مرجع تخصصی دانش، هنر و تجارت فرش.",
        ar_description: "قاعدة معرفية متخصصة للفن والتجارة.",
        status: "Live",
        icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
        link: "/magazine"
    },
    {
        name: "OpenMind Nexus",
        description: "Emotion-based AI platform bridging technology and humanity.",
        fa_description: "روح دنیای دیجیتال ما. هوش مصنوعی احساس‌محور.",
        ar_description: "منصة ذكاء اصطناعي قائمة على المشاعر.",
        status: "Live",
        icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
        link: "https://openmind-nexuse-dbbbbb.netlify.app/",
        isExternal: true
    },
    {
        name: "LingoView (Gooya)",
        description: "Capability-based education for the global workforce.",
        fa_description: "آموزش توانمندمحور برای نیروی کار جهانی.",
        ar_description: "التعليم القائم على القدرة للقوى العاملة العالمية.",
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
                <section className="relative py-32 bg-primary text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-15 bg-[url('https://picsum.photos/seed/vision/1920/1080')] bg-cover bg-center" />
                    <div className="container relative z-10 px-4 text-center">
                        <Badge variant="outline" className="mb-6 border-white text-white px-6 py-2 text-sm font-bold rounded-full">Global Tavana Virtual City / شهر مجازی توانا</Badge>
                        <h1 className="text-5xl md:text-8xl font-headline font-bold mb-8">منظومه‌ی آفرینش (Afarinesh)</h1>
                        <div className="grid gap-6 max-w-5xl mx-auto mb-12">
                            <p className="text-2xl md:text-3xl font-light leading-relaxed">
                                تمدنی دیجیتال که در آن اصالتِ دستباف و تکنولوژیِ ماشینی در کنار هم می‌درخشند. دنیایی بدون مرز برای تمام ملل.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-8 text-lg font-headline italic">
                                <span dir="ltr">"A global ecosystem for all artisans and industries."</span>
                                <span dir="rtl">"نظام بيئي عالمي لجميع الحرفيين والصناعات."</span>
                            </div>
                        </div>
                        <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-16 text-xl shadow-2xl">
                            <Link href="/manifesto">مطالعه منشور کامل / Read Manifesto <ArrowRight className="mr-2 w-5 h-5" /></Link>
                        </Button>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-24">
                    <Card className="mb-32 bg-white shadow-2xl border-none p-8 md:p-16 text-center rounded-[4rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                             <Factory className="w-64 h-64 text-primary" />
                        </div>
                        <Quote className="w-16 h-16 text-primary mx-auto mb-8 opacity-40" />
                        <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-12">بیانیه‌ی جهانی آفرینش (The Global Proclamation)</h2>
                        <div className="grid md:grid-cols-3 gap-12 text-justify relative z-10">
                            <div className="space-y-6 bg-primary/5 p-8 rounded-[2rem]">
                                <h3 className="font-bold text-2xl border-b border-primary/20 pb-4 text-center">فارسی</h3>
                                <p className="text-base leading-relaxed">
                                    ما پلی ساخته‌ایم میان سنت و مدرنیته. از فرش‌های دستباف نفیس تا تکنولوژی پیشرفته فرش ماشینی، «فرش بازار» خانه‌ای برای تمام فعالان اقتصادی جهان است. ما ثابت کردیم اراده، تنها مرزِ خلقت است. این میراثی است که به نام حاج حسین علیمیری اعتبار می‌گیرد.
                                </p>
                            </div>
                            <div className="space-y-6 bg-secondary/50 p-8 rounded-[2rem]" dir="ltr">
                                <h3 className="font-bold text-2xl border-b border-primary/20 pb-4 text-center">English</h3>
                                <p className="text-base leading-relaxed">
                                    We have built a bridge between tradition and modernity. From exquisite hand-woven carpets to advanced machine-made technology, 'Farsh Bazaar' is a home for all global economic players. We proved that will is the only limit to creation. This is a legacy credited to Haj Hossein Alimiri.
                                </p>
                            </div>
                            <div className="space-y-6 bg-primary/5 p-8 rounded-[2rem]" dir="rtl">
                                <h3 className="font-bold text-2xl border-b border-primary/20 pb-4 text-center">العربية</h3>
                                <p className="text-base leading-relaxed">
                                    لقد بنينا جسراً بين الأصالة والحداثة. من السجاد اليدوي الرائع إلى تكنولوجيا السجاد الآلي المتقدمة، 'فرش بازار' هو موطن لجميع الفاعلين الاقتصاديين العالميين. لقد أثبتنا أن الإرادة هي الحد الوحيد للخلق. هذا إرث يُنسب إلى الحاج حسين عليميري.
                                </p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {ecosystemApps.map((app) => (
                            <Card key={app.name} className="group hover:shadow-2xl transition-all duration-500 border-none bg-white rounded-[2.5rem] overflow-hidden">
                                <CardHeader className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-4 bg-secondary rounded-2xl group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            {app.icon}
                                        </div>
                                        <Badge variant={app.status === 'Live' ? 'default' : 'outline'} className="rounded-full px-4">
                                            {app.status}
                                        </Badge>
                                    </div>
                                    <CardTitle className="font-headline text-2xl mb-2">{app.name}</CardTitle>
                                    <CardDescription className="text-base leading-relaxed">{app.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="p-8 pt-0">
                                    <div className="space-y-4 border-t pt-6">
                                        <p className="text-sm text-muted-foreground font-medium">({app.fa_description})</p>
                                        <p className="text-sm text-muted-foreground font-medium" dir="rtl">({app.ar_description})</p>
                                    </div>
                                    
                                    {app.link && (
                                        <Button asChild className="w-full mt-8 rounded-full h-12 text-lg">
                                            <Link href={app.link} target={app.isExternal ? "_blank" : "_self"}>
                                                {app.isExternal ? "ورود به پلتفرم" : "مشاهده جزئیات"}
                                            </Link>
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-32 p-16 bg-primary text-white rounded-[4rem] shadow-2xl text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                             <Globe className="w-64 h-64" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">دعوت از تولیدکنندگان و تجار جهان</h2>
                        <p className="text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                            ما در خیابان خیام، پلاک ۴۸، آماده همکاری با برندهای معتبر فرش ماشینی و تجار بین‌المللی هستیم تا بزرگترین شبکه توزیع هنر و صنعت را بسازیم.
                        </p>
                        <div className="flex flex-wrap justify-center gap-10 text-xl font-bold">
                            <div className="flex items-center gap-3"><Phone className="w-8 h-8" /> ۵۵۸۱۴۵۵۵</div>
                            <div className="flex items-center gap-3"><MapPin className="w-8 h-8" /> بازار تهران، خیابان خیام</div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
