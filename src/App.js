
import './App.css';
import Login from "./Views/login/login"
import { useSelector } from 'react-redux';



function App() {
  const {auth} = useSelector(state => state)

  return (
    <div className="App">

   {!auth.LoggedIn ? <Login/>: <></>}{/* wrapping brackets allows us to make this conditional */}
   
    </div>
  );
}

export default App;
