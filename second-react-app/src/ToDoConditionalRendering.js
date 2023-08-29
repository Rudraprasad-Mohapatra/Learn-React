import { useState } from 'react';
export default function ToDoConditionalRendering() {
    const [isEditing, setIsEditing] = useState(false);
    return (
        <>
            {
                (isEditing) ? <input /> : <p>Some todo</p>
            }

            <br />
            <button onClick={() => setIsEditing(!isEditing)}>click</button>
        </>
    )
}