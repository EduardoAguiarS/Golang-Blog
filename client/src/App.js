import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="area fixed top-0">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 border border-gray- px-4 rounded-full uppercase fixed bottom-5 right-5 shadow-2xl">
        New Blog
      </button>
    </>
  );
}

export default App;
