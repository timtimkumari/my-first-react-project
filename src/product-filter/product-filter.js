import ProductFilterItem from "./product-filter-item";
import styles from "./product-filter.module.css";
function ProductFiltet({ heading, data, inputType }) {
  return (
    <div className={styles.hello}>
      <h3>{heading}</h3>
      <ul>
        {data.map((d) => (
          <ProductFilterItem
            inputType={inputType}
            title={d.title}
            quantity={d.quantity}
          />
        ))}
      </ul>
    </div>
  );
}
export default ProductFiltet;
