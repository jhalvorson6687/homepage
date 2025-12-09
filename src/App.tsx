import "./App.css";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";

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
