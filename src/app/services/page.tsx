
'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useUser, useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { Palette, Image as ImageIcon, Loader2, Sparkles, Sofa, Frame, MapPin, Phone, Flag, Users } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PremiumServicesPage() {
  const { data: user, isLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  
  const [serviceType, setServiceType] = useState<'decor' | 'tableau' | 'flag' | 'portrait-flag' | null>(null);
  const [description, setDescription] = useState('');
  const [imageDataUri, setImageDataUri] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImageDataUri(ev.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
        toast({ title: "لطفاً ابتدا وارد حساب کاربری خود شوید.", variant: "destructive" });
        return;
    }
    if (!serviceType) {
        toast({ title: "لطفاً نوع سرویس را انتخاب کنید.", variant: "destructive" });
        return;
    }
    if (serviceType !== 'flag' && !imageDataUri) {
        toast({ title: "لطفاً تصویر مورد نظر (چهره یا فضا) را آپلود کنید.", variant: "destructive" });
        return;
  }

    setSubmitting(true);
    try {
        await addDoc(collection(firestore, 'special_requests'), {
            serviceType,
            description,
            imageDataUri: imageDataUri || '',
            userId: user.uid,
            userName: user.displayName,
            status: 'pending',
            createdAt: serverTimestamp()
        });
        toast({
            title: "درخواست شما با موفقیت ثبت شد",
            description: "کارشناسان آفرینش بزودی برای مشاوره تخصصی با شما تماس خواهند گرفت.",
        });
        router.push('/account');
    } catch (err: any) {
        toast({ title: "خطا در ثبت درخواست", description: err.message, variant: "destructive" });
    } finally {
        setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center space-y-6">
             <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-primary/20">
                <Sparkles className="w-12 h-12 text-primary" />
             </div>
             <h1 className="text-4xl md:text-7xl font-headline font-bold text-primary">سرویس‌های اشرافی آفرینش</h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                بافت نفیس‌ترین آثار هنری جهان با ابریشم تبریز. از پرچم‌های ملی تا پرتره‌های خانوادگی در قلب پرچم کشور شما.
             </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 mb-16">
              {/* National Flag + Portrait */}
              <Card 
                className={`cursor-pointer transition-all duration-500 border-4 ${serviceType === 'portrait-flag' ? 'border-primary shadow-2xl scale-105' : 'border-transparent hover:border-primary/20'}`}
                onClick={() => setServiceType('portrait-flag')}
              >
                <CardHeader className="p-6 text-center">
                    <Users className={`w-10 h-10 mx-auto mb-4 ${serviceType === 'portrait-flag' ? 'text-primary' : 'text-muted-foreground'}`} />
                    <CardTitle className="text-xl font-headline">پرتره در میان پرچم</CardTitle>
                    <CardDescription className="text-[10px]">بافت تصویر شما یا عزیزانتان در میانه پرچم ملی کشور مورد نظر.</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-center text-[10px] text-muted-foreground leading-relaxed italic">
                    اوج شخصی‌سازی و احترام به هویت ملی و فردی. شاهکاری از ابریشم و هنر تبریز.
                </CardContent>
              </Card>

              {/* National Flag Service */}
              <Card 
                className={`cursor-pointer transition-all duration-500 border-4 ${serviceType === 'flag' ? 'border-primary shadow-2xl scale-105' : 'border-transparent hover:border-primary/20'}`}
                onClick={() => setServiceType('flag')}
              >
                <CardHeader className="p-6 text-center">
                    <Flag className={`w-10 h-10 mx-auto mb-4 ${serviceType === 'flag' ? 'text-primary' : 'text-muted-foreground'}`} />
                    <CardTitle className="text-xl font-headline">پرچم‌های ملل (نفیس)</CardTitle>
                    <CardDescription className="text-[10px]">بافت پرچم کشور شما با ابریشم خالص تبریز توسط اساتید تراز اول.</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-center text-[10px] text-muted-foreground leading-relaxed">
                    نمادی از هویت ملی شما. هدیه‌ای دیپلماتیک، ماندگار و فراتر از زمان.
                </CardContent>
              </Card>

              {/* Tableau Rug Service */}
              <Card 
                className={`cursor-pointer transition-all duration-500 border-4 ${serviceType === 'tableau' ? 'border-primary shadow-2xl scale-105' : 'border-transparent hover:border-primary/20'}`}
                onClick={() => setServiceType('tableau')}
              >
                <CardHeader className="p-6 text-center">
                    <Frame className={`w-10 h-10 mx-auto mb-4 ${serviceType === 'tableau' ? 'text-primary' : 'text-muted-foreground'}`} />
                    <CardTitle className="text-xl font-headline">تابلوفرش سفارشی</CardTitle>
                    <CardDescription className="text-[10px]">تبدیل عکس‌های شخصی و پرتره‌ها به آثار نفیس دستباف ابریشم.</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-center text-[10px] text-muted-foreground leading-relaxed">
                    خاطرات خود را با دستان هنرمندان تبریز جاودانه کنید. با بهترین متریال و ظرافت بافت.
                </CardContent>
              </Card>

              {/* Decor Service */}
              <Card 
                className={`cursor-pointer transition-all duration-500 border-4 ${serviceType === 'decor' ? 'border-primary shadow-2xl scale-105' : 'border-transparent hover:border-primary/20'}`}
                onClick={() => setServiceType('decor')}
              >
                <CardHeader className="p-6 text-center">
                    <Sofa className={`w-10 h-10 mx-auto mb-4 ${serviceType === 'decor' ? 'text-primary' : 'text-muted-foreground'}`} />
                    <CardTitle className="text-xl font-headline">مشاوره چیدمان</CardTitle>
                    <CardDescription className="text-[10px]">انتخاب هوشمندانه فرش بر اساس هارمونی رنگی فضای شما.</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0 text-center text-[10px] text-muted-foreground leading-relaxed">
                    تصویری از فضا بفرستید تا کارشناسان هنری ما بهترین ابعاد و طرح‌ها را پیشنهاد دهند.
                </CardContent>
              </Card>
          </div>

          {serviceType && (
              <Card className="max-w-4xl mx-auto border-none shadow-2xl rounded-[3rem] animate-in fade-in slide-in-from-bottom-10">
                <CardHeader className="p-10">
                    <CardTitle className="text-3xl font-headline flex items-center gap-4">
                        <Sparkles className="w-8 h-8 text-primary" />
                        ثبت درخواست {serviceType === 'portrait-flag' ? 'بافت پرتره در پرچم' : 'سرویس تخصصی'}
                    </CardTitle>
                    <CardDescription>جزئیات و تصاویر خود را برای بررسی تیم فنی و هنری ارسال نمایید.</CardDescription>
                </CardHeader>
                <CardContent className="p-10 pt-0">
                    <form onSubmit={handleSubmit} className="grid gap-8">
                        <div className="grid gap-2">
                            <Label className="text-lg font-bold">توضیحات تکمیلی و نام کشور</Label>
                            <Textarea 
                                placeholder={serviceType === 'portrait-flag' ? "نام کشور و جزئیات چهره (مثال: پرچم فرانسه، پرتره پدرم در مرکز، ابعاد ۱۰۰ در ۷۰)..." : "جزئیات مورد نظر خود را بنویسید..."}
                                rows={5}
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                className="rounded-2xl"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label className="text-lg font-bold">آپلود تصویر (چهره یا فضای دکوراسیون)</Label>
                            <div className="flex flex-col items-center justify-center w-full h-80 border-4 border-dashed border-primary/20 rounded-[2.5rem] bg-secondary/5 overflow-hidden group hover:border-primary/40 transition-all">
                                {imageDataUri ? (
                                    <div className="relative w-full h-full">
                                        <Image src={imageDataUri} alt="Preview" fill className="object-cover" />
                                        <Button variant="destructive" size="sm" className="absolute top-4 right-4 rounded-full" onClick={() => setImageDataUri(null)}>تغییر عکس</Button>
                                    </div>
                                ) : (
                                    <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                                        <ImageIcon className="w-16 h-16 text-primary/30 mb-4 group-hover:scale-110 transition-transform" />
                                        <span className="font-bold text-xl">انتخاب و آپلود فایل</span>
                                        <p className="text-sm text-muted-foreground mt-2">تصویر با کیفیت باعث دقت خیره‌کننده در بافت می‌شود.</p>
                                        <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                    </label>
                                )}
                            </div>
                        </div>

                        <Button type="submit" size="lg" className="w-full h-20 text-2xl rounded-full shadow-2xl shadow-primary/20" disabled={submitting}>
                            {submitting ? <Loader2 className="animate-spin ml-3" /> : <Sparkles className="ml-3 w-8 h-8" />}
                            ارسال درخواست به دپارتمان هنر و بافت تبریز
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="bg-primary/5 p-10 rounded-b-[3rem] border-t border-primary/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-primary" />
                        <span className="font-bold">مرکزیت طراحی: بازار تهران، خیابان خیام</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-6 h-6 text-primary" />
                        <span className="font-black text-xl" dir="ltr">۰۲۱ - ۵۵۸۱۴۵۵۵</span>
                    </div>
                </CardFooter>
              </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
