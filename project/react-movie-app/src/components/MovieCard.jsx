function MovieCard({ movie, onClick }) {

  const posterUrl = movie.poster
    ? `https://image.tmdb.org/t/p/w500${movie.poster}`
    : `https://via.placeholder.com/500x750?text=No+Image`;

  return (
    <div className="movie-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <hr />
      {/* 영화 정보 영역 */}
      <div className="movie-info">
        <h3>제목: {movie.title}</h3>
        <p>⭐ {movie.rating.toFixed(1)}</p>
        <p>개봉일: {movie.releaseDate}</p>
      </div>

      {/* 영화 포스터 */}
      <img src={posterUrl} alt={movie.title} className="movie-poster" />
      <hr />
    </div>
  );
}

export default MovieCard;