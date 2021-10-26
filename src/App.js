import React, { Component } from 'react';
import Container from './components/Container/Container';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  totalPlus = (e) => {
    const name = e.target.name;
    this.setState((old) => ({
      [name]: old[name] + 1
    }))
  }

 countTotalFeedback = (good, neutral, bad) => {
   const total = (good + neutral + bad);
    return total;
  };

  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    if (good + neutral + bad !== 0) {
      return Math.floor((good / (good + neutral + bad)) * 100);
   };
  };

  render() {
    const {good, neutral, bad} = this.state
    return (
      <>
            <Container>
        <FeedbackOptions options={["good", "neutral", "bad"]} onLeaveFeedback={this.totalPlus}/>
      </Container>
      {this.countTotalFeedback(good, neutral, bad) === 0 ? <Container><Notification message="No feedback given (ಥ﹏ಥ)"/></Container> : 
      <Container>
        <Statistics 
        onGood={good} 
        onNeutral={neutral} 
        onBad={bad} 
        onTotal={this.countTotalFeedback(good, neutral, bad)} 
        onPositivePercentage={this.countPositiveFeedbackPercentage(good, neutral, bad)}/>
      </Container> }
      </>
    );
  }
}

export default App;
