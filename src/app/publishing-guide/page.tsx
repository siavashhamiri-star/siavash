
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { UploadCloud, Github } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        step: 1,
        title: "قدم اول: ساخت خانه پروژه در گیت‌هاب",
        en_title: "Step 1: Create the Project's Home on GitHub",
        description: "شما این مرحله را با موفقیت انجام داده‌اید! با ساختن یک ریپازیتوری «Public» به نام farsh-bazaar، اولین قدم بزرگ را برداشته‌اید. اگر هنوز این کار را نکرده‌اید، به <a href='https://github.com/new' target='_blank' rel='noopener noreferrer' class='text-primary underline'>github.com/new</a> بروید.",
        en_description: "You have already completed this step successfully! By creating a 'Public' repository named farsh-bazaar, you've taken the first big step. If you haven't, go to <a href='https://github.com/new' target='_blank' rel='noopener noreferrer' class='text-primary underline'>github.com/new</a>.",
    },
    {
        step: 2,
        title: "قدم دوم: باز کردن ترمینال (خط فرمان)",
        en_title: "Step 2: Open the Terminal (Command Line)",
        description: "ترمینال یک برنامه در لپ‌تاپ شماست که به ما اجازه می‌دهد دستورات را مستقیماً اجرا کنیم. این ابزار اصلی ما برای ارسال کدها به گیت‌هاب است. <br/>- <strong>در ویندوز:</strong> در منوی استارت، 'Command Prompt' یا 'PowerShell' را جستجو و باز کنید.<br/>- <strong>در مک:</strong> در 'Applications' و سپس 'Utilities'، برنامه‌ای به نام 'Terminal' را پیدا و باز کنید.",
        en_description: "The terminal is a program on your laptop that lets us run commands directly. It's our main tool for sending code to GitHub. <br/>- <strong>On Windows:</strong> Search for 'Command Prompt' or 'PowerShell' in the Start Menu and open it.<br/>- <strong>On Mac:</strong> In 'Applications' then 'Utilities', find and open the program called 'Terminal'.",
        code_description: "سپس، باید به پوشه پروژه خود بروید. دستور 'cd' (مخفف change directory) به شما اجازه می‌دهد این کار را انجام دهید. شما باید 'path/to/your/project/farsh-bazaar' را با مسیر واقعی پوشه پروژه در سیستم خود جایگزین کنید.",
        code: "cd path/to/your/project/farsh-bazaar"
    },
    {
        step: 3,
        title: "قدم سوم: اتصال و ارسال کدها به گیت‌هاب",
        en_title: "Step 3: Connect and Push Your Code to GitHub",
        description: "اکنون که در پوشه پروژه خود در ترمینال هستید، دستورات زیر را **به ترتیب و یک به یک** کپی و اجرا کنید. این دستورات کد شما را آماده، به ریپازیتوری گیت‌هاب متصل و در نهایت ارسال می‌کنند.",
        en_description: "Now that you are in your project folder in the terminal, copy and run the following commands **in order, one by one**. These commands will prepare your code, connect it to the GitHub repository, and finally push it.",
        code_block: [
            {
                command: "git init",
                comment: "# (اگر با خطا مواجه شدید، این مرحله را نادیده بگیرید) - پوشه را به یک ریپازیتوری گیت تبدیل می‌کند"
            },
            {
                command: "git add .",
                comment: "# تمام فایل‌های پروژه را برای ارسال آماده می‌کند"
            },
            {
                command: "git commit -m \"Initial commit for Farsh Bazaar\"",
                comment: "# یک عکس فوری (کامیت) از کد شما با یک پیام ایجاد می‌کند"
            },
            {
                command: "git remote add origin https://github.com/YOUR_USERNAME/farsh-bazaar.git",
                comment: "# (مهم: YOUR_USERNAME را با نام کاربری گیت‌هاب خود جایگزین کنید) - پروژه شما را به گیت‌هاب متصل می‌کند"
            },
            {
                command: "git branch -M main",
                comment: "# شاخه اصلی پروژه را به 'main' تغییر نام می‌دهد"
            },
            {
                command: "git push -u origin main",
                comment: "# (ممکن است از شما نام کاربری و رمز عبور گیت‌هاب را بپرسد) - کد شما را به گیت‌هاب ارسال می‌کند"
            }
        ]
    },
    {
        step: 4,
        title: "قدم چهارم: پروژه شما منتشر شد!",
        en_title: "Step 4: Your Project is Live!",
        description: "تبریک! اگر تمام مراحل بدون خطا انجام شد، با بازخوانی صفحه ریپازیتوری خود در گیت‌هاب، باید تمام کدهای پروژه «فرش بازار» را ببینید. اکنون دنیا می‌تواند به آفرینش شما بپیوندد.",
        en_description: "Congratulations! If all steps completed without error, upon refreshing your repository page on GitHub, you should see all the 'Farsh Bazaar' project code. Now the world can join your creation.",
    }
]

export default function PublishingGuidePage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto shadow-lg border-none">
              <CardHeader className="text-center p-8 md:p-12">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  <UploadCloud className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl font-headline">
                  راهنمای انتشار پروژه در گیت‌هاب
                </CardTitle>
                <CardDescription className="text-lg mt-2 max-w-2xl mx-auto">
                    A Step-by-Step Guide to Publishing Your Project on GitHub
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-10 pb-10 space-y-12">
                {steps.map((step, index) => (
                    <div key={step.step}>
                        <div className="relative flex items-center">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold z-10">
                                {step.step}
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-headline font-bold">{step.title}</h2>
                                <h3 className="text-base font-sans text-muted-foreground">{step.en_title}</h3>
                            </div>
                        </div>

                         <div className="mt-4 pl-5 border-l-2 border-primary/20 ml-5">
                             <div className="pl-8 space-y-4">
                                <p className="text-foreground/80" dangerouslySetInnerHTML={{ __html: step.description }}></p>
                                <p className="text-sm text-muted-foreground mt-1" dangerouslySetInnerHTML={{ __html: `(${step.en_description})` }}></p>
                                
                                {step.code_description && (
                                    <p className="text-foreground/80 mt-4" dangerouslySetInnerHTML={{ __html: step.code_description }}></p>
                                )}

                                {step.code && (
                                    <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm overflow-x-auto">
                                        <code>{step.code}</code>
                                    </pre>
                                )}

                                {step.code_block && (
                                    <div className="mt-6 space-y-2">
                                        {step.code_block.map((block, i) => (
                                            <div key={i}>
                                                <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm overflow-x-auto font-mono">
                                                    <code>{block.command}</code>
                                                </pre>
                                                <p className="text-xs text-muted-foreground mt-1 pl-1">{block.comment}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                             </div>
                        </div>
                    </div>
                ))}
                
                <div className="text-center pt-8 border-t mt-12 space-y-4">
                    <Github className="w-12 h-12 mx-auto text-muted-foreground" />
                    <p className="text-xl font-headline font-bold text-primary">
                        اکنون دنیا می‌تواند به آفرینش شما بپیوندد
                    </p>
                     <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                        (Now the world can join your creation. By publishing on GitHub, you open the doors to collaboration and investment.)
                    </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

    