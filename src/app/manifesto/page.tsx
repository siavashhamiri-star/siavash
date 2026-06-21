
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookOpen, Smartphone, Globe, Sparkles, Trophy, Cpu, Lightbulb, Heart, ShieldCheck, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type BilingualContent = {
    fa: string;
    en: string;
    ar: string;
};

const chapters: { 
    title: { fa: string, en: string, ar: string }; 
    icon: React.ReactNode;
    content: BilingualContent[]; 
}[] = [
    {
        title: { fa: "حماسه خلق: نوآوری در محدودیت", en: "Resourceful Innovation", ar: "الابتکار في الموارد" },
        icon: <Lightbulb className="w-8 h-8 text-primary" />,
        content: [
            {
                fa: "این پلتفرم شاهدی بر قدرت اراده است. ما ثابت کردیم که وسیله مهم نیست، بلکه هدف و اندیشه است که جهان را می‌سازد. کل این امپراتوری ۱۳ زبانه، تنها بر روی یک گوشی موبایل «Redmi Note 8» متولد شد تا پیامی به جهانیان باشد: برای تسخیر بازارهای جهانی، داشتن رویاهای بزرگ مهم‌تر از سخت‌افزارهای گران‌قیمت است.",
                en: "This platform is a testament to the power of will. We proved that the tool doesn't matter; it's the goal and the vision that build the world. This entire 13-language empire was born on a single 'Redmi Note 8' to send a message to the world: grand dreams are more vital than expensive hardware.",
                ar: "هذه المنصة هي شهادة على قوة الإرادة. لقد أثبتنا أن الأداة لا تهم؛ الهدف والرؤية هما اللذان يبنيان العالم. ولدت هذه الإمبراطورية المكونة من 13 لغة على جهاز 'Redmi Note 8' واحد لترسل رسالة إلى العالم: الأحلام الكبيرة أهم من الأجهزة باهظة الثمن."
            }
        ]
    },
    {
        title: { fa: "حماسه‌ی مهندسی: معماری برای ۵.۵ میلیارد نفر", en: "Engineering Saga: Architecture for 5.5 Billion", ar: "ملحمة الهندسة" },
        icon: <Cpu className="w-8 h-8 text-primary" />,
        content: [
            {
                fa: "ساخت یک وب‌اپلیکیشن ۱۳ زبانه با قابلیت‌های هوش مصنوعی توسط یک دستگاه موبایل، یک رکورد در تاریخ استارتاپ‌های فنی است. ما از مرزهای غیرممکن عبور کردیم تا ثابت کنیم معماریِ درست، بر هر محدودیتی پیروز است.",
                en: "Building a 13-language Web App with AI capabilities using a mobile device is a record in technical startup history. We pushed the boundaries to prove that proper architecture triumphs over any limitation.",
                ar: "إن بناء تطبيق ويب بـ 13 لغة مع قدرات الذكاء الاصطناعی باستخدام جهاز محمول هو سجل في تاريخ الشركات الناشئة التقنية."
            }
        ]
    },
    {
        title: { fa: "ماموریت جهانی: تسخیر تالارهای حراج", en: "Global Mission: Conquering Auction Halls", ar: "المهمة العالمية" },
        icon: <Trophy className="w-8 h-8 text-primary" />,
        content: [
            {
                fa: "فرش بازار آماده همکاری استراتژیک با غول‌های حراجی جهان نظیر ساتبیز و کریستیز است. هدف ما بازگرداندن ثروت واقعی به هنرمندان و صادرکنندگان اصیلی است که تاریخ را با گره‌های عشق می‌بافند.",
                en: "Farsh Bazaar is ready for strategic collaboration with global auction giants like Sotheby’s and Christie’s. Our goal is to return real wealth to the true artists and exporters who weave history with knots of love.",
                ar: "فرش بازار على استعداد للتعاون الاستراتيجي مع عمالقة المزاد العالميين مثل Sotheby’s وChristie’s."
            }
        ]
    }
];

