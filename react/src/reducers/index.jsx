import { handleActions } from 'redux-actions';
import * as actions from '../actions';
import { combineReducers } from 'redux';
import _ from 'lodash';

const questionHandler = handleActions({
  [actions.loadingQuestionsSuccess] (state, { payload }) {
    const { questionBank, cities } = payload;
    const randomly10PickedCountries = _.shuffle(_.sampleSize(questionBank, 10));
    let randomly3Picked;
    const questionsToShowToUsers = randomly10PickedCountries.map((country, index) => {
      randomly3Picked = _.sampleSize(_.sampleSize(cities, 4).filter(city => city !== country.сorrect_Answer), 3);
      return {
        ...country,
        answers: _.shuffle([...randomly3Picked, country.сorrect_Answer]),
        id: index
      };
    });

    return {
      ...state,
      data: questionsToShowToUsers
    };
  },
  [actions.loadingQuestionsFailed] (state) {
    return '';
  },
  [actions.startQuizSuccess] (state) {
    return {
      ...state,
      quizState: 'started'
    };
  },
  [actions.loadingQuestionsFailed] (state) {
    return '';
  },
  [actions.addAnswersSuccess] (state, { payload }) {
    const { userChoices } = state;
    const { value, current } = payload;
    userChoices.splice(current, 1, value[0]);

    return {
      ...state,
      userChoices: userChoices
    };
  },
  [actions.addAnswersFailed] (state) {
    return {
      ...state
    };
  },
  [actions.restartQuizSuccess] (state) {
    return {
      quizState: 'not started',
      wrongAnswers: 0,
      correctAnswers: 0,
      userChoices: []
    };
  },
  [actions.quizFinishedSuccess] (state) {
    const { userChoices } = state;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    state.data.map((questionBank, index) => {
      if (questionBank.сorrect_Answer === userChoices[index]) {
        correctAnswers = correctAnswers + 1;
      } else {
        wrongAnswers = wrongAnswers + 1;
      }
    });
    return {
      ...state,
      quizState: 'finished',
      wrongAnswers,
      correctAnswers
    };
  },
  [actions.quizFinishedFailed] (state) {
    return {
      ...state
    };
  }
}, {
  quizState: 'not started',
  wrongAnswers: 0,
  correctAnswers: 0,
  userChoices: []
});

export default combineReducers({
  questionHandler
});
