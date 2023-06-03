import styles from "./input.module.css";
function Input({ placeholder }) {
  return (
    <div className={styles.nutan}>
      <input
        className={styles.timtim}
        type="text"
        placeholder={placeholder}
      ></input>
    </div>
  );
}
export default Input;
