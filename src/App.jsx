import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo, deleteTodo } from './features/todoList'

function App() {
  const [text, setText] = useState('')
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <div>
      <h1>Todo List</h1>

      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Vazifa Yozing"
        />
        <button onClick={handleAdd}>
          Qoshish
        </button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(deleteTodo(todo.id))}
              style={{ marginLeft: 10 }}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
