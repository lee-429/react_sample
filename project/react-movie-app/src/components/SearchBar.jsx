import { useState } from "react";

function SearchBar({ onSearch }) {

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {

    e.preventDefault();
    
    if (!text.trim()) {
      alert("검색어를 입력해주세요!");
      return;
    }

    onSearch(text);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="영화명 입력"
        value={text}
        onChange={handleChange}
        className="search-input"
      />
      <button type="submit" className="search-button">검색</button>
    </form>
  );
}

export default SearchBar;