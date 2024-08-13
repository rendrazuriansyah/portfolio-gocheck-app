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

export default Item;
