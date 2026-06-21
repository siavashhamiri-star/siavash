
'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Building, Store, Trophy, Star, Users, MapPin, Phone, Mail, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ShareInvite } from '@/components/share-invite';

export default function AccountPage() {
  const { data: user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p>Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              {/* Gamification Stats Card */}
              <Card className="bg-primary text-white border-none shadow-2xl rounded-[3rem] overflow-hidden relative">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Trophy className="w-40 h-40" />
                </div>
                <CardHeader className="p-10 pb-0">
                  <div className="flex items-center gap-4">
                     <Badge className="bg-white text-primary px-6 py-1.5 rounded-full font-black">
                        {user.league || 'Pioneer'} League
                     </Badge>
                     <span className="text-sm opacity-80">عضو شهر توانا</span>
                  </div>
                  <CardTitle className="text-4xl mt-6 font-headline">وضعیت در اکوسیستم آفرینش</CardTitle>
                </CardHeader>
                <CardContent className="p-10 grid md:grid-cols-2 gap-10">
                   <div className="flex items-center gap-6">
                      <div className="bg-white/20 p-5 rounded-[2rem]">
                        <Star className="w-10 h-10" />
                      </div>
                      <div>
                        <p className="text-white/70">امتیاز کل (XP)</p>
                        <p className="text-5xl font-black">{user.xp || 0}</p>
                      </div>
                   </div>
                   <div className="flex flex-col justify-center">
                      <p className="text-white/70 mb-2">کد معرف اختصاصی شما:</p>
                      <div className="flex items-center gap-4">
                        <code className="bg-black/20 px-6 py-3 rounded-2xl text-2xl font-mono" dir="ltr">{user.referralCode || 'N/A'}</code>
                      </div>
                   </div>
                </CardContent>
                <CardFooter className="bg-black/10 p-10 mt-6">
                    <Button asChild className="w-full h-12 bg-white text-primary hover:bg-white/90 rounded-full font-bold">
                        <Link href="/leagues">مشاهده جوایز و لیگ‌های افتخار</Link>
                    </Button>
                </CardFooter>
              </Card>

              <Card className="rounded-[2.5rem] shadow-xl">
                <CardHeader>
                  <CardTitle>اطلاعات حساب کاربری</CardTitle>
                  <CardDescription>جزئیات شخصی شما در پلتفرم.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/50 p-6 rounded-2xl">
                        <h3 className="font-bold text-muted-foreground mb-1">نام نمایشی</h3>
                        <p className="text-xl font-bold">{user.displayName}</p>
                    </div>
                    <div className="bg-secondary/50 p-6 rounded-2xl">
                        <h3 className="font-bold text-muted-foreground mb-1">ایمیل</h3>
                        <p className="text-xl font-bold">{user.email}</p>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t">
                      <h3 className="font-bold mb-4">مرکزیت اصالت شما</h3>
                      <div className="space-y-3">
                          <div className="flex items-center gap-3 text-muted-foreground">
                              <MapPin className="w-5 h-5 text-primary" />
                              <span>بازار تهران، خیابان خیام شمالی، پلاک ۴۸</span>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                              <Phone className="w-5 h-5 text-primary" />
                              <span dir="ltr">۰۲۱ - ۵۵۸۱۴۵۵۵</span>
                          </div>
                          <div className="flex items-center gap-3 text-muted-foreground">
                              <Mail className="w-5 h-5 text-primary" />
                              <span>info@fbnewmeta.com</span>
                          </div>
                      </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="bg-card shadow-xl rounded-[2.5rem] overflow-hidden border-2 border-primary/5">
                <CardHeader className="bg-secondary/30">
                  <CardTitle>پنل مدیریت فروشگاه</CardTitle>
                  <CardDescription>
                    مدیریت حضور شما در بازار جهانی.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  {user.isVendor && user.vendorId ? (
                    <div className="space-y-6">
                      <p className="text-sm text-muted-foreground leading-relaxed">شما به عنوان فروشنده/تولیدکننده ثبت‌نام کرده‌اید. محصولات خود را مدیریت کنید.</p>
                      <Button asChild className="w-full h-14 text-lg rounded-full shadow-lg">
                        <Link href={`/vendors/${user.vendorId}`}>
                          <Store className="ml-2 h-5 w-5" />
                          مشاهده نمایشگاه من
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                       <p className="text-sm text-muted-foreground leading-relaxed">به بازار جهانی بپیوندید و نمایشگاه مجازی خود را بسازید.</p>
                      <Button asChild className="w-full h-14 text-lg rounded-full">
                        <Link href="/account/become-vendor">
                          <Building className="ml-2 h-5 w-5" />
                          ساخت نمایشگاه مجازی
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="rounded-[2.5rem] shadow-xl border-2 border-blue-100 overflow-hidden">
                <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center gap-2 text-blue-800">
                        <Users className="w-5 h-5 text-blue-600" />
                        دعوت‌نامه هوشمند (۱۱ زبانه)
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        با ارسال دعوت‌نامه به همکاران جهانی، ۵۰ XP دریافت کنید و رتبه خود را در لیگ برای دریافت **زمین‌های شهر توانا** ارتقا دهید.
                    </p>
                    
                    <ShareInvite referralCode={user.referralCode || 'N/A'} />

                    <div className="pt-4 border-t flex items-center gap-2 text-[10px] font-bold text-blue-600">
                        <Sparkles className="w-3 h-3" />
                        <span>امتیاز مضاعف برای دعوت از تولیدکنندگان آلمانی و چینی!</span>
                    </div>
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
