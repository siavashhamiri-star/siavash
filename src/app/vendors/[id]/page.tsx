'use client';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MapPin, Phone, Pencil, ShieldCheck, Loader2, Home, ExternalLink } from 'lucide-react';
import { useCollection, useDoc, useFirestore, useUser } from '@/firebase';
import { collection, doc } from 'firebase/firestore';
import type { Vendor, Carpet } from '@/lib/types';
import Link from 'next/link';
import { ReviewsSection } from '@/components/reviews';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';

export default function VendorShowroomPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const firestore = useFirestore();
  const { data: user } = useUser();
  const vendorRef = doc(firestore, 'vendors', id);
  const { data: vendor, loading: vendorLoading } = useDoc(vendorRef);

  const carpetsRef = collection(firestore, 'vendors', id, 'carpets');
  const { data: vendorCarpets, loading: carpetsLoading } =
    useCollection(carpetsRef);

  if (vendorLoading || carpetsLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
           <Loader2 className="w-10 h-10 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (!vendor) {
    notFound();
  }

  const typedVendor = vendor as Vendor;
  const typedCarpets = (vendorCarpets as Carpet[]) || [];
  const isOwner = user && user.uid === typedVendor.userId;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <Card className="overflow-hidden mb-12 shadow-2xl border-none bg-white/90 backdrop-blur-md">
            <CardHeader className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
                <Avatar className="w-40 h-40 border-8 border-primary/5 shadow-2xl">
                  <AvatarImage
                    src={typedVendor.avatarUrl}
                    alt={typedVendor.name}
                  />
                  <AvatarFallback className="text-5xl font-bold bg-primary/10 text-primary">
                    {typedVendor.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-right">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold text-foreground">
                        {typedVendor.name}
                    </h1>
                    {typedVendor.isVerified && (
                        <Badge className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                            <ShieldCheck className="w-4 h-4 ml-1.5" />
                            تأیید شده (Verified)
                        </Badge>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-foreground/70 mb-8">
                    <div className="flex items-center justify-center md:justify-start gap-3 bg-secondary/50 p-4 rounded-2xl border border-primary/5">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-medium">{typedVendor.location}</span>
                    </div>
                    {typedVendor.address && (
                        <div className="flex items-center justify-center md:justify-start gap-3 bg-secondary/50 p-4 rounded-2xl border border-primary/5">
                            <Home className="w-5 h-5 text-primary" />
                            <span className="font-medium">{typedVendor.address}</span>
                        </div>
                    )}
                     {typedVendor.phone && (
                        <div className="flex items-center justify-center md:justify-start gap-3 bg-primary/5 p-4 rounded-2xl border border-primary/10">
                            <Phone className="w-5 h-5 text-primary" />
                            <span className="font-bold text-primary" dir="ltr">{typedVendor.phone}</span>
                        </div>
                    )}
                  </div>

                  <p className="text-xl text-foreground/80 leading-relaxed font-light mb-8 italic">
                    {typedVendor.bio}
                  </p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    {typedVendor.specialties?.map((specialty) => (
                      <Badge
                        key={specialty}
                        variant="outline"
                        className="border-primary/20 text-primary px-6 py-2 rounded-full font-bold bg-primary/5"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 w-full md:w-auto">
                    {isOwner ? (
                       <Button asChild size="lg" className="rounded-full shadow-lg h-14 text-lg">
                          <Link href={`/account/edit-vendor/${id}`}>
                            <Pencil className="ml-2 h-5 w-5" />
                            مدیریت نمایشگاه
                          </Link>
                       </Button>
                    ) : (
                      typedVendor.phone && (
                        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full shadow-xl shadow-primary/20 h-14 text-lg px-10">
                            <a href={`tel:${typedVendor.phone}`}>
                                <Phone className="w-5 h-5 ml-2" /> تماس با فروشگاه
                            </a>
                        </Button>
                      )
                    )}
                    <Button variant="outline" size="lg" className="rounded-full h-14 text-lg border-primary/20">
                        <ExternalLink className="w-5 h-5 ml-2" /> اشتراک‌گذاری
                    </Button>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
             <div className="text-center md:text-right">
                <h2 className="text-4xl font-headline font-bold">
                    کلکسیون محصولات (Showroom)
                </h2>
                <p className="text-muted-foreground mt-2">آثار نفیس و برگزیده این مجموعه را مشاهده کنید.</p>
             </div>
            {isOwner && (
                <Button asChild size="lg" className="rounded-full bg-accent text-accent-foreground px-8">
                    <Link href={`/account/add-carpet/${id}`}>افزودن فرش جدید</Link>
                </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {typedCarpets.map((carpet) => (
              <Card
                key={carpet.id}
                className="overflow-hidden group flex flex-col border-none shadow-md hover:shadow-2xl transition-all duration-500 rounded-3xl bg-card"
              >
                <Link href={`/carpets/${carpet.id}?vendorId=${id}`} className="flex flex-col flex-grow">
                  <div className="p-0 relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={carpet.imageUrl}
                      alt={carpet.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors mb-3">
                      {carpet.name}
                    </CardTitle>
                    <CardDescription className="text-base line-clamp-3 font-light leading-relaxed">
                      {carpet.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex justify-between items-center mt-auto border-t border-primary/5">
                    <p className="text-2xl font-bold text-primary">{carpet.price}</p>
                    <Badge variant="ghost" className="text-primary group-hover:bg-primary group-hover:text-white transition-all cursor-pointer rounded-full px-4 py-1">
                        جزئیات بیشتر
                    </Badge>
                  </CardFooter>
                </Link>
              </Card>
            ))}
          </div>

          <Separator className="my-24 opacity-20" />

          <ReviewsSection vendorId={id} vendorUserId={typedVendor.userId} />

        </div>
      </main>
      <Footer />
    </div>
  );
}
