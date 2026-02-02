import Acclist from "./components/list";
import item from "./data/item";


function App() {
  return (
    <div className="page">
      <h1>Project 2: SSS/Accordion</h1>
      <Acclist items={item} />
    </div>
  );
}
export default App;