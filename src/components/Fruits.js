const Fruits = () => {
	// const fruits = ["Apple", "Mango", "Banana", "Pineapple", "Strawberry"];
	const fruits = [
		{ name: "Apple", emoji: "🍎", price: 10 },
		{ name: "Banana", emoji: "🍌", price: 5 },
		{ name: "Mango", emoji: "🥭", price: 3 },
		{ name: "PineApple", emoji: "🍍", price: 19 },
		{ name: "Strawberry", emoji: "🍓", price: 4 },
	];
	return (
		<div>
			<ul>
				{fruits.map((fruit) => (
					<li key={fruit.name}> {fruit.emoji} {fruit.name} ${fruit.price}</li>
				))}
			</ul>
		</div>
	);
};

export default Fruits;
