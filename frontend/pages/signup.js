import { useState } from 'react';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';

export default function Signup() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { signup } = useAuth();
const router = useRouter();

const handleSignup = async (e) => {
 e.preventDefault();
 try {
   await signup(email, password);
   router.push('/');
 } catch (error) {
   alert('Signup failed: ' + error.message);
 }
};

return (
 <div className="flex items-center justify-center h-screen">
   <div className="bg-white p-8 rounded shadow-md w-96">
     <h2 className="text-2xl font-bold mb-4">Sign Up for T8020 News</h2>
     <form onSubmit={handleSignup}>
       <input
         type="email"
         placeholder="Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className="w-full p-2 mb-4 border rounded"
         required
       />
       <input
         type="password"
         placeholder="Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         className="w-full p-2 mb-4 border rounded"
         required
       />
       <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
         Sign Up
       </button>
     </form>
     <p className="mt-4">
       Already have an account?{' '}
       <span className="text-blue-500 cursor-pointer" onClick={() => router.push('/login')}>
         Login
       </span>
     </p>
   </div>
 </div>
);
}