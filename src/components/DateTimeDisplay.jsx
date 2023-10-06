import React from 'react'

function DateTimeDisplay(props) {
    const {value, type} =props
  return (
    <div className='countdown'>
        <p>{value}</p>
        <span>{type}</span>
    </div>
  )
}

export default DateTimeDisplay