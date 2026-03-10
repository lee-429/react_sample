function App() {
  const name = '이현학';
  const message = '안녕하세요';
  const foods = ['초밥', '김치', '햄버거', '피자', '치킨'];
  const isLogin = true;

  return (
    <div>
      <h1>이름: {name}</h1>
      <h1>인사말: {message}</h1>

      <h2>좋아하는 음식</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>

      <h2>로그인 여부</h2>
      {isLogin ? <p>로그인 상태</p> : <p>로그아웃 상태</p>}

      <button className="btn">버튼</button>
    </div>
  );
}

export default App;
