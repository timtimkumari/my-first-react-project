import styles from "./product-filter.module.css";
function ProductFiltet({ heading, data, inputType }) {
  return (
    <div className={styles.hello}>
      <h3>{heading}</h3>
      <ul>
        {data.map((d) => (
          <li>
            <input type={inputType}></input>
            <p>{d.title}</p>
            {d.quantity && (
              <span className={styles.himanshu}>({d.quantity})</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ProductFiltet;
