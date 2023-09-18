import {useState, useEffect} from 'react'


import './ContactForm.css'
const ContactForm = () => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

  return (
<form className='ContactForm p__opensans' onSubmit={SubmitHandler}>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' id='name' required />
        </div>
        <div>
            <label htmlFor="email">Email: </label>
            <input type="email" name='email' id='email' required/>
        </div>
        <div>
            <label htmlFor="phone">Phone: </label>
            <input type="text" name='phone' id='phone' required/>
        </div>
        <div>
            <label htmlFor="date">Date: </label>
            <input type="date" name='date' id='date' />
        </div>
        <div>
            <label htmlFor="time">time: </label>
            <input type="time" name='time' id='time' min="09:00" max="17:00" />
        </div>
        <div>
            <label htmlFor="reason">Reason: </label>
            <textarea type="reason" name='reason' id='reason' rows='10' />
        </div>
        <button className="custom__button" type='submit'>Submit</button>
</form>
  )
}

export default ContactForm
