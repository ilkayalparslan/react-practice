import useStore from '../store'
import TodoItem from './TodoItem'

function TodoList() {
  const todos = useStore((state) => state.todos)
  const filter = useStore((state) => state.filter)

  const filteredTodos =
    filter === 'active'
      ? todos.filter((x) => !x.completed)
      : filter === 'completed'
        ? todos.filter((x) => x.completed)
        : todos

  if (filteredTodos.length === 0) {
    return <p>No Todos to Show!</p>
  }

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
export default TodoList
