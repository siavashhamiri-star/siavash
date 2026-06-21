
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
import { ShieldCheck, Scale, DollarSign, Image as ImageIcon, Loader2, Sparkles, MapPin, Factory } from 'lucide-react';
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
             <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="w-10 h-10 text-primary" />
             </div>
             <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">ارزیابی و قیمت‌گذاری جهانی</h1>
             <p className="text-xl text-muted-foreground">ارزش‌گذاری علمی فرش‌های دستباف، ماشینی و بین‌المللی توسط خبرگان بازار.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 space-y-6">
                <Card className="border-none shadow-xl bg-primary text-white overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <DollarSign className="w-6 h-6" />
                            تعرفه کارشناسی ۲۰۲۵
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center border-b border-white/20 pb-2">
                            <span>فرش‌های ماشینی</span>
                            <span className="font-bold">۳۵۰,۰۰۰ تومان</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/20 pb-2">
                            <span>فرش‌های دستباف ملل</span>
                            <span className="font-bold">۸۰۰,۰۰۰ تومان</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/20 pb-2">
                            <span>آثار نفیس و آنتیک</span>
                            <span className="font-bold text-accent">۱,۵۰۰,۰۰۰+</span>
                        </div>
                        <p className="text-[10px] text-white/70 italic mt-4">
                            * هزینه شامل تحلیل تراکم، رنگرزی، اصالت بافت و صدور شناسنامه دیجیتال است.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Factory className="w-5 h-5 text-primary" />
                            بخش فرش ماشینی
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                            ما برای اولین بار سیستم ارزیابی کیفیت و قیمت‌گذاری عادلانه را برای برندهای معتبر فرش ماشینی ایرانی و خارجی راه‌اندازی کرده‌ایم.
                        </p>
                        <div className="bg-secondary/50 p-4 rounded-xl text-xs font-bold">
                            تاییدیه اصالت علیمیری، ضامن سرمایه شماست.
                        </div>
                    </CardContent>
                    <CardFooter className="bg-primary/5 p-4">
                        <div className="text-center w-full">
                            <p className="text-xs text-muted-foreground">تماس مستقیم کارشناس:</p>
                            <p className="text-lg font-black text-primary" dir="ltr">۰۲۱ - ۵۵۸۱۴۵۵۵</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>

            <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl rounded-[2.5rem]">
                    <CardHeader className="p-8">
                        <CardTitle className="text-2xl font-headline">فرم درخواست کارشناسی هوشمند</CardTitle>
                        <CardDescription>جزئیات فرش خود را وارد کنید. سیستم ما پذیرای تمامی انواع فرش از سراسر جهان است.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="grid gap-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label>نام یا برند فرش</Label>
                                    <Input required placeholder="مثال: فرش فرهی، اصفهان لچک ترنج و..." value={carpetName} onChange={e => setCarpetName(e.target.value)} />
                                </div>
                                <div className="grid gap-2">
                                    <Label>نوع فرش</Label>
                                    <Select onValueChange={setCarpetType} defaultValue="hand-woven">
                                      <SelectTrigger>
                                        <SelectValue placeholder="انتخاب کنید..." />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="hand-woven">دستباف ایرانی</SelectItem>
                                        <SelectItem value="machine-made">ماشینی (ایرانی/خارجی)</SelectItem>
                                        <SelectItem value="international">دستباف سایر ملل</SelectItem>
                                      </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label>ابعاد / شانه و تراکم</Label>
                                    <Input placeholder="مثال: ۱۲۰۰ شانه، ۳ در ۴ متر" value={dimensions} onChange={e => setDimensions(e.target.value)} />
                                </div>
                                <div className="grid gap-2">
                                    <Label>منطقه بافت / کشور مبدا</Label>
                                    <Input placeholder="مثال: کاشان، هند، ترکیه" value={origin} onChange={e => setOrigin(e.target.value)} />
                                </div>
                            </div>
                            
                            <div className="grid gap-2">
                                <Label>آپلود تصویر واضح (نمای کلی و نمای پشت فرش)</Label>
                                <div className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-primary/20 rounded-3xl bg-secondary/5 overflow-hidden">
                                    {imageDataUri ? (
                                        <div className="relative w-full h-full">
                                            <Image src={imageDataUri} alt="Carpet" fill className="object-cover" />
                                            <Button variant="destructive" size="sm" className="absolute top-2 right-2" onClick={() => setImageDataUri(null)}>تغییر عکس</Button>
                                        </div>
                                    ) : (
                                        <label className="flex flex-col items-center justify-center w-full h-full cursor-pointer hover:bg-primary/5 transition-all">
                                            <ImageIcon className="w-12 h-12 text-primary/40 mb-4" />
                                            <span className="font-bold">انتخاب عکس</span>
                                            <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                                        </label>
                                    )}
                                </div>
                            </div>

                            <Button type="submit" size="lg" className="w-full h-16 text-xl rounded-full shadow-lg" disabled={submitting}>
                                {submitting ? <Loader2 className="animate-spin ml-2" /> : <ShieldCheck className="ml-2" />}
                                پرداخت و ثبت نهایی درخواست
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
