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
    // Only initialize if config is valid to avoid auth/invalid-api-key error
    if (isFirebaseConfigValid) {
      firebaseApp = initializeApp(firebaseConfig);
    } else {
      // Return a minimal object that won't crash standard getAuth calls 
      // but the Provider will handle the UI state
      return { firebaseApp: null as any };
    }
  } else {
    firebaseApp = getApp();
  }

  return { firebaseApp };
}

export {
  initializeFirebase,
  isFirebaseConfigValid,
  FirebaseProvider,
  FirebaseClientProvider,
  useFirebase,
  useFirebaseApp,
  useFirestore,
  useAuth,
  useUser,
  useDoc,
  useCollection,
};
