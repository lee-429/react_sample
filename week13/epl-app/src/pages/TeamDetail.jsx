import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTeamDetail } from "../api/footballDataApi";
import "../styles/TeamDetail.css";

function TeamDetail() {
  const {id} = useParams(); // 주소창의 파라미터에서 팀 ID 추출 (예 : /team/57 -> 57)
  const navigate = useNavigate(); // 페이지 이동(뒤로가기 등)을 위한 네비게이트 함수
  const [team, setTeam] = useState(null); // 팀 상세 정보 상태 관리
  const [loading, setLoading] = useState(true); // 로딩 상태 관리

  useEffect(() => {
    // 컴포넌트 마운트 시, 주소창에서 가져온 ID로 해당 팀의 상세 데이터 요청
    fetchTeamDetail(id).then((data) => {
      if (data) {
        setTeam(data); // 데이터 저장
      }
      setLoading(false); // 로딩 완료 처리
    });
  }, [id]); // ID가 바뀔 때마다 실행

  // 데이터 로딩 중이거나 예외 상활일 때의 조건부 렌더링 (예외 처리)
  if (loading) return <div className="loading">로딩 중...⌛</div>;
  if (!team) return <div className="error">팀 정보를 찾을 수 없습니다.</div>;

  return (
    <div className="detail-container">
      {/* navigate(-1)을 사용하여 브라우저의 '뒤로가기' 기능 수행 */}
      <button className="back-btn" onClick={() => navigate(-1)}>← 순위표로 돌아가기</button>

      <div className="detail-dashboard">
        {/* 왼쪽 섹션: 팀 엠블럼 및 이름 */}
        <div className="detail-left">
          <img src={team.crest} alt={team.name} className="detail-crest" />
          <h2>{team.name}</h2>
          <span className="detail-tla">{team.tla}</span>
        </div>

        {/* 오른쪽 섹션: API에서 받아온 홈구장, 감독 등 상세 프로필 바인딩 */}
        <div className="detail-right">
          <h3>클럽 프로필</h3>
          <hr />
          <div className="info-grid">
            <p><strong>🏟️ 홈 구장:</strong> {team.venue || "정보 없음"}</p>
            <p><strong>📅 창립년도:</strong> {team.founded ? `${team.founded}년` : "정보 없음"}</p>
            <p><strong>👔 감독:</strong> {team.coach?.name || "정보 없음"} ({team.coach?.nationality || ""})</p>
            <p><strong>🎨 클럽 컬러:</strong> {team.clubColors || "정보 없음"}</p>
            <p><strong>🌐 웹사이트:</strong> <a href={team.website} target="_blank" rel="noreferrer">{team.website}</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamDetail;