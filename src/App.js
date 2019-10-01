import React, { useState } from 'react';
import './App.css';
import Card, { COLORS, STYLES, SHAPES } from './components/card';

const COUNTS = [1, 2, 3]

function selectRandom(array) {
  return array[Math.floor(array.length * Math.random())]
}

function selectNext(array, property) {
  const idx = array.indexOf(property)
  return array[(idx + 1) % array.length]
}

function genCards(count) {
  const cards = []

  for (let i = 0; i < count; i++) {
    cards.push({
      color: selectRandom(COLORS),
      style: selectRandom(STYLES),
      shape: selectRandom(SHAPES),
      count: selectRandom(COUNTS),
      isSet: false
    })
  }

  return cards
}

function markSets(cards) {
  for(const card of cards) {
    cards.isSet = false;
  }

  for(let i = 0; i < cards.length; i++) {
    for(let j = i + 1; j < cards.length; j++) {
      for(let k = j + 1; k < cards.length; k++) {
        if(isSet(cards[i], cards[j], cards[k])) {
          cards[i].isSet = true
          cards[j].isSet = true
          cards[k].isSet = true
          return;
        }
      }
    }
  }
}

function allDifferent(a, b, c) {
  return a !== b && b !== c && a !== c
}

function allSame(a, b, c) {
  return a === b && a === c
}

function ok(a, b, c) {
  return allDifferent(a, b, c) || allSame(a, b, c)
}

function isSet(a, b, c) {
  return ok(a.color, b.color, c.color) &&
  ok(a.count, b.count, c.count) &&
  ok(a.style, b.style, c.style) &&
  ok(a.shape, b.shape, c.shape)
}

function App() {
  const [cards, setCards] = useState(genCards(9))

  const nextColor = (i) => {
    cards[i].color = selectNext(COLORS, cards[i].color)
    setCards([...cards])
  }
  const nextShape = (i) => {
    cards[i].shape = selectNext(SHAPES, cards[i].shape)
    setCards([...cards])
  }
  const nextFill = (i) => {
    cards[i].style = selectNext(STYLES, cards[i].style)
    setCards([...cards])
  }
  const nextCount = (i) => {
    cards[i].count = selectNext(COUNTS, cards[i].count)
    setCards([...cards])
  }
  const remove = (i) => {
    cards.splice(i, 1)
    setCards([...cards])
  }
  const add = () => {
    setCards([...cards, ...genCards(1)])
  }
  const solve = () => {
    markSets(cards)
    setCards([...cards])
  }

  const renderedCards = cards.map((card, i) => {
    return <Card
      color={card.color}
      count={card.count}
      style={card.style}
      shape={card.shape}
      isSet={card.isSet}
      nextColor={() => nextColor(i)}
      nextShape={() => nextShape(i)}
      nextFill={() => nextFill(i)}
      nextCount={() => nextCount(i)}
      remove={() => remove(i)}
      >

    </Card>
  })

  return (
    <div className="App">
      {renderedCards}
      <div class='add-button' onClick={() => add()}>
        +
      </div>
      <div class='add-button' onClick={() => solve()}>
        ?
      </div>
    </div>
  );
}

export default App;
