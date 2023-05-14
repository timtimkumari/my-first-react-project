import styles from "./List.module.css";
import ProductFiltet from "./product-filter";
function List2() {
  const categoryData = [
    { title: "Tshirts", quantity: "2314" },
    { title: "Lounge tshirts", quantity: "2390" },
    { title: "Lounge tshirts", quantity: "2390" },
    { title: "Lounge tshirts", quantity: "2390" },
    { title: "Tshirts", quantity: "2314" },
    { title: "Tshirts", quantity: "2314" },
    { title: "Lounge tshirts", quantity: "2390" },
    { title: "Lounge tshirts", quantity: "2390" },
    { title: "Lounge tshirts", quantity: "2390" },
    { title: "Lounge tshirts", quantity: "2390" },
    { title: "Tshirts", quantity: "2314" },
    { title: "Lounge tshirts", quantity: "2390" },
    { title: "Tshirts", quantity: "2314" },
    { title: "Lounge tshirts", quantity: "2390" },
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
    { title: "U.S. Polo Assn.", quantity: "3456" },
    { title: "Puma", quantity: "1234" },
    { title: "WROGN", quantity: "1124" },
    { title: "U.S. Polo Assn.", quantity: "3456" },
    { title: "Puma", quantity: "1234" },
    { title: "WROGN", quantity: "1124" },
    { title: "Puma", quantity: "1234" },
    { title: "WROGN", quantity: "1124" },
  ];
  const priceData = [
    { title: "Rs. 124 to Rs. 3793", quantity: "95440" },
    { title: "Rs. 3793 to Rs. 7462", quantity: "863" },
    { title: "Rs. 7462 to Rs. 11131", quantity: "61" },
    { title: "Rs. 11131 to Rs. 14800", quantity: "2" },
    { title: "Rs. 124 to Rs. 3793", quantity: "95440" },
    { title: "Rs. 3793 to Rs. 7462", quantity: "863" },
    { title: "Rs. 7462 to Rs. 11131", quantity: "61" },
    { title: "Rs. 11131 to Rs. 14800", quantity: "2" },
    { title: "Rs. 124 to Rs. 3793", quantity: "95440" },
    { title: "Rs. 3793 to Rs. 7462", quantity: "863" },
    { title: "Rs. 7462 to Rs. 11131", quantity: "61" },
    { title: "Rs. 11131 to Rs. 14800", quantity: "2" },
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
    { title: "Navy Blue", quantity: "9431" },
    { title: "Green", quantity: "6168" },
    { title: "Grey", quantity: "5572" },
    { title: "Red", quantity: "6168" },
    { title: "Navy Blue", quantity: "9431" },
    { title: "Green", quantity: "6168" },
    { title: "Grey", quantity: "5572" },
    { title: "Green", quantity: "6168" },
    { title: "Grey", quantity: "5572" },
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
    { title: "60% and above" },
    { title: "70% and above" },
    { title: "80% and above" },
    { title: "90% and above" },
    { title: "60% and above" },
    { title: "70% and above" },
    { title: "80% and above" },
  ];
  return (
    <div className={styles.star}>
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
    </div>
  );
}
export default List2;
