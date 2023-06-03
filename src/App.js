import logo from './logo.svg';
import './App.css';
import AccountSetting from './Account-setting';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>

      {/* <Signup></Signup> */}
      <AccountSetting></AccountSetting>
    </div>
  );
}

export default App;
// import Modal from "./Components/Modal";

// const App = () => {
//   return <Modal />;
// };
// export default App;
