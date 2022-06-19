import styled from "styled-components";

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding: 30px auto;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 30px;
`;

export const Input = styled.input`
	width: 350px;
	padding: 12px;
	outline: none;
	border: 1px solid #555;
	font-size: 14px;
	border-top-left-radius: 3px;
	border-bottom-left-radius: 3px;
	font-size: 15px;

	&:focus {
		border: 1px solid #5384dd;
	}
`;

export const InputBtn = styled.button`
	padding: 12px 24px;
	outline: none;
	border: 1px solid #5384dd;
	background-color: #5384dd;
	color: #ffffff;
	font-size: 15px;
	cursor: pointer;
	border-top-right-radius: 3px;
	border-bottom-right-radius: 3px;

	&:hover {
		background-color: #4678d6;
	}
`;

export const TodoListContainer = styled.div`
	width: 800px;
	height: auto;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	margin: 0 auto;
`;

export const TodoElemContainer = styled.div`
	display: flex;
	align-items: center;
	margin-top: 12px;
`;

export const CheckboxInput = styled.input`
	font-size: 15px;
	padding: 12px;
`;

export const TodoLi = styled.div`
	width: 700px;
	height: auto;
	margin: 0 auto;
	padding: 5px;
	background-color: rgba(70, 120, 214, 0.3);
	border-radius: 5px;
	border: 1px solid #5384dd;
`;
