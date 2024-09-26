import { Header, About, Projects, Contact, Footer } from "./sections";
// import Navbar from "./sections/navbar";
import { BrowserRouter } from "react-router-dom"; // Add this import

const App = () => {
  return (
    <BrowserRouter>
      {" "}
      {/* Wrap everything inside BrowserRouter */}
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
      {/* <Navbar /> */}
    </BrowserRouter>
  );
};

export default App;
