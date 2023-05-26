import styles from "./signup.module.css";
function Signup() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <b>Complete your sign up</b>
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
        <div class={styles.ayush}>
          <p>8 Characters</p>
          <p>1 Special</p>
          <p>1 Uppercase</p>
          <p>1 Numeric</p>
        </div>

        <div className={styles.nutan}>
          <input
            className={styles.timtim}
            type="text"
            placeholder="Full Name"
          ></input>
        </div>
        <div className={styles.nutan}>
          <input
            className={styles.timtim}
            type="text"
            placeholder="Email (Optionl)"
          ></input>
        </div>
        <div className={styles.himanshu}>
          <p>Select Gender:</p>
          <div className={styles.bittu}>
            <label for="female" className={styles.abhi}>
              <input type="radio"></input> Female{" "}
            </label>
            <label for="male">
              <input type="radio"></input> Male{" "}
            </label>
          </div>
        </div>
        <div className={styles.nutan}>
          <div className={styles.yesh}>
            <p>+91 |</p>
            <input
              className={styles.rupa}
              type="text"
              placeholder="Alternate Mobile Number"
            ></input>{" "}
          </div>
          <p>This will help recover your account if needed</p>
        </div>
        <div className={styles.nutan}>
          <input
            className={styles.timtim}
            type="text"
            placeholder="Hint name (Alternate number)"
          ></input>
          <p>This name will be a hint for your altemeant number</p>
        </div>
        <button className={styles.top}>
          <h4>CREATE ACCOUNT</h4>
        </button>
      </div>
    </div>
  );
}
export default Signup;
