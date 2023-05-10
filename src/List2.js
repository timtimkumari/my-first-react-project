import "./List.css";
import ProductFiltet from "./product-filter";
function List2() {
  const categoryData = [
    { title: "Tshirts", quantity: "2314" },
    { title: "Lounge tshirts", quantity: "2390" },
  ];
  const brandData = [
    { title: "Roadster", quantity: "3828" },
    { title: "Friskers", quantity: "1234" },
    { title: "Tommy Hilfiger", quantity: "3214" },
    { title: "Jack & Jones", quantity: "3421" },
    { title: "HRX by Hrithik Roshan", quantity: "7654" },
    { title: "U.S. Polo Assn.", quantity: "3456" },
    { title: "Puma", quantity: "1234" },
    { title: "WROGN", quantity: "1124" },
  ];
  const priceData = [
    { title: "Rs. 124 to Rs. 3793", quantity: "95440" },
    { title: "Rs. 3793 to Rs. 7462", quantity: "863" },
    { title: "Rs. 7462 to Rs. 11131", quantity: "61" },
    { title: "Rs. 11131 to Rs. 14800", quantity: "2" },
  ];
  const colorData = [
    { title: "Black", quantity: "14051" },
    { title: "Blue", quantity: "11953" },
    { title: "White", quantity: "11558" },
    { title: "Navy Blue", quantity: "9431" },
    { title: "Green", quantity: "6168" },
    { title: "Grey", quantity: "5572" },
    { title: "Red", quantity: "6168" },
  ];
  const discountRange = [
    { title: "10% and above" },
    { title: "20% and above" },
    { title: "30% and above" },
    { title: "40% and above" },
    { title: "50% and above" },
    { title: "60% and above" },
    { title: "70% and above" },
    { title: "80% and above" },
    { title: "90% and above" },
  ];
  return (
    <div className="star">
      <ProductFiltet
        heading={"CATEGORIES"}
        inputType={"checkbox"}
        data={categoryData}
      ></ProductFiltet>
      <ProductFiltet
        heading={"BRAND"}
        inputType={"checkbox"}
        data={brandData}
      ></ProductFiltet>
      <ProductFiltet
        heading={"PRICE"}
        inputType={"checkbox"}
        data={priceData}
      ></ProductFiltet>
      <ProductFiltet
        heading={"COLOR"}
        inputType={"checkbox"}
        data={colorData}
      ></ProductFiltet>
      <ProductFiltet
        heading={"DISCOUNT RANGE"}
        inputType={"radio"}
        data={discountRange}
      ></ProductFiltet>

      <div className="timtim">
        <div className="jon">
          <h3>COLOR</h3>
          <img src="https://raw.githubusercontent.com/anshuopinion/10-Practice-Project-Html-CSS/1194fc1a6ae265acb24ed89903b4e7c973328431/Project%207/icons/search.svg"></img>
        </div>
        <ul>
          <li>
            <input type="checkbox"></input>
            <p>Black</p>
            <span className="himanshu">(14051)</span>
          </li>
          <li>
            <input type="checkbox"></input>
            <p>Blue</p>
            <span className="himanshu">(11953)</span>
          </li>
          <li>
            <input type="checkbox"></input>
            <p>White</p>
            <span className="himanshu">(11558)</span>
          </li>
          <li>
            <input type="checkbox"></input>
            <p>Navy Blue</p>
            <span className="himanshu">(9431)</span>
          </li>
          <li>
            <input type="checkbox"></input>
            <p>Green</p>
            <span className="himanshu">(6168)</span>
          </li>
          <li>
            <input type="checkbox"></input>
            <p>Grey</p>
            <span className="himanshu">(5572)</span>
          </li>
          <li>
            <input type="checkbox"></input>
            <p>Red</p>
            <span className="himanshu">(5251)</span>
          </li>
          <li>
            <h4>+ 39 more</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default List2;
