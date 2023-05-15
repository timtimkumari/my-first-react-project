import styles from "./product-filter-item.module.css";
function ProductFilterItem({ inputType, title, quantity }) {
  return (
    <li className={styles.hello}>
      <label>
        <input type={inputType}></input>
        <p>{title}</p>
        {quantity && <span className={styles.himanshu}>({quantity})</span>}
      </label>
    </li>
  );
}
export default ProductFilterItem;
