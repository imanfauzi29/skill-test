import { InputTask, Todo } from '@/components'
import { getTodo } from '@/lib/services/todoApi'
import { wrapper } from '@/lib/store'

export default function Home() {
  const getTime = () => {
    const date = new Date().toLocaleString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      weekday: 'long',
    })

    return date
  }
  return (
    <>
      <div className="absolute w-full h-screen -z-10 bg-300% animate-animate-bg bg-gradient-linear"></div>
      <div className="w-full flex h-screen">
        <div className="relative m-auto max-w-sm lg:max-w-md max-h-[600px] h-full w-full">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full rounded-lg shadow-md bg-white">
            <div className="w-full py-4 text-center border-b border-gray-100 font-semibold italic text-blue-500">
              <span>{getTime()}</span>
            </div>
            <div className="p-4 px-16 flex flex-col">
              <span className="block text-center mb-8 w-full text-xl font-semibold text-gray-400">
                ToDo List
              </span>
              <div className="flex-1 overflow-auto px-4 scroll-m-0">
                <Todo />
              </div>
              <div className="absolute bottom-20 p-4 left-0 right-0 flex justify-center">
                <InputTask />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (_ctx) => {
    store.dispatch(getTodo.initiate({}))

    return {
      props: {},
    }
  }
)
