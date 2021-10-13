import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Watch from './pages/Watch';
import Home from './pages/Home/';

export default () => {
  
  
  return (
    // header, destaque, lista
    <BrowserRouter>
      
          <Switch>
          <Route exact path="/" >
              <Home/>
            </Route>
            <Route path="/watch/:id" >
              <Watch/>
            </Route>
          </Switch>
    </BrowserRouter>
  )
}



