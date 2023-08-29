import { useState } from 'react';

let z = 0;
function Counter() {
        const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    return (
        <>
        Count Z : {z}
        <button onClick={() => z = z+1}>Increment</button>
        <br />
        Count X : {x}
        <button onClick={() => setX(x+1)}>Increment</button>
        <button onClick={() => setX(x-1)}>Decrement</button>
        <br />
        Count Y : {y}
        <button onClick={() => setY(prevY => prevY+1)}>Increment</button>
        <button onClick={() => setY(prevY => prevY-1)}>Decrement</button>
        </>
    )
}

export default Counter;

/*
import { useState } from 'react';

function Counter() {
    const [x, setX] = useState(0);

    const increment = () => {
        setX(prevX => prevX + 1);
    };

    const decrement = () => {
        setX(prevX => prevX - 1);
    };

    return (
        <>
            Count: {x}
            <button onClick={increment}>Inc</button>
            <button onClick={decrement}>Dec</button>
        </>
    );
}

export default Counter;


*/