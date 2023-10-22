import Box from "./components/Box";
import BoxGrid from "./components/BoxGrid";

function App() {
  const colorArr = [
    "red",
    "blue",
    "black",
    "yellow",
    "orange",
    "green",
    "grey",
    "brown",
    "pink",
    "violet",
  ];
  return (
    <div>
      <BoxGrid colors={colorArr} />
    </div>
  );
}

export default App;
