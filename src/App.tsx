import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Education from './pages/Education';
import Dashboard from './pages/Dashboard';
import DataInput from './pages/DataInput';
import Methodology from './pages/Methodology';
import About from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/educacao" element={<Education />} />
            <Route path="/dados" element={<Dashboard />} />
            <Route path="/inserir-dados" element={<DataInput />} />
            <Route path="/metodologia" element={<Methodology />} />
            <Route path="/sobre" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
