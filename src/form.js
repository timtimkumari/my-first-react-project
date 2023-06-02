import styles from "./form.module.css";
import Input from "./input";
function Form() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h4>ADD NEW ADDRESS</h4>
      </div>
      <div className={styles.fackbook}>
        <Input placeholder={"Name*"} />
        <Input placeholder={"Mobile*"} />
      </div>
      <div className={styles.fackbook}>
        <Input placeholder={"Stara*"} />
        <Input placeholder={"Address(House No,Building street,Area)*"} />
        <Input placeholder={"Locality/town*"} />
        <Input placeholder={"City/District*"} />
      </div>
      <div className={styles.fackbook}>
        <p>Type of Address *</p>
        <label className={styles.house}>
          <input
            name="address-type"
            type="radio"
            className={styles.house}
          ></input>
          Home
        </label>
        <label className={styles.bool}>
          <input
            name="address-type"
            type="radio"
            className={styles.house}
          ></input>
          Office
        </label>
        <p>Is your office open on weekends?</p>
        <div>
          <div>
            <label className={styles.himanshu}>
              <input type="checkbox" className={styles.not} />
              Open on Saturday
            </label>
          </div>
          <div>
            <label className={styles.himanshu}>
              <input type="checkbox" className={styles.not} />
              Open on Sunday
            </label>
          </div>
          <hr className={styles.abhi}></hr>
          <div className={styles.top}>
            <label className={styles.himanshu}>
              <input type="checkbox" className={styles.not} />
              Make this as my default address
            </label>
          </div>
        </div>
      </div>
      <div className={styles.fackbook + " " + styles["footer-button"]}>
        <button className={styles.button} onClick={() => setShowModal(true)}>
          <b>CANCEL</b>
        </button>
        <button className={styles.tag} onClick={() => setShowModal(false)}>
          <b className={styles.two}>SAVE</b>
        </button>
      </div>
    </div>
  );
}
export default Form;
