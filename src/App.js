import './App.css';
import Welcomepage from './components/Welcomepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
            <Route path="/" element={<Welcomepage/>} />
            <Route path="/homepage" element={<Homepage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
