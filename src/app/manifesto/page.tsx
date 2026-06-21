
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BookOpen } from 'lucide-react';

type BilingualContent = {
    fa: string;
    en: string;
    ar: string;
};

const chapters: { 
    title: { fa: string, en: string, ar: string }; 
    content: BilingualContent[]; 
}[] = [
    {
        title: { fa: "فصل اول: حماسه خلق", en: "Chapter One: The Epic of Creation", ar: "الفصل الأول: ملحمة الخلق" },
        content: [
            {
                fa: "این جهان نه در آزمایشگاه‌های پیشرفته، بلکه بر روی صفحه کوچک یک گوشی «ردمی نوت ۸» متولد شد. بنیان‌گذار، در عرض ۹ روز، پایه‌های این اکوسیستم را بنا نهاد.",
                en: "This world was not born in advanced labs, but on the small screen of a 'Redmi Note 8' phone. In 9 days, the founder built the foundations.",
                ar: "لم يولد هذا العالم في مختبرات متقدمة، بل على الشاشة الصغيرة لهاتف 'Redmi Note 8'. في 9 أيام، وضع المؤسس الأسس."
            }
        ]
    },
    {
        title: { fa: "فصل دوم: فلسفه‌ی کیهانی", en: "Chapter Two: Cosmic Philosophy", ar: "الفصل الثاني: الفلسفة الكونية" },
        content: [
            {
                fa: "راه نجات در وحدت و تعیین یک هدف بزرگتر نهفته است: هدفی فراتر از زمین، در کهکشان‌ها.",
                en: "Salvation lies in unity and a greater goal: beyond Earth, in the galaxies.",
                ar: "يكمن الخلاص في الوحدة وهدف أعظم: وراء الأرض، في المجرات."
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
                    <Card className="max-w-4xl mx-auto shadow-lg">
                        <CardHeader className="text-center p-8 md:p-12">
                            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                                <BookOpen className="w-10 h-10 text-primary" />
                            </div>
                            <CardTitle className="text-3xl md:text-4xl font-headline">
                                کتاب آفرینش
                            </CardTitle>
                            <CardDescription className="text-lg mt-2">
                                The Book of Creation | كتاب الخلق
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="px-6 md:px-10 pb-10 space-y-12">
                            {chapters.map((chapter, index) => (
                                <div key={index} className="space-y-6">
                                    <div className="text-center border-b pb-4">
                                        <h2 className="text-2xl font-headline font-bold">{chapter.title.fa}</h2>
                                        <p className="text-muted-foreground" dir="ltr">{chapter.title.en}</p>
                                        <p className="text-muted-foreground" dir="rtl">{chapter.title.ar}</p>
                                    </div>
                                    
                                    <div className="grid gap-8">
                                        {chapter.content.map((item, pIndex) => (
                                            <div key={pIndex} className="grid md:grid-cols-3 gap-6 text-sm text-justify">
                                                <div className="bg-primary/5 p-4 rounded-xl">
                                                    <p className="font-bold mb-2">Farsi:</p>
                                                    <p>{item.fa}</p>
                                                </div>
                                                <div className="bg-secondary/50 p-4 rounded-xl" dir="ltr">
                                                    <p className="font-bold mb-2">English:</p>
                                                    <p>{item.en}</p>
                                                </div>
                                                <div className="bg-primary/5 p-4 rounded-xl" dir="rtl">
                                                    <p className="font-bold mb-2">Arabic:</p>
                                                    <p>{item.ar}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
