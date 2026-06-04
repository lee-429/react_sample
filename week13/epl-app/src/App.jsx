import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TeamDetail from "./pages/TeamDetail";

function App() {
  return (
    // 1. 브라우저의 주소창과 리액트 앱을 연결하는 최상위 컴포넌트
    <BrowserRouter>
      {/* 2. 여러 Route(주소) 중 주소창과 정확히 일치하는 단 하나만 골라주는 박스 */}
      <Routes>

        {/* 메인 페이지: 주소가 '/' 일 때 Home 컴포넌트를 보여줌 */}
        <Route path="/" element={<Home />} />

        {/* 상세 페이지: 주소가 '/team/팀ID' 일 때 TeamDetail 컴포넌트를 보여줌 */}
        {/* 여기서 :id는 useParams가 인식할 수 있는 변수 이름이 됩니다 */}
        <Route path="/team/:id" element={<TeamDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;