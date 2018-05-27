import React from "react";
import  "./question_list.css";

const QuestionList = () =>
<section class="questions section">
<div class='question-list animated lightSpeedIn'>
  <div class="single-card grey-border-shadow">
    <h5 class="question">How many languages do you know? And how about this and that? A longer question will go here. </h5>
    <p class="response ">I speak 2 languages. English and Spanish :) </p>
    <div class="card-action">
          <a href="#" target="_blank" >This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
  <div class="single-card grey-border-shadow">
    <h5 class="question">Which University do you recommend?</h5>
    
    <p class="response">A university that helps you get involved with the community and are helpful with helpiong you find internships. However, the most important thing is to go to a university!
      The effort that you put into your studies is what matters the most. And finding what you love is the most important thing. </p>
  </div>
 <div class="single-card grey-border-shadow">
    <h5 class="question">Question goes here</h5>
   <p class="response">Love Running! </p>
    
 </div>
  <div class="single-card grey-border-shadow">
     <h5 class="question">Question goes here</h5>
    
 </div>
  <div class="single-card grey-border-shadow">
     <h5 class="question">Question goes here</h5>
   
 </div>
  <div class="single-card grey-border-shadow">
    <h5 class="question">Question goes here</h5>
    
 </div>
 </div>
</section>

export default QuestionList;