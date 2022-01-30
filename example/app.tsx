import * as React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {AppWrapper, GlobalStyles} from './styled';
import {Movies} from './routes/movies'
import Cali from './routes/cali'
import { Home } from './routes/home';

const App = () => {
  return (
    <Router>
      <AppWrapper>
        <GlobalStyles />
      </AppWrapper>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/cali">
          <Cali />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App