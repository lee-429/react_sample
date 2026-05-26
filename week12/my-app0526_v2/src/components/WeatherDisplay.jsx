import React from 'react';

export default function WeatherDisplay({ loading, weather, city }) {

    // 1. 로딩 중일 때 화면
    if (loading) {
        return <p>날씨 정보를 가져오는 중입니다...⌛</p>
    }

    // 2. 데이터가 정상적으로 존재할 때 화면
    if (weather) {
        return (
            <div>
                <h3>🏙️ {city}의 현재 날씨 🌤️</h3>
                <p>🌡️ 기온 <strong>{weather.temp}°C</strong></p>
                <p>📄 상태 : {weather.condition}</p>
                <p>💧 습도 : {weather.humidity}%</p>
            </div>
        )
    }

    // 3. 둘 다 아닐 때 (예외 처리)
    return <p>데이터가 없습니다.</p>
}