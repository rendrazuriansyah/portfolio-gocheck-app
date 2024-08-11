const listItem = [
	{ id: 1, title: "Makan", done: false },
	{ id: 2, title: "Tidur", done: true },
];

function App() {
	return (
		<div className="app">
			<Logo />
			<Form />
			<CheckList />
			<Stats />
		</div>
	);
}

function Logo() {
	return <span className="logo">📝 GoCheck ✅</span>;
}

function Form() {
	return (
		<div className="add-form">
			<h3>Apa yang ingin Kamu catat?</h3>
		</div>
	);
}

function CheckList() {
	return (
		<div className="list">
			<ul>
				{listItem.map((item) => (
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
