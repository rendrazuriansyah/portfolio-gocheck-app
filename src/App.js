import { useState } from "react";

function App() {
	const [listItems, setListItems] = useState([]);

	function handleAddItem(item) {
		setListItems((listItems) => [...listItems, item]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handleAddItem} />
			<CheckList items={listItems} />
			<Stats />
		</div>
	);
}

function Logo() {
	return <span className="logo">📝 GoCheck ✅</span>;
}

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

function CheckList({ items }) {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item
						key={item.id}
						item={item}
					/>
				))}
			</ul>
		</div>
	);
}

function Item({ item }) {
	return (
		<li>
			<input type="checkbox" />
			<span
				style={{ textDecoration: item.done ? "line-through" : "none" }}
			>
				{item.title}
			</span>
		</li>
	);
}

function Stats() {
	return (
		<div className="stats">
			<span>
				🗒️ Kamu punya x catatan dan baru x yang dichecklist (x%) ✅
			</span>
		</div>
	);
}

export default App;
