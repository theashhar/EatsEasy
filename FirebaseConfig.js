import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

const firebaseConfig = {
  apiKey: 'AIzaSyDbJifX4pCJiiq8j6QPFTRFMk9e',
  authDomain: 'foodmanager-28c71.firebaseapp.com',
  projectId: 'foodmanager-28c71',
  storageBucket: 'foodmanager-28c71.appspot.com',
  messagingSenderId: '106499636739',
  appId: '1:106499636739:web:4ebaa6b8f8465ab6fd9836'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FIREBASE_STORAGE = getStorage(app)
export const FIREBASE_DB = getFirestore(app)

