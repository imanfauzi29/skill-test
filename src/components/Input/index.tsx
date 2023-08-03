import { useState, useRef } from 'react'
import { useAddTodoMutation } from '@/lib/services/todoApi'
import { Todos } from '@/types'

const InputTask = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [task, setTask] = useState<string>('')
  const [addTodo, { isLoading }] = useAddTodoMutation()

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTask(value)
  }

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e

    if (key !== 'Enter') return
    ref.current?.blur()
    setTask('')

    const body: Todos = {
      title: task,
      userId: 1,
    }

    addTodo(body)
  }
  return (
    <input
      ref={ref}
      type="text"
      placeholder="Add Task Here..."
      onChange={handleChangeInput}
      onKeyDown={handleSubmit}
      value={task}
      className="outline-none active:outline-none text-center text-gray-500 py-2 px-2.5 placeholder:font-semibold placeholder:italic"
    />
  )
}

export default InputTask
