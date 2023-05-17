import { useState } from "react";
import styles from "./product-filter-detail.module.css";
import ProductFilterItem from "./product-filter-item";
function ProductFiltetDetail({ data, close }) {
  const [query, setQuery] = useState("");
  return (
    <div className={styles.boll}>
      <div className={styles.bat}>
        <div>
          <input
            className={styles.content}
            type="text"
            placeholder="Search Brand"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></input>
        </div>
        {/* <div className="container">
          <ul>
            <li>#</li>
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
            <li>F</li>
            <li>G</li>
            <li>H</li>
            <li>I</li>
            <li>J</li>
            <li>K</li>
            <li>L</li>
            <li>M</li>
            <li>N</li>
            <li>O</li>
            <li>P</li>
            <li>Q</li>
            <li>R</li>
            <li>S</li>
            <li>T</li>
            <li>U</li>
            <li>V</li>
            <li>W</li>
            <li>X</li>
            <li>Y</li>
            <li>Z</li>
          </ul>
  </div> */}
        <div className={styles.music} onClick={close}>
          X
        </div>
      </div>
      <div className={styles.hello}>
        <ul>
          {data
            .filter((d) => d.title.toLowerCase().includes(query.toLowerCase()))
            .map((d) => (
              <ProductFilterItem
                inputType={"checkbox"}
                title={d.title}
                quantity={d.quantity}
              />
            ))}
        </ul>
      </div>
    </div>
  );
}
export default ProductFiltetDetail;
