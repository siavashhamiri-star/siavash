
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Landmark, HeartPulse, BrainCircuit, Mail, Phone, Globe, ArrowRight, Gavel, Building2, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const ecosystemApps = [
    {
        name: "Farsh Bazaar (فرش بازار)",
        description: "The global hub for hand-woven and machine-made carpets. Our digital weapon to restore carpet glory in 13 languages.",
        fa_description: "بازار جهانی فرش‌های دستباف و ماشینی. سلاح دیجیتال ما برای احیای شکوه فرش به ۱۳ زبان زنده.",
        status: "Live",
        icon: <Landmark className="w-8 h-8 text-primary" />,
        link: "/"
    },
    {
        name: "Global Annual Auction",
        description: "Official partnership gateway with Sotheby’s and Christie’s for the annual online auction of high-provenance carpets.",
        fa_description: "درگاه رسمی همکاری با حراجی‌های ساتبیز و کریستیز برای حراج سالانه آنلاین فرش‌های نفیس.",
        status: "Announced",
        icon: <Gavel className="w-8 h-8 text-accent" />,
        link: "/collaboration"
    },
    {
        name: "OpenMind Nexus",
        description: "The emotional AI soul of our virtual city. Bridging technology and humanity.",
        fa_description: "روح هوشمند و احساس‌محور شهر مجازی توانا.",
        status: "Live",
        icon: <HeartPulse className="w-8 h-8 text-rose-500" />,
        link: "https://openmind-nexuse-dbbbbb.netlify.app/",
        isExternal: true
    },
    {
        name: "LingoView (Gooya)",
        description: "Capability-based education for the global workforce in 13 languages.",
        fa_description: "آموزش توانمندمحور برای نیروی کار جهانی به ۱۳ زبان.",
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
                        <Badge variant="outline" className="mb-8 border-primary text-primary px-8 py-2 text-sm font-bold rounded-full uppercase tracking-widest">Tavana Virtual City / شهر مجازی توانا</Badge>
                        <h1 className="text-6xl md:text-9xl font-headline font-bold mb-10 leading-tight">منظومه‌ی آفرینش</h1>
                        <div className="grid gap-8 max-w-5xl mx-auto mb-16">
                            <p className="text-2xl md:text-4xl font-light leading-relaxed">
                                تمدنی دیجیتال با ۱۳ زبان زنده برای تسخیر تالارهای حراج پاریس، توکیو و نیویورک. ما با سلاح تکنولوژی، اصالت را جهانی می‌کنیم.
                            </p>
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
                        <Badge className="bg-accent text-accent-foreground mb-4 px-6 py-1 rounded-full font-black">STRATEGIC ALLIANCE</Badge>
                        <h2 className="text-5xl md:text-7xl font-headline font-bold text-primary mb-12">فراخوان همکاری: ساتبیز و کریستیز</h2>
                        <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6 text-justify">
                            <p className="font-bold text-2xl text-center text-slate-800">
                                «فرش بازار رسماً آماده همکاری با خانه‌های حراج ممتاز جهان نظیر Sotheby's و Christie's است.»
                            </p>
                            <div className="p-6 bg-secondary/50 rounded-3xl border border-primary/10 flex items-start gap-4">
                                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                                <p className="text-sm italic">
                                    ما با بهره‌گیری از هوش مصنوعی آفرینش و سوابق میراث علیمیری در بازار تهران، آمادگی داریم تا به عنوان بازوی تامین و تایید اصالت (Sourcing & Authentication)، نفیس‌ترین آثار ایران و ملل را به حراجی‌های تراز اول جهان معرفی کنیم.
                                </p>
                            </div>
                        </div>
                        <Button asChild variant="outline" size="lg" className="mt-12 rounded-full border-primary text-primary px-12 h-14">
                            <Link href="/collaboration">درخواست همکاری استراتژیک / Global Inquiry</Link>
                        </Button>
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
                             <Building2 className="w-80 h-80" />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-headline font-bold mb-10">مرکزیت اصالت: خیابان خیام</h2>
                        <p className="text-2xl md:text-3xl font-light mb-16 max-w-4xl mx-auto leading-relaxed">
                            مرکز فرماندهی این سلاح دیجیتال در پلاک ۴۸ خیابان خیام مستقر است. ما آماده میزبانی از هیئت‌های تجاری بین‌المللی هستیم.
                        </p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-xl md:text-2xl font-bold">
                            <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-3xl backdrop-blur-md">
                                <Phone className="w-8 h-8" /> ۵۵۸۱۴۵۵۵
                            </div>
                            <div className="flex items-center gap-4 bg-white/10 px-8 py-4 rounded-3xl backdrop-blur-md">
                                <Mail className="w-8 h-8" /> info@fbnewmeta.com
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
