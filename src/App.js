import React, { Component } from 'react';
import Cover from './components/cover';
import Introduction from './components/introduction';
import QandA from './components/question_answer';
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
      <QandA />
      <AdviceList />
      <Contact />
      <Footer /> 
      </div>
    );
  }
}

export default App;
