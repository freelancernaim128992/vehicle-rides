import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import DestinationContainer from "./components/DestinationContainer/DestinationContainer";
import NoMatch from "./components/NoMatch/NoMatch";
import LogIn from "./components/LogIn/LogIn";
import RegistrationPage from "./components/RegistrationPage/RegistrationPage";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/destination/:vehicleName">
            <DestinationContainer />
          </PrivateRoute>
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
    </UserContext.Provider>
  );
}

export default App;
