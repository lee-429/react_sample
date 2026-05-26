// TMDB에서 발급받은 개인 API 키
// API 요청 시 인증 용도로 사용
const API_KEY = '5eae366ce750487ebc55960e091a1ebf';

// TMDB API 기본 주소
const BASE_URL = 'https://api.themoviedb.org/3';

// 영화 검색 함수
// query : 사용자가 입력한 영화 제목
export const searchMovies = (query) => {

  // 실제 API 요청 주소 생성
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=ko-KR`;


  return (
    // fetch() : 서버에 요청 보내기
    fetch(url)

      // 서버 응답 처리
      .then((response) => {

        // 응답 실패 시 에러 발생
        if (!response.ok) {
          throw new Error('영화 데이터를 가져오는데 실패했습니다.');
        }

        // JSON 형태로 데이터 변환
        return response.json();
      })

      // 변환된 JSON 데이터 처리
      .then((data) => {

        // results 배열 안의 영화 데이터만 추출
        return data.results.map((movie) => ({

          id: movie.id, // 영화 고유 ID
          title: movie.title, // 영화 제목
          rating: movie.vote_average, // 영화 평점
          poster: movie.poster_path, // 영화 포스터 이미지 경로
          overview: movie.overview, // 영화 줄거리
          releaseDate: movie.release_date, // 영화 개봉일
          
        }));
      })

      .catch((error) => {
        console.error('API Error: ', error);
        return [];
      })
  );
};
