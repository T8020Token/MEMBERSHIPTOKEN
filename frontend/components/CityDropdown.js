import { useAuth } from '../lib/auth';

export default function CityDropdown() {
const { city, setCity } = useAuth();
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

return (
 <select
   value={city}
   onChange={(e) => setCity(e.target.value)}
   className="mr-4 p-2 border rounded"
 >
   {cities.map((c) => (
     <option key={c} value={c}>
       {c}
     </option>
   ))}
 </select>
);
}