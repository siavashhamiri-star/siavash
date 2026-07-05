'use client';
import { FirebaseProvider, initializeFirebase, isFirebaseConfigValid } from '.';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ShieldAlert } from 'lucide-react';

export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Defensive check to prevent crash during build or if keys are missing
  if (!isFirebaseConfigValid) {
    return (
      <div className="p-4 max-w-md mx-auto mt-10">
        <Alert variant="destructive">
          <ShieldAlert className="h-4 w-4" />
          <AlertTitle>پیکربندی ناقص / Configuration Missing</AlertTitle>
          <AlertDescription>
            لطفاً کلیدهای محیطی (Firebase Environment Variables) را در پنل دپلوی خود وارد کنید.
          </AlertDescription>
        </Alert>
        <div className="mt-4 opacity-50">
           {children}
        </div>
      </div>
    );
  }

  const { firebaseApp } = initializeFirebase();
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
}
