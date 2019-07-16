import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Home from './pages/home'

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Header />
            <Route exact path="/" component={Home} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);

