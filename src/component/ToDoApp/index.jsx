import React, { useState, useEffect } from "react";
import {
	CheckboxInput,
	Container,
	Form,
	Input,
	InputBtn,
	TodoDeleteBtn,
	TodoEditBtn,
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
		if (name === "") {
			return alert("Please add something to-do");
		}
		setTodos((prev) => [
			...prev,
			{ id: Date.now(), name: name, checkbox: "checkbox" },
		]);
		setName("");
	};

	useEffect(() => {
		localStorage.setItem("lists", JSON.stringify(todos));
	}, [todos]);

	const clear = () => {
		localStorage.clear();
		setTodos([]);
	};

	const getEditItem = () => {};

	const getDeleteItem = (ids) => {
		const newArr = todos.filter((value) => value.id !== ids);
		setTodos(newArr);
	};

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
						<TodoElemContainer key={value.id}>
							<CheckboxInput type="checkbox" />
							<TodoLi>{value.name}</TodoLi>
							<TodoEditBtn onChange={getEditItem}>Edit</TodoEditBtn>
							<TodoDeleteBtn onClick={() => getDeleteItem(value.id)}>
								Delete
							</TodoDeleteBtn>
						</TodoElemContainer>
					);
				})}
			</TodoListContainer>
		</Container>
	);
};

export default ToDoApp;
