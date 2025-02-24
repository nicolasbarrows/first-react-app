import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Nicolas Barrows</h1>
        <p>
          <i>Personal top albums of 2025</i>
        </p>
        <ul>
          <li>WARNING HIGH CUBE by Moony</li>
          <li>CRACK A SMILE COME ON STAY AWHILE by Abby Holliday</li>
          <li>AMERICAN MOTOR SPORTS (420CC EDITION) by Bilmuri</li>
        </ul>
        <img src={logo} alt="React logo" width="100" height="100" />
      </header>
    </div>
  );
}

export default App;
