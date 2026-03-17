function App() {
  const name = "이현학";
  const age = 21;
  const major = "컴퓨터소프트웨어공학";
  return (
    <div style={{
        border:"1px solid gray",
        padding:"20px",
        width:"250px",
        backgroundColor:"white"
      }}>
      <h1>프로필</h1>
      <h2>{name}</h2>
      <p>나이: {age}</p>
      <p>전공: {major}</p>

      <h2>좋아하는 것</h2>
      <ul>
        <li>축구</li>
        <li>게임</li>
        <li>음악</li>
      </ul>
    </div>
  );
}

export default App
 