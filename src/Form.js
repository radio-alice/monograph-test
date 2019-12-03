import React from 'react'
import EmojiSelector from './EmojiSelector'
import './Form.css'

function Form(props) {
  const updatePreview = props.updatePreview
  return (
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
      <div>
        <EmojiSelector
          updatePreview={updatePreview}
          name='ambience'
          description='✨did you like the ~ambience~ ✨'
        />
        <EmojiSelector
          updatePreview={updatePreview}
          name='food'
          description='👩‍🍳 how tasty was the food? 🍜'
        />
        <EmojiSelector
          updatePreview={updatePreview}
          name='service'
          description='🍽 how was our service? 🍷'
        />
      </div>
    </div>
  )
}

export default Form
