import React from 'react';
import { useState } from 'react';
import Input from '../moleclues/input';
import styles from './address-form.module.css';
function AddressForm() {
  const [user, setUser] = useState({
    name: '',
    mobile: '',
    pincode: '',
    state: '',
    address: '',
    locality: '',
    city: '',
  });

  const handlaChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
    console.log(e);
  };
  const handlaSubmit = (e) => {
    e.preventDefult();
    console.log(user);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handlaSubmit}>
        <div className={styles.content}>
          <h4>ADD NEW ADDRESS</h4>
        </div>

        <div className={styles.mandal}>
          <div className={styles.fackbook}>
            <Input name='name' placeholder={'Name*'} />
            <Input name='mobile' placeholder={'Mobile*'} />
          </div>
          <div className={styles.fackbook}>
            <Input
              name='pincode'
              onChange={handlaChange}
              placeholder={'Pincode*'}
            />
            <Input name='state' placeholder={'State*'} />
            <Input
              name='address'
              placeholder={'Address(House No,Building street,Area)*'}
            />
            <Input name='locality' placeholder={'Locality/town*'} />
            <Input name='city' placeholder={'City/District*'} />
          </div>
          <div className={styles.fackbook}>
            <p>Type of Address *</p>
            <label className={styles.house}>
              <input
                name='address-type'
                type='radio'
                className={styles.house}
              ></input>
              Home
            </label>
            <label className={styles.bool}>
              <input
                name='address-type'
                type='radio'
                className={styles.house}
              ></input>
              Office
            </label>
            <p>Is your office open on weekends?</p>
            <div>
              <div>
                <label className={styles.himanshu}>
                  <input type='checkbox' className={styles.not} />
                  Open on Saturday
                </label>
              </div>
              <div>
                <label className={styles.himanshu}>
                  <input type='checkbox' className={styles.not} />
                  Open on Sunday
                </label>
              </div>
              <hr className={styles.abhi}></hr>
              <div className={styles.top}>
                <label className={styles.himanshu}>
                  <input type='checkbox' className={styles.not} />
                  Make this as my default address
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.fackbook + ' ' + styles['footer-button']}>
          <button className={styles.button}>
            <b>CANCEL</b>
          </button>
          <button className={styles.tag}>
            <b className={styles.two}>SAVE</b>
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddressForm;
