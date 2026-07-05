'use client';
import { initializeFirebase, isFirebaseConfigValid, FirebaseProvider } from '.';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ShieldAlert, Loader2 } from 'lucide-react';
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

  // If config is missing, we still wrap children in a "null" provider to prevent hook crashes
  if (!isFirebaseConfigValid) {
    return (
      <FirebaseProvider firebaseApp={null} auth={null} firestore={null}>
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary/10 p-6">
            <div className="max-w-md w-full space-y-4 mb-8">
            <Alert variant="destructive" className="border-2 shadow-xl rounded-2xl bg-white">
                <ShieldAlert className="h-6 w-6" />
                <AlertTitle className="text-xl font-bold mb-2">پیکربندی ناقص / Configuration Required</AlertTitle>
                <AlertDescription className="text-sm leading-relaxed">
                بنیان‌گذار عزیز، لطفاً کلیدهای محیطی (Environment Variables) را در پنل Coolify تعریف کنید تا امپراتوری آفرینش بیدار شود.
                </AlertDescription>
            </Alert>
            </div>
            <div className="opacity-20 pointer-events-none select-none w-full">
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
