import { projects } from "../data/projects";
import ProjectsList from "../components/ProjectsList";
import '../styles/Projects.css'

const Projects = (props) => {
  return (
    <div className='projects'>
      <ProjectsList projects={projects}/>
    </div>
  );
}

export default Projects;