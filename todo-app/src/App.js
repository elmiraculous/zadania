import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [todos,setTodos]= useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);   
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Ошибка при загрузке:", error);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <h1>Загрузка...</h1>;
  }
  return (
    <div className="App">
      <h1>Список</h1>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> — {todo.completed ? "v" : "x"}
          </li>
        ))}
    </div>
  );
}

export default App;
 