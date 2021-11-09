import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home/index';
import { About } from './pages/About/index';
import { Mobile } from './pages/Mobile/index';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/app-mobile" exact component={Mobile} />
    </BrowserRouter>
  );
}
