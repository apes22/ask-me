import React, { Component } from 'react';
import Cover from './components/cover';
import Introduction from './components/introduction';
import QuestionList from './components/question_list';
import AdviceList from './components/advice_list';
import Contact from './components/contact';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Cover />
      <Introduction />
      <QuestionList />
      <AdviceList />
      <Contact />
      <Footer /> 
      </div>
    );
  }
}

export default App;
