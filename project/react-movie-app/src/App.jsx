import { useEffect, useState } from "react";
import { searchMovies } from "./api/movieApi";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import './styles/movie.css';
import MovieModal from "./components/MovieModal";

function App() {

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    searchMovies(query).then((data) => {
      // 💡 데이터가 배열 형태로 잘 들어왔는지 확인하고 정렬을 진행합니다.
      if (data && Array.isArray(data)) {
        const sortedData = [...data].sort((a, b) => {
          // 개봉일 데이터가 없는 경우를 대비해 예외 처리를 해둡니다.
          const dateA = a.releaseDate ? new Date(a.releaseDate) : new Date(0);
          const dateB = b.releaseDate ? new Date(b.releaseDate) : new Date(0);
          
          // 최신순(내림차순) 정렬: 더 최근 날짜가 앞으로 오게 합니다.
          return dateB - dateA;
        });
        
        setMovies(sortedData);
      } else {
        setMovies(data);
      }
      
      setLoading(false);
    });
  }, [query]);

  // 💡 [추가] 상태를 전부 비워서 처음 상태로 되돌리는 함수입니다.
  const handleReset = () => {
    setQuery("");
    setMovies([]);
    setSelectedMovie(null);
  };

  return (
    <div className="app-container">
      {/* 💡 앱 제목을 눌러도 홈으로 초기화되도록 연결해두었습니다. */}
      <h1 onClick={handleReset} style={{ cursor: 'pointer' }}>🎬 Movie search App</h1>
      
      {/* 💡 검색창과 초기화 버튼을 예쁘게 정렬하기 위해 감싸는 영역을 추가했습니다. */}
      <div className="search-area">
        <SearchBar onSearch={setQuery} />
        
        {/* 💡 검색어(query)가 존재할 때만 🔄 초기화 버튼이 나타납니다. */}
        {query && (
          <button className="reset-button" onClick={handleReset}>
            🔄 초기화
          </button>
        )}
      </div>

      <main>
        {/* 💡 검색어가 없을 때(초기 상태)는 텅 빈 화면 대신 안내 문구를 보여줍니다. */}
        {!query ? (
          <p className="welcome-msg">원하는 영화를 검색해보세요! 🍿</p>
        ) : (
          <MovieList movies={movies} loading={loading} onMovieClick={setSelectedMovie} />
        )}
      </main>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default App;