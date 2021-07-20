import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Main from './components/Main';
import IMG1 from './components/img1';
import IMG2 from './components/img2';
import FOOTER from './components/footer';
import HEADER from './components/header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HEADER />
          <Main />
          <IMG1 />
          <IMG2 />
          <FOOTER />
        </Route>
        </Switch>
    </Router>
  );
}

export default App;

