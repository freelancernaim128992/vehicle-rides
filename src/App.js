import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import DestinationContainer from "./components/DestinationContainer/DestinationContainer";
import NoMatch from "./components/NoMatch/NoMatch";
import LogIn from "./components/LogIn/LogIn";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/destination/:vehicleName">
          <DestinationContainer />
        </Route>
        <Route path="/login">
          <LogIn />
        </Route>
        <Route path="/registration">
          <RegistrationPage />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      
    </Router>
  );
}

export default App;
