const API_KEY = "c68242ef901d499082a5da2f0428c306";

export const fetchTeams = () => {
    const url = `/api/v4/competitions/PL/standings`;

    return fetch(url, {
        headers: {
            "X-Auth-Token": API_KEY
        }
    })
    .then((response) => {
        // 서버 응답이 실패했을 경우 에러 처리
        if (!response.ok) {
            throw new Error("리그 데이터를 가져오는 데 실패했습니다.");
        }
        return response.json(); // JSON 형태로 파싱
    })
    .then((data) => {
        return data.standings[0].table;
    })
    .catch((error) => {
        console.error("API Error: ", error);
        return null;
    });
};

export const fetchTeamDetail = (teamId) => {
  const url = `/api/v4/teams/${teamId}`;

  return fetch(url, {
    headers: {
      "X-Auth-Token": API_KEY
    }
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error("팀 상세 데이터를 가져오는 데 실패했습니다.");
    }
    return response.json();
  })
  .then((data) => {
    return data;
  })
  .catch((error) => {
    console.log("API Error (Detail): ", error);
    return null;
  });
};