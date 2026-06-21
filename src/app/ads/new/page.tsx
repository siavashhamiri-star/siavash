
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useUser, useFirestore } from '@/firebase';
import { collection, addDoc, serverTimestamp, doc, updateDoc, increment } from 'firebase/firestore';
import { toast } from '@/hooks/use-toast';
import { Sparkles, ShieldCheck, Loader2, Globe } from 'lucide-react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function NewAdPage() {
  const { data: user, isLoading } = useUser();
  const firestore = useFirestore();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [nationalCode, setNationalCode] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    if (user.adCount && user.adCount >= 3 && !isPremium) {
       toast({
         title: "محدودیت آگهی رایگان",
         description: "شما ۳ آگهی رایگان خود را ثبت کرده‌اید. برای آگهی بیشتر باید اشتراک تهیه کنید.",
         variant: "destructive"
       });
       return;
    }

    setIsSubmitting(true);
    const adData = {
      title,
      description,
      price,
      category,
      nationalCode,
      isPremiumDesign: isPremium,
      userId: user.uid,
      userName: user.displayName,
      createdAt: serverTimestamp(),
      imageUrl: 'https://picsum.photos/seed/' + Math.floor(Math.random() * 1000) + '/600/600'
    };

    const handicraftsCollection = collection(firestore, 'handicrafts');
    const userDocRef = doc(firestore, 'users', user.uid);

    try {
      await addDoc(handicraftsCollection, adData);
      await updateDoc(userDocRef, {
        adCount: increment(1)
      });
      
      toast({
        title: "آگهی با موفقیت ثبت شد",
        description: isPremium ? "درخواست طراحی ویترین جادویی توسط هوش مصنوعی ثبت شد." : "آگهی شما منتشر شد.",
      });
      router.push('/handicrafts');
    } catch (serverError: any) {
      console.error(serverError);
      const permissionError = new FirestorePermissionError({
        path: handicraftsCollection.path,
        operation: 'create',
        requestResourceData: adData
      });
      errorEmitter.emit('permission-error', permissionError);
      toast({ title: "خطا در ثبت آگهی", description: serverError.message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading || !user) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto shadow-xl border-none">
            <CardHeader className="text-center p-8">
              <CardTitle className="text-3xl font-headline">ثبت آگهی کالا و هنر</CardTitle>
              <CardDescription>
                اطلاعات اثر یا محصول خود را وارد کنید. ما پذیرای فرش‌های دستباف، ماشینی و هنرهای بین‌المللی هستیم.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-2">
                  <Label>عنوان کالا / اثر</Label>
                  <Input required placeholder="مثال: فرش ماشینی ۱۲۰۰ شانه طرح تبریز" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                   <div className="grid gap-2">
                    <Label>دسته‌بندی</Label>
                    <Select onValueChange={setCategory} required>
                      <SelectTrigger>
                        <SelectValue placeholder="انتخاب کنید..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hand-woven">فرش دستباف (ایرانی/ملل)</SelectItem>
                        <SelectItem value="machine-made">فرش ماشینی (Machine-made)</SelectItem>
                        <SelectItem value="kilim">گلیم و جاجیم</SelectItem>
                        <SelectItem value="silver">ظروف نقره و آنتیک</SelectItem>
                        <SelectItem value="painting">تابلو نقاشی / خط</SelectItem>
                        <SelectItem value="other">سایر صنایع دستی</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label>قیمت (تومان یا توافقی)</Label>
                    <Input required placeholder="مثال: توافقی" value={price} onChange={e => setPrice(e.target.value)} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>کد ملی یا شناسنامه تجاری (جهت احراز هویت)</Label>
                  <div className="flex gap-2">
                    <Input required placeholder="کد ۱۰ رقمی یا شماره ثبت" value={nationalCode} onChange={e => setNationalCode(e.target.value)} />
                    <ShieldCheck className="w-10 h-10 text-green-600 bg-green-50 p-2 rounded-lg shrink-0" />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>توضیحات، ابعاد و مشخصات فنی</Label>
                  <Textarea required placeholder="درباره متریال، شانه، تراکم یا داستان این اثر بنویسید..." rows={5} value={description} onChange={e => setDescription(e.target.value)} />
                </div>

                <div className="p-6 bg-accent/10 border-2 border-accent/20 rounded-2xl space-y-4">
                   <div className="flex items-start gap-4">
                      <Checkbox id="premium" checked={isPremium} onCheckedChange={c => setIsPremium(c as boolean)} />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor="premium" className="text-lg font-bold flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-accent" />
                          درخواست ویترین جادویی (AI Design)
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          هوش مصنوعی یک صفحه اختصاصی با جلوه‌های بصری خیره‌کننده برای فروش بهتر کالای شما طراحی می‌کند.
                        </p>
                      </div>
                   </div>
                </div>

                <Button type="submit" size="lg" className="w-full text-lg h-14" disabled={isSubmitting}>
                   {isSubmitting ? <Loader2 className="animate-spin ml-2" /> : <Globe className="ml-2 w-5 h-5" />}
                   ثبت و انتشار در بازار جهانی
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
