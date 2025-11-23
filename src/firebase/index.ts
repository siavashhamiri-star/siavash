import { FirebaseApp, initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import {
  FirebaseProvider,
  useFirebase,
  useFirebaseApp,
  useFirestore,
  useAuth,
} from './provider';
import { useUser } from './auth/use-user';
import { useDoc } from './firestore/use-doc';
import { useCollection } from './firestore/use-collection';
import { FirebaseClientProvider } from './client-provider';

let firebaseApp: FirebaseApp;

function initializeFirebase() {
  if (!firebaseApp) {
    firebaseApp = initializeApp(firebaseConfig);
  }

  return { firebaseApp };
}

export {
  // Initialization
  initializeFirebase,
  // Providers
  FirebaseProvider,
  FirebaseClientProvider,
  // Base Hooks
  useFirebase,
  useFirebaseApp,
  useFirestore,
  useAuth,
  // Auth Hooks
  useUser,
  // Firestore Hooks
  useDoc,
  useCollection,
};
