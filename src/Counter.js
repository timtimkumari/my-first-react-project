import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
export default Counter;
