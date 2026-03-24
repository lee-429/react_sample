function Book(props) {
  return (
    <div>
      <h2>이 책의 제목은 {props.title} 입니다.</h2>
      <p>이 책의 저자는 {props.author}님 입니다.</p>
      <p>이 책은 {props.price}원 입니다.</p>
    </div>
  );
}

function GreetingCard( {name, message} ) {
  return (
    <div>
      <h3>{name}님께</h3>
      <p>{message}</p>
    </div>
  )
}

function Button( {text, color}) {
  return <button style={{ backgroundColor: color, color: "white"}}>{text}</button>
}


function App() {
  return (
    <div>
      <h1>4주차 수업 과제</h1>
      <hr />

      <h2>[과제1]</h2>
      <Book title="홍길동전" author="홍길동" price={30000} />
      <Book title="데이터베이스" author="황길동" price={25000} />
      <Book title="인공지능" author="우길동" price={10000} />
      <hr />

      <h2>[과제2]</h2>
      <GreetingCard name="길동" message="생축생축" />
      <GreetingCard name="찰스" message="하이" />
      <GreetingCard name="둘리" message="호잇" />
      <hr />

      <h2>[과제3]</h2>
      <Button text="버튼1" color="red"/>
      <Button text="버튼2" color="blue"/>
      <Button text="버튼3" color="green"/>
      <hr />
    </div>
  );
}

export default App;