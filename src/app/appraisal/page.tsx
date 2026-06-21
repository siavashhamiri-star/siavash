
'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useUser, useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { ShieldCheck, Scale, DollarSign, Image as ImageIcon, Loader2, Sparkles, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AppraisalPage() {
  const { data: user, isLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();
  
  const [carpetName, setCarpetName] = useState('');
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
        toast({ title: "لطفاً تصویر فرش را آپلود کنید.", variant: "destructive" });
        return;
    }

    setSubmitting(true);
    try {
        await addDoc(collection(firestore, 'appraisals'), {
            carpetName,
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
            title: "درخواست ثبت شد",
            description: "کارشناسان ما پس از بررسی با شما تماس خواهند گرفت.",
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
             <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">کارشناسی و قیمت‌گذاری تخصصی</h1>
             <p className="text-xl text-muted-foreground">ارزش واقعی میراث خود را با تاییدیه معتبر «فرش علیمیری» بدانید.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 space-y-6">
                <Card className="border-none shadow-xl bg-primary text-white overflow-hidden">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <DollarSign className="w-6 h-6" />
                            تعرفه کارشناسی
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center border-b border-white/20 pb-2">
                            <span>فرش‌های ماشینی</span>
                            <span className="font-bold">۵۰۰,۰۰۰ تومان</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/20 pb-2">
                            <span>فرش‌های دستباف معمولی</span>
                            <span className="font-bold">۱,۵۰۰,۰۰۰ تومان</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/20 pb-2">
                            <span>آثار نفیس و آنتیک</span>
                            <span className="font-bold text-accent">تماس بگیرید</span>
                        </div>
                        <p className="text-xs text-white/70 italic mt-4">
                            * هزینه کارشناسی شامل صدور شناسنامه دیجیتال و تاییدیه اصالت می‌باشد.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-lg">چرا کارشناسی علیمیری؟</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-start gap-3">
                            <ShieldCheck className="w-5 h-5 text-green-600 mt-1" />
                            <p className="text-sm">بیش از نیم قرن تجربه در قلب بازار تهران (خیابان خیام).</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <Sparkles className="w-5 h-5 text-amber-500 mt-1" />
                            <p className="text-sm">استفاده از هوش مصنوعی برای تحلیل تراکم و الگوهای بافت.</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary mt-1" />
                            <p className="text-sm">ارائه گواهی معتبر فیزیکی در صورت مراجعه به شعبه مرکزی.</p>
                        </div>
                    </CardContent>
                    <CardFooter className="bg-secondary/50 p-4">
                        <div className="text-center w-full">
                            <p className="text-sm font-bold">تلفن مشاوره مستقیم:</p>
                            <p className="text-xl font-black text-primary" dir="ltr">۰۲۱ - ۵۵۸۱۴۵۵۵</p>
                        </div>
                    </CardFooter>
                </Card>
            </div>

            <div className="lg:col-span-2">
                <Card className="border-none shadow-2xl rounded-[2.5rem]">
                    <CardHeader className="p-8">
                        <CardTitle className="text-2xl font-headline">فرم درخواست کارشناسی</CardTitle>
                        <CardDescription>مشخصات اثر خود را با دقت وارد کنید تا توسط تیم متخصص بررسی شود.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <form onSubmit={handleSubmit} className="grid gap-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label>نام یا نوع فرش</Label>
                                    <Input required placeholder="مثال: فرش اصفهان طرح لچک ترنج" value={carpetName} onChange={e => setCarpetName(e.target.value)} />
                                </div>
                                <div className="grid gap-2">
                                    <Label>ابعاد (متر)</Label>
                                    <Input placeholder="مثال: ۳ در ۴" value={dimensions} onChange={e => setDimensions(e.target.value)} />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label>منطقه بافت</Label>
                                    <Input placeholder="مثال: تبریز، نائین، کاشان" value={origin} onChange={e => setOrigin(e.target.value)} />
                                </div>
                                <div className="grid gap-2">
                                    <Label>قدمت تقریبی</Label>
                                    <Input placeholder="مثال: نو، ۲۰ سال، عتیقه" value={age} onChange={e => setAge(e.target.value)} />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label>توضیحات تکمیلی</Label>
                                <Textarea placeholder="هرگونه اطلاعاتی که به قیمت‌گذاری کمک می‌کند..." rows={4} value={description} onChange={e => setDescription(e.target.value)} />
                            </div>
                            
                            <div className="grid gap-2">
                                <Label>آپلود تصویر واضح از فرش</Label>
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
                                {submitting ? <Loader2 className="animate-spin ml-2" /> : <Scale className="ml-2" />}
                                پرداخت و ثبت درخواست کارشناسی
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
