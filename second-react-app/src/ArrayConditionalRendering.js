import { useState } from "react";

export default function ArrayConditionalRendering() {
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    return (
        <ul>
            {todos.map((todo, ind) => <li key={ind}>{todo}</li>)}
            <button onClick={()=>setTodos([...todos, 'another one'])}>Click</button>
        </ul>
    )
}