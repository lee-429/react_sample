function Hello() {
  return <h1>안녕하세요 React</h1>
}

function User( { name } ) {
  return <h2>안녕하세요 {name}님</h2>
}

function Product( { name, price } ) {
  return (
    <div>
      <h3>상품: {name}</h3>
      <p>가격: {price}원</p>
    </div>
  )
}

function ProfileCard( {name, age, job} ) {
  return (
    <div>
      <h3>이름: {name}</h3>
      <p>나이: {age}</p>
      <p>직업: {job}</p>
    </div>
  )
}

function Button( {text} ) {
  return <button>{text}</button>
}

function Box( {children} ) {
  return <div>{children}</div>;
}

function FruitList({ fruits }) {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
} 


function App() {
  const fruits = ["사과", "바나나", "포도"];
  return (
    <div>
      <h1>4주차 실습</h1>
      <hr />

      <h2>[실습1]</h2>
      <Hello />
      <hr />

      <h2>[실습2]</h2>
      <User name="용진1" />
      <User name="용진2" />
      <User name="용진3" />
      <hr />

      <h2>[실습3]</h2>
      <Product name="노트북" price={1000000} />
      <Product name="키보드" price={50000} />
      <Product name="마우스" price={30000} />
      <hr />

      <h2>[실습4]</h2>
      <ProfileCard name="이현학" age={25} job="학생" />
      <ProfileCard name="로메로" age={29} job="축구선수" />
      <hr />

      <h2>[실습5]</h2>
      <Button text="로그인" /> <br/>
      <Button text="회원가입" /> <br/>
      <Button text="삭제" />
      <hr />

      <h2>[실습6]</h2>
      <Box>
        <h1>안녕하세요</h1>
        <h2>Hello!!</h2>
        <h3>집 가고 싶다</h3>
      </Box>
      <hr />

      <h2>[실습7]</h2>
      <FruitList fruits={fruits} />
      <hr />
    </div>
  )
}

export default App;