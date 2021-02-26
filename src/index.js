import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/Calculator';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( < div > < h1 > Calculadora < /h1><Calculator></Calculator > < p > Desenvolvido por Isaias < /p> < /div > ,
    document.getElementById('root')
);

reportWebVitals();