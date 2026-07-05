import { FirebaseApp, initializeApp, getApps, getApp } from 'firebase/app';
import { firebaseConfig, isFirebaseConfigValid } from './config';
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

function initializeFirebase() {
  let firebaseApp: FirebaseApp;
  
  if (!getApps().length) {
    // Only initialize if we have valid config, otherwise return a dummy or handle gracefully
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = getApp();
  }

  return { firebaseApp };
}

export {
  // Initialization
  initializeFirebase,
  isFirebaseConfigValid,
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
