
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Landmark, HeartPulse, BrainCircuit, Mic, BookOpen, Briefcase, Sparkles, Globe, ShieldCheck, Smartphone, Quote, ArrowRight, Phone, MapPin, Trophy } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ecosystemApps = [
    {
        name: "Farsh Bazaar (فرش بازار)",
        description: "The first pillar of Afarinesh. A global marketplace honoring the legacy of Haj Hossein Alimiri.",
        fa_description: "اولین ستون آفرینش. بازار جهانی فرش در بزرگداشت نام حاج حسین علیمیری.",
        ar_description: "العماد الأول لـ 'آفرینش'. سوق عالمي للسجاد تكريماً لإرث الحاج حسين عليميري.",
        status: "Live",
        icon: <Landmark className="w-8 h-8 text-primary" />,
        link: "/"
    },
    {
        name: "Carpet Magazine (مجله فرش)",
        description: "Specialized blog and knowledge base for Iranian artistry and carpet trade.",
        fa_description: "مجله و وبلاگ تخصصی دانش، هنر و تجارت فرش.",
        ar_description: "مجلة فرش بازار المتخصصة في المعرفة وفن وتجارة السجاد.",
        status: "Live",
        icon: <BookOpen className="w-8 h-8 text-indigo-500" />,
        link: "/magazine"
    },
    {
        name: "Carpet Legends (مشاهیر فرش)",
        description: "Interviews and biographies of the icons who built the global carpet industry.",
        fa_description: "مصاحبه‌ها و زندگی‌نامه اسطوره‌هایی که صنعت جهانی فرش را ساختند.",
        ar_description: "مقابلات وسير ذاتية للأيقونات الذين بنوا صناعة السجاد العالمية.",
        status: "Live",
        icon: <Trophy className="w-8 h-8 text-amber-500" />,
        link: "/legends"
    },
    {
        name: "OpenMind Nexus",
        description: "The soul of our digital world. An emotion-based AI platform bridging technology and humanity.",
        fa_description: "روح دنیای دیجیتال ما. پلتفرم هوش مصنوعی احساس‌محور.",
        ar_description: "روح عالمنا الرقمي. منصة ذكاء اصطناعي قائمة على المشاعر.",
        status: "Live",
        icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
        link: "https://openmind-nexuse-dbbbbb.netlify.app/",
        isExternal: true
    },
    {
        name: "LingoView (آپ گویا)",
        description: "Revolutionary education focusing on 'Capability'. Building the workforce of Tavana City.",
        fa_description: "آموزش انقلابی با تمرکز بر «توانایی».",
        ar_description: "تعليم ثوري يركز على 'القدرة'.",
        status: "Coming Soon",
        icon: <BrainCircuit className="w-8 h-8 text-blue-500" />,
        link: "/lingoview"
    },
    {
        name: "Tavana Work (توانا کار)",
        description: "The economic engine of Tavana City. Connecting experts to global opportunities.",
        fa_description: "موتور اقتصادی شهر توانا.",
        ar_description: "المحرك الاقتصادي لمدينة 'توانا'.",
        status: "Coming Soon",
        icon: <Briefcase className="w-8 h-8 text-emerald-500" />,
        link: "/tavana-work"
    }
];

