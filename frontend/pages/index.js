import { useEffect, useState } from 'react';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';
import NewsArticle from '../components/NewsArticle';
import Weather from '../components/Weather';
import CityDropdown from '../components/CityDropdown';

export default function Home() {
  const { user, isSubscribed, city, setCity } = useAuth();
  const [news, setNews] = useState([]);
  const [weather, setWeather] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
      return;
    }
    if (!isSubscribed) {
      alert('Please subscribe to access news.');
      return;
    }

    // Get geolocation
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const res = await fetch(`/api/geolocation?lat=${latitude}&lon=${longitude}`);
        const { city: geoCity } = await res.json();
        setCity(geoCity);

        const newsRes = await fetch(`/api/news/${geoCity}`, {
          headers: { Authorization: `Bearer ${await user.getIdToken()}` },
        });
        const weatherRes = await fetch(`/api/weather/${geoCity}`, {
          headers: { Authorization: `Bearer ${await user.getIdToken()}` },
        });
        setNews(await newsRes.json());
        setWeather(await weatherRes.json());
      },
      () => {
        // Fallback to selected city
        fetch(`/api/news/${city}`, {
          headers: { Authorization: `Bearer ${user.getIdToken()}` },
        }).then((res) => res.json()).then(setNews);
        fetch(`/api/weather/${city}`, {
          headers: { Authorization: `Bearer ${user.getIdToken()}` },
        }).then((res) => res.json()).then(setWeather);
      }
    );
  }, [user, isSubscribed, city]);

  const handleLogout = async () => {
    await useAuth().logout();
    router.push('/login');
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">T8020 News</h1>
        <div className="flex items-center">
          <CityDropdown />
          <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded ml-4">
            Logout
          </button>
        </div>
      </div>

      {weather && <Weather weather={weather} city={city} />}
      <div>
        <h2 className="text-2xl font-bold mb-4">Local News</h2>
        {news.map((article) => (
          <NewsArticle key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
