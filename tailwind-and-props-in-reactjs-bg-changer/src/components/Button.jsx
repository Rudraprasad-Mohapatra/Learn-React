// import React from "react";

function Button({ text,textCol="black", color, onClick}) {
    const buttonStyle = {
        backgroundColor: color,
        color:textCol
    };
    return (
        <button className="outline-none px-4 rounded-full shadow-sm" style={buttonStyle} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;