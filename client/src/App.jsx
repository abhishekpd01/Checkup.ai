import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import Nav from './widgets/nav.compoment'
import doctorad from "./images/wall.png"
function App() {


  return (
    <div className="App">
      <Nav/>
      <div className="app-container">
      <div className="title">
        <div className="titleh1"><h1>Hello Patient</h1></div>
        <div className="para" style={{fontSize: "20px", padding: "0px 50px" , margin: "20px"}}>
          <span >Welcome to CheckUp.ai
Hope you are Feeling Healthy Today,
If NOT, Let’s take a short Q n A to diagnose you.</span>
        </div>
        <Link to={`/quiz`}>
        <button> Take Quiz</button>
        </Link>
      </div>
      <div className="image">
        <img src={doctorad} alt="hello" />
      </div>
      </div>
      {/* <h1><Link to={`/quiz`}>Quiz Page</Link></h1> */}
    </div>
  );
}

export default App;
