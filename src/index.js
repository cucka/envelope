import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './Buttons';
import './index.css';
// 1 task. Uncomment to see
//import Envelope from './Envelope';
import reportWebVitals from './reportWebVitals';
import SimpleStyle from './SimpleStyle';



/* //1 task. Uncomment to see
const fromPerson = {
  fullName: 'Ivan Dimitrov',
  address:  'ul. Gurko 52',
  city: 'Sofia'//
}

const toPerson = {
  fullName: 'Maria Petkova',
  address:  'ul. 6 September 34',
  city: 'Plovdiv'
}


ReactDOM.render(
  <React.StrictMode>
    <Envelope fromPerson={fromPerson} toPerson={toPerson} />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <React.StrictMode>
    <SimpleStyle />
    <Buttons />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
