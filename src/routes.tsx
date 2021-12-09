import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from './pages/Home/index';
import { About } from './pages/About/index';
import { Team } from './pages/Team/index';
import { Contact } from './pages/Contact/index';
import { Mobile } from './pages/Mobile/index';
import { PrivacyPolicy } from './pages/PrivacyPolicy/index';
import { Terms } from './pages/Terms/index';
import { License } from './pages/License/index';
import { ContributePlatform } from './pages/ContributePlatform/index';

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/about" exact component={About} />
      <Route path="/contact" exact component={Contact} />
      <Route path="/team" exact component={Team} />
      <Route path="/app-mobile" exact component={Mobile} />
      <Route path="/privacy-policy" exact component={PrivacyPolicy} />
      <Route path="/terms" exact component={Terms} />
      <Route path="/license" exact component={License} />
      <Route path="/contribute" exact component={ContributePlatform} />
    </BrowserRouter>
  );
}
