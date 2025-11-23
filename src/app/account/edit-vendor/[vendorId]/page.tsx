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
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { toast } from '@/hooks/use-toast';
import type { Vendor } from '@/lib/types';

export default function EditVendorPage() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [specialties, setSpecialties] = useState('');
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const params = useParams();
  const vendorId = params.vendorId as string;

  const firestore = useFirestore();
  const { data: user, isLoading: userLoading } = useUser();
  
  const vendorRef = vendorId ? doc(firestore, 'vendors', vendorId) : undefined;
  const { data: vendor, loading: vendorLoading } = useDoc(vendorRef);

  useEffect(() => {
    if (vendor) {
      const typedVendor = vendor as Vendor;
      setName(typedVendor.name);
      setLocation(typedVendor.location);
      setBio(typedVendor.bio);
      setSpecialties(typedVendor.specialties?.join(', ') || '');
    }
  }, [vendor]);
  
  useEffect(() => {
    if (!userLoading && !user) {
      router.push('/login');
    }
  }, [user, userLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user || !vendorId || !vendorRef) {
      setError('An error occurred. Please try again.');
      return;
    }
    
    if (vendor?.userId !== user.uid) {
        toast({ title: "Unauthorized", description: "You cannot edit this showroom.", variant: "destructive" });
        return;
    }

    try {
      await updateDoc(vendorRef, {
        name,
        location,
        bio,
        specialties: specialties.split(',').map(s => s.trim()).filter(Boolean),
        avatarUrl: user.photoURL || `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=random`,
      });
      
      toast({
        title: "Showroom Updated!",
        description: "Your vendor profile has been successfully updated.",
      });

      router.push(`/vendors/${vendorId}`);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
      toast({
        title: "Error updating profile",
        description: err.message,
        variant: "destructive",
      });
    }
  };

  if (userLoading || vendorLoading) {
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

  if (!vendor || vendor.userId !== user?.uid) {
     return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Unauthorized</h1>
            <p className="text-muted-foreground">You do not have permission to edit this page.</p>
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
              <CardTitle className="text-2xl font-headline">Edit Your Showroom</CardTitle>
              <CardDescription>
                Update your vendor profile details below.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="name">Vendor Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="e.g., Isfahan Carpet Masters"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    type="text"
                    placeholder="e.g., Isfahan, Iran"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="specialties">Specialties</Label>
                  <Input
                    id="specialties"
                    type="text"
                    placeholder="e.g., Classic Isfahan, Nain, Fine Silk (comma-separated)"
                    value={specialties}
                    onChange={(e) => setSpecialties(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about your history, your passion, and what makes your collection unique."
                    required
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
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
