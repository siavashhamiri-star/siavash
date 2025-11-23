
'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useFirestore, useUser, useDoc } from '@/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { toast } from '@/hooks/use-toast';
import type { Carpet } from '@/lib/types';

export default function EditCarpetPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const carpetId = params.vendorId as string; // Note: In this route, the carpet ID is the dynamic part
  const vendorId = searchParams.get('vendorId');

  const firestore = useFirestore();
  const { data: user, isLoading: userLoading } = useUser();

  const carpetRef =
    vendorId && carpetId
      ? doc(firestore, 'vendors', vendorId, 'carpets', carpetId)
      : undefined;
  const { data: carpet, loading: carpetLoading } = useDoc(carpetRef);
  
  const vendorRef = vendorId ? doc(firestore, 'vendors', vendorId) : undefined;
  const { data: vendor, loading: vendorLoading } = useDoc(vendorRef);


  useEffect(() => {
    if (carpet) {
      const typedCarpet = carpet as Carpet;
      setName(typedCarpet.name);
      setDescription(typedCarpet.description);
      setPrice(typedCarpet.price);
      setImageUrl(typedCarpet.imageUrl);
    }
  }, [carpet]);

  useEffect(() => {
    if (!userLoading && !vendorLoading) {
      if (!user) {
        router.push('/login');
        return;
      }
      if (vendor?.userId !== user.uid) {
        toast({ title: "Unauthorized", description: "You cannot edit this carpet.", variant: "destructive" });
        router.push(`/vendors/${vendorId}`);
      }
    }
  }, [user, userLoading, vendor, vendorLoading, router, vendorId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isOwner || !carpetRef) {
      setError('An error occurred. Please try again.');
      return;
    }

    try {
      await updateDoc(carpetRef, {
        name,
        description,
        price,
        imageUrl,
      });

      toast({
        title: 'Carpet Updated!',
        description: 'Your carpet details have been successfully updated.',
      });
      router.push(`/carpets/${carpetId}?vendorId=${vendorId}`);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      toast({
        title: 'Error updating carpet',
        description: err.message,
        variant: 'destructive',
      });
    }
  };

  const isOwner = user && vendor && user.uid === vendor.userId;

  if (userLoading || carpetLoading || vendorLoading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading Editor...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!isOwner) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Unauthorized</h1>
            <p className="text-muted-foreground">
              You do not have permission to edit this page.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Edit Carpet</CardTitle>
              <CardDescription>
                Update the details for your carpet below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Carpet Name / Title</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price">Price</Label>
                  <Input
                    id="price"
                    type="text"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="imageUrl">Image URL</Label>
                  <Input
                    id="imageUrl"
                    type="text"
                    required
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  {imageUrl && <img src={imageUrl} alt="Carpet preview" className="mt-2 rounded-md object-cover w-full h-48" />}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </div>

                {error && <p className="text-destructive text-sm">{error}</p>}

                <Button type="submit" className="w-full">
                  Save Changes
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
