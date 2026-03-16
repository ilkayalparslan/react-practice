import useStore from '../store'

function TodoFilter() {
  const filter = useStore((state) => state.filter)
  const setFilter = useStore((state) => state.setFilter)
  const todos = useStore((state) => state.todos)

  const activeCount = todos.filter((x) => !x.completed).length
  const completedCount = todos.filter((x) => x.completed).length

  return (
    <div>
      <p>
        {activeCount} active, {completedCount} completed, {todos.length} total
      </p>
      <button
        onClick={() => setFilter('all')}
        style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
      >
        All
      </button>
      <button
        onClick={() => setFilter('active')}
        style={{ fontWeight: filter === 'active' ? 'bold' : 'normal' }}
      >
        Active
      </button>
      <button
        onClick={() => setFilter('completed')}
        style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal' }}
      >
        Completed
      </button>
    </div>
  )
}
export default TodoFilter
