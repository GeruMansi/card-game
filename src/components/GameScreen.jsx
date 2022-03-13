import React, { useContext, useEffect, useState } from "react";
import Board from "./Board";
import { gameContext } from "./GameProvider";

export default function GameScreen() {

    const { playerTurn, pickSide } = useContext(gameContext)

    const [leftPoints, setLeftPoints] = useState(5)
    const [rightPoints, setrightPoints] = useState(5)

    useEffect(() => {

        setTimeout(() => {
            pickSide()
        }, 1000)
        
    }, [])

    return (
        <div className="gameScreen">
            <div className="gameInfo">
                <span className="points L">{leftPoints}</span>
                <span className="points R">{rightPoints}</span>
                {
                    !playerTurn?
                        <div className={`turnIndicator picking`}></div>
                    :
                        <div className={`turnIndicator ${playerTurn}`}></div>
                }
                <div className="shine"></div>
            </div>
            <Board />
            <div>
                Cartas
            </div>
        </div>
    )
}