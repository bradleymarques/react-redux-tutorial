console.log('main.js loaded through bundle.js')

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function () {
  const placeholderDOMElement = document.getElementById('mount');

  ReactDOM.render(
    React.createElement(Counter),
    placeholderDOMElement
  );
});
