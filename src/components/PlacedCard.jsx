import React from "react";

export default function PlacedCard({card}) {
    return (
        <div className={`placedCard ${card.side}`}>
            <div className="cardValues">
                <span className="top">{card.values.top}</span>
                <span className="left">{card.values.left}</span>
                <span className="right">{card.values.right}</span>
                <span className="bottom">{card.values.bottom}</span>
            </div>
        </div>
    )
}