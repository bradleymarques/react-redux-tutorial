console.log('main.js loaded through bundle.js')

import React from 'react';
import ReactDom from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
});
