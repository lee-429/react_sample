// 검색바 컴포넌트
function SearchBar({ search, setSearch }) {
  return (
    <center>
      <input
        type="text"
        placeholder="팀 이름 검색"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </center>
  );
}

export default SearchBar;