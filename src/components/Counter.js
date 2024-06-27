import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleAddByOne = () => {
        if( count < 10)
            setCount(count + 1);
    }
    const handleSubByOne = () => {
        if( count > 0 )
            setCount( count - 1 );
    }
    
	return (
		<>
        <div>
            {count}
            <br />
			<button className="btn btn-primary" onClick={handleAddByOne}>
				Add 1
			</button>
            <button className="btn btn-primary" onClick={handleSubByOne}>
				Minus 1
			</button>
        </div>
		</>
	);
};

export default Counter;
