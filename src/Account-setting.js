import { useState } from 'react';
import styles from './Account-setting.module.css';
import AddressForm from './account-setting/address-form';
import usePopup from './hooks/usePopup';
function AccountSetting() {
  const { openPopup } = usePopup();

  return (
    <div className={styles.car}>
      <div className={styles.model}>
        <h1>Account</h1>
        <p>Timtim kumari</p>
      </div>
      <div className={styles.abhi}>
        <div className={styles.over}>
          <div className={styles.himanshu}>
            <p className={styles.hook}>Overview</p>
          </div>
          <div className={styles.himanshu}>
            <p className={styles.botal}>ORDERS</p>
            <p className={styles.hook}>Orders & Returns</p>
          </div>
          <div className={styles.himanshu}>
            <p className={styles.botal}>CREDITS</p>
            <p className={styles.hook}>Coupons</p>
            <p className={styles.hook}>Myntra Credit</p>
            <p className={styles.hook}>MynCash</p>
          </div>
          <div className={styles.himanshu}>
            <p className={styles.botal}>ACCOUNT</p>
            <p className={styles.hook}>Profile</p>
            <p className={styles.hook}>Saved Cards</p>
            <p className={styles.hook}>Saved VPA</p>
            <p className={styles.top}>Addressses</p>
            <p className={styles.hook}>Myntra Insider</p>
          </div>
          <div className={styles.holl}>
            <p className={styles.botal}>LEGAL</p>
            <p className={styles.hook}>Terms of Use</p>
            <p className={styles.hook}>Privacy Policy</p>
          </div>
        </div>
        <div className={styles.content}>
          <div>
            <img src='https://constant.myntassets.com/mymyntra/assets/img/no-saved-address.svg'></img>
            <div>
              <h4>SAVE YOUR ADDRESSES NOW</h4>
              <p>
                Add your home and office addresses and enjoy faster checkout
              </p>
              <div>
                <button
                  className={styles.tara}
                  onClick={() => openPopup({ body: <AddressForm /> })}
                >
                  <b>+ ADD NEW ADDRESS</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccountSetting;
