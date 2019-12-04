import React from 'react'
import './EmojiSelector.css'

export default ({ dispatch, name, description }) => (
  <div className='emoji-selector'>
    <button
      onClick={() => dispatch({ type: name + 'Good' })}
      aria-label='thumbs-up'
    >
      👍
    </button>
    <p>{description}</p>
    <button
      onClick={() => dispatch({ type: name + 'Bad' })}
      aria-label='thumbs-down'
    >
      👎
    </button>
  </div>
)
