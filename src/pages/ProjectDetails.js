import { findProjects } from "../utilities/findProject";
import { useParams } from "react-router-dom";
import "../styles/ProjectDetails.css"


const ProjectDetails = () => {
  let {projectDetails} = useParams()
  const project = findProjects(projectDetails)
  return (
    <div class='project-details'>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} width='1000px' alt="" />
      <a href={project.repositoryLink}><button class='repo-link'>GitHub Repo</button></a>
      <a href={project.deploymentLink}><button class='deployed-link'>Deployed Site</button></a>
    </div>
  )
}

export default ProjectDetails;