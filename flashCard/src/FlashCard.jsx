import React, { useState } from 'react'

function FlashCard({questions} ) {
    const [selectedId, setselectedId] = useState(null);
function handleClick(id){
setselectedId(id !== selectedId ? id : null);
}

  return (
  <div className='flashcards'>
    {questions.map((question) => (
        <div key={question.id}
        onClick={() => handleClick(question.id)}
        className={question.id === selectedId ? "selected" : ""}>
            <p>
                {question.id === selectedId ? question.answer : question.question} 
            </p>
        </div>
    ))}
  </div>
  )
}

export default FlashCard