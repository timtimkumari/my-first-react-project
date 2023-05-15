import { useState } from "react";
import "./product-filter-detail.css";
import ProductFilterItem from "./product-filter-item";
function ProductFiltetDetail({ data }) {
  const [query, setQuery] = useState("");
  return (
    <div className="boll">
      <div className="bat">
        <div>
          <input
            className="content"
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
        <div className="music">X</div>
      </div>
      <div className="hello">
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
