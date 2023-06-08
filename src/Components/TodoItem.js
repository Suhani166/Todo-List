import React, { useState } from "react";

const TodoItem = ({ task, handleComplete, handleDelete }) => {
	const [completed, setCompleted] = useState(false);

	const handleCheckBox = () => {
		setCompleted(!completed);
		handleComplete();
	};
	const textStyle = {
		textDecoration: completed ? "line-through" : "none",
		border: "2px solid #ccc",
		width: "40%",
		fontSize: "20px",
	};

	const styleList = {
		margin: "20px",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
	};

	const styleDelete = {
		backgroundColor: "#D8C4B6",
		fontSize: "17px",
		padding: "10px 15px",
		border: "none",
		borderRadius: "5px",
	};
	return (
		<li style={styleList}>
			<input
				type="checkbox"
				checked={completed}
				onChange={handleCheckBox}
			/>
			<span style={textStyle}>{task}</span>
			<button onClick={handleDelete} style={styleDelete}>
				Delete
			</button>
		</li>
	);
};

export default TodoItem;
