import React from 'react'
import {decode} from 'html-entities'

function Quiz2({questions}) {

    
const [questionData, setQuestionData] = React.useState([])
      

React.useEffect(() => {
    let something = []
    questions.map(question => {
        something.push( 
            {question: question.question,
             answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
             correct_answer: question.correct_answer}
             )
            })
            setQuestionData(something)
}, [])

    

    function shuffleArray(array) {
        let copy = [...array]
        for (let i = array.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1 ));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }


    function handleChange(event) {
        // track the answer selected
       console.log(event.target.id)
    }


  return (
    <div>
    {questionData.map((item, i) => {
        return (
        <div key={i} onClick={handleChange} className='flex flex-col justify-between h-20'>
            <h1 >{decode(item.question)}</h1>
            <div className='flex justify-between'>
                <div id={i} type="button" className='border' onClick={handleChange}>{item.answers[0]}</div>
                <div id={i} type="button" className='border' onClick={handleChange}>{item.answers[1]}</div>
                <div id={i} type="button" className='border' onClick={handleChange}>{item.answers[2]}</div>
                <div id={i} type="button" className='border' onClick={handleChange}>{item.answers[3]}</div>
            </div>
            <hr />
        </div>
        )
    })}
    </div>
  )
}

export default Quiz2