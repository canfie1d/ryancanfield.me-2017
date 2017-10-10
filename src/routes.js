import React from 'react';
import { Route, Switch } from 'react-router';

import App from './App';
import MenuPage from './Pages/menu';
import ConceptsPage from './Pages/concepts';
import ProjectsPage from './Pages/projects';
import AboutPage from './Pages/about';
import ElsewherePage from './Pages/elsewhere';
import NotFoundPage from './Pages/404';
import SecretPage from './Pages/secret';

export default (
  <App>
    <Switch>
      <Route path="/" exact component={MenuPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/concepts" component={ConceptsPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/elsewhere" component={ElsewherePage} />
      <Route path="/secret" component={SecretPage} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </App>
);
