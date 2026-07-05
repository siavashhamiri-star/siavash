/**
 * @fileOverview Firebase configuration module.
 * Prioritizes Environment Variables for production environments like Coolify/Cloudflare.
 */

// Fallback to local config if environment variables are not present
let localConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
  firestoreDatabaseId: "(default)"
};

try {
  localConfig = require('../../firebase-applet-config.json');
} catch (e) {
  // Config file might not exist in production, which is fine if env vars are used
}

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || localConfig.apiKey,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || localConfig.authDomain,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || localConfig.projectId,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || localConfig.storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || localConfig.messagingSenderId,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || localConfig.appId,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID || localConfig.measurementId,
  firestoreDatabaseId: process.env.NEXT_PUBLIC_FIRESTORE_DATABASE_ID || localConfig.firestoreDatabaseId || "(default)"
};
