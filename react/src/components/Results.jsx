import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Radio,
  Card,
  Button,
  Row,
  Col
} from 'antd';
import * as actionCreators from '../actions';

const mapStateToProps = state => ({
  questions: state.questionHandler.data,
  wrongAnswers: state.questionHandler.wrongAnswers,
  correctAnswers: state.questionHandler.correctAnswers,
  userChoices: state.questionHandler.userChoices
});

@connect(mapStateToProps, actionCreators)
class Results extends Component {
  render () {
    const {
      questions,
      correctAnswers,
      wrongAnswers,
      userChoices
    } = this.props;

    const handleClick = () => {
      const { restartQuiz } = this.props;
      restartQuiz();
    };
    const usersWrongAnswers = (question, index, choice) => {
      if (question.сorrect_Answer !== userChoices[index] && choice === userChoices[index]) {
        return { color: 'red', padding: '10px', textDecoration: 'line-through', fontSize: 16 };
      } else if (question.сorrect_Answer === choice) {
        return { color: '#1890ff', padding: '10px', textDecoration: 'underline', fontSize: 16 };
      }
      return { padding: '10px', fontSize: 16, color: '#933CCC' };
    };
    const displayQuestions = () => {
      const questionBank = questions.map((question, index) => {
        return (
            <>
              <Radio.Group value={question.сorrect_Answer} key={question.id}>
                <Card headStyle={{ color: '#933CCC' }}
                  title={question.question}
                  style={{
                    width: 350,
                    height: 210,
                    marginLeft: 110,
                    marginTop: 20
                  }} >
                  <Radio
                    key={question.answers[0]}
                    value={question.answers[0]}
                    style={usersWrongAnswers(question, index, question.answers[0])}>
                    {question.answers[0]}
                  </Radio>
                  <Radio
                    key={question.answers[1]}
                    value={question.answers[1]}
                    style={usersWrongAnswers(question, index, question.answers[1])}>
                    {question.answers[1]}
                  </Radio>
                  <Radio
                    key={question.answers[2]}
                    value={question.answers[2]}
                    style={usersWrongAnswers(question, index, question.answers[2])}>
                    {question.answers[2]}
                  </Radio>
                  <Radio
                    key={question.answers[3]}
                    value={question.answers[3]}
                    style={usersWrongAnswers(question, index, question.answers[3])}>
                    {question.answers[3]}
                  </Radio>
                </Card>
              </Radio.Group>
            </>
        );
      });
      return questionBank;
    };
    return (
      <>
      <Row>
        <Col offset={10}>
          <Card style={{ marginTop: 20, display: 'flex', justifyContent: 'center', width: 350 }}>
            <h2 style={{ color: '#933CCC' }}>Correct Answer is:
              <span style={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'green',
                marginLeft: '10px'
              }}>{correctAnswers}
              </span>
            </h2>
            <h2 style={{
              color: '#933CCC'
            }}>
              Wrong Answer is:
              <span style={{
                fontWeight: 'bold',
                fontSize: '20px',
                color: 'red',
                marginLeft: '10px'
              }}>{wrongAnswers}
              </span>
            </h2>
            <br/>
            <Button
              style={{
                backgroundColor: '#dc89ff',
                color: '#933CCC',
                borderColor: '#933CCC'
              }}
              type="ghost" onClick={handleClick}>
                Begin Again
            </Button>
          </Card>
        </Col>
      </Row>
        <br/>
        {displayQuestions()}
      </>
    );
  }
}

export default Results;
