import { useState } from 'react'
import useStore from '../store'

function TodoForm() {
  const [text, setText] = useState('')
  const addTodo = useStore((state) => state.addTodo)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') return // bos eklemeyi engeller
    addTodo(text.trim())
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Add a new todo'
      />
      <button type='submit'>Add</button>
    </form>
  )
}
export default TodoForm
