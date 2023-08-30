import { useState } from "react";
import Card from "../card/Card"
import "./Grid.css"
export default function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));
    const [turn, setTurn] = useState(true); // true => O, false => X

    return (
        <div className="grid-wrapper">
            <h1 className="turn-highlight">Current turn: {(turn) ? 'O' : 'X'}</h1>
            <div className="grid">
                {
                    board.map((el, idx) => {return <Card key={idx} />})
                }
            </div>
        </div>

    );
}