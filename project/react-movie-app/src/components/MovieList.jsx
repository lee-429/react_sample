import MovieCard from "./MovieCard";

function MovieList({ movies, loading, onMovieClick }) {

  if (loading) {
    return <p>영화를 찾고 있어요... 🍿</p>
  }

  if (movies.length === 0) {
    return <p>검색된 영화가 없습니다.</p>
  }

  return (
    <div className="movie-list-container">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
      ))}
    </div>
  );
}

export default MovieList;