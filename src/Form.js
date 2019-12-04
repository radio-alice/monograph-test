import React from 'react'
import EmojiSelector from './EmojiSelector'
import './Form.css'

export default ({ dispatch }) => (
  <div className='form'>
    <label className='form-label'>Your feedback</label>
    <textarea
      className='form-textarea'
      name='feedback'
      rows='4'
      onChange={e => dispatch({ type: 'feedback', payload: e.target.value })}
      placeholder='Let us know what we did well or could improve...'
    />

    <label className='form-label'>How many in your party?</label>
    <input
      className='form-input'
      type='number'
      name='party'
      min='1'
      onChange={e => dispatch({ type: 'party', payload: e.target.value })}
      placeholder='2'
    />

    <label className='form-label'>How was your meal?</label>
    <div className='emoji-form'>
      <EmojiSelector
        dispatch={dispatch}
        name='food'
        description='How tasty was the food?'
      />
      <EmojiSelector
        dispatch={dispatch}
        name='service'
        description='How was our service?'
      />
      <EmojiSelector
        dispatch={dispatch}
        name='ambience'
        description='Did you like the ~ambience~ ?'
      />
    </div>
  </div>
)
