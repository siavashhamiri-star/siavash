
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
import { useAuth, useFirestore } from '@/firebase';
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc, getDocs, collection, query, where, updateDoc, increment } from 'firebase/firestore';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { Loader2, Ticket } from 'lucide-react';

export default function SignupPage() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [referralCodeInput, setReferralCodeInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const auth = useAuth();
  const firestore = useFirestore();

  const generateReferralCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      
      await updateProfile(user, { displayName });

      const myReferralCode = generateReferralCode();
      const userDocRef = doc(firestore, 'users', user.uid);
      
      const userData = {
        displayName: displayName,
        email: user.email,
        photoURL: user.photoURL,
        referralCode: myReferralCode,
        xp: 10, // Initial XP for joining
        league: 'Introducer',
        referredBy: referralCodeInput || null,
        createdAt: new Date(),
      };

      await setDoc(userDocRef, userData);

      // Award XP to the referrer if exists
      if (referralCodeInput) {
        const usersRef = collection(firestore, 'users');
        const q = query(usersRef, where('referralCode', '==', referralCodeInput));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
          const referrerDoc = querySnapshot.docs[0];
          await updateDoc(doc(firestore, 'users', referrerDoc.id), {
            xp: increment(50) // 50 XP for each successful referral
          });
        }
      }

      router.push('/account');
    } catch (err: any) {
      console.error('Signup error:', err);
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary/10 px-4">
      <Card className="w-full max-w-md shadow-2xl rounded-[2.5rem] border-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">ورود به شهر توانا</CardTitle>
          <CardDescription>
            برای حضور در اکوسیستم آفرینش و لیگ‌های افتخار ثبت‌نام کنید.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="displayName">نام نمایشی</Label>
              <Input
                id="displayName"
                type="text"
                placeholder="نام و نام خانوادگی"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@mail.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">رمز عبور</Label>
              <Input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="grid gap-2 p-4 bg-primary/5 rounded-2xl border border-primary/10">
              <Label htmlFor="referral" className="flex items-center gap-2 text-primary font-bold">
                <Ticket className="w-4 h-4" />
                کد معرف (اختیاری)
              </Label>
              <Input
                id="referral"
                type="text"
                placeholder="کد ۶ رقمی"
                className="uppercase"
                value={referralCodeInput}
                onChange={(e) => setReferralCodeInput(e.target.value)}
              />
              <p className="text-[10px] text-muted-foreground mt-1">با وارد کردن کد معرف، هر دو نفر XP دریافت می‌کنید.</p>
            </div>

            {error && <p className="text-destructive text-sm font-bold bg-destructive/10 p-3 rounded-lg">{error}</p>}
            
            <Button type="submit" className="w-full h-12 text-lg rounded-full" disabled={isSubmitting}>
              {isSubmitting ? <Loader2 className="animate-spin" /> : 'ایجاد حساب کاربری'}
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            قبلاً ثبت‌نام کرده‌اید؟{' '}
            <Link href="/login" className="underline font-bold text-primary">
              ورود
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
