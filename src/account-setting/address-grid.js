import { useState } from 'react';
import usePopup from '../hooks/usePopup';
import AddressForm from './address-form';
import styles from './address-grid.module.css';
import AddressCard from '../address-card';

function AddressGrid() {
  const { openPopup, closePopup } = usePopup();

  let [address, setAddress] = useState([]);

  return (
    <div className={styles.content}>
      {address.length > 0 && (
        <div>
          <div>header</div>
          <div>
            {address.map((a) => (
              <AddressCard data={a} />
            ))}
          </div>
        </div>
      )}
      {address.length == 0 && (
        <>
          <img src='https://constant.myntassets.com/mymyntra/assets/img/no-saved-address.svg'></img>
          <div>
            <h4>SAVE YOUR ADDRESSES NOW</h4>
            <p>Add your home and office addresses and enjoy faster checkout</p>
            <div>
              <button
                className={styles.tara}
                onClick={() =>
                  openPopup({
                    body: (
                      <AddressForm
                        onCancle={closePopup}
                        onSubmit={(a) => {
                          setAddress((as) => [...as, a]);
                          closePopup();
                        }}
                      />
                    ),
                  })
                }
              >
                <b>+ ADD NEW ADDRESS</b>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
export default AddressGrid;
