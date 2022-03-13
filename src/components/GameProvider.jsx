import React, { createContext, useState } from "react";

export const gameContext = createContext()

export default function GameProvider({ children }) {

    // ===== Casilleros del tablero =====
    let [topLeft, setTopLeft] = useState({
        tile: 'topLeft',
        side: '',
        values: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    })
    let [topCenter, setTopCenter] = useState({
        tile: 'topCenter',
        side: '',
        values: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    })
    let [topRight, setTopRight] = useState({
        tile: 'topRight',
        side: '',
        values: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    })
    let [midLeft, setMidLeft] = useState({
        tile: 'midLeft',
        side: '',
        values: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    })
    let [midCenter, setMidCenter] = useState({
        tile: 'midCenter',
        side: '',
        values: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    })
    let [midRight, setMidRight] = useState({
        tile: 'midRight',
        side: '',
        values: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    })
    let [botLeft, setBotLeft] = useState({
        tile: 'botLeft',
        side: '',
        values: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    })
    let [botCenter, setBotCenter] = useState({
        tile: 'botCenter',
        side: '',
        values: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    })
    let [botRight, setBotRight] = useState({
        tile: 'botRight',
        side: '',
        values: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        }
    })

    const boardTiles = [
        topLeft,
        topCenter,
        topRight,
        midLeft,
        midCenter,
        midRight,
        botLeft,
        botCenter,
        botRight
    ]

    // ===== Generador de cartas aleatorio =====
    class Card {
        constructor(id, values, side) {
            this.id = id
            this.values = {
                top: values.top,
                left: values.left,
                right: values.right,
                bottom: values.bottom
            }
            this.side = side
            this.state = ''
        }
    }

    const [leftDeck, setLeftDeck] = useState([])
    const [rightDeck, setRightDeck] = useState([])

    function generateDeck(side) {
        let deck = []
        for (let i = 0; i < 5; i++) {
            deck.push(generateCard(side))
        }
        return deck
    }

    function generateCard(side) {
        let card = new Card(createID(), {top: randomizeValue(), left: randomizeValue(), right: randomizeValue(), bottom: randomizeValue(), side})
        return card
    }

    function randomizeValue() {
        let valuesPool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A']
        let randomValue = valuesPool[Math.floor(Math.random() * valuesPool.length)]
        return randomValue
    }

    function createID() {
        const cabecera = Date.now().toString(30);
        const cuerpo = Math.random().toString(30).substring(2);
        return cabecera + cuerpo;
    }

    // ====== MECANICAS DE JUEGO ======
    
    const [playerTurn, setPlayerTurn] = useState('')
    const [selectedCard, setSelectedCard] = useState(null)

    // === Elegir aleatoriamente lado que empieza ===
    function pickSide() {
        const num = Math.random()
        num <= .5? setPlayerTurn('left') : setPlayerTurn('right')
    }

    // === Guardar carta seleccionada ===
    function selectCard(deck, id, side) {
        const indexItem = deck.findIndex(item => item.id === id)
        const selection = deck[indexItem]
        selection.side = side
        return selection
    }

    // === Quitar carta jugada del mazo ===
    function removeFromDeck(card) {
        if (playerTurn === 'left') {
            const cardIndex = leftDeck.findIndex(elem => elem.id === card.id)
            setLeftDeck(leftDeck.splice(cardIndex, 1))
            setLeftDeck([...leftDeck])
        } else {
            const indexCard = rightDeck.findIndex(elem => elem.id === card.id)
            setRightDeck(rightDeck.splice(indexCard, 1))
            setRightDeck([...rightDeck])
        }
    }

    // === Jugar una carta ===
    function onPlaceCard(card, tile) {
        removeFromDeck(card)
        placeCard(card, tile)
        setSelectedCard(null)
    }

    function placeCard(card, tile) {
        const indexItem = boardTiles.findIndex(item => item.tile === tile)
        boardTiles[indexItem].side = card.side
        boardTiles[indexItem].values.top = card.values.top
        boardTiles[indexItem].values.left = card.values.left
        boardTiles[indexItem].values.right = card.values.right
        boardTiles[indexItem].values.bottom = card.values.bottom
    }

    return (
        <gameContext.Provider value={{ generateDeck, leftDeck, rightDeck, setLeftDeck, setRightDeck, playerTurn, selectCard, selectedCard, setSelectedCard, removeFromDeck, setPlayerTurn, boardTiles, onPlaceCard, pickSide }}>
            {children}
        </gameContext.Provider>
    )
}