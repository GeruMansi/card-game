import React, { useContext, useEffect } from "react";
import BoardTile from "./BoardTile";
import Deck from "./Deck";
import { gameContext } from "./GameProvider";

export default function Board() {

    const { leftDeck, rightDeck, playerTurn, setLeftDeck, setRightDeck, generateDeck, boardTiles } = useContext(gameContext)

    useEffect(() => {
        setLeftDeck(generateDeck('L'))
        setRightDeck(generateDeck('R'))
    }, [])

    return (
        <div className="boardContainer">
            {leftDeck && <Deck side={"L"} deck={leftDeck} />}
            <div className="board">
                {boardTiles.map((tile, i) => <BoardTile key={i} tile={tile.tile} />)}
            </div>
            {rightDeck && <Deck side={"R"} deck={rightDeck} />}
            <div className={`deckOverlay ${playerTurn? playerTurn : 'waiting'}`}>
                
            </div>
        </div>
    )
}