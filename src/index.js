import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListStudents from './student-list';
import PageNotFound from './page-not-found';
const routing = (
  <BrowserRouter>
    <Switch>
      <Route path="/students-list/:id/" component={ListStudents} />
      <Route path="/students-list" component={ListStudents} />
      <Route exact path="/" render={() => <Redirect to="/students-list" />} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
