import React, { Component } from 'react';
// import Profile from './components/Profile/Profile';
import Container from './components/Container/Container';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';


// import user from "./components/user.json";


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  goodPlus = () => {
    this.setState(old => ({
      good: old.good + 1,
    }));
  };
  neutralPlus = () => {
    this.setState(old => ({
      neutral: old.neutral + 1,
    }));
  };
  badPlus = () => {
    this.setState(old => ({
      bad: old.bad + 1,
    }));
  };
 countTotalFeedback = (good, neutral, bad) => {
   const total = (good + neutral + bad);
    return total;
  };
  
  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    let positive = 0;
    if (good + neutral + bad !== 0) {
      return positive = Math.floor((good / (good + neutral + bad)) * 100);
   };
  };

  render() {
    return (
      <>
      <Container>
        <FeedbackOptions 
        onGood={this.goodPlus} 
        onNeutral={this.neutralPlus} 
        onBad={this.badPlus} 
        />
      </Container>
      <Container>
        <Statistics 
        onGood={this.state.good} 
        onNeutral={this.state.neutral} 
        onBad={this.state.bad} 
        onTotal={this.countTotalFeedback(this.state.good, this.state.neutral, this.state.bad)} 
        onPositivePercentage={this.countPositiveFeedbackPercentage(this.state.good, this.state.neutral, this.state.bad)}/>
      </Container>
      </>
    );
  }
}

export default App;
