import Bisection from './com/Bisection';
import FalsePosition from './com/FalsePosition';
import OnePoint from './com/OnePoint';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Bisection/>} />
        <Route path="/Bisection" element={<Bisection/>} />
        <Route path="/FalsePosition" element={<FalsePosition/>} />
        <Route path="/OnePoint" element={<OnePoint/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
