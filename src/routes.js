/* global __ENVIRONMENT__ */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import MenuPage from './Pages/menu';
import ConceptsPage from './Pages/concepts';
import ProjectsPage from './Pages/projects';
import AboutPage from './Pages/about';
import ElsewherePage from './Pages/elsewhere';
import NotFoundPage from './Pages/404';
import SecretPage from './Pages/secret';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={MenuPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/concepts" component={ConceptsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/elsewhere" component={ElsewherePage} />
        <Route path="/secret" component={SecretPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);
