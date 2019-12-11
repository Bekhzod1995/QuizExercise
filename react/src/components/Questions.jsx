import React, { Component } from 'react';
import {
  Button,
  Form,
  Radio
} from 'antd';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import {
  NumOfQuestion,
  Panel,
  Question,
  Test
} from '../utils/style';

const radioStyle = {
  padding: '10px',
  fontSize: 16,
  color: '#933CCC'
};

const mapStateToProps = state => ({
  questions: state.questionHandler.data,
  userChoices: state.questionHandler.userChoices
});

@connect(mapStateToProps, actionCreators)
class Questions extends Component {
  componentDidMount () {
    this.props.form.validateFields();
  }

  state = {
    current: 0
  }

  handleClick = e => {
    e.preventDefault();
    const { addAnswers } = this.props;
    const { current } = this.state;
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const value = Object.values(values);
        await addAnswers({ value, current });
        await this.next();
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {
      addAnswers,
      quizFinished,
      userChoices,
      errorMessage
    } = this.props;
    const { current } = this.state;
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const value = Object.values(values);
        if (value[0] === 'undefined' || userChoices.includes('undefined')) {
          errorMessage();
        } else {
          await addAnswers({ value, current });
          await quizFinished();
        }
      }
    });
  };

  next () {
    this.props.form.validateFields();
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev () {
    this.props.form.validateFields();
    const current = this.state.current - 1;
    this.setState({ current });
  }


  drawRadioGroupButton = () => {
    const { getFieldDecorator } = this.props.form;
    const { current } = this.state;
    const { questions, userChoices } = this.props;

    return (
      <>
        <Form.Item>
          {getFieldDecorator(`question${current}`, {
            initialValue: `${userChoices[current]}`,
            rules: [
              {
                required: true,
                message: 'Please choose an answer'
              }
            ]
          })(
            <Radio.Group>
              <h2 style={{ textAlign: 'center', color: '#933CCC' }}>{questions[current].question}</h2>
              <Radio
                value={questions[current].answers[0]}
                style={radioStyle}>
                {questions[current].answers[0]}
              </Radio>
              <Radio
                value={questions[current].answers[1]}
                style={radioStyle}>
                {questions[current].answers[1]}
              </Radio>
              <Radio
                value={questions[current].answers[2]}
                style={radioStyle}>
                {questions[current].answers[2]}
              </Radio>
              <Radio
                value={questions[current].answers[3]}
                style={radioStyle}>
                {questions[current].answers[3]}
              </Radio>
            </Radio.Group>
          )}
        </Form.Item>
      </>
    );
  };


  render () {
    const { current } = this.state;
    const { questions } = this.props;
    return (
      <>
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Panel>
          <Test>
            <Question >
              <NumOfQuestion>Question {current + 1} out of 10</NumOfQuestion>
              {this.drawRadioGroupButton()}
              <div className="steps-action">
                {current < questions.length - 1 && (
                  <Form.Item style={{ marginTop: '20px' }} >
                    <Button style={{
                      backgroundColor: '#dc89ff',
                      color: '#933CCC',
                      borderColor: '#933CCC'
                    }}
                    type="ghost"
                    onClick={this.handleClick}>
                    Next
                    </Button>
                  </Form.Item>
                )}
                {current === questions.length - 1 && (
                  <Button style={{
                    marginTop: '24px',
                    backgroundColor: '#dc89ff',
                    color: '#933CCC',
                    borderColor: '#933CCC'
                  }} type="primary"
                  htmlType="submit">
                  Done
                  </Button>
                )}
                {current > 0 && (
                  <Button style={{
                    marginLeft: 8,
                    marginTop: '24px',
                    color: '#933CCC',
                    borderColor: '#933CCC'
                  }}
                  onClick={() => this.prev()}>
                  Previous
                  </Button>
                )}
              </div>
            </ Question>
          </ Test>
        </ Panel>
      </Form>
      </>
    );
  }
}

const WrappedSteps = Form.create()(Questions);
export default WrappedSteps;
