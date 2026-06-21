
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCollection } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { useFirestore } from '@/firebase';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ShoppingBag, PlusCircle, Loader2 } from 'lucide-react';
import type { Handicraft } from '@/lib/types';

export default function HandicraftsPage() {
  const firestore = useFirestore();
  const handicraftsRef = collection(firestore, 'handicrafts');
  const handicraftsQuery = query(handicraftsRef, orderBy('createdAt', 'desc'));
  const { data: crafts, loading } = useCollection(handicraftsRef); // Simplified for now

  const typedCrafts = (crafts as Handicraft[]) || [];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div className="text-center md:text-right">
              <h1 className="text-4xl font-headline font-bold">بازار صنایع دستی ایران</h1>
              <p className="text-muted-foreground mt-2">گلیم، جاجیم، ظروف قدیمی و هنرهای اصیل ایرانی</p>
            </div>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full">
              <Link href="/ads/new">
                <PlusCircle className="ml-2 h-5 w-5" />
                ثبت آگهی جدید (۳ عدد رایگان)
              </Link>
            </Button>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {typedCrafts.map((craft) => (
                <Card key={craft.id} className={cn(
                  "overflow-hidden group border-none shadow-md hover:shadow-xl transition-all duration-300",
                  craft.isPremiumDesign ? "ring-2 ring-accent bg-accent/5" : "bg-card"
                )}>
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={craft.imageUrl || 'https://picsum.photos/seed/craft/600/600'}
                      alt={craft.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                    />
                    {craft.isPremiumDesign && (
                      <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground font-bold">
                        <Sparkles className="w-3 h-3 ml-1" />
                        ویترین جادویی
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="p-4">
                    <Badge variant="outline" className="w-fit mb-2">{craft.category}</Badge>
                    <CardTitle className="font-headline text-xl">{craft.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{craft.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-4 pb-2">
                    <p className="text-2xl font-bold text-primary">{craft.price}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="ghost" className="w-full justify-between group-hover:text-primary">
                      مشاهده جزئیات
                      <ShoppingBag className="w-4 h-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
              
              {typedCrafts.length === 0 && (
                <div className="col-span-full py-20 text-center">
                  <div className="bg-primary/5 p-8 rounded-full w-fit mx-auto mb-6">
                    <ShoppingBag className="w-12 h-12 text-primary/40" />
                  </div>
                  <h3 className="text-xl font-bold">هنوز آگهی‌ای ثبت نشده است</h3>
                  <p className="text-muted-foreground mt-2">اولین نفری باشید که هنر خود را معرفی می‌کند.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
