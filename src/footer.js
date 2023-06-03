import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.css';
function Footer() {
  return (
    <div className='footer_container'>
      <h2>Customer Pages</h2>
      <ul>
        <p>070-2707-1234</p>
        <p>Weekdays 09:30 - 18:00</p>
        <p>Weekends 12:00 -13:00 </p>
        <p>Holidays: Sat,Sun,National holiday</p>
      </ul>
      <div className='footer_content'>
        <h2>Shippment Info</h2>
        <ul>
          <p>Track Shipping Location</p>
          <p>Refund/exchange address</p>
          <p>Inchone Gaeyanggu Gesangdong</p>
          <p>GeyangBG #1117</p>
          <p>(Please make sure to use Post Office Parcel service)</p>
        </ul>
      </div>
      <div className='nutan'>
        <h2>Company</h2>
        <ul>
          <p>Company</p>
          <p>Notion/Event</p>
        </ul>
      </div>
      <h2>Social media</h2>
      <div className='icon_container'>
        <div className='icon'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'></svg>
        </div>
      </div>
    </div>
  );
}
export default Footer;
