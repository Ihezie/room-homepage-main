import About from "./components/About"
import Slider from "./components/Slider"
import Navbar from "./components/Navbar";


function App() {
  return (
    <main className="md:h-screen">
      <Navbar />
      <Slider />
      <About />
    </main>
  );
}

export default App
