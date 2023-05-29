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
      <div className={styles.chrome}>
        <Input placeholder={"Stara*"} />
        <Input placeholder={"Address(House No,Building street,Area)*"} />
        <Input placeholder={"Locality/town*"} />
        <Input placeholder={"City/District*"} />
      </div>
      <div className={styles.look}>
        <p>Type of Address *</p>
        <label for="male">
          <input type="radio"></input> Home{" "}
        </label>
        <label for="male">
          <input type="radio"></input> Office{" "}
        </label>
        <p>Is your office open on weekends?</p>
        <input type="checkbox" />
        <label> Open on Saturday</label>
        <br></br>
        <input type="checkbox" />
        <label> Open on Sunday</label>
        <br></br>
        <input type="checkbox" />
        <label> Open on Sunday</label>
      </div>
    </div>
  );
}
export default Form;
