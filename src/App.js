import './App.css';
import Pocetna from './komponente/Pocetna';
import Navbar from './Navigacija/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Onama from './komponente/Onama';
import Media from './komponente/Media';
import Usluge from './komponente/Usluge';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/onama" element={<Onama />} />
        <Route path="/media" element={<Media />} />
        <Route path="/usluge" element={<Usluge />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
