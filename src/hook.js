import { useState, useEffect } from "react";
function Hook() {
  const [count, setCount] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      if (count === 20) {
        setCount(() => 10);
      }
      setCount((count) => count + 1);
    }, 1000);
  });
  return <h1>I've rendered {count} times!</h1>;
}
export default Hook;
