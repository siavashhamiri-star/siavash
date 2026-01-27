
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Github, UploadCloud } from 'lucide-react';
import Image from 'next/image';

const steps = [
    {
        step: 1,
        title: "قدم اول: ساخت یک ریپازیتوری جدید",
        en_title: "Step 1: Create a New Repository",
        description: "به وب‌سایت گیت‌هاب بروید و روی دکمه «New» کلیک کنید یا مستقیماً به آدرس github.com/new بروید. این کار صفحه ساخت ریپازیتوری جدید را برای شما باز می‌کند.",
        en_description: "Go to the GitHub website and click the 'New' button, or go directly to github.com/new. This will open the new repository creation page.",
        imageUrl: "https://placehold.co/800x400/2d333b/e5e7eb/png?text=GitHub's+New+Repository+Page",
        imageAlt: "صفحه ساخت ریپازیتوری جدید در گیت‌هاب"
    },
    {
        step: 2,
        title: "قدم دوم: نام‌گذاری و تنظیمات",
        en_title: "Step 2: Naming and Configuration",
        description: "یک نام برای ریپازیتوری خود انتخاب کنید (مثلاً 'farsh-bazaar'). آن را روی حالت «Public» قرار دهید تا همه بتوانند آن را ببینند. سپس روی دکمه «Create repository» کلیک کنید.",
        en_description: "Choose a name for your repository (e.g., 'farsh-bazaar'). Set it to 'Public' so everyone can see it. Then click the 'Create repository' button.",
        imageUrl: "https://placehold.co/800x450/2d333b/e5e7eb/png?text=Naming+Your+Repository",
        imageAlt: "فرم نام‌گذاری ریپازیتوری در گیت‌هاب"

    },
    {
        step: 3,
        title: "قدم سوم: اتصال و ارسال کدها",
        en_title: "Step 3: Connect and Push Your Code",
        description: "پس از ساخت ریپازیتوری، گیت‌هاب دستوراتی را به شما نمایش می‌دهد. این دستورات را در ترمینال یا خط فرمان پروژه خود اجرا کنید تا کدها از سیستم شما به گیت‌هاب ارسال شوند. (نام کاربری خود را جایگزین YOUR_USERNAME کنید)",
        en_description: "After creating the repository, GitHub will show you some commands. Run these commands in your project's terminal to push the code from your system to GitHub. (Replace YOUR_USERNAME with your actual username)",
        code: `git remote add origin https://github.com/YOUR_USERNAME/farsh-bazaar.git\ngit branch -M main\ngit push -u origin main`
    },
    {
        step: 4,
        title: "قدم چهارم: پروژه شما منتشر شد!",
        en_title: "Step 4: Your Project is Live!",
        description: "تبریک! کد پروژه شما اکنون در گیت‌هاب منتشر شده و برای همه دنیا قابل مشاهده است. اکنون می‌توانید لینک آن را با سرمایه‌گذاران، توسعه‌دهندگان و همکاران آینده خود به اشتراک بگذارید.",
        en_description: "Congratulations! Your project code is now published on GitHub and visible to the whole world. You can now share its link with future investors, developers, and collaborators.",
        imageUrl: "https://placehold.co/800x500/2d333b/e5e7eb/png?text=Your+Code+is+on+GitHub!",
        imageAlt: "صفحه اصلی ریپازیتوری پروژه در گیت‌هاب"
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
                    A Visual Guide to Publishing Your Project on GitHub
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-10 pb-10 space-y-12">
                {steps.map((step, index) => (
                    <div key={step.step}>
                        <div className="relative flex items-center">
                            <div className="flex-shrink-0 bg-primary text-primary-foreground h-10 w-10 rounded-full flex items-center justify-center text-lg font-bold">
                                {step.step}
                            </div>
                            <div className="ml-4">
                                <h2 className="text-xl font-headline font-bold">{step.title}</h2>
                                <h3 className="text-base font-sans text-muted-foreground">{step.en_title}</h3>
                            </div>
                        </div>

                        <div className="mt-4 pl-14">
                            <p className="text-foreground/80">{step.description}</p>
                             <p className="text-sm text-muted-foreground mt-1">({step.en_description})</p>

                            {step.imageUrl && (
                                <div className="mt-6 rounded-lg overflow-hidden border-2 border-border shadow-md">
                                    <Image 
                                        src={step.imageUrl}
                                        alt={step.imageAlt}
                                        width={800}
                                        height={450}
                                        className="w-full h-auto"
                                    />
                                </div>
                            )}
                            {step.code && (
                                <div className="mt-6">
                                    <pre className="bg-gray-800 text-white p-4 rounded-lg text-sm overflow-x-auto">
                                        <code>
                                            {step.code}
                                        </code>
                                    </pre>
                                </div>
                            )}
                        </div>
                        {index < steps.length - 1 && <div className="pl-14"><hr className="mt-12 border-border" /></div>}
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
