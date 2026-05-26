import React, { useState, useEffect } from 'react';

import { fetchWeatherData } from './api/weatherApi';
import WeatherSelect from './components/WeatherSelect';
import WeatherDisplay from './components/WeatherDisplay';
import './styles/WeatherApp.css'; // css 파일 연결

function WeatherApp() {

    const [city, setCity] = useState('Seoul');
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // API 호출 시작
        fetchWeatherData(city).then((data) => {
            setWeather(data); // 받아온 데이터를 state에 저장 -> 재렌더링 유발
            setLoading(false);
        })
    }, [city]);

    return (
        <div className="weather-container">

            <h2>실시간 날씨 대시보드</h2>

            <WeatherSelect city={city} setCity={setCity} />
            <hr />
            <WeatherDisplay 
                loading={loading} 
                weather={weather} 
                city={city} 
            />

        </div>
    )
}

export default WeatherApp;