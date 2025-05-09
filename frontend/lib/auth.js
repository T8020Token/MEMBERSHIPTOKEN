import { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const AuthContext = createContext();

export function AuthProvider({ children }) {
const [user, setUser] = useState(null);
const [isSubscribed, setIsSubscribed] = useState(false);
const [city, setCity] = useState('New York');

useEffect(() => {
 const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
   if (firebaseUser) {
     const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
     setUser(firebaseUser);
     setIsSubscribed(userDoc.data()?.isSubscribed || false);
   } else {
     setUser(null);
     setIsSubscribed(false);
   }
 });
 return unsubscribe;
}, []);

const signup = async (email, password) => {
 const userCredential = await createUserWithEmailAndPassword(auth, email, password);
 await fetch('/api/auth/signup', {
   method: 'POST',
   headers: { 'Content-Type': 'application/json' },
   body: JSON.stringify({ email, password }),
 });
 return userCredential;
};

const login = async (email, password) => {
 return await signInWithEmailAndPassword(auth, email, password);
};

const logout = async () => {
 await signOut(auth);
};

return (
 <AuthContext.Provider value={{ user, isSubscribed, city, setCity, signup, login, logout }}>
   {children}
 </AuthContext.Provider>
);
}

export function useAuth() {
return useContext(AuthContext);
}