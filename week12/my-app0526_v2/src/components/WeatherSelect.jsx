import React from 'react';

export default function WeatherSelect({city, setCity}) {
    return (
        <div>
            <label htmlFor="city-select">도시 선택:</label>
            <select 
            id="city-select"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='city-select'
            >
                <option value="Seoul">서울</option>
                <option value="New York">뉴욕</option>
                <option value="Tokyo">도쿄</option>
                <option value="London">런던</option>
            </select>
        </div>
    )
}