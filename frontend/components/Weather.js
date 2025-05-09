export default function Weather({ weather, city }) {
return (
 <div className="mb-8 p-4 bg-white rounded shadow">
   <h2 className="text-xl font-bold">Weather in {city}</h2>
   <p>Temperature: {weather.temp}°C</p>
   <p>Condition: {weather.condition}</p>
 </div>
);
}