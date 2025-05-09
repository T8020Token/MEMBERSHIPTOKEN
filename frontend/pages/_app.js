import '../styles/globals.css';
import { AuthProvider } from '../lib/auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
const router = useRouter();

return (
 <AuthProvider>
   <Component {...pageProps} />
 </AuthProvider>
);
}

export default MyApp;