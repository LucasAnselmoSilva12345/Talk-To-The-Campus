import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home/index';
import { About } from './pages/About/index';
import { Contact } from './pages/Contact/index';
import { Mobile } from './pages/Mobile/index';
import { Documentation } from './pages/Documentation/index';
import { License } from './pages/License/index';
import { Team } from './pages/Team/index';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/app-mobile" exact component={Mobile} />
      <Route path="/documentation" exact component={Documentation} />
      <Route path="/license" exact component={License} />
      <Route path="/team" exact component={Team} />
    </BrowserRouter>
  );
}
