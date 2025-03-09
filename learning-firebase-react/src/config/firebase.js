import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFgbw4Q8aA_LA-XGR4ZaT4RFjyE1lX980",
  authDomain: "learning-firebase-17e27.firebaseapp.com",
  projectId: "learning-firebase-17e27",
  storageBucket: "learning-firebase-17e27.firebasestorage.app",
  messagingSenderId: "562290662211",
  appId: "1:562290662211:web:79d0bad6a60d754ea66df6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
