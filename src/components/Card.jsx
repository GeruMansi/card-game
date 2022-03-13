import React, { useContext } from "react";
import { gameContext } from "./GameProvider";

export default function Card( {card, deck, side} ) {

    const { selectCard, setSelectedCard, selectedCard} = useContext(gameContext)

    return (
        <div className={`card`} onClick={() => {
            if (!selectedCard) {
                setSelectedCard(selectCard(deck, card.id, side))
                console.log(selectedCard)
            } else {
                setSelectedCard(null)
            }
        }}>
            <div className={`cardValues`}>
                <span className="top">{card.values.top}</span>
                <span className="left">{card.values.left}</span>
                <span className="right">{card.values.right}</span>
                <span className="bottom">{card.values.bottom}</span>
            </div>
        </div>
    )
}