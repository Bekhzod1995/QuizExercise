import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import {
  Button
} from 'antd';
import {
  NumOfQuestion,
  Panel,
  Question,
  Test
} from '../utils/style';

class Welcome extends Component {
    beginQuiz = () => {
      const { getQuestions, startQuiz } = this.props;
      getQuestions();
      startQuiz();
    };

    render () {
      return (
        <>
         <Panel>
           <Test>
             <Question >
               <NumOfQuestion>Welcome To Quiz</NumOfQuestion>
               <h2 style={{ color: '#933CCC' }}>How well you know the capital cities of countries?</h2>
             </ Question>
             <Button style={{
               backgroundColor: '#dc89ff',
               color: '#933CCC',
               borderColor: '#933CCC',
               fontSize: 20,
               marginTop: 10
             }}
             type="ghost"
             onClick={this.beginQuiz}>
                Start
             </Button>
           </ Test>
         </ Panel>
        </>
      );
    }
}

export default connect(null, actionCreators)(Welcome);
