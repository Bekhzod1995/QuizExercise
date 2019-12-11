import { createAction } from 'redux-actions';
import { notification } from 'antd';
import { questionBank, cities } from '../data/';

export const loadingQuestionsFailed = createAction('QUESTIONS_LOADING_FAILED');
export const loadingQuestionsSuccess = createAction('QUESTIONS_LOADING_SUCCESS');
export const startQuizSuccess = createAction('QUIZ_START_SUCCESS');
export const startQuizFailed = createAction('QUIZ_START_FAILED');
export const addAnswersSuccess = createAction('ANSWERS_ADD_SUCCESS');
export const addAnswersFailed = createAction('ANSWERS_ADD_FAILED');
export const quizFinishedSuccess = createAction('QUIZ_FINISHED_SUCCESS');
export const quizFinishedFailed = createAction('QUIZ_FINISHED_FAILED');
export const restartQuizSuccess = createAction('QUIZ_RESTART_SUCCESS');
export const restartQuizFailed = createAction('QUIZ_RESTART_FAILED');

export const errorMessage = () => {
  notification.error({
    message: `No answer for quetion/questions`,
    description: 'Please fill out every question, don\'t leave it empty'
  });
};

export const getQuestions = () => async (dispatch) => {
  try {
    await dispatch(loadingQuestionsSuccess({ questionBank, cities }));
  } catch (error) {
    dispatch(loadingQuestionsFailed());
  }
};

export const startQuiz = () => async (dispatch) => {
  try {
    await dispatch(startQuizSuccess());
  } catch (error) {
    dispatch(startQuizFailed);
  }
};

export const addAnswers = (answer) => async (dispatch) => {
  try {
    await dispatch(addAnswersSuccess(answer));
  } catch (error) {
    console.log(error);
    dispatch(addAnswersFailed());
  }
};

export const quizFinished = () => async (dispatch) => {
  try {
    await dispatch(quizFinishedSuccess());
  } catch (error) {
    console.log(error);
    dispatch(quizFinishedFailed());
  }
};

export const restartQuiz = () => async (dispatch) => {
  try {
    await dispatch(restartQuizSuccess());
    await dispatch(getQuestions());
    await dispatch(startQuiz());
  } catch (error) {
    dispatch(restartQuizFailed());
  }
};

