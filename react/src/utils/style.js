import styled from 'styled-components';

export const Panel = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
position: relative;
padding: 160px 15px;
`;

export const Test = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
position: relative;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
max-width: 762px;
width: 100%;
max-height: 546px;
height: 100%;
border: 3px solid #9c4cac;
border-radius: 15px;
padding: 10px 0 45px 0;

&:before {
  content: "";
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  border-radius: 15px;
  opacity: 0.8;
  z-index: 0;
}
`;

export const Question = styled.div`
position: relative;
margin-top: 62px;
font-size: 16px;
padding: 40px 40px 25px 40px;
text-align: center;
border: 1px solid #dccee6;
border-radius: 5px;
max-width: 700px;
height: auto;
z-index: 1;
`;

export const NumOfQuestion = styled.span`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
position: absolute;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
color: #5a027d;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
top: 0;
left: 50%;
height: 38px;
padding: 0 40px;
background-color: #dc89ff;
border-radius: 25px;
border: 1px solid #933CCC;
`;

export const Solution = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-flow: row wrap;
flex-flow: row wrap;
max-width: 592px;
width: 100%;
z-index: 1;
`;

export const Submit = styled.button`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
margin-top: 35px;
z-index: 1;
`;
