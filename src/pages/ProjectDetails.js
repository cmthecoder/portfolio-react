import { findProjects } from "../utilities/findProject";
import { useParams } from "react-router-dom";



const ProjectDetails = () => {
  let {projectDetails} = useParams()
  const project = findProjects(projectDetails)
  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <img src={project.image} alt="" />
      <button>GitHub Repo</button>
      <button>Deployed Site</button>
    </>
  )
}

export default ProjectDetails;