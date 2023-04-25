import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";
import Beauty from "./beauty";
import Instagram from "./Instagram";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Image></Image>
      <Beauty tn={4}></Beauty>
      <Beauty tn={3}></Beauty>
      <Instagram></Instagram>
    </div>
  );
}

export default App;
