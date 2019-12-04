import React from 'react'
import './Preview.css'

function Preview(props) {
  const { reviewText, reviewEmojis, partyNumber } = props
  return (
    <section className='preview'>
      <div className='preview-label'>Preview of your review</div>
      <div className='preview-content'>
        <div className='preview-emoji'>
          {Object.entries(reviewEmojis).map(([property, emoji]) => (
            <span key={property}>
              <em>{property}</em>{' '}
              <span className='preview-emoji-thumb'>{emoji}</span>
            </span>
          ))}
        </div>
        <div className='preview-feedback'>
          {reviewText || (
            <p className='preview-feedback-placeholder'>
              Let us know what we did well or could improve...
            </p>
          )}
        </div>
        <div className='preview-party'>{partyNumber} people dined here.</div>
      </div>
    </section>
  )
}

export default Preview
