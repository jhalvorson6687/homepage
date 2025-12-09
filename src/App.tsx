import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="background-gradient"></div>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
