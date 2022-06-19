import React, { useState } from "react";
import {
	CheckboxInput,
	Container,
	Form,
	Input,
	InputBtn,
	TodoElemContainer,
	TodoLi,
	TodoListContainer,
} from "./style";

const ToDoApp = () => {
	const [name, setName] = useState("");
	const [todos, setTodos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos((prev) => [...prev, { id: Date.now(), name: name }]);
		console.log(todos);
		setName("");
	};

	return (
		<Container>
			<Form>
				<Input
					placeholder="Type..."
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<InputBtn onClick={handleSubmit}>Add</InputBtn>
			</Form>
			<TodoListContainer>
				{todos.map((value) => {
					return (
						<TodoElemContainer>
							<CheckboxInput type="checkbox" />
							<TodoLi key={value.id}>{value.name}</TodoLi>
						</TodoElemContainer>
					);
				})}
			</TodoListContainer>
		</Container>
	);
};

export default ToDoApp;
