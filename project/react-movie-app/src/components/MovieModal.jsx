import React from "react";

function MovieModal({ movie, onClose }) {

  if (!movie) return null;

  const posterUrl = movie.poster
    ? `https://image.tmdb.org/t/p/w500${movie.poster}`
    : `https://via.placeholder.com/500x750?text=No+Image`;

  return (
    <div className="modal-overlay" onClick={onClose}>

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close-btn" onClick={onClose}>
          &times;
        </button>

        <img src={posterUrl} alt={movie.title} className="modal-poster" />

        <div className="modal-body">
          <h2>{movie.title}</h2>
          
          <div className="modal-meta">
            <span>⭐ {movie.rating.toFixed(1)} / 10</span>
            <span>|</span>
            <span>개봉일: {movie.releaseDate}</span>
          </div>

          {/* 영화 줄거리(Overview) */}
          <p className="modal-overview">
            {movie.overview ? movie.overview : "상세 줄거리 정보가 없습니다."}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MovieModal;