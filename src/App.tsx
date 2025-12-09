import "./App.css";
import Hero from "./components/Hero/Hero";
import MyStack from "./components/MyStack/MyStack";
import Navbar from "./components/Navbar/Navbar";
import Separator from "./components/Separator/Separator";

function App() {
  return (
    <>
      <div className="background-gradient"></div>
      <Navbar />
      <main>
        <Hero />
        <Separator label="My Stack" />
        <MyStack />
      </main>
    </>
  );
}

export default App;
