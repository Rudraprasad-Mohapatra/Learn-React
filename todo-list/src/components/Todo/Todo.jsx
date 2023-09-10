import { useState } from "react";

export default function Todo({ todoData, isFinished, id, changeFinished }) {
    const [finished, setFinished] = useState(isFinished);
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
            {todoData}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}