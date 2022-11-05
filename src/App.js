import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import NavBar from './components/NavBar'
import ProjectDetals from './pages/ProjectDetails'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='resume' element={<Resume />} />
      <Route path='projects' element={<Projects />} />
      <Route path='projects/:projectDetails' element={<ProjectDetals />}/>
      </Routes>
    </>
  );
}

export default App;
