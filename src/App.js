import logo from './logo.svg';
import './App.css';
import AccountSetting from './Account-setting';
import Pincode from './pincode';
import AreaSeleter from './area-seleter';
import AddressForm from './account-setting/address-form';
import AddressCard from './address-card';
import Address from './address';
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
      {/* <Pincode></Pincode> */}
      {/* <AddressForm></AddressForm> */}
      {/* <AreaSeleter></AreaSeleter> */}
      <AddressCard></AddressCard>
      <Address></Address>
    </div>
  );
}

export default App;
// import Modal from "./Components/Modal";

// const App = () => {
//   return <Modal />;
// };
// export default App;
