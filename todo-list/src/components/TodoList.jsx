import useStore from '../store'
import TodoItem from './TodoItem'

function TodoList() {
  const todos = useStore((state) => state.todos)

  if (todos.length === 0) {
    return <p>No Todos Yet. Add one above!</p>
  }
  return (
    <ul>
      {todos.map((x) => (
        <TodoItem key={x.id} todo={x} />
      ))}
    </ul>
  )
}
export default TodoList
