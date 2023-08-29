import { useState } from 'react';

export default function ConditionalRendering(){
    const [x, setX] = useState(0);
    return (
        <>
            <h1>Hey I am Conditional rendering.</h1>
            Count X: {x} is {(x % 2 === 0) ? "even" : "odd"}
            <button onClick={() => setX(x+1)}>Incerement</button>
            <button onClick={() => setX(x-1)}>Decerement</button>
        </>
    );
}