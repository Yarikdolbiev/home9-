import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { UserProvider } from "./Pages/UserContext";

const Home = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
    </div>
  );
};

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/" component={LoginPage} />
        </Switch>
      </Router>
    </UserProvider>
  );
};

export default App;
