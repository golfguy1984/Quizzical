import React from 'react'
import {decode} from 'html-entities'

function Quiz5({questions, getQuestions}) {

    
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
        let allBoxes = document.querySelectorAll('input[type = radio]')
        
        allBoxes.forEach(function(box, index) {
            box.labels[0].style.opacity = ".5";
        })

        checkedBoxes.forEach(function(checkbox, index) {
            if(questionData[index].correct_answer === checkbox.value) {
                checkbox.labels[0].style.backgroundColor = "#94D7A2";
                checkbox.labels[0].style.border = "#94D7A2";
                checkbox.labels[0].style.opacity = null;
                setScore(prev => prev + 1)
                //add 1 to score
            } else {
                //change color of correct answer to green
                checkbox.labels[0].style.backgroundColor = "#F8BCBC";
                checkbox.labels[0].style.border = "#F8BCBC";
                checkbox.labels[0].style.opacity = ".5";
                document.getElementById(`${questionData[index].correct_answer}-${index}`).labels[0].style.backgroundColor = "#94D7A2";
                document.getElementById(`${questionData[index].correct_answer}-${index}`).labels[0].style.border = "#94D7A2";
                document.getElementById(`${questionData[index].correct_answer}-${index}`).labels[0].style.opacity = null;
            }
        });

        setShowScore(true);
    }



    function newQuiz() {
        setShowScore(false)
        getQuestions()
        setScore(0)

        let checkedBoxes = document.querySelectorAll('input[type = radio]')
        checkedBoxes.forEach(function(checkbox, index) {
            checkbox.checked = false
            checkbox.labels[0].style.backgroundColor = null;
            checkbox.labels[0].style.border = null;
            checkbox.labels[0].style.opacity = null;
        })
    }




  return (
    <div className='flex flex-col justify-center w-[550px] h-[700px]'>
    {questionData.map((item, i) => {
        return (
        <div key={i}  className='mb-4'>
            <h1 className='font-bold text-[#293264] mb-4' >{decode(item.question)}</h1>
            
                <ul className='flex justify-around'>
                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={`${item.answers[0]}-${i}`}
                            name={`answers${i}`}
                            value={item.answers[0]}
                            className='radio-input'
                            
                        />
                        <label className=" text-xs" htmlFor={`${item.answers[0]}-${i}`}>{decode(item.answers[0])}</label>
                    </li>

                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={`${item.answers[1]}-${i}`}
                            name={`answers${i}`}
                            value={item.answers[1]}
                            className='radio-input'
                        />
                        <label className=" text-xs" htmlFor={`${item.answers[1]}-${i}`}>{decode(item.answers[1])}</label>
                    </li>

                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={`${item.answers[2]}-${i}`}
                            name={`answers${i}`}
                            value={item.answers[2]}
                            className='radio-input'
                        />
                        <label className=" text-xs" htmlFor={`${item.answers[2]}-${i}`}>{decode(item.answers[2])}</label>
                    </li>
               
                    <li className="radiobtn">
                        <input 
                            type='radio'
                            id={`${item.answers[3]}-${i}`}
                            name={`answers${i}`}
                            value={item.answers[3]}
                            className='radio-input'
                        />
                        <label className=" text-xs" htmlFor={`${item.answers[3]}-${i}`}>{decode(item.answers[3])}</label>
                    </li>
                
                </ul>
          
            <hr />
        </div>
        )
    })}
        {!showScore && <div className='flex justify-center'>
            <button className='py-3 px-12 rounded-2xl bg-[#4D5B9E] text-white' onClick={scoreQuiz}>Check answers</button>
        </div>}
        {showScore && 
        <div className='flex justify-center items-center gap-5'>
            <div>Your score is {score}</div>
            <button className='py-3 px-12 rounded-2xl bg-[#4D5B9E] text-white' onClick={newQuiz}>Play Again</button>
        </div>}
    </div>
  )
}

export default Quiz5

