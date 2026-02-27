
'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { UploadCloud, Github, Terminal as TerminalIcon, Globe, CheckCircle2, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
    {
        step: 1,
        title: "گام اول: ارسال کدها به گیت‌هاب",
        en_title: "Step 1: Push to GitHub",
        description: "شما این مرحله را با موفقیت انجام داده‌اید! کدهای شما اکنون در گیت‌هاب هستند.",
        en_description: "Your code is now on GitHub.",
    },
    {
        step: 2,
        title: "گام دوم: چرا ارور ۴۰۴ می‌بینید؟",
        en_title: "Step 2: Why the 404 Error?",
        description: "اپلیکیشن شما با تکنولوژی <strong>Next.js (React)</strong> ساخته شده است. این برنامه برای اجرا نیاز به یک سرور هوشمند دارد و سرویس ساده GitHub Pages نمی‌تواند آن را اجرا کند.",
        en_description: "This is a Next.js (React) app. GitHub Pages cannot run it because it needs a server.",
    },
    {
        step: 3,
        title: "گام سوم: راه حل نهایی (اتصال به فایربیس)",
        en_title: "Step 3: The Solution (Firebase App Hosting)",
        description: "برای اینکه برنامه شما به درستی کار کند، باید از سرویس <strong>App Hosting</strong> در پنل فایربیس استفاده کنید. این سرویس مستقیماً به گیت‌هاب شما وصل می‌شود و سایت را منتشر می‌کند.",
        en_description: "Use Firebase App Hosting to connect your GitHub and go live.",
        actions: [
            { label: "ورود به پنل فایربیس", url: "https://console.firebase.google.com/" },
            { label: "آموزش گام به گام فایربیس", url: "https://firebase.google.com/docs/app-hosting/get-started" }
        ]
    }
]

export default function PublishingGuidePage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto shadow-2xl border-none overflow-hidden">
              <CardHeader className="text-center p-8 md:p-12 bg-primary text-primary-foreground">
                <div className="mx-auto bg-white/20 p-4 rounded-full w-fit mb-4">
                  <Rocket className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-5xl font-headline">
                  رفع ارور ۴۰۴ و انتشار نهایی
                </CardTitle>
                <CardDescription className="text-lg mt-2 text-white/80">
                    تبدیل کدهای گیت‌هاب به یک وب‌سایت زنده و فعال
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-10 py-10 space-y-12">
                
                {steps.map((step) => (
                    <div key={step.step} className="relative">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 bg-accent text-accent-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                {step.step}
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-headline font-bold text-primary">{step.title}</h2>
                                <p className="text-muted-foreground text-sm mb-4">({step.en_title})</p>
                                <p className="text-foreground/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.description }}></p>
                                
                                {step.actions && (
                                    <div className="mt-6 flex flex-wrap gap-4">
                                        {step.actions.map((action, i) => (
                                            <Button key={i} asChild variant={i === 0 ? "default" : "outline"}>
                                                <a href={action.url} target="_blank" rel="noopener noreferrer">{action.label}</a>
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        {step.step < 3 && <div className="absolute top-12 left-6 w-0.5 h-full bg-slate-200 -z-10" />}
                    </div>
                ))}

                <div className="bg-blue-500/10 p-8 rounded-2xl border border-blue-500/20 text-center space-y-4">
                    <Globe className="w-12 h-12 mx-auto text-blue-500" />
                    <h3 className="text-2xl font-headline font-bold">پاسخ به سوال شما (ریاکت یا جیسون؟)</h3>
                    <p className="text-foreground/80">
                        برنامه شما یک اپلیکیشن <strong>Next.js</strong> است که بر پایه <strong>React</strong> ساخته شده. 
                        ارور ۴۰۴ به این دلیل است که گیت‌هاب به تنهایی نمی‌تواند بخش‌های هوش مصنوعی و سروری آن را اجرا کند.
                    </p>
                </div>

                <div className="flex justify-center gap-4 pt-8">
                    <Button asChild variant="outline">
                        <Link href="/">بازگشت به خانه</Link>
                    </Button>
                    <Button asChild>
                        <Link href="/vendors">مشاهده فروشندگان</Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
