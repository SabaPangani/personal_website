import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex flex-col gap-y-10 w-full max-w-[1440px] mx-auto">
      <div className="w-screen bg-[#635FC7] py-3 fixed top-0"></div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
