import { useState } from 'react';

function App() {
  const [filter, setFilter] = useState('전체');

  const items = [
    { name: '사과', type: '과일' },
    { name: '바나나', type: '과일' },
    { name: '콜라', type: '음료' },
    { name: '주스', type: '음료' },
  ];

  const filteredItems =
    filter === '전체' ? items : items.filter((item) => item.type === filter);
    
  return (
    <div>
      <button onClick={() => setFilter('전체')}>전체</button>
      <button onClick={() => setFilter('과일')}>과일</button>
      <button onClick={() => setFilter('음료')}>음료</button>
      <p>현재 필터: {filter}</p>
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
