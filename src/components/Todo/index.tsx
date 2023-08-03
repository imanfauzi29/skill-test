import { useState } from 'react'
import { useGetTodoQuery, useUpdateTodoMutation } from '@/lib/services/todoApi'
import { Pagination } from '@/types'
import { MdOutlineDragIndicator } from 'react-icons/md'
import { motion } from 'framer-motion'

const Todo = () => {
  const [params] = useState<Pagination>({})

  const { data } = useGetTodoQuery(params)

  const [updateTodo] = useUpdateTodoMutation()

  console.log(data)

  return (
    <div className="flex flex-col gap-4 max-h-[20rem]">
      {data?.map(({ id, title, completed, userId }) => (
        <motion.div
          key={id}
          className="flex items-center"
          onClick={() => updateTodo({ id, completed: !completed })}>
          <MdOutlineDragIndicator
            size={20}
            className="text-gray-400 hover:text-gray-500 cursor-move"
          />
          <label
            htmlFor={String(id)}
            className="px-2.5 py-2 text-gray-500 flex-1">
            {title}
          </label>
          <input
            id={String(id)}
            type="checkbox"
            defaultChecked={completed}
            value={id}
          />
        </motion.div>
      ))}
    </div>
  )
}

export default Todo
