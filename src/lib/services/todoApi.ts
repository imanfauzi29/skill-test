import { Pagination, Todos } from '@/types'
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import {
  BaseQueryFn,
  EndpointDefinitions,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'

export const todoApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  extractRehydrationInfo: (action, { reducerPath }) => {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: (builder) => ({
    getTodo: builder.query<Todos[], Partial<Pagination>>({
      query: ({ page = 0, limit = 10 }) => ({
        url: `todos?_page=${page}&_limit=${limit}`,
        next: { revalidate: 60 },
      }),
    }),
    addTodo: builder.mutation<Todos, Partial<Todos>>({
      query: (body) => ({ url: 'todos', body, method: 'POST' }),
    }),
    updateTodo: builder.mutation<Todos, Partial<Todos>>({
      query: ({ id, ...rest }) => ({
        url: `todos/${id}`,
        body: { ...rest },
        method: 'PUT',
      }),
    }),
  }),
})

export const {
  useGetTodoQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  util: { getRunningQueriesThunk },
} = todoApi

export const { getTodo } = todoApi.endpoints
