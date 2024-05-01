import Books from "./components/Books/Books";
import BooksInside from "./components/BooksInside/BooksInside";
import Footer from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import Welcome from "./components/Welcome/Welcome";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-16 sm:pt-16 md:pt-16 lg:pt-20">
      <Home></Home>
      </div>
      <Welcome></Welcome>
      <Books></Books>
      <BooksInside></BooksInside>
      <Footer></Footer>
    </div>
  );
};

export default App;
