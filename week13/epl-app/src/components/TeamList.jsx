import TeamCard from "./TeamCard";
import "../styles/TeamList.css";

// 팀 목록을 출력하는 컴포넌트
function TeamList({ teams }) {
  return (
    <div className="team-list-container">
      <div className="team-table-header">
        <span>순위</span>
        <span>팀</span>
        <span>경기</span>
        <span>승/무/패</span>
        <span>득실 (득점차)</span>
        <span>승점</span>
      </div>

      <div className="team-table-body">
        {teams.map((item) => (
          <TeamCard key={item.team.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default TeamList;