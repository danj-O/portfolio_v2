import React from 'react'
import './Form.scss'

export default function Form() {
  return (
    <form name="contact" method="POST" data-netlify="true">
      {/* <p class="hidden">
        <label>Don’t fill this out if you're human: <input name="bot-field" type='hidden' id='bot' /></label>
      </p> */}
      <p>
        <label>Your Name: <input type="text" name="name" /></label>   
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      {/* <p>
        <label>Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
      </p> */}
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      
      {/* <div data-netlify-recaptcha="true">
      </div> */}
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}
