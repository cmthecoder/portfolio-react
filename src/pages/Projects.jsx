import { projects } from "../data/projects";
import ProjectsList from "../components/ProjectsList";

const Projects = (props) => {
  return (
    <div>
      <ProjectsList projects={projects}/>
    </div>
  );
}

export default Projects;