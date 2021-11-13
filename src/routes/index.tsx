import {
  BrowserRouter as Router,
  Route,
  Routes as SwitchRouter
} from 'react-router-dom';
import { Event as EventPage } from '../pages/event';
import { Home as HomePage } from '../pages/home';

export function Routes() {
  return (
    <Router>
      <SwitchRouter>
        <Route path="/" element={<HomePage />} />
        <Route path="/event/:id" element={<EventPage />} />
      </SwitchRouter>
    </Router>
  );
}
