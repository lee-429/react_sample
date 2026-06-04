import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import TeamList from "../components/TeamList";
import { fetchTeams } from "../api/footballDataApi";
import { teamKorName } from "../data/teamKorName";
import "../styles/Home.css";

// 메인 페이지 컴포넌트
function Home() {

  // 팀 목록 저장
  const [teams, setTeams] = useState([]);

  // 검색어 저장
  const [search, setSearch] = useState("");

  // 페이지가 처음 실행될 때 팀 데이터 가져오기
  useEffect(() => {
    fetchTeams().then((data) => {
      console.log(data);
      setTeams(data);
    });
  }, []);

  // 검색어에 포함되는 팀만 필터링
  const filteredTeams = teams.filter((item) => {
    const teamName = item?.team?.name;

    // 한글 매핑 검사 (없으면 영어 이름 사용)
    const name = teamKorName?.[teamName] ?? teamName ?? "";

    return name
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  return (
    <div>
      {/* 프로젝트 제목 */}
      <h1 className="home-title">EPL APP</h1>

      {/* 검색창 */}
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {/* 필터링된 팀 목록 출력 */}
      <TeamList teams={filteredTeams} />
    </div>
  );
}

export default Home;