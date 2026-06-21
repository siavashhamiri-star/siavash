
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
import { useFirestore, useUser } from '@/firebase';
import { doc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { toast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function BecomeVendorPage() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [bio, setBio] = useState('');
  const [specialties, setSpecialties] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();
  const firestore = useFirestore();
  const { data: user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
    if (!isLoading && user?.isVendor) {
        router.push('/account');
    }
  }, [user, isLoading, router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!user) {
      setError('You must be logged in to create a vendor profile.');
      return;
    }

    setIsSubmitting(true);
    const vendorsCollection = collection(firestore, 'vendors');
    const vendorData = {
        name,
        location,
        address,
        phone,
        bio,
        specialties: specialties.split(',').map(s => s.trim()).filter(Boolean),
        userId: user.uid,
        avatarUrl: user.photoURL || `https://ui-avatars.com/api/?name=${name.replace(' ', '+')}&background=random`,
      };

    addDoc(vendorsCollection, vendorData)
      .then((vendorRef) => {
        const userDocRef = doc(firestore, 'users', user.uid);
        const userUpdateData = {
            isVendor: true,
            vendorId: vendorRef.id,
        };
        updateDoc(userDocRef, userUpdateData)
            .then(() => {
                toast({ title: "تبریک!", description: "نمایشگاه مجازی شما با موفقیت ساخته شد."});
                router.push(`/vendors/${vendorRef.id}`);
            })
            .catch(serverError => {
                 console.error('Error updating user profile to vendor:', serverError);
                 const permissionError = new FirestorePermissionError({
                    path: userDocRef.path,
                    operation: 'update',
                    requestResourceData: userUpdateData,
                });
                errorEmitter.emit('permission-error', permissionError);
                setError(serverError.message);
                toast({ title: "Error", description: "Could not update user profile to vendor.", variant: "destructive"})
            });
      })
      .catch(serverError => {
        console.error('Error creating vendor profile:', serverError);
        const permissionError = new FirestorePermissionError({
            path: vendorsCollection.path,
            operation: 'create',
            requestResourceData: vendorData
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(serverError.message);
        toast({ title: "Error", description: "Could not create vendor profile.", variant: "destructive"})
      })
      .finally(() => setIsSubmitting(false));
  };

  if (isLoading || !user) {
    return (
        <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Loader2 className="animate-spin text-primary" />
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
          <Card className="max-w-2xl mx-auto shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-headline">ساخت نمایشگاه مجازی</CardTitle>
              <CardDescription>
                برند خود را جهانی کنید و هنر خود را به شهر مجازی توانا بیاورید.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">نام نمایشگاه یا فروشگاه</Label>
                        <Input
                            id="name"
                            required
                            placeholder="مثال: فرش علیمیری"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="location">شهر / منطقه</Label>
                        <Input
                            id="location"
                            required
                            placeholder="مثال: بازار تهران"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="phone">شماره تماس (جهت اعتماد مشتری)</Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="مثال: ۰۲۱۱۲۳۴۵۶۷۸"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="specialties">تخصص‌ها (با کاما جدا کنید)</Label>
                        <Input
                            id="specialties"
                            placeholder="مثال: فرش تبریز، گلیم، آنتیک"
                            value={specialties}
                            onChange={(e) => setSpecialties(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="address">آدرس دقیق فروشگاه (اختیاری)</Label>
                  <Input
                    id="address"
                    placeholder="خیابان، بازار، پلاک..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="bio">درباره شما و اصالت برند</Label>
                  <Textarea
                    id="bio"
                    placeholder="داستان خود را بنویسید..."
                    required
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={5}
                  />
                </div>
                
                {error && <p className="text-destructive text-sm font-bold">{error}</p>}
                
                <Button type="submit" size="lg" className="w-full h-14 text-lg" disabled={isSubmitting}>
                  {isSubmitting ? <Loader2 className="animate-spin ml-2" /> : null}
                  تأیید و ساخت نمایشگاه
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
