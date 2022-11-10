import ProjectPreview from "./ProjectPreview";

const ProjectsList = (props) => {
  console.log("OVER HERE", props.projects)
  return (
    <>
    <div>
      {props.projects.map(project => {
        return(
          <ul key={project.title}>
            <li><ProjectPreview project = {project}/></li>
          </ul>
        )
      })}
    </div>
  </>
  );
}

export default ProjectsList;

