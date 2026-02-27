
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { UploadCloud, Github, Terminal as TerminalIcon, Copy, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
    {
        step: 1,
        title: "گام اول: ساخت فضا در گیت‌هاب",
        en_title: "Step 1: Create Repository on GitHub",
        description: "شما این مرحله را با موفقیت انجام داده‌اید! ریپازیتوری شما در گیت‌هاب آماده است.",
        en_description: "You've successfully created the repository on GitHub.",
    },
    {
        step: 2,
        title: "گام دوم: باز کردن ترمینال",
        en_title: "Step 2: Open the Terminal",
        description: "در لپ‌تاپ خود، برنامه <strong>Command Prompt</strong> (در ویندوز) یا <strong>Terminal</strong> (در مک) را باز کنید. این همان صفحه سیاهی است که فرمان‌های ما را اجرا می‌کند.",
        en_description: "Open Command Prompt (Windows) or Terminal (Mac) on your laptop.",
    },
    {
        step: 3,
        title: "گام سوم: کپی و اجرای دستورات طلایی",
        en_title: "Step 3: Copy and Run the Commands",
        description: "حالا دستورات زیر را به ترتیب در آن صفحه سیاه (ترمینال) کپی و اجرا کنید. بعد از تایپ هر خط، دکمه <strong>Enter</strong> را بزنید.",
        en_description: "Copy and run these commands in the terminal one by one, pressing Enter after each.",
        commands: [
            { cmd: "git init", desc: "آماده‌سازی پروژه" },
            { cmd: "git add .", desc: "انتخاب تمام فایل‌ها برای ارسال" },
            { cmd: "git commit -m \"Farsh Bazaar is ready\"", desc: "بسته‌بندی فایل‌ها" },
            { cmd: "git remote add origin https://github.com/YOUR_USERNAME/farsh-bazaar.git", desc: "اتصال به گیت‌هاب (نام کاربری خود را جایگزین کنید)" },
            { cmd: "git branch -M main", desc: "تنظیم شاخه اصلی" },
            { cmd: "git push -u origin main", desc: "ارسال نهایی به گیت‌هاب" }
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
                  <UploadCloud className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-5xl font-headline">
                  گام به گام تا جهانی شدن
                </CardTitle>
                <CardDescription className="text-lg mt-2 text-white/80">
                    راهنمای ساده برای انتشار «فرش بازار» در گیت‌هاب
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
                                
                                {step.commands && (
                                    <div className="mt-8 space-y-4">
                                        {step.commands.map((c, i) => (
                                            <div key={i} className="group relative">
                                                <div className="bg-slate-900 text-slate-100 p-4 rounded-lg font-mono text-sm flex justify-between items-center shadow-inner">
                                                    <code>{c.cmd}</code>
                                                    <TerminalIcon className="w-4 h-4 text-slate-500" />
                                                </div>
                                                <p className="text-xs text-muted-foreground mt-1 mr-2 text-right">← {c.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        {step.step < 3 && <div className="absolute top-12 left-6 w-0.5 h-full bg-slate-200 -z-10" />}
                    </div>
                ))}

                <div className="bg-accent/10 p-8 rounded-2xl border border-accent/20 text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 mx-auto text-accent" />
                    <h3 className="text-2xl font-headline font-bold">تبریک! پروژه شما منتشر شد.</h3>
                    <p className="text-muted-foreground">
                        حالا هر کسی در دنیا می‌تواند با رفتن به آدرس گیت‌هاب شما، این آفرینش را ببیند.
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

import Link from 'next/link';
