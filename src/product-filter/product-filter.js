import ProductFilterItem from "./product-filter-item";
import styles from "./product-filter.module.css";
function ProductFiltet({ heading, data, inputType }) {
  let list = [],
    extra = 0;
  if (data.length > 8) {
    list = data.slice(0, 8);
    extra = data.length - 8;
  } else {
    list = data;
  }
  console.log(list, extra);
  return (
    <div className={styles.hello}>
      <h3>{heading}</h3>
      <ul>
        {list.map((d) => (
          <ProductFilterItem
            inputType={inputType}
            title={d.title}
            quantity={d.quantity}
          />
        ))}
      </ul>
      {extra > 0 && <p className={styles.root}>+{extra} more </p>}
    </div>
  );
}
export default ProductFiltet;
