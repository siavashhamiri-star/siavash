
/**
 * @fileOverview Firebase configuration module.
 * Prioritizes Environment Variables for production environments like Coolify/Cloudflare.
 */

import config from '../../firebase-applet-config.json';

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || config.apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || config.authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || config.projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || config.storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || config.messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || config.appId,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID || config.measurementId,
  firestoreDatabaseId: process.env.NEXT_PUBLIC_FIRESTORE_DATABASE_ID || config.firestoreDatabaseId || "(default)"
};
