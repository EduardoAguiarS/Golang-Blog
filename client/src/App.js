import Background from "./components/Background";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Background />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
