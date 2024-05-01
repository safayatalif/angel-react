import Books from "./components/Books/Books";
import Footer from "./components/Footer/Footer";
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
      <Footer></Footer>
    </div>
  );
};

export default App;
