// Bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Contact from './pages/Contact';
import About from './pages/AboutMe';
import Projects from './pages/Projects';


function App() {
  return (
    <Router>
         <Header /> 
         <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contactme" element={<Contact />} />
         </Routes>
    </Router>
  )
}

export default App;
