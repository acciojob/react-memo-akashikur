import React, { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [memoText, setMemoText] = useState("");

  useEffect(() => {
    document.title = `Todos: ${todos.length}`;
  }, [todos]);

  const handleAddTodo = () => {
    setTodos([...todos, { id: todos.length + 1, content: "New todo" }]);
  };

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleMemoTextChange = (event) => {
    setMemoText(event.target.value);
  };

  const handleAddMemoItem = () => {
    if (memoText.length > 5) {
      setTodos([...todos, { id: todos.length + 1, content: memoText }]);
      setMemoText("");
    }
  };

  return (
    <div>
      <h1>React Memo App</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>

      <div>
        <h2>Memo</h2>
        <input
          type="text"
          value={memoText}
          onChange={handleMemoTextChange}
          placeholder="Enter text (min 5 characters)"
        />
        <button onClick={handleAddMemoItem}>Submit</button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
