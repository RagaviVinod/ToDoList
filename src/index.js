import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import HomePage from './components/home/HomePage';

render(<HomePage/>,document.getElementById('app'));