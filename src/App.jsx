import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import ScoreBoard from "./pages/ScoreBoard";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/Rules" element={<Rules />} />
        <Route path="/pages/ScoreBoard" element={<ScoreBoard />} />
      </Routes>
    </Router>
  )
}

export default App
