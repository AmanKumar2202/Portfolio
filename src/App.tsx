import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import AutoCode from './pages/AutoCode';
import WhisprAI from './pages/WhisprAI';
import SmartStream from './pages/SmartStream';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/auto-code" element={<AutoCode />} />
            <Route path="/projects/whispr-ai" element={<WhisprAI />} />
            <Route path="/projects/smart-stream" element={<SmartStream />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
