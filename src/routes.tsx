import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home/index';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
}
