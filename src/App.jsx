import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppProvider } from 'frontend-platform-vi/react';

import Footer from 'frontend-component-footer-vi';
import Header from 'frontend-component-header-vi';

import { routePath } from 'data/constants/app';
import store from 'data/store';
import GradebookPage from 'containers/GradebookPage';
import './App.scss';

const App = () => (
  <AppProvider store={store}>
    <Router>
      <div>
        <Header />
        <main>
          <Switch>
            <Route
              exact
              path={routePath}
              component={GradebookPage}
            />
          </Switch>
        </main>
        <Footer logo={process.env.LOGO_POWERED_BY_OPEN_EDX_URL_SVG} />
      </div>
    </Router>
  </AppProvider>
);

export default App;
