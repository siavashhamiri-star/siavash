
'use client';

import { useState, useRef } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { decodeSymbolsAction } from '@/app/actions';
import { Sparkles, Image as ImageIcon, Loader2, BookOpen, ShieldCheck, X } from 'lucide-react';
import Image from 'next/image';
import { toast } from '@/hooks/use-toast';

export default function DecodeSymbolsPage() {
  const [imageDataUri, setImageDataUri] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImageDataUri(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDecode = async () => {
    if (!imageDataUri) return;
    setLoading(true);
    try {
      const data = await decodeSymbolsAction(imageDataUri);
      setResult(data);
      toast({ title: "رمزگشایی با موفقیت انجام شد" });
    } catch (e) {
      toast({ title: "خطا در تحلیل تصویر", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl md:text-6xl font-headline font-bold text-primary">لنز جادویی: رمزگشای نمادها</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              عکسی از فرش یا صنایع دستی خود بگیرید تا هوش مصنوعی آفرینش، رازهای پنهان در نقش و نگار آن را برای شما بازگو کند.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden">
              <CardHeader className="bg-primary text-white p-8">
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="w-6 h-6" />
                  آپلود تصویر اثر
                </CardTitle>
                <CardDescription className="text-primary-foreground/80">تصویری واضح از الگوها و نمادها انتخاب کنید.</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                {imageDataUri ? (
                  <div className="relative group">
                    <Image src={imageDataUri} alt="Preview" width={800} height={600} className="rounded-3xl object-cover w-full h-80" />
                    <Button variant="destructive" size="icon" className="absolute top-4 right-4 rounded-full" onClick={() => setImageDataUri(null)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-80 border-4 border-dashed border-primary/20 rounded-[2.5rem] cursor-pointer hover:bg-primary/5 transition-all">
                    <div className="flex flex-col items-center justify-center p-10 text-center">
                      <ImageIcon className="w-16 h-16 mb-4 text-primary/40" />
                      <p className="text-lg font-bold">برای انتخاب تصویر کلیک کنید</p>
                      <p className="text-sm text-muted-foreground">فرمت‌های JPG, PNG, WEBP</p>
                    </div>
                    <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
                  </label>
                )}
                <Button className="w-full mt-8 h-16 text-xl rounded-full shadow-lg shadow-primary/20" disabled={!imageDataUri || loading} onClick={handleDecode}>
                  {loading ? <Loader2 className="animate-spin ml-2" /> : <Sparkles className="ml-2" />}
                  شروع رمزگشایی هوشمند
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              {result ? (
                <Card className="border-none shadow-2xl rounded-[2.5rem] bg-white animate-in fade-in slide-in-from-bottom-10">
                  <CardHeader className="p-8 border-b border-primary/5">
                    <div className="flex items-center gap-2 text-primary font-bold text-lg mb-2">
                      <BookOpen className="w-5 h-5" />
                      شناسنامه و تفسیر نمادین
                    </div>
                    <CardTitle className="text-3xl font-headline">آنچه این اثر می‌گوید</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 space-y-8">
                    <div className="prose prose-lg text-foreground/80 leading-relaxed italic">
                      "{result.overallStory}"
                    </div>
                    
                    <div className="grid gap-6">
                      {result.symbolsFound.map((symbol: any, idx: number) => (
                        <div key={idx} className="bg-primary/5 p-6 rounded-3xl border border-primary/10">
                          <h4 className="font-bold text-xl text-primary mb-2">{symbol.name}</h4>
                          <p className="text-muted-foreground">{symbol.meaning}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t flex items-start gap-4 text-sm">
                      <ShieldCheck className="w-10 h-10 text-green-600 shrink-0" />
                      <div>
                        <p className="font-bold text-green-800">تأییدیه اصالت علیمیری</p>
                        <p className="text-muted-foreground">{result.authenticityNote}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-20 bg-white/40 rounded-[2.5rem] border-2 border-dashed border-primary/10">
                   <Sparkles className="w-20 h-20 text-primary/20 mb-6 animate-pulse" />
                   <h3 className="text-2xl font-bold text-primary/40">در انتظار جادوی هوش مصنوعی...</h3>
                   <p className="text-muted-foreground mt-2">تصویر را آپلود کرده و دکمه رمزگشایی را بزنید.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
