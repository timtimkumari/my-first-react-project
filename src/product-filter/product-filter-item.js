import styles from "./product-filter-item.module.css";
function ProductFilterItem({ inputType, title, quantity }) {
  return (
    <li className={styles.hello}>
      <input type={inputType}></input>
      <p>{title}</p>
      {quantity && <span className={styles.himanshu}>({quantity})</span>}
    </li>
  );
}
export default ProductFilterItem;
