import "./App.css";
import Clothing from "./components/Header_components/Clothing";

import MainBody from "./components/MainBody";
import Searchbar from "./components/Searchbar";
function App() {
  return (
    <div className="App">
      <div>
        <Searchbar />
        <MainBody />
      </div>
    </div>
  );
}

export default App;
