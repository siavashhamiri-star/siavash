'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useFirestore, useUser, useDoc } from '@/firebase';
import { addDoc, collection, doc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useState, useEffect, use } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { toast } from '@/hooks/use-toast';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { Loader2 } from 'lucide-react';

export default function AddCarpetPage({ params }: { params: Promise<{ vendorId: string }> }) {
  const { vendorId } = use(params);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [consignment, setConsignment] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();
  const firestore = useFirestore();
  const { data: user, isLoading: userLoading } = useUser();
  const vendorRef = doc(firestore, 'vendors', vendorId);
  const { data: vendor, loading: vendorLoading } = useDoc(vendorRef);

  useEffect(() => {
    if (!userLoading && !vendorLoading) {
      if (!user) {
        router.push('/login');
        return;
      }
      if (vendor?.userId !== user.uid) {
        toast({ title: "Unauthorized", description: "You cannot add carpets to this showroom.", variant: "destructive" });
        router.push(`/vendors/${vendorId}`);
      }
    }
  }, [user, userLoading, vendor, vendorLoading, router, vendorId]);
  
  useEffect(() => {
    const carpetImages = PlaceHolderImages.filter(p => p.id.startsWith('carpet-'));
    const randomCarpetImage = carpetImages[Math.floor(Math.random() * carpetImages.length)];
    if(randomCarpetImage) {
        setImageUrl(randomCarpetImage.imageUrl);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user || !vendorId) {
      setError('You must be logged in as a vendor to add a carpet.');
      return;
    }

    const carpetData = {
      name,
      description,
      price,
      imageUrl,
      vendorId,
      consignment
    };
    const carpetsCollection = collection(firestore, 'vendors', vendorId, 'carpets');

    addDoc(carpetsCollection, carpetData)
      .then(() => {
        toast({
          title: "Carpet Added!",
          description: `${name} has been added to your showroom.`,
        });
        router.push(`/vendors/${vendorId}`);
      })
      .catch(serverError => {
        console.error('Error adding carpet to Firestore:', serverError);
        const permissionError = new FirestorePermissionError({
            path: carpetsCollection.path,
            operation: 'create',
            requestResourceData: carpetData,
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(serverError.message);
        toast({
          title: "Error adding carpet",
          description: serverError.message,
          variant: "destructive"
        });
      });
  };

  if (userLoading || vendorLoading) {
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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-secondary/20">
        <div className="container mx-auto px-4 py-16">
          <Card className="max-w-2xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-headline">Add a New Carpet</CardTitle>
              <CardDescription>
                Fill out the details below to add a new carpet to your virtual showroom.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Carpet Name / Title</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="e.g., 'The Azure Medallion'"
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
                    placeholder="e.g., $1,200 or 'Contact for price'"
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
                    placeholder="https://example.com/image.jpg"
                    required
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                  {imageUrl && <img src={imageUrl} alt="Carpet preview" className="mt-2 rounded-md object-cover w-full h-48 shadow-sm border" />}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the carpet's origin, materials, pattern, and story."
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <div className="flex items-center space-x-2 gap-2">
                  <Checkbox
                    id="consignment"
                    checked={consignment}
                    onCheckedChange={(checked) => setConsignment(checked as boolean)}
                  />
                  <Label
                    htmlFor="consignment"
                    className="text-sm font-medium leading-none"
                  >
                    Request to sell this carpet in the Farsh Bazaar Specialty Catalog (Consignment)
                  </Label>
                </div>
                
                {error && <p className="text-destructive text-sm font-bold">{error}</p>}
                
                <Button type="submit" className="w-full">
                  Add Carpet to Showroom
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