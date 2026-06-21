
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookOpen, Smartphone, Globe, Sparkles, Trophy, Cpu } from 'lucide-react';
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
        title: { fa: "حماسه خلق: حماسه ردمی نوت ۸", en: "The Epic of Redmi Note 8", ar: "ملحمة ريدمي نوت 8" },
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        content: [
            {
                fa: "این پلتفرم شاهدی بر قدرت اراده است. کل این امپراتوری ۱۳ زبانه، با هوش مصنوعی پیشرفته و معماری پیچیده، تنها بر روی یک گوشی موبایل «Redmi Note 8» در عرض ۹ روز متولد شد. ما ثابت کردیم که برای تسخیر بازارهای جهانی، داشتن رویاهای بزرگ مهم‌تر از داشتن سخت‌افزارهای گران‌قیمت است.",
                en: "This platform stands as a testament to human will. This entire 13-language empire, featuring advanced AI and complex architecture, was engineered on a single 'Redmi Note 8' mobile device in just 9 days. We proved that to conquer global markets, having grand dreams is more vital than expensive hardware.",
                ar: "هذه المنصة هي شهادة على قوة الإرادة. هذه الإمبراطورية المكونة من 13 لغة، والتي تتميز بالذكاء الاصطناعي المتقدم والهندسة المعقدة، تم تصميمها على جهاز محمول واحد 'Redmi Note 8' في 9 أيام فقط. لقد أثبتنا أنه لغزو الأسواق العالمية، فإن امتلاك أحلام كبيرة هو أهم من امتلاك أجهزة باهظة الثمن."
            }
        ]
    },
    {
        title: { fa: "پل تمدن: ۵۰۰۰ سال هنر در جیب شما", en: "Civilization Bridge: 5000 Years in Your Pocket", ar: "جسر الحضارة: 5000 عام في جيبك" },
        icon: <Globe className="w-8 h-8 text-primary" />,
        content: [
            {
                fa: "ما سنت ۵۰۰۰ ساله فرش ایران را از دخمه‌های تاریک تاریخ به لبه تکنولوژی ۲۰۲۵ آوردیم. لنز جادویی ما رازهای باستانی را برای آلمانی‌ها، چینی‌ها، فرانسوی‌ها و ژاپنی‌ها بازگو می‌کند. این یعنی پیوند اصالت با آینده.",
                en: "We brought the 5000-year tradition of Persian carpets from the shadows of history to the edge of 2025 technology. Our Magic Lens reveals ancient secrets to Germans, Chinese, French, and Japanese collectors. This is the fusion of heritage and the future.",
                ar: "لقد جلبنا تقاليد السجاد الإيراني الممتدة لـ 5000 عام من ظلال التاريخ إلى حافة تكنولوجيا عام 2025. تكشف عدستنا السحرية عن الأسرار القديمة لهواة الجمع الألمان والصينيين والفرنسيين واليابانيين. هذا هو اندماج التراث والمستقبل."
            }
        ]
    },
    {
        title: { fa: "ماموریت جهانی: تسخیر تالارهای حراج", en: "Global Mission: Conquering Auction Halls", ar: "المهمة العالمية: غزو قاعات المزاد" },
        icon: <Trophy className="w-8 h-8 text-primary" />,
        content: [
            {
                fa: "فرش بازار، سلاحی است برای بازگرداندن ثروت به هنرمندان واقعی. ما آماده همکاری با ساتبیز و کریستیز هستیم تا نفیس‌ترین آثار را با تاییدیه اصالت علیمیری به دست صاحبان اصلی‌شان در سراسر جهان برسانیم.",
                en: "Farsh Bazaar is a weapon to return wealth to true artisans. We are ready to collaborate with Sotheby’s and Christie’s to bring the most exquisite masterpieces, verified by Alimiri authentication, to collectors worldwide.",
                ar: "فرش بازار هو سلاح لإعادة الثروة إلى الحرفيين الحقيقيين. نحن على استعداد للتعاون مع Sotheby’s وChristie’s لتقديم أروع التحف، المعتمدة من قبل Alimiri، لهواة الجمع في جميع أنحاء العالم."
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
                                The Book of Creation | کتابی که با ردمی نوت ۸ نوشته شد
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 md:px-20 pb-20 space-y-20 bg-white">
                            <div className="bg-slate-900 text-white p-12 rounded-[4rem] text-center shadow-xl border-4 border-primary/20">
                                <Cpu className="w-16 h-16 mx-auto mb-6 text-primary animate-pulse" />
                                <h3 className="text-3xl font-bold mb-4">Master Build 2025: Award Candidate</h3>
                                <p className="text-xl italic text-gray-300 leading-relaxed">
                                    "This software is officially nominated for the Global Startup Awards for its revolutionary 'Resourceful Innovation'—built entirely on a Redmi Note 8 in 9 days to serve 5.5 billion people in 13 languages."
                                </p>
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
                                                <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/10 hover:shadow-lg transition-shadow">
                                                    <Badge className="mb-4 bg-primary">Persian</Badge>
                                                    <p className="text-lg leading-relaxed text-justify">{item.fa}</p>
                                                </div>
                                                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 hover:shadow-lg transition-shadow" dir="ltr">
                                                    <Badge className="mb-4 bg-slate-800">English</Badge>
                                                    <p className="text-base leading-relaxed text-justify font-body">{item.en}</p>
                                                </div>
                                                <div className="bg-primary/5 p-8 rounded-[2rem] border border-primary/10 hover:shadow-lg transition-shadow" dir="rtl">
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
