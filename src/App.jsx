import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Welcome></Welcome>
    </div>
  );
};

export default App;
