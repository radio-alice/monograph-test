import React from 'react'
import './EmojiSelector.css'

export default function(props) {
  const { updatePreview, name, description } = props
  return (
    <div className='emoji-selector'>
      <button
        name={name + 'Good'}
        onClick={updatePreview}
        aria-label='thumbs-up'
      >
        👍
      </button>
      <p>{description}</p>
      <button
        name={name + 'Bad'}
        onClick={updatePreview}
        aria-label='thumbs-down'
      >
        👎
      </button>
    </div>
  )
}
