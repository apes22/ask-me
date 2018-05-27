import React from "react";
import  "./question_answer.css";
import questionsAndAnswers from "../data/QandA.json"

const QandA = () =>
<section className="q-and-a">
  <div className='question-list animated lightSpeedIn'>
    {questionsAndAnswers.map( item => 
      <div className="single-card grey-border-shadow">
        <h5 className="question">{item.question}</h5>
        <p className="answer">{item.answer}</p>
        { item.links.length > 0 ? 
            <div className="card-action">
              {item.links.map(link => 
              <a href={link} target="_blank" >Check it out</a>
              )}
            </div> 
          : null
        }
      </div>   
    )}    
  </div>
</section>

export default QandA;