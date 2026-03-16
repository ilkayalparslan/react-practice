import TodoForm from './TodoForm'
import TodoFilter from './TodoFilter'
import TodoList from './TodoList'

function TodoApp() {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  )
}
export default TodoApp
