import { useState } from "react";

function GreetingCard( {name, message} ) {

  const [likes, setLikes] = useState(0);

  return (
    <div style= {
      { border: "1px solid #ccc",
        padding: "16px",
        marginBottom: "12px" }}>
      <h3>{name}님께</h3>
      <p>{message}</p>
      <p>좋아요 수 : {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>👍</button>
    </div>
  )
}

function SelectButton( {text, color}) {
  const [selected, setSelected] = useState(false);

  return (
  <button
    onClick={() => setSelected(!selected)}
    style={{
      backgroundColor: selected ? color : "#ddd",
      color: selected ? "white" : "black",
      padding: "10px 16px",
      marginRight: "8px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    }}
  >
    {selected ? `${text} 선택됨` : text}
  </button>
  );
}

function VideoCard( {title, channel, views}) {

  const [likes, setLikes] = useState(0);
  const [clicks, setClicks] = useState(0);
  const handleCardClick = () => {
    setClicks(clicks + 1);
  };
  const handelLikeClick = (event) => {
    event.stopPropagation(); // 카드 클릭과 좋아요 클릭이 동시에 실행되지 않게 막아 줌
    setLikes(likes + 1);
  };

  return (
    <div
      onClick={handleCardClick}
      style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "16px",
        marginBottom: "12px",
        cursor: "pointer",
      }}
    >
      <h3>{title}</h3>
      <p>채널: {channel}</p>
      <p>조회수: {views}</p>
      <p>클릭 수: {clicks}</p>
      <p>좋아요 수: {likes}</p>
      <button onClick={handelLikeClick}>👍 좋아요</button>
    </div>
  );
}

function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          title={video.title}
          channel={video.channel}
          views={video.views}
        />
      ))}
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState("전체");
  const videos = [
    {
      id: 1,
      title: "리액트 강의 기초",
      channel: "코딩채널",
      views: "10만",
      category: "공부",
    },
    {
      id: 2,
      title: "자바 강의 기초",
      channel: "코딩채널",
      views: "30만",
      category: "공부",
    },
    {
      id: 3,
      title: "자바스크립트 강의 기초",
      channel: "코딩채널",
      views: "19만",
      category: "자바스크립트"
    },
    {
      id: 4,
      title: "취업 가이드",
      channel: "취업고수",
      views: "100만",
      category: "취업",
    }
  ]
    
    const filteredVideos = 
      filter === "전체" ? videos : videos.filter((video) => video.category ===  filter)
  return (
    <div>
      <h1>5주차 수업(state)</h1>
      <hr />

      <div>
        <h2>실습 1</h2>
        <GreetingCard name="민지" message="생일 축하해!" />
        <GreetingCard name="철수" message="시험 화이팅!" />
        <GreetingCard name="영희" message="오늘도 좋은 하루!!" />
      </div>
      <hr />

      <h2>실습 2</h2>
      <SelectButton text="로그인" color="red"/>
      <SelectButton text="승인" color="blue"/>
      <SelectButton text="삭제" color="green"/>
      <hr />

      <h2>실습 3</h2>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("전체")}>전체</button>
        <button onClick={() => setFilter("공부")}>공부</button>
        <button onClick={() => setFilter("취업")}>취업</button>
        <button onClick={() => setFilter("자바스크립트")}>자바스크립트</button>
      </div>
      <p>현재 필터: {filter}</p>
      <VideoList videos={filteredVideos} />
      <hr />
    </div>
  )
}

export default App;
