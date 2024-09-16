import './App.css';
import Pocetna from './komponente/Pocetna';
import Navbar from './Navigacija/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Onama from './komponente/Onama';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/onama" element={<Onama />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
