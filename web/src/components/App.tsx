import React from 'react';
import {
  RecoilRoot,
} from 'recoil';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Scaffold from './Scaffold';
import Home from './pages/Home';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signin" component={SignIn} />
          <Route path="*">
            <Scaffold>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Scaffold>
          </Route>
        </Switch>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
