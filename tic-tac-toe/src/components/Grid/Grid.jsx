import { useState } from "react";
import Card from "../card/card";
import "./Grid.css"
import isWinner from "../helper/checkWinner";

export default function Grid({ numberOfCards }) {
    const [board, setBoard] = useState(Array(numberOfCards).fill(""));

    const [turn, setTurn] = useState(true);

    const [winner, setWinner] = useState(null);

    function play(index) {
        if (turn == true) {
            board[index] = "O";
        } else {
            board[index] = "X";
        }

        const win = isWinner(board, turn ? "O" : "X");

        if (win) {
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }
    function reset() {
        setTurn(true);
        setWinner(null);
        setBoard(Array(numberOfCards).fill(""));
    }
    const resBoard = board.map((ele, ind) => {
        return <Card key={ind} gameEnd={winner ? true : false} onPlay={play} player={ele} index={ind} />
    });

    return (
        <div className="grid-wrapper">
            {
                winner && (
                    <>
                        <h1 className="turn-highlight">Winner is {winner}</h1>
                        <button className="reset" onClick={reset}>Reset Game</button>
                    </>
                )
            }
            <h1 className="turn-highlight">
                Current Turn : {(turn) ? "O" : "X"}
            </h1>

            <div className="grid">
                {resBoard}
            </div>
        </div>

    )
}