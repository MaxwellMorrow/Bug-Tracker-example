import "./App.css";
import Login from "./Views/login/login";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import {Switch , Route} from "react-router-dom"
import Sidebar from "./Views/sidebar/sidebar";
import ViewBugPage from "./Views/pages/viewBugs";

function App() {
  const { auth } = useSelector((state) => state);

  return (
    <Router>
      <div className="App">
        {!auth.LoggedIn ? (
          <Login />
        ) : (
          <>
            <Sidebar />
            <Switch>
              <Route path="/viewbugs">
                <ViewBugPage />
              </Route>
            </Switch>
        
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
