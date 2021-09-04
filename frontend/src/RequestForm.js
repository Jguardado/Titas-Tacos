import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function RequestForm() {
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState('')

  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log('sending a fetch post')
    fetch('http://localhost:3030/send', { method: 'POST', cors: 'same-origin', body: JSON.stringify('shit') })
    if (validatePhoneNumber(phone)) {
      alert(`Submitting Name 
      ${name}
      ${phone}
      ${email}
      ${startDate}
    `)
    } else {
      alert(`Phone number must be valid: ${phone}`)
    }

  }

  function validatePhoneNumber(number) {
    return !Number.isNaN(number) && number.toString().length === 10
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label> Name
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label> Phone
        <input
          type="text"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      </label>
      <label> Email
        <input
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label> Date
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
