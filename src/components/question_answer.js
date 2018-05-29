import React from "react";
import { Row, Col} from 'react-materialize';
import  "./question_answer.css";

import questionsAndAnswers from "../data/QandA.json"

const QandA = () =>
<section className="q-and-a">
<h3>Q & A</h3>
  <div className='question-list animated lightSpeedIn'>
    {questionsAndAnswers.map( item => 
      <div className="single-card grey-border-shadow">
        <h5 className="question">{item.question}</h5>
        <p className="answer">{item.answer}</p>
        { item.links.length > 0 ? 
            <div className="card-action">
            <Row>
              {item.links.map(link => 
              <Col s={6} className='card-link-item'>
              <a href={link} target="_blank" >Check it out</a>
              </Col>
              )}
              </Row>
            </div> 
          : null
        }
      </div>   
    )}    
  </div>
</section>

export default QandA;