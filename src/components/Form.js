import { useState } from "react";

function Form({ onAddItem }) {
	const [title, setTitle] = useState("");
	function handleSubmit(e) {
		e.preventDefault();

		if (!title) return;

		const newItem = {
			id: Date.now(),
			title,
			done: false,
		};

		onAddItem(newItem);

		setTitle("");

		console.log(e);
	}
	return (
		<form
			className="add-form"
			onSubmit={handleSubmit}
		>
			<h3>Apa yang ingin Kamu catat?</h3>
			<input
				type="text"
				name="title"
				id=""
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			></input>
			<button>Add</button>
		</form>
	);
}

export default Form;
