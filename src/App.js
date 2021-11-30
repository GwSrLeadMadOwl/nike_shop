import NavBar from "./components/nav-bar/NavBar";
import Content from "./components/content/Content";

import './App.css';

//IMPORT ALL PARENT COMPONENTS
function App() {
  return (
    <div className="App">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;