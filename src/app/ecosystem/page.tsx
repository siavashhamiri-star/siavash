
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Blocks, CheckCircle, Clock, Music, Mic, Users, BookOpen, Briefcase, BrainCircuit, Sparkles, HeartPulse, ShieldCheck, Globe, Smartphone, Landmark } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const ecosystemApps = [
    {
        name: "Farsh Bazaar (فرش بازار)",
        description: "The first pillar of Afarinesh. A global marketplace honoring the legacy of Haj Hossein Alimiri.",
        fa_description: "اولین ستون آفرینش. بازار جهانی فرش در بزرگداشت نام حاج حسین علیمیری.",
        status: "Live",
        icon: <Landmark className="w-8 h-8 text-primary" />,
        link: "/"
    },
    {
        name: "OpenMind Nexus (هوش مصنوعی احساس‌محور)",
        description: "The soul of our digital world. An emotion-based AI platform bridging technology and humanity.",
        fa_description: "روح دنیای دیجیتال ما. پلتفرم هوش مصنوعی احساس‌محور که پلی میان تکنولوژی و انسانیت است.",
        status: "Live",
        icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
        link: "https://openmind-nexuse-dbbbbb.netlify.app/",
        isExternal: true
    },
    {
        name: "LingoView (آپ گویا)",
        description: "Revolutionary education focusing on 'Capability'. Building the workforce of Tavana City.",
        fa_description: "آموزش انقلابی با تمرکز بر «توانایی». ساخت نیروی انسانی متخصص برای شهر توانا.",
        status: "Coming Soon",
        icon: <BrainCircuit className="w-8 h-8 text-blue-500" />,
        link: "/lingoview"
    },
    {
        name: "Nava Studio (استودیو نوا)",
        description: "AI-powered music and video creation for the new era of artists.",
        fa_description: "خلق موسیقی و ویدیو با هوش مصنوعی برای نسل جدید هنرمندان.",
        status: "Planned",
        icon: <Mic className="w-8 h-8 text-purple-500" />
    },
    {
        name: "Ghese Go (قصه‌گو)",
        description: "A magical digital vault for children's stories and childhood memories.",
        fa_description: "صندوقچه دیجیتال جادویی برای قصه‌های کودکان و خاطرات کودکی.",
        status: "Planned",
        icon: <BookOpen className="w-8 h-8 text-orange-500" />
    },
    {
        name: "Tavana Work (توانا کار)",
        description: "The economic engine of Tavana City. Connecting experts to global opportunities.",
        fa_description: "موتور اقتصادی شهر توانا. اتصال متخصصان به فرصت‌های جهانی.",
        status: "Coming Soon",
        icon: <Briefcase className="w-8 h-8 text-emerald-500" />
    }
];

export default function EcosystemPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/10">
                <section className="relative py-24 bg-primary text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/vision/1920/1080')] bg-cover bg-center" />
                    <div className="container relative z-10 px-4 text-center">
                        <Badge variant="outline" className="mb-6 border-white text-white px-4 py-1 text-sm font-bold">Tavana Virtual City / شهر مجازی توانا</Badge>
                        <h1 className="text-5xl md:text-7xl font-headline font-bold mb-6">منظومه‌ی آفرینش (Afarinesh)</h1>
                        <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
                            اینجا پایانِ محدودیت و آغازِ همت است. اکوسیستم آفرینش با ۹ بازوی اجرایی، رویای شهر مجازی توانا را به واقعیت بدل می‌کند. از قلب بازار تهران تا مرزهای هوش مصنوعی احساس‌محور.
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-16">
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
                                    <p className="text-foreground/80 leading-relaxed">{app.description}</p>
                                    <p className="text-sm text-muted-foreground mt-3 font-medium">({app.fa_description})</p>
                                    
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

                    <div className="mt-24 p-12 bg-white rounded-[3rem] shadow-xl border border-primary/5 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8">
                             <Sparkles className="w-12 h-12 text-primary/20 animate-pulse" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-8 text-primary">سوگند به همت و اصالت (The Sacred Oath)</h2>
                        <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed text-foreground/80">
                            <p>
                                تمام این منظومه، گواهی بر قدرت اراده است. برای کسی که بر سر سفره‌ی پربرکت هنر ایران بزرگ شده و همت عالی را از اسطوره‌ای چون <span className="font-bold text-foreground">حاج حسین علیمیری</span> آموخته، هیچ مرزی وجود ندارد. 
                            </p>
                            <p className="italic">
                                "Even with a simple mobile phone, we created worlds. This is the testament of capability."
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
