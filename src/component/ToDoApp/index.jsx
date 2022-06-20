import React, { useState, useEffect } from "react";
import {
	CheckboxInput,
	Container,
	Form,
	Input,
	InputBtn,
	TodoElemContainer,
	TodoLi,
	TodoListContainer,
	TodoRemoveBtn,
} from "./style";

const localData = localStorage.getItem("lists");

const ToDoApp = () => {
	const [name, setName] = useState("");
	const [todos, setTodos] = useState(localData ? JSON.parse(localData) : []);
	const [check, setCheck] = useState([]);

	const inputInfo = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos((prev) => [...prev, { id: Date.now(), name: name }]);
		setName("");
	};

	useEffect(() => {
		localStorage.setItem("lists", JSON.stringify(todos));
	}, [todos]);

	const clear = () => {
		localStorage.clear();
		setTodos([])
	}

	return (
		<Container>
			<Form>
				<Input placeholder="Type..." value={name} onChange={inputInfo} />
				<InputBtn onClick={handleSubmit}>Add</InputBtn>
			</Form>
			<TodoListContainer>
				<TodoRemoveBtn onClick={clear}>Delete them all</TodoRemoveBtn>
				{todos.map((value) => {
					return (
						<TodoElemContainer>
							<CheckboxInput key={value.id} type="checkbox" />
							<TodoLi key={value.id}>{value.name}</TodoLi>
						</TodoElemContainer>
					);
				})}
			</TodoListContainer>
		</Container>
	);
};

export default ToDoApp;
