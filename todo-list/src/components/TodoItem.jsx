import useStore from '../store'

function TodoItem({ todo }) {
  const toggleTodo = useStore((state) => state.toggleTodo)
  const removeTodo = useStore((state) => state.removeTodo)
  return (
    <li>
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          cursor: 'pointer',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)}>Delete</button>
    </li>
  )
}
export default TodoItem
