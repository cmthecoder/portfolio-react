import { projects } from "../data/projects";
import { technologies } from "../data/technologies";
import ProjectsList from "../components/ProjectsList";
import '../styles/Projects.css'

const Projects = (props) => {
  return (
    <div className='projects'>
      <ProjectsList projects={projects} technologies={technologies}/>
    </div>
  );
}

export default Projects;