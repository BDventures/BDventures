import React, {useState, useEffect} from 'react'

export const AddToCalendar = ({date}) => {
  const [addNotes, setAddNotes] = useState('')
  const [showNotesForDate, setShowNotesForDate] = useState('')

  const handleNotes = (e) => {
    setAddNotes(e.target.value)
  }

  const onKeyPress = () => {
    let key = window.event.keyCode

    if(key === 13) {
      setShowNotesForDate(addNotes)
      localStorage.setItem('Date Content', addNotes)
      setAddNotes('')
    }
  }


  return(
    <div>
      <div>Selected Date: {date}</div>

      <textarea value={addNotes} onKeyPress={onKeyPress} onChange={(e) => handleNotes(e)} placeholder='Add Notes...' style={{width: '100%', height: '100%'}}></textarea>

      <div>
        {showNotesForDate}
      </div>
    </div>
  )
}