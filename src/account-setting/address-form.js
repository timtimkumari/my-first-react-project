import React from 'react';
import { useState } from 'react';
import Input from '../moleclues/input';
import styles from './address-form.module.css';
import axios from 'axios';
import AreaSeleter from '../area-Selector';
import usePopup from '../hooks/usePopup';

function AddressForm({ onCancle, onSubmit }) {
  const { openPopup, closePopup } = usePopup();

  const [address, setAddress] = useState({
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
          onConfirm={(d) => {
            setAddress((u) => ({ ...u, district: d }));
            closePopup();
          }}
        />
      ),
    });
  };

  const handleChange = (e) => {
    if (
      e.target.name === 'openOnSaturday' ||
      e.target.name === 'openOnSunday' ||
      e.target.name === 'default'
    ) {
      setAddress((u) => ({
        ...u,
        [e.target.name]: e.target.checked,
      }));
    } else {
      setAddress((u) => ({
        ...u,
        [e.target.name]: e.target.value,
      }));
    }
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
            setAddress((u) => ({
              ...u,
              state: res.data[0].PostOffice[0].State,
            }));
          });
      } else {
        setDistrict([]);
        setAddress((u) => ({
          ...u,
          state: '',
        }));
      }
    }
  };
  const handlaSubmit = (e) => {
    e.preventDefault();
    onSubmit(address);
  };

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
              value={address.name}
              onChange={handleChange}
              placeholder={'Name*'}
            />
            <Input
              name='mobile'
              value={address.mobile}
              onChange={handleChange}
              placeholder={'Mobile*'}
            />
          </div>
          <div className={styles.fackbook}>
            <Input
              name='pincode'
              value={address.pincode}
              onChange={handleChange}
              placeholder={'Pincode*'}
            />
            <Input
              name='state'
              disabled
              value={address.state}
              placeholder={'State*'}
            />
            <Input
              name='address'
              value={address.address}
              onChange={handleChange}
              placeholder={'Address(House No,Building street,Area)*'}
            />
            <Input
              name='locality'
              value={address.locality}
              onChange={handleChange}
              placeholder={'Locality/town*'}
            />

            <Input
              name='district'
              value={address.district}
              onClick={openDiscritSelected}
              placeholder={'City/District*'}
            />
          </div>
          <div className={styles.fackbook}>
            <div>
              <p>Type of Address *</p>
              <label className={styles.house}>
                <input
                  name='addressType'
                  value='home'
                  checked={address.addressType === 'home'}
                  onChange={handleChange}
                  type='radio'
                  className={styles.house}
                ></input>
                Home
              </label>
              <label className={styles.bool}>
                <input
                  name='addressType'
                  value='office'
                  checked={address.addressType === 'office'}
                  onChange={handleChange}
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
                    name='openOnSaturday'
                    checked={address.openOnSaturday}
                    onChange={handleChange}
                    type='checkbox'
                    className={styles.not}
                  />
                  Open on Saturday
                </label>
                <label className={styles.himanshu}>
                  <input
                    name='openOnSunday'
                    checked={address.openOnSunday}
                    onChange={handleChange}
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
                    name='default'
                    checked={address.default}
                    onChange={handleChange}
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
          <button type='submit' className={styles.tag}>
            <b className={styles.two}>SAVE</b>
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddressForm;
