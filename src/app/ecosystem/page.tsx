
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Landmark, HeartPulse, BrainCircuit, Mic, BookOpen, Briefcase, Sparkles, Globe, ShieldCheck, Smartphone, Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

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
        name: "Nava Studio (استودیو نوا)",
        description: "AI-powered music and video creation for the new era of artists.",
        fa_description: "خلق موسیقی و ویدیو با هوش مصنوعی.",
        ar_description: "إنشاء الموسيقى والفيديو باستخدام الذكاء الاصطناعي.",
        status: "Planned",
        icon: <Mic className="w-8 h-8 text-purple-500" />
    },
    {
        name: "Ghese Go (قصه‌گو)",
        description: "A magical digital vault for children's stories and memories.",
        fa_description: "صندوقچه دیجیتال جادویی برای قصه‌های کودکان.",
        ar_description: "قبو رقمي سحري لقصص الأطفال وذكرياتهم.",
        status: "Planned",
        icon: <BookOpen className="w-8 h-8 text-orange-500" />
    },
    {
        name: "Tavana Work (توانا کار)",
        description: "The economic engine of Tavana City. Connecting experts to global opportunities.",
        fa_description: "موتور اقتصادی شهر توانا.",
        ar_description: "المحرك الاقتصادي لمدينة 'توانا'.",
        status: "Coming Soon",
        icon: <Briefcase className="w-8 h-8 text-emerald-500" />
    }
];

export default function EcosystemPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/10">
                {/* Hero with core 3 languages focus */}
                <section className="relative py-24 bg-primary text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/vision/1920/1080')] bg-cover bg-center" />
                    <div className="container relative z-10 px-4 text-center">
                        <Badge variant="outline" className="mb-6 border-white text-white px-4 py-1 text-sm font-bold">Tavana Virtual City / شهر مجازی توانا</Badge>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">منظومه‌ی آفرینش (Afarinesh)</h1>
                        <div className="grid gap-4 max-w-4xl mx-auto mb-8">
                            <p className="text-xl md:text-2xl font-light leading-relaxed">
                                اینجا پایانِ محدودیت و آغازِ همت است. اکوسیستم آفرینش با ۹ بازوی اجرایی، رویای شهر مجازی توانا را به واقعیت بدل می‌کند.
                            </p>
                            <p className="text-lg md:text-xl font-headline italic" dir="ltr">
                                "The Afarinesh Ecosystem is the blueprint for Tavana City. A world built on capability, not limitations."
                            </p>
                            <p className="text-lg md:text-xl font-headline" dir="rtl">
                                "منظومة آفرینش هي المخطط لمدينة توانا. عالم مبني على القدرة، وليس القيود."
                            </p>
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-16">
                    {/* Vision Statement / Advertisement */}
                    <Card className="mb-24 bg-primary/5 border-primary/20 p-8 md:p-12 text-center rounded-[3rem]">
                        <Quote className="w-12 h-12 text-primary mx-auto mb-6 opacity-40" />
                        <h2 className="text-3xl md:text-5xl font-headline font-bold text-primary mb-8">منشور آفرینش (The Manifesto)</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-justify">
                            <div className="space-y-4">
                                <h3 className="font-bold border-b pb-2">فارسی</h3>
                                <p className="text-sm leading-relaxed">
                                    ما در حال ساختن تمدنی دیجیتال هستیم که در آن تخصص و اصالت، تنها ارزهای رایج هستند. از قلب بازار تهران تا مرزهای هوش مصنوعی، ما ثابت کردیم که اراده هیچ مرزی نمی‌شناسد.
                                </p>
                            </div>
                            <div className="space-y-4" dir="ltr">
                                <h3 className="font-bold border-b pb-2">English</h3>
                                <p className="text-sm leading-relaxed">
                                    We are building a digital civilization where expertise and authenticity are the only currencies. From the heart of Tehran's market to the frontiers of AI, we prove that will knows no boundaries.
                                </p>
                            </div>
                            <div className="space-y-4" dir="rtl">
                                <h3 className="font-bold border-b pb-2">العربية</h3>
                                <p className="text-sm leading-relaxed">
                                    نحن نبني حضارة رقمية حيث الخبرة والأصالة هي العملات الوحيدة. من قلب سوق طهران إلى حدود الذكاء الاصطناعي، نثبت أن الإرادة لا تعرف حدوداً.
                                </p>
                            </div>
                        </div>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ecosystemApps.map((app) => (
                            <Card key={app.name} className="group hover:shadow-2xl transition-all duration-500 border-none bg-white/80 backdrop-blur-sm">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-secondary/50 rounded-2xl group-hover:scale-110 transition-transform">
                                                {app.icon}
                                            </div>
                                            <CardTitle className="font-headline text-xl">{app.name}</CardTitle>
                                        </div>
                                        <Badge variant={app.status === 'Live' ? 'default' : 'outline'}>
                                            {app.status}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <p className="text-foreground/80 text-sm leading-relaxed">{app.description}</p>
                                        <p className="text-[11px] text-muted-foreground font-medium">({app.fa_description})</p>
                                        <p className="text-[11px] text-muted-foreground font-medium" dir="rtl">({app.ar_description})</p>
                                    </div>
                                    
                                    {app.link && (
                                        <Button asChild className="w-full mt-6 rounded-full group-hover:bg-primary transition-colors">
                                            <Link href={app.link} target={app.isExternal ? "_blank" : "_self"}>
                                                {app.isExternal ? "ورود به پلتفرم" : "مشاهده جزئیات"}
                                            </Link>
                                        </Button>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Legacy Footer */}
                    <div className="mt-24 p-12 bg-white rounded-[3rem] shadow-xl border border-primary/5 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8">
                             <Sparkles className="w-12 h-12 text-primary/20 animate-pulse" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-primary">سوگند به همت و اصالت (The Sacred Oath)</h2>
                        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/80">
                            <p>
                                تمام این منظومه، گواهی بر قدرت اراده است. پلتفرم فرش بازار، میراثی از همت عالی <span className="font-bold text-foreground">حاج حسین علیمیری</span> است. 
                            </p>
                            <p className="italic">
                                "Even with a simple mobile phone, we created worlds. Built with a Redmi Note 8 in 9 days."
                            </p>
                            <div className="pt-8 border-t flex flex-col md:flex-row justify-center gap-8 text-sm font-bold text-muted-foreground">
                                <div className="flex items-center gap-2"><Globe className="w-4 h-4" /> ۷ زبان زنده دنیا</div>
                                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> امنیت و اصالت فیزیکی</div>
                                <div className="flex items-center gap-2"><Smartphone className="w-4 h-4" /> خلق شده با ردمی نوت ۸</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
