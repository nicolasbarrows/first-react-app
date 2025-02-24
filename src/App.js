import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. this is a test.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <h1>Nicolas Barrows</h1>
        <p>\Personal top albums of 2025</p>
        <ul>
          <li>WARNING HIGH CUBE by Moony</li>
          <li>CRACK A SMILE COME ON STAY AWHILE by Abby Holliday</li>
          <li>AMERICAN MOTOR SPORTS (420CC EDITION) by Bilmuri</li>
        </ul>
      </body>
    </div>
  );
}

export default App;
