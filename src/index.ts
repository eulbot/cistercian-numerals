import React from 'react';
import ReactDom from 'react-dom';
import { App } from './app';

const element = React.createElement(App);
const container = document.querySelector('#cistercian-numerals');

ReactDom.render(element, container);