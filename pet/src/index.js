import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <Home />
    </HashRouter>
    ,
    document.getElementById('root'));
// registerServiceWorker();
