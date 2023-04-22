import "./app.scss";
import Home from "./pages/home/Home";
import Watch from "./pages/home/watch/Watch";
import Register from "./pages/register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/watch/:key" element={<Watch />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
