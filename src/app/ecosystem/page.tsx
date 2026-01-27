
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Cubes, CheckCircle, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ecosystemApps = [
    {
        name: "Farsh Bazaar (فرش بازار)",
        description: "A global marketplace for artisans, connecting creators directly with a worldwide audience. The first pillar of our new economy.",
        fa_description: "یک بازار جهانی برای صنعتگران که خالقان را مستقیماً به مخاطبان جهانی متصل می‌کند. اولین ستون اقتصاد جدید ما.",
        status: "Live",
        icon: <Cubes className="w-8 h-8 text-primary" />
    },
    {
        name: "Project Legwit (پروژه لگویت)",
        description: "A revolutionary educational platform focused on building 'capability', not just providing knowledge. Starting with language, expanding to all skills.",
        fa_description: "یک پلتفرم آموزشی انقلابی که بر ساختن «توانایی» تمرکز دارد، نه فقط ارائه دانش. شروع با زبان، و گسترش به تمام مهارت‌ها.",
        status: "Coming Soon",
        icon: <Cubes className="w-8 h-8 text-muted-foreground" />
    },
    {
        name: "Tavana Work (توانا کار)",
        description: "A future-of-work platform where opportunities are matched based on proven skills and capabilities, transcending traditional resumes and credentials.",
        fa_description: "یک پلتفرم برای آینده کار که در آن فرصت‌ها بر اساس مهارت‌ها و توانایی‌های اثبات‌شده منطبق می‌شوند و از رزومه‌ها و مدارک سنتی فراتر می‌روند.",
        status: "Coming Soon",
        icon: <Cubes className="w-8 h-8 text-muted-foreground" />
    },
    {
        name: "Afarinesh Hub (آفرینش هاب)",
        description: "The central social and collaborative hub for creators, builders, and visionaries within Tavana City to connect, share, and co-create.",
        fa_description: "مرکز اجتماعی و همکاری برای خالقان، سازندگان و رویاپردازان در شهر توانا برای اتصال، اشتراک‌گذاری و خلق مشترک.",
        status: "Coming Soon",
        icon: <Cubes className="w-8 h-8 text-muted-foreground" />
    },
    {
        name: "Mehr Bank (مهر بانک)",
        description: "A community-driven micro-investment and funding platform designed to support new projects and ideas that align with the ecosystem's values.",
        fa_description: "یک پلتفرم سرمایه‌گذاری خرد و تأمین مالی جامعه‌محور که برای حمایت از پروژه‌ها و ایده‌های جدید همسو با ارزش‌های اکوسیستم طراحی شده است.",
        status: "Coming Soon",
        icon: <Cubes className="w-8 h-8 text-muted-foreground" />
    },
    {
        name: "Unity Chain (زنجیره وحدت)",
        description: "Our native digital currency and blockchain infrastructure, designed to facilitate a fair, transparent, and self-sustaining economy within Tavana City.",
        fa_description: "ارز دیجیتال بومی و زیرساخت بلاکچین ما که برای تسهیل یک اقتصاد عادلانه، شفاف و خودپایدار در شهر توانا طراحی شده است.",
        status: "Planned",
        icon: <Cubes className="w-8 h-8 text-muted-foreground" />
    }
];

export default function EcosystemPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/20">
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center mb-12">
                        <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                            <Cubes className="w-10 h-10 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-headline font-bold">The FB New Meta Ecosystem</h1>
                        <p className="mt-2 text-xl text-muted-foreground">The Executive Arms of Tavana City (بازوهای اجرایی شهر توانا)</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ecosystemApps.map((app) => (
                            <Card key={app.name} className="flex flex-col">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center gap-4">
                                            {app.icon}
                                            <CardTitle className="font-headline text-xl">{app.name}</CardTitle>
                                        </div>
                                        <Badge variant={app.status === 'Live' ? 'default' : 'outline'} className={app.status === 'Live' ? 'bg-green-600/20 text-green-700 border-green-600/50 dark:bg-green-500/20 dark:text-green-400 dark:border-green-500/50' : ''}>
                                            {app.status === 'Live' ? <CheckCircle className="w-3 h-3 mr-1" /> : <Clock className="w-3 h-3 mr-1" />}
                                            {app.status}
                                        </Badge>
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-foreground/80">{app.description}</p>
                                    <p className="text-sm text-muted-foreground mt-2">({app.fa_description})</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        This roadmap represents our commitment to building a complete, interconnected world. Each application is a vital organ, working in harmony to create a society where capability and collaboration are the cornerstones of progress.
                        <br/>
                        <span className="text-base">(این نقشه راه، تعهد ما به ساختن یک دنیای کامل و به‌هم‌پیوسته را نشان می‌دهد. هر اپلیکیشن، یک عضو حیاتی است که در هماهنگی با دیگران کار می‌کند تا جامعه‌ای را خلق کند که در آن، توانایی و همکاری، سنگ‌بنای پیشرفت است.)</span>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
