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


    function handleChange(event) {
        // track the answer selected
        // const {name, value, type, checked} = event.target
        // setFormData(prevFormData => {
        //     return {
        //         ...prevFormData,
        //         [name]: type === "checkbox" ? checked : value
        //     }
        // })
        
        console.log(questionData[0].answers[0])
       
    }

    const [formData, setFormData] = React.useState([
       {
            answer0: 'Screwdriver',
            answer1: 'Hammer',
            answer2: 'Drill',
            answer3: 'Wrench'
        },
        {
            answer0: 'something different',
            answer1: '',
            answer2: '',
            answer3: ''
            }
    ])

    /**
     
       const [formData, setFormData] = React.useState( {
            question1: { answer0: '', answer1: '', answer2: '', answer3: ''}
            question2: { answer0: '', answer1: '', answer2: '', answer3: ''}
            question3: { answer0: '', answer1: '', answer2: '', answer3: ''}
            question4: { answer0: '', answer1: '', answer2: '', answer3: ''}
            question5: { answer0: '', answer1: '', answer2: '', answer3: ''}
       })
     
     */


  return (
    <div>
    {questionData.map((item, i) => {
        return (
        <div key={i} onClick={handleChange} className='flex flex-col justify-between h-20'>
            <h1 >{decode(item.question)}</h1>
            
                <ul className='flex justify-around'>
                    <li>
                        <input 
                            type='radio'
                            id={item.answers[0]}
                            name={`answers${i}`}
                            value={item.answers[0]}
                            checked={formData[0].answer0 === item.answers[0]}
                            onChange={handleChange}
                        />
                        <label>{item.answers[0]}</label>
                    </li>

                    <li>
                        <input 
                            type='radio'
                            id={item.answers[1]}
                            name={`answers${i}`}
                            value={item.answers[1]}
                            checked={formData[0].answer1 === item.answers[1]}
                            onChange={handleChange}
                        />
                        <label>{item.answers[1]}</label>
                    </li>

                    <li>
                        <input 
                            type='radio'
                            id={item.answers[2]}
                            name={`answers${i}`}
                            value={item.answers[2]}
                            checked={formData[0].answer2 === item.answers[2]}
                            onChange={handleChange}
                        />
                        <label>{item.answers[2]}</label>
                    </li>
               
                    <li>
                        <input 
                            type='radio'
                            id={item.answers[3]}
                            name={`answers${i}`}
                            value={item.answers[3]}
                            checked={formData[0].answer3 === item.answers[3]}
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