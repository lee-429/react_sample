import { Link } from "react-router-dom";
import { teamKorName } from "../data/teamKorName";
import "../styles/TeamCard.css";

// 팀 카드 컴포넌트
function TeamCard({ item }) {
  const { team, position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points } = item;

  // 순위별 구역(챔스, 유로파, 강등 등) 스타일 클래스 지정
  let rankClass = "";
  if (position <= 4 && position === 1) rankClass = "king-zone";
  else if (position <= 4) rankClass = "ucl-zone";
  else if (position === 5) rankClass = "uel-zone";
  else if (position === 6) rankClass = "uecl-zone";
  else if (position >= 18) rankClass = "rel-zone";

  // 득실차가 양수일 때 '+' 기호 추가
  const gdText = goalDifference > 0 ? `+${goalDifference}` : goalDifference;

  return (
    /* 전체 구역을 Link 태그로 감싸서 해당 팀 ID의 주소로 이동하게 만듭니다. */
    <Link to={`/team/${team.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className={`team-row ${rankClass}`}>
        {/* 순위 */}
        <span>{position}</span>

        {/* 팀 로고 및 이름 국문/영문 */}
        <div className="col-team">
          <div className="logo-wrapper">
            <img src={team.crest} alt={team.name} className="table-logo" />
          </div>
          <div className="team-name-box">
            <strong>{teamKorName[team.name] || team.shortName}</strong>
            <small>{team.tla}</small>
          </div>
        </div>

        {/* 경기 수 */}
        <span>{playedGames}</span>

        {/* 승 / 무 / 패 */}
        <div className="wdl-box">
          <span className="w">{won}</span>
          <span className="d">{draw}</span>
          <span className="l">{lost}</span>
        </div>

        {/* 득점/실점 및 득실차 (양수/음수에 따라 글자색 변경) */}
        <div className="goals-box">
          <span className="gf-ga">{goalsFor}/{goalsAgainst}</span>
          <span className={goalDifference > 0 ? 'text-green' : goalDifference < 0 ? 'text-red' : ''}>{gdText}</span>
        </div>

        {/* 승점 */}
        <div className="points-badge">
          {points}
        </div>
      </div>
    </Link>
  );
}

export default TeamCard;