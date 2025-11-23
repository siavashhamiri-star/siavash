import Image from 'next/image';
import { notFound } from 'next/navigation';
import { vendors, carpets, Carpet, Vendor } from '@/lib/placeholder-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MapPin, Phone } from 'lucide-react';

export async function generateStaticParams() {
  return vendors.map((vendor) => ({
    id: vendor.id,
  }));
}

const getVendorData = (id: string): { vendor: Vendor | undefined; vendorCarpets: Carpet[] } => {
  const vendor = vendors.find((v) => v.id === id);
  const vendorCarpets = carpets.filter((c) => c.vendorId === id);
  return { vendor, vendorCarpets };
};

export default function VendorShowroomPage({ params }: { params: { id: string } }) {
  const { vendor, vendorCarpets } = getVendorData(params.id);

  if (!vendor) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <Card className="overflow-hidden mb-12 shadow-lg">
            <CardHeader className="p-8 bg-card">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <Avatar className="w-32 h-32 border-4 border-primary/10">
                  <AvatarImage src={vendor.avatarUrl} alt={vendor.name} data-ai-hint={vendor.avatarHint} />
                  <AvatarFallback className="text-4xl">{vendor.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-headline font-bold">{vendor.name}</h1>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" /> {vendor.location}
                  </div>
                  <p className="mt-4 text-foreground max-w-prose">{vendor.bio}</p>
                   <div className="mt-4 flex flex-wrap gap-2">
                    {vendor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="font-normal border-primary/50 text-primary/80">{specialty}</Badge>
                    ))}
                  </div>
                </div>
                 <Button className="w-full md:w-auto mt-4 md:mt-0 bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Phone className="w-4 h-4 mr-2" /> Contact Vendor
                 </Button>
              </div>
            </CardHeader>
          </Card>

          <h2 className="text-3xl font-headline font-bold mb-8">Virtual Showroom</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {vendorCarpets.map((carpet) => (
              <Card key={carpet.id} className="overflow-hidden group flex flex-col">
                <CardHeader className="p-0 relative">
                  <Image
                    src={carpet.imageUrl}
                    alt={carpet.name}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={carpet.imageHint}
                  />
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="font-headline text-lg">{carpet.name}</CardTitle>
                  <CardDescription className="mt-1 text-sm line-clamp-2">{carpet.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                    <p className="font-semibold text-primary">{carpet.price}</p>
                    <Button variant="ghost" size="sm">View Details</Button>
                </CardFooter>
              </Card>
            ))}
             {vendorCarpets.length === 0 && (
                <p className="col-span-full text-center text-muted-foreground py-12">This vendor's showroom is currently empty.</p>
             )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
