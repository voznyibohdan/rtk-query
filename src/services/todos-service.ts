import {Todo} from "../types";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
	reducerPath: 'todosApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://jsonplaceholder.typicode.com/'
	}),
	tagTypes: ['Todos'],
	endpoints: (builder) => ({
		getTodos: builder.query<Todo[], number>({
			query: (limit = 10) => ({
				url: 'todos',
				params: {
					_limit: limit
				}
			}),
			providesTags: ['Todos'],
		}),
		updateTodo: builder.mutation<Todo, Todo>({
			query(todo) {
				return {
					url: `todos/${todo.id}`,
					method: 'PUT',
					data: todo,
				}
			},
			invalidatesTags: ['Todos'],
		})
	})
})