import { useState } from 'react';
import styles from './Account-setting.module.css';
import AddressGrid from './account-setting/address-grid';

function AccountSetting() {
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
          <AddressGrid />
        </div>
      </div>
    </div>
  );
}
export default AccountSetting;
