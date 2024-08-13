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

export default Stats;
