import React from 'react';
import { useState } from 'react';
import Input from '../moleclues/input';
import styles from './address-form.module.css';
import axios from 'axios';
import AreaSeleter from '../area-Selector';
import usePopup from '../hooks/usePopup';

function AddressForm({ onCancle }) {
  const { openPopup, closePopup } = usePopup('area');

  const [user, setUser] = useState({
    name: '',
    mobile: '',
    pincode: '',
    state: '',
    address: '',
    locality: '',
    district: '',
  });
  const [district, setDistrict] = useState([]);

  const openDiscritSelected = () => {
    openPopup({
      body: (
        <AreaSeleter
          data={district}
          onCancle={closePopup}
          onConfirm={(d) => setUser((u) => ({ ...u, district: d }))}
        />
      ),
    });
  };

  const handlaChange = (e) => {
    setUser((u) => ({
      ...u,
      [e.target.name]: e.target.value,
    }));
    if (e.target.name === 'pincode') {
      if (e.target.value.length === 6) {
        axios
          .get('https://api.postalpincode.in/pincode/' + e.target.value)
          .then((res) => {
            console.log(res);
            const mySet = new Set();
            res.data[0].PostOffice.forEach((d) => {
              mySet.add(d.District);
            });

            setDistrict(Array.from(mySet));
            setUser((u) => ({
              ...u,
              state: res.data[0].PostOffice[0].State,
            }));
          });
      } else {
        setDistrict([]);
        setUser((u) => ({
          ...u,
          state: '',
        }));
      }
    }
  };
  const handlaSubmit = (e) => {
    e.preventDefult();
    console.log(user);
  };
  console.log(user);
  return (
    <div className={styles.container}>
      <form onSubmit={handlaSubmit}>
        <div className={styles.content}>
          <h4>ADD NEW ADDRESS</h4>
        </div>

        <div className={styles.mandal}>
          <div className={styles.fackbook}>
            <Input
              name='name'
              value={user.name}
              onChange={handlaChange}
              placeholder={'Name*'}
            />
            <Input
              name='mobile'
              value={user.mobile}
              onChange={handlaChange}
              placeholder={'Mobile*'}
            />
          </div>
          <div className={styles.fackbook}>
            <Input
              name='pincode'
              value={user.pincode}
              onChange={handlaChange}
              placeholder={'Pincode*'}
            />
            <Input
              name='state'
              disabled
              value={user.state}
              placeholder={'State*'}
            />
            <Input
              name='address'
              value={user.address}
              onChange={handlaChange}
              placeholder={'Address(House No,Building street,Area)*'}
            />
            <Input
              name='locality'
              value={user.locality}
              onChange={handlaChange}
              placeholder={'Locality/town*'}
            />

            <Input
              name='district'
              value={user.district}
              onClick={openDiscritSelected}
              placeholder={'City/District*'}
            />
          </div>
          <div className={styles.fackbook}>
            <div>
              <p>Type of Address *</p>
              <label className={styles.house}>
                <input
                  name='address-type'
                  value={user.addressType}
                  onChange={handlaChange}
                  type='radio'
                  className={styles.house}
                ></input>
                Home
              </label>
              <label className={styles.bool}>
                <input
                  name='address-type'
                  value={user.addressType}
                  onChange={handlaChange}
                  type='radio'
                  className={styles.house}
                ></input>
                Office
              </label>
            </div>
            <div>
              <p>Is your office open on weekends?</p>
              <div className={styles.conter}>
                <label className={styles.himanshu}>
                  <input
                    name='OpenOnSaturday'
                    value={user.OpenOnSunday}
                    onChange={handlaChange}
                    type='checkbox'
                    className={styles.not}
                  />
                  Open on Saturday
                </label>
                <label className={styles.himanshu}>
                  <input
                    name='OpenOnSunday'
                    value={user.OpenOnSaturday}
                    onChange={handlaChange}
                    type='checkbox'
                    className={styles.not}
                  />
                  Open on Sunday
                </label>
              </div>
              <hr className={styles.abhi}></hr>
              <div className={styles.top}>
                <label className={styles.himanshu}>
                  <input
                    name='MakeThisAsMyDefaultAddress'
                    value={user.MakeThisAsMyDefaultAddress}
                    onChange={handlaChange}
                    type='checkbox'
                    className={styles.not}
                  />
                  Make this as my default address
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['footer-button']}>
          <button type='button' className={styles.button} onClick={onCancle}>
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
