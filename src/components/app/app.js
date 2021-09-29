import React from 'react';
import {MainPage, CartPage, ItemPage} from '../pages';
import AppHeader from '../app-header';
// import WithRestoService from '../hoc';

import Background from './food-bg.jpg';
import { Switch, Route } from 'react-router-dom';

const App = () => {
    // console.log(RestoService.getMenuItems());
    // getMenuItems()
    // .then( menu => console.log(menu))
    // .catch(error => {console.log('Did error')})
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
             <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/cart' exact component={CartPage}/>
                <Route path='/:id' component={ItemPage}/>                 
            </Switch>            
        </div>
    )
}

export default App;