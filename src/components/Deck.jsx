import React from "react";
import Card from "./Card";

export default function Deck({ side, deck }) {

    return (
        <div className={side == 'L'? 'deckContainerL' : 'deckContainerR'}>
            {deck.map(card => <Card card={card} key={card.id} deck={deck} side={side} />)}
        </div>
    )
}