import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { CounterCustomHook } from './components/use-state/CounterCustomHook';

ReactDOM.render(
    <CounterCustomHook />,
    document.getElementById('root')
);