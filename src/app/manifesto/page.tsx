
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookOpen, Smartphone, Globe, Sparkles, Trophy } from 'lucide-react';
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
        title: { fa: "حماسه خلق: در محدودیت، شکوفه زدیم", en: "The Epic of Creation: Blooming in Scarcity", ar: "ملحمة الخلق: ازدهرنا في الندرة" },
        icon: <Smartphone className="w-8 h-8 text-primary" />,
        content: [
            {
                fa: "این جهان نه در آزمایشگاه‌های پیشرفته، بلکه بر روی صفحه کوچک یک گوشی «ردمی نوت ۸» متولد شد. بنیان‌گذار، در عرض ۹ روز، با اراده‌ای پولادین، تمدنی را بنا نهاد که ۱۳ زبان زنده دنیا را در بر می‌گیرد.",
                en: "This world was not born in advanced labs, but on the small screen of a 'Redmi Note 8' phone. In 9 days, the founder built a civilization covering 13 living languages.",
                ar: "لم يولد هذا العالم في مختبرات متقدمة، بل على الشاشة الصغيرة لهاتف 'Redmi Note 8'. في 9 أيام، وضع المؤسس الأسس لحضارة تشمل 13 لغة حية."
            }
        ]
    },
    {
        title: { fa: "پل تمدن: از ۵۰۰۰ سال قدمت تا ۲۰۲۵ هوشمند", en: "Civilization Bridge: From 5000 Years to Smart 2025", ar: "جسر الحضارة: من 5000 عام إلى 2025 الذكي" },
        icon: <Globe className="w-8 h-8 text-primary" />,
        content: [
            {
                fa: "ما سنت ۵۰۰۰ ساله فرش ایران را به تکنولوژی سال ۲۰۲۵ پیوند زدیم. هدف ما فراتر از تجارت، احیای شکوه هنر و اصالت در عصر دیجیتال است.",
                en: "We merged the 5000-year tradition of Persian carpets with 2025 technology. Our goal is beyond trade: restoring the glory of art and authenticity in the digital age.",
                ar: "لقد دمجنا تقاليد السجاد الإيراني التي يعود تاريخها إلى 5000 عام مع تكنولوجيا عام 2025. هدفنا يتجاوز التجارة: استعادة مجد الفن والأصالة في العصر الرقمي."
            }
        ]
    },
    {
        title: { fa: "ماموریت جهانی: ۱۳ زبان برای یک پیمان", en: "Global Mission: 13 Languages for One Covenant", ar: "المهمة العالمية: 13 لغة لميثاق واحد" },
        icon: <Trophy className="w-8 h-8 text-primary" />,
        content: [
            {
                fa: "فرش بازار، سلاحی است برای صلح و تجارت عادلانه. ما با ۱۳ زبان، دیواره‌های سوءتفاهم را می‌شکنیم تا هنر تبریز و کاشان در پاریس و توکیو بدرخشد.",
                en: "Farsh Bazaar is a weapon for peace and fair trade. With 13 languages, we break walls of misunderstanding so the art of Tabriz and Kashan shines in Paris and Tokyo.",
                ar: "فرش بازار هو سلاح للسلام والتجارة العادلة. بـ 13 لغة، نكسر جدران سوء الفهم لتألق فن تبريز وكاشان في باريس وطوكيو."
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
