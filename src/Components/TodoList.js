import React, { useState } from "react";
import TodoItem from "./TodoItem";
import Rocket from "./Rocket";

const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");
	const [allTasksCompleted, setAllTasksCompleted] = useState(false);

	const handleDelete = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks.splice(index, 1);
		setTasks(updatedTasks);
	};

	const handleComplete = (index) => {
		const updatedTasks = [...tasks];
		updatedTasks[index].completed = !updatedTasks[index].completed;
		setTasks(updatedTasks);
	};

	const addTask = () => {
		if (newTask !== "") {
			const task = { task: newTask, completed: false };
			setTasks([...tasks, task]);
			setNewTask("");
		}
	};

	const handleAnimation = () => {
		// Perform your animation logic here
		console.log("Performing animation...");
	};

	const areAllTasksCompleted =
		tasks.length > 0 && tasks.every((task) => task.completed);

	if (allTasksCompleted !== areAllTasksCompleted) {
		setAllTasksCompleted(areAllTasksCompleted);
		if (areAllTasksCompleted) {
			handleAnimation();
		}
	}

	const heading = {
		background:
			"linear-gradient(to right, rgb(117, 163, 194),rgb(11, 76, 161))",
		boxShadow: "20px 20px 50px 1px #ccc ",
		marginBottom: "20px",
	};
	const inputLabel = {
		fontSize: "18px",
		margin: "12px",
	};
	const inputStyle = {
		borderRadius: "8px",
		padding: "12px 20px",
		margin: "15px",
		outline: "none",
		border: "none",
	};
	const buttonStyle = {
		borderRadius: "20px",
		backgroundColor: "rgb(11, 76, 161)",
		padding: "11px 30px",
		fontSize: "17px",
		cursor: "pointer",
	};
	const ListStyle = {
		fontSize: "17px",
		margin: "14px",
	};

	return (
		<div>
			<h1 style={heading}>Todo List</h1>
			<label htmlFor="newTask" style={inputLabel}>
				{" "}
				Add a task{" "}
			</label>
			<input
				type="text"
				id="newTask"
				name="newTask"
				value={newTask}
				onChange={(e) => setNewTask(e.target.value)}
				style={inputStyle}
			/>
			<ul style={ListStyle}>
				{tasks.map((task, index) => (
					<TodoItem
						key={index}
						task={task.task}
						handleDelete={() => handleDelete(index)}
						handleComplete={() => handleComplete(index)}
					></TodoItem>
				))}
			</ul>
			{allTasksCompleted && <Rocket />}
			<button onClick={() => addTask("New Task")} style={buttonStyle}>
				Add Task
			</button>
		</div>
	);
};

export default TodoList;
