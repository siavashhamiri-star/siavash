'use client';
import { initializeFirebase, isFirebaseConfigValid, FirebaseProvider } from '.';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ShieldAlert, Loader2, Key } from 'lucide-react';
import { useState, useEffect } from 'react';

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-primary w-10 h-10" />
      </div>
    );
  }

  // Handle missing configuration gracefully
  if (!isFirebaseConfigValid) {
    return (
      <FirebaseProvider firebaseApp={null} auth={null} firestore={null}>
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/10 p-6 text-center">
            <div className="max-w-md w-full space-y-6">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-primary/20">
                    <Key className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
                    <h2 className="text-2xl font-black text-primary mb-4">پیکربندی بستر ابری مورد نیاز است</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                        بنیان‌گذار عزیز، برای بیدار شدن امپراتوری آفرینش، لطفاً کلیدهای محیطی (Environment Variables) را در پنل دپلوی خود وارد کنید.
                    </p>
                    <div className="bg-primary/5 p-4 rounded-2xl text-xs font-mono text-left space-y-2 border border-primary/10 overflow-auto">
                        <p>GEMINI_API_KEY=...</p>
                        <p>NEXT_PUBLIC_FIREBASE_API_KEY=...</p>
                        <p>NEXT_PUBLIC_FIREBASE_PROJECT_ID=...</p>
                    </div>
                </div>
            </div>
            <div className="opacity-10 pointer-events-none select-none w-full mt-8">
                {children}
            </div>
        </div>
      </FirebaseProvider>
    );
  }

  const { firebaseApp } = initializeFirebase();
  
  if (!firebaseApp) {
    return <FirebaseProvider firebaseApp={null} auth={null} firestore={null}>{children}</FirebaseProvider>;
  }

  try {
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);

    return (
      <FirebaseProvider
        firebaseApp={firebaseApp}
        auth={auth}
        firestore={firestore}
      >
        {children}
      </FirebaseProvider>
    );
  } catch (error) {
    console.error("Firebase Auth initialization failed", error);
    return <FirebaseProvider firebaseApp={null} auth={null} firestore={null}>{children}</FirebaseProvider>;
  }
}
