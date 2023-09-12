import { useState } from "react";

export default function Todo({ todoData, isFinished, id, changeFinished, onDelete, onEdit }) {
    const [finished, setFinished] = useState(isFinished);
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todoData);
    return (
        <div>
            <input
                type="checkbox"
                name=""
                id={id}
                checked={finished}
                onChange={(e) => {
                    setFinished(e.target.checked);
                    changeFinished(e.target.checked);
                }}
            />
            {(isEditing) ? <input type="text" onChange={(e) => { setEditText(e.target.value) }} value={editText} /> : todoData}
            <button onClick={() => {
                setIsEditing(!isEditing);
                onEdit(editText);
            }}>{!isEditing ? "Edit" : "Save"}</button>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}