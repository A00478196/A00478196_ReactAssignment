import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
   <Navbar />
    <Routes>
          <Route path="/" element={<About />} />
          <Route path="/myTown" element={<Home />} />
       </Routes>

   </>
  );
}

export default App;
