function App() {
  const cars = ["Saab", "Volvo", "BMW"];

  return (
    <div>
      <h1>JavaScript Arrays</h1>
      <h2>Bracket Indexing</h2>

      <p>
        JavaScript array elements are accessed using numeric indexes
        (starting from 0).
      </p>

      <p>{cars[0]}</p>
    </div>
  );
}

export default App;