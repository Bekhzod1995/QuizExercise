import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import Quiz from './components/Quizwrappear';
import Welcome from './components/WelcomePage';
import Results from './components/Results';

const mapStateToProps = state => ({
  quizState: state.questionHandler.quizState
});

@connect(mapStateToProps, actionCreators)
class App extends Component {
  checkWelcomeOrStartquiz = () => {
    const { quizState } = this.props;
    if (quizState === 'started') {
      return <Quiz />;
    } else if (quizState === 'finished') {
      return <Results />;
    } else {
      return <Welcome />;
    }
  };

  render () {
    return this.checkWelcomeOrStartquiz();
  }
}

export default App;
