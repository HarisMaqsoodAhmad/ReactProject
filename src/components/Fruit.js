const Fruit = ({name, emoji, price}) => {
    return(
        <li>
            {emoji} {name} ${price}
        </li>
    )
}

export default Fruit;