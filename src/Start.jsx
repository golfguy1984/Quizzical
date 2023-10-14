import React from 'react'

function Start(props) {



  return (
    <>
    <h1>Quizzical</h1>
    <p>Some description if needed</p>
    <button className='py-3 px-12 rounded-2xl bg-[#4D5B9E] text-white' onClick={props.handleClick}>Start Quiz</button>
    </>
  )
}

export default Start