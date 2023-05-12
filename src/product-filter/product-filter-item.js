function ProductFilterItem() {
  return (
    <li>
      <input type={inputType}></input>
      <p>{d.title}</p>
      {d.quantity && <span className={styles.himanshu}>({d.quantity})</span>}
    </li>
  );
}
export default ProductFilterItem;
