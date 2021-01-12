import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Customermain from '../Customer/Customermain';

const Router = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Customermain}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Router;
