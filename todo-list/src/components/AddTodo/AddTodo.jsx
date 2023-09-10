import { useState } from "react";

export default function AddTodo({ updateList }) {
    const [inputText, setInputText] = useState("");
    return (
        <div>
            <input
                type="text"
                value={inputText}
                placeholder="add your next todo..."
                onChange={e => setInputText(e.target.value)}
            />
            <button onClick={() => {
                
                inputText && updateList(inputText)
                setInputText("");
            }}>Add</button>
        </div>
    )
}