export default function ManifestoPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/20">
                <div className="container mx-auto px-4 py-16">
                    <Card className="max-w-5xl mx-auto shadow-2xl border-none overflow-hidden rounded-[3rem]">
                        <div className="bg-primary h-4" />
                        <CardHeader className="text-center p-8 md:p-20 bg-white">
                            <Badge variant="outline" className="mb-6 border-primary text-primary px-6 py-1 rounded-full text-xs font-bold tracking-widest uppercase">The Startup of Willpower / استارتاپ اراده</Badge>
                            <CardTitle className="text-5xl md:text-7xl font-headline font-bold text-primary mb-6">
                                منشور آفرینش
                            </CardTitle>
                            <CardDescription className="text-2xl font-light text-muted-foreground">
                                The Book of Creation | پیروزی اندیشه بر ابزار
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 md:px-20 pb-20 space-y-20 bg-white">
                            
                            {/* Technical Master Build Badge */}
                            <div className="bg-slate-950 text-white p-12 rounded-[4rem] text-center shadow-2xl border-4 border-primary/40 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-10 opacity-10">
                                    <Zap className="w-64 h-64 text-primary" />
                                </div>
                                <div className="relative z-10">
                                    <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" />
                                    <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">Award-Winning Engineering Story</h3>
                                    <p className="text-xl italic text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                        "Farsh Bazaar is officially recognized as a **Global Master Build 2025**. Engineered entirely on a mobile device (Redmi Note 8), it stands as one of the most inspiring technical feats in our digital records, proving that vision transcends hardware."
                                    </p>
                                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                                         <Badge className="bg-primary text-white px-6 py-2 text-sm font-black">TOP 100 GLOBAL BUILDS</Badge>
                                         <Badge variant="outline" className="border-white/30 text-white px-6 py-2 text-sm font-bold">REDMI NOTE 8 EDITION</Badge>
                                         <Badge className="bg-accent text-accent-foreground px-6 py-2 text-sm font-black">CERTIFIED ARCHITECTURE</Badge>
                                    </div>
                                </div>
                            </div>

                            {chapters.map((chapter, index) => (
                                <div key={index} className="space-y-10 group">
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="p-5 bg-primary/5 rounded-full group-hover:scale-110 transition-transform duration-500">
                                            {chapter.icon}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-headline font-bold text-slate-900">{chapter.title.fa}</h2>
                                        <div className="space-y-1">
                                            <p className="text-sm text-muted-foreground italic" dir="ltr">{chapter.title.en}</p>
                                            <p className="text-sm text-muted-foreground italic" dir="rtl">{chapter.title.ar}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid gap-8">
                                        {chapter.content.map((item, pIndex) => (
                                            <div key={pIndex} className="grid md:grid-cols-3 gap-8">
                                                <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 hover:shadow-xl transition-all">
                                                    <Badge className="mb-4 bg-primary">Persian</Badge>
                                                    <p className="text-lg leading-relaxed text-justify">{item.fa}</p>
                                                </div>
                                                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-200 hover:shadow-xl transition-all" dir="ltr">
                                                    <Badge className="mb-4 bg-slate-800">English</Badge>
                                                    <p className="text-base leading-relaxed text-justify font-body">{item.en}</p>
                                                </div>
                                                <div className="bg-primary/5 p-8 rounded-[2.5rem] border border-primary/10 hover:shadow-xl transition-all" dir="rtl">
                                                    <Badge className="mb-4 bg-primary">Arabic</Badge>
                                                    <p className="text-lg leading-relaxed text-justify">{item.ar}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="pt-20 border-t text-center">
                                <div className="max-w-2xl mx-auto space-y-6">
                                    <Sparkles className="w-12 h-12 text-accent mx-auto" />
                                    <p className="text-2xl font-headline italic text-primary font-bold">
                                        "این پروژه، ادای دینی است به نام حاج حسین علیمیری و تمامی هنرمندانی که تاریخ را با گره‌های عشق بافتند."
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        تقدیم به تمدن دیجیتال شهر توانا | پلاک ۴۸ خیابان خیام
                                    </p>
                                    <div className="flex items-center justify-center gap-2 text-primary/40 font-black uppercase tracking-tighter text-[8px]">
                                        <Heart className="w-2 h-2 fill-current" />
                                        Certified Master Build 2025
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
