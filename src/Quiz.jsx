import React from 'react'
import {decode} from 'html-entities'
import { v4 as uuidv4 } from 'uuid';




function Quiz({questions}) {  
    
    const [formData, setFormData] = React.useState(
        {
           answers0: '',
           answers1: '',
           answers2: '',
           answers3: '',
           answers4: ''
        }
    )

    console.log(formData.answers0)
    
    function handleChange(event) {
        setFormData(prev => {
            return {
                
                answers0: event.target.value
            }
        })
    }
    
    
    let fiveQuestions = questions.map((question, index) => {
        
        // stores answers in array
        let randomAnswersArray = []
        randomAnswersArray.push(question.correct_answer)
        randomAnswersArray.push(question.incorrect_answers[0])
        randomAnswersArray.push(question.incorrect_answers[1])
        randomAnswersArray.push(question.incorrect_answers[2])
        
        console.log(randomAnswersArray[0] === formData.answers0)
        
        function shuffleArray(array) {
            let copy = [...array]
            for (let i = array.length -1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1 ));
                [copy[i], copy[j]] = [copy[j], copy[i]];
            }
            return copy;
        }

        let shuffledArray = shuffleArray(randomAnswersArray)
        // console.log(randomAnswersArray)



    return (
            <div key={uuidv4()} className='w-[600px]'>
                <h2 className='font-bold text-[#293264] pb-3'>{decode(question.question)}</h2>

                
                    <ul className='flex justify-between pb-4'>
                    
                        <li className='border border-[#4D5B9E] py-1 px-6 rounded-full text-[10px]' >
                            <input 
                                type='radio' 
                                id="answer1"
                                name={`answers${index}`}
                                value={shuffledArray[0]}
                                onChange={handleChange} 
                            />
                            <label htmlFor='answer1'>{shuffledArray[0]}</label>
                        </li>
                            
                        <li className='border border-[#4D5B9E] py-1 px-6 rounded-full text-[10px]'>
                            <input 
                                type='radio' 
                                id='answer2'
                                name={`answers${index}`} 
                                value={shuffledArray[1]}
                                onChange={handleChange} 
                            />
                            <label htmlFor='answer2'>{shuffledArray[1]}</label>
                        </li>

                        <li className='border border-[#4D5B9E] py-1 px-6 rounded-full text-[10px]'>
                            <input 
                                type='radio' 
                                id='answer3'
                                name={`answers${index}`} 
                                value={shuffledArray[2]}
                                onChange={handleChange} 
                            />
                            <label htmlFor='answer3'>{shuffledArray[2]}</label>
                        </li>

                        <li className='border border-[#4D5B9E] py-1 px-6 rounded-full text-[10px]'>
                            <input 
                                type='radio' 
                                id='answer4'
                                name={`answers${index}`} 
                                value={shuffledArray[3]}
                                onChange={handleChange} 
                            />
                            <label htmlFor='answer4'>{shuffledArray[3]}</label>
                            </li>
                    </ul>
            
                <hr className='pb-3'/>
            </div>
            )
            
})  


  return (
    <>
        <form>
            {fiveQuestions}
            <button>Check answers</button>
        </form>
    </>
  )
}

export default Quiz
