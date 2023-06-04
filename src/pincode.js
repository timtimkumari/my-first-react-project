import { useEffect, useState } from 'react';
import pincode from './pincode.css';
import axios from 'axios';

function Pincode() {
  const [myData, setMyData] = useState(null);
  const [state, setState] = useState('');

  // NOTE: using promises

  useEffect(() => {
    axios.get('https://api.postalpincode.in/pincode/813211').then((res) => {
      const mySet = new Set();
      res.data[0].PostOffice.forEach((d) => {
        mySet.add(d.District);
      });

      setMyData(mySet);
      setState(res.data[0].PostOffice[0].State);
    });
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
      <div className='grid'>
        <div className='card'>
          <h2>{state}</h2>
        </div>
        {myData &&
          Array.from(myData).map((s) => {
            return (
              <div className='card'>
                <h2>{s}</h2>
              </div>
            );
          })}
      </div>
    </>
  );
}
export default Pincode;