export default function EcosystemPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/10">
                {/* Hero Section - The Grand Advertisement */}
                <section className="relative py-32 bg-primary text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-15 bg-[url('https://picsum.photos/seed/vision/1920/1080')] bg-cover bg-center" />
                    <div className="container relative z-10 px-4 text-center">
                        <Badge variant="outline" className="mb-6 border-white text-white px-6 py-2 text-sm font-bold rounded-full">Tavana Virtual City / شهر مجازی توانا</Badge>
                        <h1 className="text-5xl md:text-8xl font-headline font-bold mb-8">منظومه‌ی آفرینش (Afarinesh)</h1>
                        <div className="grid gap-6 max-w-5xl mx-auto mb-12">
                            <p className="text-2xl md:text-3xl font-light leading-relaxed">
                                اینجا پایانِ محدودیت و آغازِ همت است. دنیایی که با یک گوشی ساده متولد شد تا ثابت کند اراده، هیچ مرزی نمی‌شناسد.
                            </p>
                            <div className="flex flex-col md:flex-row justify-center gap-8 text-lg font-headline italic">
                                <span dir="ltr">"A world built on capability, not limitations."</span>
                                <span dir="rtl">"عالم مبني على القدرة، وليس القيود."</span>
                            </div>
                        </div>
                        <Button asChild size="lg" variant="secondary" className="rounded-full px-12 h-16 text-xl shadow-2xl">
                            <Link href="/manifesto">مطالعه منشور کامل / Read Full Manifesto <ArrowRight className="mr-2 w-5 h-5" /></Link>
                        </Button>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-24">
                    {/* The 3-Language Manifesto Card */}
                    <Card className="mb-32 bg-white shadow-2xl border-none p-8 md:p-16 text-center rounded-[4rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-5">
                             <Landmark className="w-64 h-64 text-primary" />
                        </div>
                        <Quote className="w-16 h-16 text-primary mx-auto mb-8 opacity-40" />
                        <h2 className="text-4xl md:text-6xl font-headline font-bold text-primary mb-12">بیانیه‌ی جهانی آفرینش (The Global Proclamation)</h2>
                        <div className="grid md:grid-cols-3 gap-12 text-justify relative z-10">
                            <div className="space-y-6 bg-primary/5 p-8 rounded-[2rem]">
                                <h3 className="font-bold text-2xl border-b border-primary/20 pb-4 text-center">فارسی</h3>
                                <p className="text-base leading-relaxed">
                                    ما در حال ساختن تمدنی دیجیتال هستیم که در آن تخصص و اصالت، تنها ارزهای رایج هستند. از قلب بازار تهران (خیابان خیام) تا مرزهای هوش مصنوعی، ما ثابت کردیم که حتی با یک گوشی کوچک، می‌توان دنیاهایی به وسعت کهکشان خلق کرد. این ادای دینی است به میراث حاج حسین علیمیری.
                                </p>
                            </div>
                            <div className="space-y-6 bg-secondary/50 p-8 rounded-[2rem]" dir="ltr">
                                <h3 className="font-bold text-2xl border-b border-primary/20 pb-4 text-center">English</h3>
                                <p className="text-base leading-relaxed">
                                    We are building a digital civilization where expertise and authenticity are the only currencies. From the heart of Tehran's market to the frontiers of AI, we prove that even with a simple mobile phone, one can create worlds as vast as the galaxies. This is a tribute to the legacy of Haj Hossein Alimiri.
                                </p>
                            </div>
                            <div className="space-y-6 bg-primary/5 p-8 rounded-[2rem]" dir="rtl">
                                <h3 className="font-bold text-2xl border-b border-primary/20 pb-4 text-center">العربية</h3>
                                <p className="text-base leading-relaxed">
                                    نحن نبني حضارة رقمية حيث الخبرة والأصالة هي العملات الوحيدة. من قلب سوق طهران إلى حدود الذكاء الاصطناعي، نثبت أنه حتى باستخدام هاتف محمول بسيط، يمكن للمرء إنشاء عوالم واسعة مثل المجرات. هذا تكريم لإرث الحاج حسين عليميري.
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

                    {/* Final CTA / Contact */}
                    <div className="mt-32 p-16 bg-primary text-white rounded-[4rem] shadow-2xl text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                             <Globe className="w-64 h-64" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8">همسفر شوید در شهر توانا</h2>
                        <p className="text-2xl font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                            ما در خیابان خیام، پلاک ۴۸، منتظر تجار، هنرمندان و رویاپردازان هستیم تا دنیای جدید را با هم بسازیم.
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
