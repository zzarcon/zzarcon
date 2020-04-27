import * as React from 'react';
import {GHCorner} from 'react-gh-corner';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {AppWrapper, GlobalStyles} from './styled';
import {Movies} from './routes/movies'
import { Home } from './routes/home';

const repoUrl = 'https://github.com/zzarcon/zzarcon';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <AppWrapper>
        <GlobalStyles />
        <GHCorner openInNewTab href={repoUrl} />
      </AppWrapper>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App