import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
// import WithRestoService from '../hoc';

import Background from './food-bg.jpg';
import { Switch, Route } from 'react-router';

const App = () => {
    // console.log(RestoService.getMenuItems());
    // getMenuItems()
    // .then( menu => console.log(menu))
    // .catch(error => {console.log('Did error')})
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
             <Switch>
                <Route path='/' component={MainPage} exact/>
                <Route path='/cart' component={CartPage}/>                
            </Switch>            
        </div>
    )
}

export default App;