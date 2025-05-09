import { useState } from 'react';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';

export default function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { login } = useAuth();
const router = useRouter();

const handleLogin = async (e) => {
 e.preventDefault();
 try {
   await login(email, password);
   router.push('/');
 } catch (error) {
   alert('Login failed: ' + error.message);
 }
};

return (
 <div className="flex items-center justify-center h-screen">
   <div className="bg-white p-8 rounded shadow-md w-96">
     <h2 className="text-2xl font-bold mb-4">Login to T8020 News</h2>
     <form onSubmit={handleLogin}>
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
         Login
       </button>
     </form>
     <p className="mt-4">
       Don't have an account?{' '}
       <span className="text-blue-500 cursor-pointer" onClick={() => router.push('/signup')}>
         Sign up
       </span>
     </p>
   </div>
 </div>
);
}