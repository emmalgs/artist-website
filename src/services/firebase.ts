import { initializeApp } from 'firebase/app';
import { FirebaseConfig } from '../types';
import { getDatabase } from 'firebase/database';

const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY as string,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN as string,
  databaseURL: process.env.VITE_FIREBASE_DATABASE_URL as string,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID as string,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: process.env.VITE_FIREBASE_SENDER_ID as string,
  appId: process.env.VITE_FIREBASE_APP_ID as string,
  measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID as string
}

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
