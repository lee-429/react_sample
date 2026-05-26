import React, { useState, useEffect } from 'react';

// 가상의 API 역할
const fetchWeatherData = (city) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockData = {
        Seoul: { temp: 21, condition: '맑음', humidity: 45 },
        Tokyo: { temp: 18, condition: '흐림', humidity: 60 },
        NewYork: { temp: 15, condition: '비', humidity: 80 },
      };
      resolve(mockData[city]);
    }, 800);
  });
};

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
    <div style={{
      padding: '20px',
      maxWidth: '400px',
      margin: 'auto',
      border: '1px solid #ccc',
      borderRadius: '10px'
    }}>

      <h2>실시간 날씨 대시보드</h2>

      {/* 도시 선택 */} 
      <label htmlFor="city-select">도시 선택:</label>
      <select 
        id="city-select"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: '5px', fontSize: '16px'}}
        >
        <option value="Seoul">서울</option>
        <option value="NewYork">뉴욕</option>
        <option value="Tokyo">도쿄</option>
      </select>

      <hr />
      {/* 날씨 정보 표시 */}
      {loading ? (
        <p>날씨 정보를 가져오는 중입니다...⌛</p>
      ) : weather ? (
          <div>
            <h3>🏙️ {city}의 현재 날씨 🌤️</h3>
            <p>🌡️ 기온 <strong>{weather.temp}°C</strong></p>
            <p>📄 상태 : {weather.condition}</p>
            <p>💧 습도 : {weather.humidity}%</p>
          </div>
      ) : (
        <p>데이터가 없습니다.</p>
      )}

    </div>
  )
}

export default WeatherApp;