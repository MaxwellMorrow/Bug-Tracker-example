import "./App.css";
import Login from "./Views/login/login";
import { useSelector } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Views/sidebar/sidebar";

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
          </>
        )}
        {/* wrapping brackets allows us to make this conditional */}
      </div>
    </Router>
  );
}

export default App;
