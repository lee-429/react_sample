// React Hooks 불러오기
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

import "./App.css";

// 초기 Todo 배열
const initialTodos = [];

// useReducer에서 사용할 reducer 함수
function todoReducer(state, action) {
  switch (action.type) {

    // Todo 추가
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Date.now(), // 고유 id
          text: action.payload, // 입력한 내용
          completed: false, // 기본값 = 미완료
        },
      ];

    // 완료 / 미완료 토글
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    // Todo 삭제
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);

    // localStorage 데이터 불러오기
    case "LOAD_TODOS":
      return action.payload;

    default:
      return state;
  }
}

function App() {

  // todos 상태 관리 (useReducer 사용)
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  // input 입력값 상태
  const [input, setInput] = useState("");

  // 필터 상태 (all / active / completed)
  const [filter, setFilter] = useState("all");

  // input 태그 접근용 ref
  const inputRef = useRef(null);

  // 최초 실행
  useEffect(() => {

    // localStorage에 저장된 todos 가져오기
    const savedTodos = localStorage.getItem("todos");

    // 저장된 데이터가 있으면 reducer로 로드
    if (savedTodos) {
      dispatch({
        type: "LOAD_TODOS",
        payload: JSON.parse(savedTodos),
      });
    }

    // 페이지 로드 시 input 자동 포커스
    inputRef.current.focus();

  }, []);

  // todos 변경될 때마다 localStorage 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Todo 추가 함수
  const addTodo = useCallback(() => {

    // 공백 입력 방지
    if (input.trim() === "") return;

    dispatch({
      type: "ADD_TODO",
      payload: input,
    });

    // 입력창 초기화
    setInput("");

    // 다시 input에 포커스
    inputRef.current.focus();

  }, [input]);

  // 완료 상태 변경 함수
  const toggleTodo = useCallback((id) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  }, []);

  // Todo 삭제 함수
  const deleteTodo = useCallback((id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  }, []);

  // 필터링된 Todo 목록 계산
  const filteredTodos = useMemo(() => {

    // 진행 중만 보기
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    }

    // 완료된 것만 보기
    if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    // 전체 보기
    return todos;

  }, [todos, filter]);

  // 완료된 Todo 개수 계산
  const completedCount = useMemo(() => {
    return todos.filter((todo) => todo.completed).length;
  }, [todos]);

  // 진행 중 개수
  const activeCount = todos.length - completedCount;

  return (
    <div className="app">

      {/* 제목 */}
      <h1>Todo Hooks App</h1>

      {/* 입력 영역 */}
      <div className="input-box">

        <input
          ref={inputRef}
          value={input}
          placeholder="할 일을 입력하세요"

          // 입력값 변경
          onChange={(e) => setInput(e.target.value)}

          // Enter 누르면 추가
          onKeyDown={(e) => {
            if (e.key === "Enter") addTodo();
          }}
        />

        {/* 추가 버튼 */}
        <button onClick={addTodo}>추가</button>
      </div>

      {/* 필터 버튼 */}
      <div className="filters">

        <button onClick={() => setFilter("all")}>
          전체
        </button>

        <button onClick={() => setFilter("active")}>
          진행 중
        </button>

        <button onClick={() => setFilter("completed")}>
          완료
        </button>

      </div>

      {/* Todo 목록 */}
      <ul className="todo-list">

        {filteredTodos.map((todo) => (

          <li key={todo.id} className="todo-item">

            {/* Todo 내용 */}
            <span
              onClick={() => toggleTodo(todo.id)}

              // 완료되면 completed 클래스 적용
              className={todo.completed ? "completed" : ""}
            >
              {todo.text}
            </span>

            {/* 삭제 버튼 */}
            <button onClick={() => deleteTodo(todo.id)}>
              삭제
            </button>

          </li>
        ))}

      </ul>

      {/* 통계 영역 */}
      <div className="stats">
        <p>전체: {todos.length}</p>
        <p>진행 중: {activeCount}</p>
        <p>완료: {completedCount}</p>
      </div>

    </div>
  );
}

export default App;