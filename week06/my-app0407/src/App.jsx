import { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    { id: 1, text: 'React 복습하기', done: false },
    { id: 2, text: '과제 제출하기', done: true },
  ]);

  const addTodo = () => {
    if (input.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: input,
      done: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>

      {todos.length === 0 ? (
        <p>등록된 할 일이 없습니다.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} onClick={() => toggleTodo(todo.id)}>
              {todo.text} - {todo.done ? '완료' : '미완료'}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTodo(todo.id);
                }}
              >
                삭제
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
