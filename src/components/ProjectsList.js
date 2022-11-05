import ProjectPreview from "./ProjectPreview";

const ProjectsList = (props) => {
  console.log("OVER HERE", props.projects)
  return (
    <>
    <div>
      {props.projects.map(project => {
        return(
          <ul key={project.title}>
            <li><ProjectPreview project={project.title} /></li>
            <li>{project.description}</li>
            <li>{project.image}</li>
            <li>{project.repositoryLink}</li>
            <li>{project.deploymentLink}</li>
          </ul>
        )
      })}
    </div>
  </>
  );
}

export default ProjectsList;

