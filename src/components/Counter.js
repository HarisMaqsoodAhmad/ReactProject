import { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);
    let [incrementBy, setIncrementBy] = useState(1);

    function increment(){
        setCount(count + incrementBy)
    }
    function decrement(){
        setCount( count - incrementBy )
    }
    function increaseIncrement(){
        setIncrementBy( incrementBy+1);
        console.log( incrementBy );
    }
    function decreaseIncrement(){
        setIncrementBy( incrementBy - 1 )
    }

	return (
		<>
			<div>
				<h1>Count value is: {count}</h1>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>

                <h1>We are incrementing the value by {incrementBy}</h1>
                <button onClick={increaseIncrement}>Increase Increment</button>
                <button onClick={decreaseIncrement}>Decrease Increment</button>
			</div>
		</>
	);
};

export default Counter;
