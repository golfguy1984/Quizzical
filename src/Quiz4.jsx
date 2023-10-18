import React from 'react'
import {decode} from 'html-entities'

function Quiz4({questions, getQuestions}) {

    
const [questionData, setQuestionData] = React.useState([])
const [score, setScore] = React.useState(0)
const [showScore, setShowScore] = React.useState(false)
      

React.useEffect(() => {
    let something = []
    questions.map(question => {
        something.push( 
            {question: question.question,
             answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
             correct_answer: question.correct_answer,
             selected: false}
             )
            })
            setQuestionData(something)

}, [questions])



    

    function shuffleArray(array) {
        let copy = [...array]
        for (let i = array.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1 ));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }


    
    
    function scoreQuiz() {

       let checkedBoxes = document.querySelectorAll('input[type = radio]:checked')
       checkedBoxes.forEach(function(checkbox, index) {
            if(questionData[index].correct_answer === checkbox.value) {
                checkbox.labels[0].style.backgroundColor = "green";
                setScore(prev => prev + 1)
                //add 1 to score
            } else {
                //change color of correct answer to green
                checkbox.labels[0].style.backgroundColor = "red";
                document.getElementById(`${questionData[index].correct_answer}-${index}`).labels[0].style.backgroundColor = "green";

            }
        });

        setShowScore(true);
        

    }

    function newQuiz() {
        setShowScore(false)
        getQuestions()

        let checkedBoxes = document.querySelectorAll('input[type = radio]')
        checkedBoxes.forEach(function(checkbox, index) {
            c
        })
    }




  return (
    <div className='border'>
    {questionData.map((item, i) => {
        return (
        <div key={i}  className='flex flex-col justify-between h-20'>
            <h1 >{decode(item.question)}</h1>
            
                <ul className='flex justify-around'>
                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={`${item.answers[0]}-${i}`}
                            name={`answers${i}`}
                            value={item.answers[0]}
                            // checked={item.checked}
                            // onChange={handleChange}
                            
                        />
                        <label htmlFor={`${item.answers[0]}-${i}`}>{decode(item.answers[0])}</label>
                    </li>

                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={`${item.answers[1]}-${i}`}
                            name={`answers${i}`}
                            value={item.answers[1]}
                            // checked={item.checked}
                            // onChange={handleChange}
                        />
                        <label htmlFor={`${item.answers[1]}-${i}`}>{decode(item.answers[1])}</label>
                    </li>

                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={`${item.answers[2]}-${i}`}
                            name={`answers${i}`}
                            value={item.answers[2]}
                            // checked={item.checked}
                            // onChange={handleChange}
                        />
                        <label htmlFor={`${item.answers[2]}-${i}`}>{decode(item.answers[2])}</label>
                    </li>
               
                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={`${item.answers[3]}-${i}`}
                            name={`answers${i}`}
                            value={item.answers[3]}
                            // checked={item.checked}
                            // onChange={handleChange}
                        />
                        <label htmlFor={`${item.answers[3]}-${i}`}>{decode(item.answers[3])}</label>
                    </li>
                
                </ul>
          
            <hr />
        </div>
        )
    })}
        {!showScore && <div className='flex justify-center'>
            <button className='border px-40' onClick={scoreQuiz}>Check answers</button>
        </div>}
        {showScore && <div className='flex justify-center'>
            <button className='border px-40' onClick={newQuiz}>New Quiz</button>
        </div>}
        {showScore && <div>Your score is {score}</div>}
    </div>
  )
}

export default Quiz4

