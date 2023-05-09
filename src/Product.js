function Product({ heading, data }) {
  return (
    <div>
      <h1>CATEGORIES</h1>
      <ul>
        {data.map((d) => (
          <li>Tshirts</li>
        ))}
      </ul>
    </div>
  );
}
