import React from "react"
import { useState } from 'react'
import Start from "./Start"
import Quiz from "./Quiz"


function App() {

const [start, setStart] = useState(false) // determines which page to display and is changed by the button on the start page
const [questions, setQuestions] = useState([]) // state to hold the questions returned from the API

// this function is called when the button is clicked and calls the get questions function
async function handleClick() {
  await getQuestions()
}

// fetches the questions - sets questions state and displays the quiz page
async function getQuestions() {
  let res = await fetch('https://opentdb.com/api.php?amount=5&category=21&type=multiple')
  let data = await res.json()
    setQuestions(data.results)
    setStart(!start)
    
}



  return (
    <div className="m-auto flex flex-col justify-center items-center w-[750px] h-[750px] bg-[#F5F7FB]">
      {start ? "" : <Start 
                      handleClick={handleClick}
                      />}
      {start && 
                <>
                  <Quiz 
                      questions={questions} 
                      />
                </>
                    }
    </div>
  )
}

export default App
