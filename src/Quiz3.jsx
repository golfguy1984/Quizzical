import React from 'react'
import {decode} from 'html-entities'

function Quiz3({questions}) {

    
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


    const [checked, setChecked] = React.useState(false)

    function handleChange(event) {
            console.log(questionData)
    }



  return (
    <div>
    {questionData.map((item, i) => {
        return (
        <div key={i} onClick={handleChange} className='flex flex-col justify-between h-20'>
            <h1 >{decode(item.question)}</h1>
            
                <ul className='flex justify-around'>
                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={item.answers[0]}
                            name={`answers${i}`}
                            value={item.answers[0]}
                            
                            onChange={handleChange}
                            
                        />
                        <label>{item.answers[0]}</label>
                    </li>

                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={item.answers[1]}
                            name={`answers${i}`}
                            value={item.answers[1]}
                            // checked={formData[0].answer1 === item.answers[1]}
                            onChange={handleChange}
                        />
                        <label>{item.answers[1]}</label>
                    </li>

                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={item.answers[2]}
                            name={`answers${i}`}
                            value={item.answers[2]}
                            // checked={formData[0].answer2 === item.answers[2]}
                            onChange={handleChange}
                        />
                        <label>{item.answers[2]}</label>
                    </li>
               
                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={item.answers[3]}
                            name={`answers${i}`}
                            value={item.answers[3]}
                            // checked={formData[0].answer3 === item.answers[3]}
                            onChange={handleChange}
                        />
                        <label>{item.answers[3]}</label>
                    </li>
                
                </ul>
          
            <hr />
        </div>
        )
    })}
    </div>
  )
}

export default Quiz3




{/* <div id={i} type="button" className='border' onClick={handleChange}>{item.answers[0]}</div>
<div id={i} type="button" className='border' onClick={handleChange}>{item.answers[1]}</div>
<div id={i} type="button" className='border' onClick={handleChange}>{item.answers[2]}</div>
<div id={i} type="button" className='border' onClick={handleChange}>{item.answers[3]}</div> */}