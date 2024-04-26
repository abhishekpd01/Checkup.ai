import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import Nav from './widgets/nav.compoment'
function App() {


  return (
    <div className="App">
      <Nav/>
      DashBoard
      <h1><Link to={`/quiz`}>Quiz Page</Link></h1>
    </div>
  );
}

export default App;
