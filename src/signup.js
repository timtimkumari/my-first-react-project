import styles from "./signup.module.css";
function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <b>complete your sing up</b>
        <div className={styles.fackbook}>
          <p>Mobile Number</p>
          <h5> 7739624147</h5>
        </div>
        <div className={styles.nutan}>
          <input
            className={styles.timtim}
            type="text"
            placeholder="Create Password *"
          ></input>
        </div>
      </div>
    </div>
  );
}
export default Signup;
