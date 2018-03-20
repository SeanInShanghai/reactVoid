import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import Initial from './Initial';
import {HashRouter} from 'react-router-dom';
import {Switch, Route, Link} from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        {/*<Initial />*/}
{/*        <div>
            <Route exact path="/" component={Initial} />
            <Route path="/home" component={Home} />
        </div>*/}
        <Home/>
    </HashRouter>
    ,
    document.getElementById('root'));
// registerServiceWorker();
