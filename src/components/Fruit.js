const Fruit = ({ name, emoji, price, soldout }) => {
	return (
		<li>
			{emoji} {name} ${price} { soldout? <b>{"Soldout"}</b> : "" }
		</li>
	);
};

export default Fruit;
