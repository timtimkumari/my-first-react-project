import Apple from "./Apple";
import "./Card2.css";
function Card2() {
  const ayush = [
    {
      image:
        "https://rukminim1.flixcart.com/image/312/312/xif0q/kurta/b/x/a/xxl-mon302p-mon-original-imagnrm9fhvjzhzj.jpeg?q=70",
      title: "",
    },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
    { image: "", title: "" },
  ];

  return (
    <div className="container">
      {ayush.map((i) => (
        <Apple image={i.image} title={i.title} />
      ))}
    </div>
  );
}
export default Card2;
