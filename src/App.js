import logo from "./logo.svg";
import "./App.css";
import Image from "./Image";
import Beauty from "./beauty";
import Instagram from "./Instagram";
import Card from "./Card";
import Apple from "./Apple";
import Card2 from "./Card2";
import Star from "./Star";
import List from "./List";
import Router from "./Router";
import List2 from "./List2";
import Counter from "./Counter";

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
      <Counter></Counter>
    </div>
  );
}

export default App;
