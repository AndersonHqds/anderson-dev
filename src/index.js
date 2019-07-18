import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/home'

const Routes = props => {

    const [ switchIsChecked, handleSwitch ] = useState(false)
    
    return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header handleSwitch={ (isSwitch) => { handleSwitch(isSwitch) } } />
        <Switch>       
            <Route exact path="/" render={ () => (<Home switchIsChecked={switchIsChecked} />)} />
        </Switch>
        <Footer switchIsChecked={switchIsChecked} />
    </BrowserRouter>)
}

ReactDOM.render(
    <Routes />, 
    document.getElementById('root')
);

