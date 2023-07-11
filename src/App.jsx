import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Pages/Hero";
import Sale from "./Pages/Sale";
import Categories from "./Components/Categories";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Sale />
      <Footer />
    </div>
  );
}

export default App;
