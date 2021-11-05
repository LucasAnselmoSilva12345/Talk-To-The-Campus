import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home/index';
import { About } from './pages/About/index';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
    </BrowserRouter>
  );
}
