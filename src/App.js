import logo from "./logo.svg";
import "./App.css";
import List2 from "./product-filter/List2";
import ProductFiltetDetail from "./product-filter/product-filter-detail";
import Hook from "./hook";
import Signup from "./signup";
import AccountSetting from "./Account-setting";
import Foam from "./foam";

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

      {/* <Signup></Signup> */}
      {/* <AccountSetting></AccountSetting> */}
      <Foam></Foam>
    </div>
  );
}

export default App;
