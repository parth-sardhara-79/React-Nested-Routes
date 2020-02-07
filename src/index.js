import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListStudents from './student-list';
import PageNotFound from './page-not-found';
const routing = (
    <BrowserRouter>
        <Switch>
            <Route exact path="/students-list" component={ListStudents} />
            <Route exact path="/" component={App} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    </BrowserRouter>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
