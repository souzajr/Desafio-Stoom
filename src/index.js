import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import index from './components/index';
import firstStep from './components/firstStep';
import secondStep from './components/secondStep';
import thirdStep from './components/thirdStep';
import confirm from './components/confirm';
import * as serviceWorker from './services/serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <CookiesProvider>
        <Route path="/" exact component={index} />
        <Route path="/primeiro-passo" exact component={firstStep} />
        <Route path="/segundo-passo" exact component={secondStep} />
        <Route path="/terceiro-passo" exact component={thirdStep} />
        <Route path="/confirmar" exact component={confirm} />
      </CookiesProvider>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.register();
