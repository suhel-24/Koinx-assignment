import About from "./components/About";
import Navbar from "./components/Navbar";
import Sentiment from "./components/Sentiment";



const App = () => {
  return (
    <div className="flex flex-col bg-gray-200">
      <Navbar />
      <div className="w-[60%] ">
        <Sentiment />
        <About />
      </div>
    </div>
  );
};

export default App;
