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
	TodoLiInput,
	TodoListContainer,
	TodoRemoveBtn,
	TodoSaveBtn,
} from "./style";

const localData = localStorage.getItem("lists");

const ToDoApp = () => {
	const [name, setName] = useState("");
	const [todos, setTodos] = useState(localData ? JSON.parse(localData) : []);
	const [select, setSelect] = useState(null);
	const [title, setTitle] = useState("");

	const inputInfo = (e) => {
		setName(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name === "") {
			return alert("Please add something to-do");
		}
		setTodos((prev) => [...prev, { id: Date.now(), name: name }]);
		setName("");
	};

	useEffect(() => {
		localStorage.setItem("lists", JSON.stringify(todos));
	}, [todos]);

	const clear = () => {
		localStorage.clear();
		setTodos([]);
	};

	const getDeleteItem = (ids) => {
		const newArr = todos.filter((value) => value.id !== ids);
		setTodos(newArr);
	};

	const getEdit = (value) => {
		setSelect(value.id);
		setTitle(value.name);
	};

	const getEditSave = () => {
		const newEditSaveData = todos.map((value) => {
			return select === value.id ? { ...value, name: title } : value;
		});
		setTodos(newEditSaveData);
		setSelect(null);
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
							<TodoLi>
								{select === value.id ? (
									<TodoLiInput
										onChange={(e) => setTitle(e.target.value)}
										value={title}
										type="text"
									/>
								) : (
									value.name
								)}
							</TodoLi>
							{select === value.id ? (
								<TodoSaveBtn onClick={getEditSave}>Save</TodoSaveBtn>
							) : (
								<TodoEditBtn onClick={() => getEdit(value)}>Edit</TodoEditBtn>
							)}
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
