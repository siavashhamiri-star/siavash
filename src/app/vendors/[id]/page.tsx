
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
import { MapPin, Phone, Pencil, ShieldCheck, Loader2, Home } from 'lucide-react';
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
          <Card className="overflow-hidden mb-12 shadow-lg border-none bg-white/80 backdrop-blur-sm">
            <CardHeader className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <Avatar className="w-32 h-32 border-4 border-primary/10 shadow-xl">
                  <AvatarImage
                    src={typedVendor.avatarUrl}
                    alt={typedVendor.name}
                  />
                  <AvatarFallback className="text-4xl">
                    {typedVendor.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl md:text-4xl font-headline font-bold">
                        {typedVendor.name}
                    </h1>
                    {typedVendor.isVerified && (
                        <div className="flex items-center gap-1 text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                            <ShieldCheck className="w-5 h-5" />
                            <span className="text-sm font-medium">Verified Vendor</span>
                        </div>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 mt-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" /> {typedVendor.location}
                    </div>
                    {typedVendor.address && (
                        <div className="flex items-center gap-2">
                            <Home className="w-4 h-4 text-primary" /> {typedVendor.address}
                        </div>
                    )}
                     {typedVendor.phone && (
                        <div className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" /> {typedVendor.phone}
                        </div>
                    )}
                  </div>
                  <p className="mt-6 text-foreground/80 max-w-prose leading-relaxed">
                    {typedVendor.bio}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {typedVendor.specialties?.map((specialty) => (
                      <Badge
                        key={specialty}
                        variant="secondary"
                        className="font-normal px-4 py-1"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                {isOwner ? (
                   <Button asChild className="w-full md:w-auto mt-4 md:mt-0 rounded-full">
                      <Link href={`/account/edit-vendor/${id}`}>
                        <Pencil className="ml-2 h-4 w-4" />
                        ویرایش نمایشگاه
                      </Link>
                   </Button>
                ) : (
                  typedVendor.phone && (
                    <Button asChild className="w-full md:w-auto mt-4 md:mt-0 bg-primary hover:bg-primary/90 text-white rounded-full">
                        <a href={`tel:${typedVendor.phone}`}>
                            <Phone className="w-4 h-4 ml-2" /> تماس با فروشگاه
                        </a>
                    </Button>
                  )
                )}
              </div>
            </CardHeader>
          </Card>

          <div className="flex justify-between items-center mb-8">
             <h2 className="text-3xl font-headline font-bold">
                نمایشگاه مجازی (Virtual Showroom)
            </h2>
            {isOwner && (
                <Button asChild className="rounded-full">
                    <Link href={`/account/add-carpet/${id}`}>افزودن فرش جدید</Link>
                </Button>
            )}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {typedCarpets.map((carpet) => (
              <Card
                key={carpet.id}
                className="overflow-hidden group flex flex-col border-none shadow-md hover:shadow-xl transition-all"
              >
                <Link href={`/carpets/${carpet.id}?vendorId=${id}`} className="flex flex-col flex-grow">
                  <div className="p-0 relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={carpet.imageUrl}
                      alt={carpet.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4 flex-grow">
                    <CardTitle className="font-headline text-lg group-hover:text-primary transition-colors">
                      {carpet.name}
                    </CardTitle>
                    <CardDescription className="mt-2 text-sm line-clamp-2">
                      {carpet.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between items-center border-t border-primary/5 mt-4">
                    <p className="font-bold text-primary">{carpet.price}</p>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/5">
                        مشاهده جزئیات
                    </Button>
                  </CardFooter>
                </Link>
              </Card>
            ))}
            {typedCarpets.length === 0 && (
              <Card className="col-span-full py-20 bg-white/50 border-dashed border-2">
                <CardContent className="flex flex-col items-center justify-center text-center text-muted-foreground">
                    <p className="text-lg">هنوز هیچ محصولی در این نمایشگاه ثبت نشده است.</p>
                    {isOwner && <p className="mt-2 text-sm font-bold text-primary">همین حالا اولین اثر خود را به نمایش بگذارید!</p>}
                </CardContent>
              </Card>
            )}
          </div>

          <Separator className="my-20" />

          <ReviewsSection vendorId={id} vendorUserId={typedVendor.userId} />

        </div>
      </main>
      <Footer />
    </div>
  );
}
