import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home/index';
import { About } from './pages/About/index';
import { Mobile } from './pages/Mobile/index';
import { Documentation } from './pages/Documentation/index';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/app-mobile" exact component={Mobile} />
      <Route path="/documentation" exact component={Documentation} />
    </BrowserRouter>
  );
}
