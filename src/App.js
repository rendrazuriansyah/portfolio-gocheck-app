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
				<li>Makan</li>
				<li>Tidur</li>
			</ul>
		</div>
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
