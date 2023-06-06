import styles from './input.module.css';
function Input({ placeholder, ...rest }) {
  return (
    <div className={styles.nutan}>
      <input
        className={styles.timtim}
        type='text'
        placeholder={placeholder}
        {...rest}
      ></input>
    </div>
  );
}
export default Input;
