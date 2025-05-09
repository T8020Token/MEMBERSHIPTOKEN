import { useEffect, useState } from 'react';
import { useAuth } from '../lib/auth';

export default function NewsArticle({ article }) {
const [analysis, setAnalysis] = useState(null);
const { user } = useAuth();

useEffect(() => {
 const fetchAnalysis = async () => {
   const res = await fetch('/api/factcheck', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       Authorization: \`Bearer \${await user.getIdToken()}\`,
     },
     body: JSON.stringify({ article }),
   });
   setAnalysis(await res.json());
 };
 fetchAnalysis();
}, [article, user]);

return (
 <div className="mb-8 p-4 bg-white rounded shadow">
   <h3 className="text-xl font-bold">{article.title}</h3>
   <p className="text-gray-600 text-sm">{article.date}</p>
   <p className="my-2">{article.content}</p>
   <a href={article.source} target="_blank" rel="noopener noreferrer" className="text-blue-500">
     Source
   </a>
   {analysis && (
     <div className="mt-4">
       <h4 className="font-bold">AI Analysis</h4>
       <p>Reliability: {analysis.isReliable ? 'High' : 'Low'}</p>
       <p>{analysis.analysis}</p>
     </div>
   )}
 </div>
);
}