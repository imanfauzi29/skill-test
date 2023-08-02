'use client'
import { useState } from 'react'
import { useGetTodoQuery } from '@/lib/services/todoApi'
import { Pagination } from '@/types'
import { MdOutlineDragIndicator } from 'react-icons/md'
import { motion } from 'framer-motion'

const Todo = () => {
  const [params] = useState<Pagination>({})

  const { data } = useGetTodoQuery(params)

  return (
    <div className="flex flex-col gap-4 max-h-[20rem]">
      {data?.map(({ id, title, completed, userId }) => (
        <motion.div key={id} className="flex items-center">
          <MdOutlineDragIndicator
            size={20}
            className="text-gray-400 hover:text-gray-500 cursor-move"
          />
          <label className="px-2.5 py-2 text-gray-500 flex-1">{title}</label>
          <input type="checkbox" checked={completed} />
        </motion.div>
      ))}
    </div>
  )
}

export default Todo
