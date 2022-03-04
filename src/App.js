import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Member_login from './pages/member/Member_login';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/member_login">
            <Member_login/>
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
