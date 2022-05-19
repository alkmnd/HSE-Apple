import React from 'react'
import './styles.css'
import Answer from './Answer';
const DATA = [ 
    {
        username: 'S1',
        filename: "nfjrhrgviuerhgvfdgvrhbvjhfvbrw t\nejfgvwrt\nksndhveajbcshver",
        date: '12.06.2022'
    }, 
    {
        username: 'S2',
        filename: "nfjrhrgviuerhgvfdgvrhbvjhfvbrw t\nejfgvwrt\nksndhveajbcshver",
        date: '12.06.2022'
    }

]
function AnswerList() {
    return (
      <>
            <div className="answer-list">
                <div className="answer-header">
                    <div className='help-text'>Ответы</div>
                    </div>
                    <div className='answer-centralization'>
                        {DATA.map((answer, index) => 
                            <Answer
                                key={index} 
                                username={answer.username} 
                                filename={answer.filename} 
                                date={answer.date}
                            />
                         )}
                </div>
            </div>
    </>
    );
  }
  export default AnswerList