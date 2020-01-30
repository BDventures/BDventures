import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import {AddToCalendar} from './addToDate'

const CalendarHook = () => {

  useEffect(() => {
    let initialValue = $('.react-calendar__tile--active').find('abbr').attr('aria-label')
    setDate(initialValue)
  }, [])

  const [date, setDate] = useState('')
  const [passDate, setPassDate] = useState(new Date())

  const handleDateChange = () => {
    // console.log($('.react-calendar__tile--active').find('abbr').attr('aria-label'))
    let selectedDate = $('.react-calendar__tile--active').find('abbr').attr('aria-label')
    setDate(() => selectedDate)
  }
  return(
    <div className='calendar' style={{display: 'flex'}}>
      <Calendar onChange={(handleDateChange)} value={passDate}/>
      <AddToCalendar date={date}/>
    </div>
  )
}

export default CalendarHook;