
'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useUser, useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { ShieldCheck, Scale, DollarSign, Image as ImageIcon, Loader2, Factory, MapPin, Gavel, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AppraisalPage() {
  const { data: user, isLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  
  const [carpetName, setCarpetName] = useState('');
  const [carpetType, setCarpetType] = useState('hand-woven');
  const [dimensions, setDimensions] = useState('');
  const [origin, setOrigin] = useState('');
  const [age, setAge] = useState('');
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
    if (!imageDataUri) {
        toast({ title: "لطفاً تصویر واضحی از فرش آپلود کنید.", variant: "destructive" });
        return;
    }

    setSubmitting(true);
    try {
        await addDoc(collection(firestore, 'appraisals'), {
            carpetName,
            carpetType,
            dimensions,
            origin,
            age,
            description,
            imageDataUri,
            userId: user.uid,
            status: 'pending',
            createdAt: serverTimestamp()
        });
        toast({
            title: "درخواست کارشناسی ثبت شد",
            description: "تیم خبره ما پس از بررسی فنی با شما تماس خواهند گرفت.",
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
          <div className="max-w-4xl mx-auto mb-12 text-center space-y-4">
             <div className="bg-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-primary/20">
                <Scale className="w-12 h-12 text-primary" />
             </div>
             <h1 className="text-4xl md:text-7xl font-headline font-bold text-primary">سلاح ارزیابی و قیمت‌گذاری</h1>
             <p className="text-xl text-muted-foreground">ارزش‌گذاری علمی فرش‌های دستباف، ماشینی و ملل با تکیه بر ۵۰ سال تجربه میراث علیمیری.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 space-y-6">
                <Card className="border-none shadow-2xl bg-slate-900 text-white overflow-hidden rounded-[2rem]">
                    <CardHeader className="bg-accent/20 border-b border-white/10">
                        <CardTitle className="flex items-center gap-2 text-2xl text-accent">
                            <Gavel className="w-8 h-8" />
                            مژده: ورود به حراج سالانه
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-8 space-y-4">
                        <p className="text-sm leading-relaxed">
                            فرش‌های نفیسی که توسط کارشناسان ما تاییدیه «اصالت و قدمت» دریافت کنند، شانس حضور در **حراج بزرگ سالانه فرش بازار** را خواهند داشت.
                        </p>
                        <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                            <p className="text-[10px] text-accent font-bold mb-1">مزایای حراج:</p>
                            <ul className="text-[10px] space-y-1 list-disc list-inside opacity-80">
                                <li>معرفی به خریداران ۱۳ کشور جهان</li>
                                <li>فروش با بالاترین قیمت‌های رقابتی</li>
                                <li>تسویه مالی آنی و تضمین شده</li>
                            </ul>
                        </div>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-2xl bg-primary text-white overflow-hidden rounded-[2rem]">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl">
                            <DollarSign className="w-8 h-8" />
                            تعرفه کارشناسی ۲۰۲۵
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 p-8">
                        <div className="flex justify-between items-center border-b border-white/20 pb-4">
                            <span className="text-lg">فرش‌های ماشینی (برند)</span>
                            <span className="font-black text-xl">۳۵۰,۰۰۰ تومان</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/20 pb-4">
                            <span className="text-lg">فرش‌های دستباف ملل</span>
                            <span className="font-black text-xl">۸۰۰,۰۰۰ تومان</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/20 pb-4">
                            <span className="text-lg">آثار نفیس و آنتیک ایران</span>
                            <span className="font-black text-xl text-accent">۱,۵۰۰,۰۰۰+</span>
                        </div>
                        <p className="text-[10px] text-white/70 italic mt-6 leading-relaxed">
                            * هزینه شامل تحلیل شانه و تراکم (برای ماشینی)، رنگرزی و قدمت (برای دستباف) و صدور شناسنامه دیجیتال است.
                        </p>
                    </CardContent>
                    <CardFooter className="bg-black/10 p-6 flex items-center gap-3">
                         <MapPin className="w-5 h-5 text-accent" />
                         <span className="text-[10px] font-bold">خیابان خیام شمالی، پلاک ۴۸ - مرکزیت ارزیابی</span>
                    </CardFooter>
                </Card>
            </div>

            <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl rounded-[3rem]">
                    <CardHeader className="p-10">
                        <CardTitle className="text-3xl font-headline">فرم درخواست کارشناسی هوشمند</CardTitle>
                        <CardDescription className="text-lg">جزئیات اثر خود را وارد کنید. سیستم ما پذیرای تمامی انواع فرش از سراسر جهان است.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-10 pt-0">
                        <form onSubmit={handleSubmit} className="grid gap-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="grid gap-2">
                                    <Label className="text-base">نام یا برند فرش</Label>
                                    <Input className="h-12" required placeholder="مثال: فرش اصفهان، فرش فرهی و..." value={carpetName} onChange={e => setCarpetName(e.target.value)} />
                                </div>
                                <div className="grid gap-2">
                                    <Label className="text-base">نوع و دسته تخصصی</Label>
                                    <Select onValueChange={setCarpetType} defaultValue="hand-woven">
                                      <SelectTrigger className="h-12">
                                        <SelectValue placeholder="انتخاب کنید..." />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="hand-woven">دستباف ایرانی (نفیس)</SelectItem>
                                        <SelectItem value="machine-made">ماشینی (ایرانی/خارجی)</SelectItem>
                                        <SelectItem value="international">فرش سایر ملل (هند، پاکستان، ترکیه)</SelectItem>
                                      </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            
                            <div className="grid gap-2">
                                <Label className="text-base">آپلود تصاویر (نمای کلی و نمای پشت فرش)</Label>
                                <div className="flex flex-col items-center justify-center w-full h-80 border-4 border-dashed border-primary/20 rounded-[2.5rem] bg-secondary/5 overflow-hidden group hover:border-primary/40 transition-all">
                                    {imageDataUri ? (
                                        <div className="relative w-full h-full">
                                            <Image src={imageDataUri} alt="Carpet" fill className="object-cover" />
                                            <Button variant="destructive" size="sm" className="absolute top-4 right-4 rounded-full" onClick={() => setImageDataUri(null)}>تغییر عکس</Button>
                                        </div>
                                    ) : (
                                        <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
                                            <ImageIcon className="w-16 h-16 text-primary/30 mb-4 group-hover:scale-110 transition-transform" />
                                            <span className="font-bold text-xl">انتخاب و آپلود عکس</span>
                                            <p className="text-sm text-muted-foreground mt-2">تصویر واضح باعث دقت بیشتر در قیمت‌گذاری می‌شود.</p>
                                            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                        </label>
                                    )}
                                </div>
                            </div>

                            <Button type="submit" size="lg" className="w-full h-20 text-2xl rounded-full shadow-2xl shadow-primary/20" disabled={submitting}>
                                {submitting ? <Loader2 className="animate-spin ml-3" /> : <ShieldCheck className="ml-3 w-8 h-8" />}
                                پرداخت و ثبت نهایی درخواست کارشناسی
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

