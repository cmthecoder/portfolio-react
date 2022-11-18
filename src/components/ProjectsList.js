import ProjectPreview from "./ProjectPreview";
import "../styles/ProjectList.css"

const ProjectsList = (props) => {
  return (
    <div className="project-list">
      {props.projects.map(project => {
        return(
          <ul key={project.title}>
            <li><ProjectPreview project = {project}/></li>
          </ul>
        )
      })}
    </div>
  );
}

export default ProjectsList;

