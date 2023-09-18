import {useState, useEffect} from 'react'


import './ContactForm.css'
const ContactForm = ({isEnglish}) => {

    const [minDate, setMinDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const oneWeekFromToday = new Date(today);
    oneWeekFromToday.setDate(oneWeekFromToday.getDate() + 3);

    const formattedMinDate = oneWeekFromToday.toISOString().split('T')[0];
    
    setMinDate(formattedMinDate);
  }, []);


    const SubmitHandler = (e) => {
        e.preventDefault()
    }

  return (
<form className='ContactForm p__opensans' onSubmit={SubmitHandler}>
        <div>
            <label htmlFor="name">{isEnglish ? 'Name' : '姓名'}: </label>
            <input type="text" name='name' id='name' required />
        </div>
        <div>
            <label htmlFor="email">{isEnglish ? 'Email' : '电子邮箱'}: </label>
            <input type="email" name='email' id='email' required/>
        </div>
        <div>
            <label htmlFor="phone">{isEnglish ? 'Phone' : '电话'}: </label>
            <input type="text" name='phone' id='phone' required/>
        </div>
        <div>
            <label htmlFor="date">{isEnglish ? 'Date' : '预约日期'}: </label>
            <input type="date" name='date' id='date' min={minDate} />
        </div>
        <div>
            <label htmlFor="time">{isEnglish ? 'Time' : '时间'}: </label>
            <input type="time" name='time' id='time' min="09:00" max="17:00" />
        </div>
        <div>
            <label htmlFor="reason">{isEnglish ? 'Reason' : '咨询项目'}: </label>
            <textarea type="reason" name='reason' id='reason' rows='5' />
        </div>
        <button className="custom__button" type='submit'>{isEnglish ? 'Submit' : '提交'}</button>
</form>
  )
}

export default ContactForm
