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
				return item;
			});
		});
	}

	function handleClearItems() {
		const confirm = window.confirm(
			"Apakah kamu yakin ingin menghapus semua list? "
		);
		if (confirm) {
			setListItems([]);
		}
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddItem={handleAddItem} />
			<CheckList
				items={listItems}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearItems={handleClearItems}
			/>
			<Stats items={listItems} />
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

function CheckList({ items, onDeleteItem, onToggleItem, onClearItems }) {
	const [sortBy, setSortBy] = useState("input");

	function sortItems() {
		switch (sortBy) {
			case "title":
				return items
					.slice()
					.sort((a, b) => a.title.localeCompare(b.title));
			case "status":
				return items
					.slice()
					.sort((a, b) => Number(a.done) - Number(b.done));
			case "input":
			default:
				return items;
		}
	}

	const sortedItems = sortItems();

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
			<div className="actions">
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value="input">Urutkan berdasarkan input</option>
					<option value="title">Urutkan berdasarkan judul</option>
					<option value="status">Urutkan berdasarkan status</option>
				</select>
				<button onClick={onClearItems}>Hapus semua list</button>
			</div>
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

function Stats({ items }) {
	if (items.length === 0) {
		return (
			<footer className="stats">
				<span>📝 Mulai checklist dan catat sesuatu!</span>
			</footer>
		);
	}

	const totalItems = items.length;
	const doneItems = items.filter((item) => item.done).length;
	const percentage = Math.round((doneItems / totalItems) * 100);

	return (
		<footer className="stats">
			<span>
				{percentage === 100
					? "🎉 Tugas kamu sudah selesai semua!"
					: `🗒️ Kamu memiliki ${totalItems} tugas dan hanya ${doneItems} yang selesai (${percentage}%)`}
			</span>
		</footer>
	);
}

export default App;
