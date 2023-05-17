import { useState } from "react";
import ProductFiltetDetail from "./product-filter-detail";
import ProductFilterItem from "./product-filter-item";
import styles from "./product-filter.module.css";
function ProductFiltet({ heading, data, inputType }) {
  const [detailsVisible, setDetailsVisble] = useState(false);
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
      {extra > 0 && (
        <div className={styles.mind}>
          <p className={styles.root} onClick={() => setDetailsVisble(true)}>
            +{extra} more{" "}
          </p>
          {detailsVisible && (
            <div className={styles.mood}>
              <ProductFiltetDetail
                data={data}
                close={() => setDetailsVisble(false)}
              ></ProductFiltetDetail>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default ProductFiltet;
