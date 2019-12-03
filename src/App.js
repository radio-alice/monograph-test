import React, { useState } from 'react'
import './App.css'
import Header from './Header.js'
import Form from './Form.js'
import Preview from './Preview.js'

function App() {
  const [partyNumber, setPartyNumber] = useState(2)
  const [reviewText, setReviewText] = useState('')

  // I'm not sure that this is cleaner than just passing separate setState
  // functions to the onChange handlers– I would love to hear the logic behind this
  // refactor. Using a single state object comes at a performance hit and makes it
  // harder to refactor later. The ideal would probably be to use a state manager
  // like Redux, but that seems like overkill here.
  function updatePreview(event) {
    const routeUpdate = {
      feedback: reviewText => setReviewText(reviewText),
      party: partyNumber => setPartyNumber(Number(partyNumber))
    }
    routeUpdate[event.target.name](event.target.value)
  }

  return (
    <div className='app'>
      <Header />
      <main className='app-main'>
        <section className='app-left'>
          <Form updatePreview={updatePreview} />
        </section>
        <section className='app-right'>
          <Preview partyNumber={partyNumber} reviewText={reviewText} />
        </section>
      </main>
    </div>
  )
}

export default App
