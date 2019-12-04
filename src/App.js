import React, { useReducer } from 'react'
import './App.css'
import Header from './Header.js'
import Form from './Form.js'
import Preview from './Preview.js'

const initialState = {
  partyNumber: 2,
  reviewText: '',
  reviewEmojis: {
    ambience: '😐',
    food: '😐',
    service: '😐'
  }
}
function reducer(state, action) {
  const routeUpdate = {
    feedback: reviewText => ({ ...state, reviewText }),
    party: partyNumber => ({ ...state, partyNumber: Number(partyNumber) }),
    ambienceGood: () => ({
      ...state,
      reviewEmojis: { ...state.reviewEmojis, ambience: '👍' }
    }),
    ambienceBad: () => ({
      ...state,
      reviewEmojis: { ...state.reviewEmojis, ambience: '👎' }
    }),
    foodGood: () => ({
      ...state,
      reviewEmojis: { ...state.reviewEmojis, food: '👍' }
    }),
    foodBad: () => ({
      ...state,
      reviewEmojis: { ...state.reviewEmojis, food: '👎' }
    }),
    serviceGood: () => ({
      ...state,
      reviewEmojis: { ...state.reviewEmojis, service: '👍' }
    }),
    serviceBad: () => ({
      ...state,
      reviewEmojis: { ...state.reviewEmojis, service: '👎' }
    })
  }
  return routeUpdate[action.type](action.payload)
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='app'>
      <Header />
      <main className='app-main'>
        <section className='app-left'>
          <Form dispatch={dispatch} />
        </section>
        <section className='app-right'>
          <Preview
            partyNumber={state.partyNumber}
            reviewText={state.reviewText}
            reviewEmojis={state.reviewEmojis}
          />
        </section>
      </main>
    </div>
  )
}

export default App
