import Fruit from "./Fruit";

const Fruits = () => {
	// const fruits = ["Apple", "Mango", "Banana", "Pineapple", "Strawberry"];
	const fruits = [
		{ name: "Apple", emoji: "🍎", price: 10 },
		{ name: "Banana", emoji: "🍌", price: 5 },
		{ name: "Mango", emoji: "🥭", price: 3 },
		{ name: "Pineapple", emoji: "🍍", price: 19 },
		{ name: "Strawberry", emoji: "🍓", price: 4 },
	];
	return (
		<div>
			<ul>
				{fruits.map((fruit, i) => (
					<Fruit
						key={i}
						name={fruit.name}
						emoji={fruit.emoji}
						price={fruit.price}
					/>
				))}
			</ul>
		</div>
	);
};

export default Fruits;
