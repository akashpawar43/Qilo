import { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherCard from './WeatherCard';
import axios from 'axios';

export default function Task3() {
    const [weatherData, setWeatherData] = useState({});
    const [error, setError] = useState('');

    const API_KEY = import.meta.env.VITE_API_KEY;

    const handleSearch = async (city: string) => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
            );

            const { main, weather, name } = response.data;

            const weatherInfo = {
                city: name,
                temperature: main.temp - 273.15,
                condition: weather[0].description,
                icon: weather[0].icon
            };

            setWeatherData(weatherInfo);
            setError('');
            console.log(weather)
        } catch (error) {
            setWeatherData({});
            setError('Location not found. Please try again.');
        }
    };
    return (
        <div className=' bg-gray-900 min-h-screen'>
            <div className="max-w-5xl m-auto bg-transparent">
                <SearchBar onSearch={handleSearch} />
                {error && <p className="error-message p-4 bg-red-500 rounded-lg text-white mx-4">{error}</p>}
                <main className=' w-full'>
                    {Object.keys(weatherData).length > 0 && <WeatherCard weatherData={weatherData} />}
                </main>
            </div>
        </div>
    )
}
