import React from 'react';
import {todosApi} from "../services/todos-service.ts";
import {Todo} from "../types";

const Todos:React.FC = () => {
	const { data, isLoading } = todosApi.useGetTodosQuery(15);
	const [updateTodo] = todosApi.useUpdateTodoMutation();

	const handleTodoChecked = (todo: Todo) => {
		const updatedTodo = {
			...todo,
			completed: !todo.completed
		}

		updateTodo(updatedTodo);
	}

	if (isLoading) return (
		<h3>Loading ...</h3>
	)

	return (
		<div>
			{data?.map((todo) => (
				<div className="todo" key={todo.id}>
					<h3>{todo.title}</h3>
					<input type="checkbox" checked={todo.completed} onChange={() => handleTodoChecked(todo)} />
				</div>
			))}
		</div>
	);
};

export default Todos;