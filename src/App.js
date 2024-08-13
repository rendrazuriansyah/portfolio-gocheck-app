import { useState } from "react";

function App() {
	const [listItems, setListItems] = useState([]);

	function handleAddItem(item) {
		setListItems((listItems) => [...listItems, item]);
	}

	function handleDeleteItem(id) {
		setListItems((listItems) => listItems.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setListItems((listItems) => {
			return listItems.map((item) => {
				if (item.id === id) {
					return {
						...item,
						done: !item.done,
					};
				}
			});
		});
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handleAddItem} />
			<CheckList
				items={listItems}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
			/>
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

function CheckList({ items, onDeleteItem, onToggleItem }) {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
		</div>
	);
}

function Item({ item, onDeleteItem, onToggleItem }) {
	return (
		<li>
			<input
				type="checkbox"
				value={item.done}
				onChange={() => onToggleItem(item.id)}
			/>
			<span
				style={{ textDecoration: item.done ? "line-through" : "none" }}
			>
				{item.title}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
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
