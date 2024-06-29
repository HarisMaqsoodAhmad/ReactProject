import Fruit from "./Fruit";

const Fruits = () => {
	// const fruits = ["Apple", "Mango", "Banana", "Pineapple", "Strawberry"];
	const fruits = [
		{ name: "Apple", emoji: "🍎", price: 10, soldout: true },
		{ name: "Banana", emoji: "🍌", price: 5, soldout: true },
		{ name: "Mango", emoji: "🥭", price: 3, soldout: false },
		{ name: "Pineapple", emoji: "🍍", price: 19, soldout: true },
		{ name: "Strawberry", emoji: "🍓", price: 4, soldout: false },
	];
	return (
		<div>
			<ul>
				{fruits.map((fruit, i) =>{
					return fruit.price >= 0? <Fruit key={i} name={fruit.name} emoji={fruit.emoji} price={fruit.price} soldout={fruit.soldout} /> : ""
				})}
			</ul>
		</div>
	);
};

export default Fruits;
