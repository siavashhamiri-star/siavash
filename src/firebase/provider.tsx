'use client';
import { createContext, useContext } from 'react';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import { FirebaseErrorListener } from '@/components/FirebaseErrorListener';

type FirebaseContextValue = {
  firebaseApp: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
};

const FirebaseContext = createContext<FirebaseContextValue | undefined>(
  undefined
);

export function FirebaseProvider({
  children,
  ...value
}: {
  children: React.ReactNode;
} & FirebaseContextValue) {
  return (
    <FirebaseContext.Provider value={value}>
      {children}
      {/* The FirebaseErrorListener is only active in development to prevent exposing detailed errors in production. */}
      {process.env.NODE_ENV === 'development' && value.firestore && <FirebaseErrorListener />}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  const context = useContext(FirebaseContext);
  // Return an empty context instead of throwing to prevent runtime crashes when config is missing
  if (context === undefined) {
    return {
        firebaseApp: null,
        auth: null,
        firestore: null
    };
  }
  return context;
}

export function useFirebaseApp() {
  const context = useFirebase();
  return context.firebaseApp;
}

export function useFirestore() {
  const context = useFirebase();
  return context.firestore;
}

export function useAuth() {
  const context = useFirebase();
  return context.auth;
}
