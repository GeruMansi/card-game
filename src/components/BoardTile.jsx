import React, { useState, useContext, useEffect } from "react";
import { gameContext } from "./GameProvider";
import PlacedCard from "./PlacedCard";

export default function BoardTile({tile}) {

    const {selectedCard, setSelectedCard, removeFromDeck, playerTurn , setPlayerTurn} = useContext(gameContext)

    const [tileIsEmpty, setTileIsEmpty] = useState(true)
    const [card, setCard] = useState({})
    const [available, setAvailable] = useState(false)

    useEffect(() => {

        selectedCard? setAvailable(true) : setAvailable(false)
        
    }, [selectedCard])

    return (
        <>
            {
                tileIsEmpty?
                    <div className={`boardTile ${available}`} onClick={() => {
                        if (selectedCard) {
                            setTileIsEmpty(false)
                            setCard(selectedCard)
                            removeFromDeck(selectedCard)
                            setSelectedCard(null)
                            playerTurn === 'left'? setPlayerTurn('right') : setPlayerTurn('left')
                        }
                    }}></div>
                :
                    <>
                        {card && <PlacedCard card={card} />}
                    </>
            }
        </>
    )
}