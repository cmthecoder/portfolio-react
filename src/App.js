import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'
import ProjectDetails from './pages/ProjectDetails'
import 'animate.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='page-container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
        <Route path='projects' element={<Projects />} />
        <Route path='projects/:projectDetails' element={<ProjectDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
