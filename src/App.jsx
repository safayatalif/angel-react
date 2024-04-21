import Books from "./components/Books/Books";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Welcome></Welcome>
      <Books></Books>
    </div>
  );
};

export default App;
