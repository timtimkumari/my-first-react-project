import styles from './button.module.css';
function Button({ children, type, className, ...rest }) {
  console.log(children);
  return (
    <button
      className={
        (className ? className : '') + ' ' + styles.btn + ' ' + styles[type]
      }
      {...rest}
    >
      <div className={styles.title}>{children}</div>
    </button>
  );
}

export default Button;
