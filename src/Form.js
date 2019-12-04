import React from 'react'
import EmojiSelector from './EmojiSelector'
import './Form.css'

export default ({ updatePreview }) => (
  <div className='form'>
    <label className='form-label'>Your feedback</label>
    <textarea
      className='form-textarea'
      name='feedback'
      rows='4'
      onChange={updatePreview}
      placeholder='Let us know what we did well or could improve...'
    />

    <label className='form-label'>How many in your party?</label>
    <input
      className='form-input'
      type='number'
      name='party'
      min='1'
      onChange={updatePreview}
      placeholder='2'
    />

    <label className='form-label'>How was your meal?</label>
    <div className='emoji-form'>
      <EmojiSelector
        updatePreview={updatePreview}
        name='food'
        description='How tasty was the food?'
      />
      <EmojiSelector
        updatePreview={updatePreview}
        name='service'
        description='How was our service?'
      />
      <EmojiSelector
        updatePreview={updatePreview}
        name='ambience'
        description='Did you like the ~ambience~ ?'
      />
    </div>
  </div>
)
