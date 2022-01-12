import A from "./A";
import B from "./B";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    
      <p>app test</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<A />} />
          <Route path="/B" element={<B />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
