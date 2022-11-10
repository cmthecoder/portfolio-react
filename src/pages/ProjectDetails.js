import { findProjects } from "../utilities/findProject";
import { useParams } from "react-router-dom";
import "../styles/ProjectDetails.css"


const ProjectDetails = () => {
  let {projectDetails} = useParams()
  const project = findProjects(projectDetails)
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt="" />
      <a href={project.repositoryLink}><button>GitHub Repo</button></a>
      <a href={project.deploymentLink}><button>Deployed Site</button></a>
    </>
  )
}

export default ProjectDetails;